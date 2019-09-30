import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {View, Text, TextInput, Button, Dimensions, StyleSheet} from "react-native";
import * as navigation from "react-navigation";
import { TabNavigator } from "react-navigation";


const {width} = Dimensions.get('window');

const styleSheet = {
    container: {
        width: width,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    label: {
        color: 'black',
        fontSize: 24,
    },
    input: {
        width: '80%',
        margin: 15,
        height: 40,
        borderColor: 'black',
        borderWidth: 2,
        padding: 10,
    },

};

const AddCityScreen = props => {

    async function handleSubmit() {
        if (name !== '') {
            await AsyncStorage.setItem('name', name);
            navigation.navigate('Welcome');
        }
    }

    const [name, setName] = useState('');
    const {dispatch, navigation} = props;

//     return (
//         <View style={styleSheet.container}>
//             <Text style={styleSheet.label}> Veux-tu ajouter une ville? </Text>
//
//         </View>
//     );
// };

return (
    <View style={styleSheet.container}>
        <Text style={styleSheet.label}> Ajouter une ville? </Text>
        <TextInput
            style={styleSheet.input}
            onChangeText={(text) => setName(text)}
            onSubmitEditing={handleSubmit}
            value={name}
            placeholder={'Tataouine-les-Bains'}
        />
        <Button
            onPress={handleSubmit}
            title="Envoyer"
            color="#ff79b4"
        />
    </View>
);
};

AddCityScreen.propTypes = {
    dispatch: PropTypes.func.isRequired,
    navigation: PropTypes.shape({
        navigate: PropTypes.func,
    }).isRequired,
};

export default connect()(AddCityScreen);


