import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {ActivityIndicator, StatusBar, View, AsyncStorage} from 'react-native';
import {dispatch} from '@rematch/core';
import {useDispatch, useSelector} from "react-redux";

const AuthLoadingScreen = props => {

      _bootstrapAsync = async () => {
       // await AsyncStorage.getItem('name');
          const userToken = null
       props.navigation.navigate(userToken ? 'App' : 'Auth');

    };

    useEffect(() => {
       _bootstrapAsync();
        }, []);

    return(
        <View>
            <ActivityIndicator />
            <StatusBar barStyle="default"/>
        </View>
    );
};

    AuthLoadingScreen.propTypes = {
        navigation: PropTypes.shape({
            navigate: PropTypes.func,
        }).isRequired,
    };

    export default AuthLoadingScreen;