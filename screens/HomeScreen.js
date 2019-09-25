import React from 'react';
import PropType from 'prop-types';
import {View, Text, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

const styleSheet = {
    container: {
        width: `${width}px`,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textStyles: {
        color: 'black',
        fontSize: 25,
        fontWeight: 'bold',
    },
};

const HomeScreen = props => (
    <View style={styleSheet.container}>
        <Text style={styleSheet.textStyle} >Hello!</Text>
    </View>
);

HomeScreen.propTypes = {};

export default HomeScreen;