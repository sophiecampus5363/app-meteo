import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {ActivityIndicator, StatusBar, View, AsyncStorage} from 'react-native';
import {dispatch} from '@rematch/core';
import {useDispatch, useSelector} from "react-redux";

const AuthLoadingScreen = props => {

    const name = useSelector()

state => state.app.name()

    const dispatch = useDispatch()

    dispatch.app.setName('')



    //_bootstrapAsync = async () => {
      //  const userToken = await AsyncStorage.getItem('name');
      //  props.navigation.navigate(userToken ? 'App' : 'Auth');
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