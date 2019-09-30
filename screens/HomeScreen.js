import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {View, Text, Dimensions} from 'react-native';


const {width} = Dimensions.get('window');

const styleSheet = {
    container: {
        width: width,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textStyle: {
        color: 'black',
        fontSize: 35,
        fontWeight: 'bold',
    },
};

const HomeScreen = props => {
    useEffect(() => {
        dispatch({type: 'app/getMeteoInformations'});
    }, []);

    useEffect(() => {
        if (informations.main) {
            setNameCity(informations.name);
            setTemp(informations.main.temp);
        }
    });

    const {dispatch, app: {informations}} = props;
    const [nameCity, setNameCity] = useState('');
    const [temp, setTemp] = useState('');

    return (
        <View style={styleSheet.container}>
            <Text style={styleSheet.textStyle}> {`Ville: ${nameCity}`}</Text>
            <Text style={styleSheet.textStyle}>{`Temperature: ${temp}°C`} </Text>
        </View>
    );

    HomeScreen.propTypes = {
        dispatch: PropTypes.func.isRequired,
        app: PropTypes.shape({
            informations: PropTypes.object,
        }).isRequired
    };
}

export default connect(({app}) => ({app})) (HomeScreen);














