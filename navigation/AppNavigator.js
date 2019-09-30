import React from 'react';
import {createAppContainer} from "react-navigation";
import { createBottomTabNavigator} from 'react-navigation-tabs';
import StyleSheet from "react-native";
import HomeScreen from "../screens/HomeScreen";
import AuthLoadingScreen from "../screens/AuthLoadingScreen";
import IntroScreen from "../screens/Introscreen";
import IntroFormScreen from "../screens/IntroFormScreen";
import AddCityScreen from "../screens/AddCityScreen";
import EditScreen from "../screens/EditScreen";
import Icons from "react-native-vector-icons/Ionicons";



const weatherTabNavigator = createBottomTabNavigator(
    {
        HomeScreen: {
            screen: HomeScreen,
            navigationOptions: {
              tabBarLabel:'Home',
              tabBarIcon:({tintColor}) => (
                  <Icon name="ios-home" size={24} />
              )
          }
        },

        AddCityScreen: {
            screen: AddCityScreen
        },

        EditScreen: {
            screen: EditScreen
        },

        // AuthLoadingScreen: {
        //     screen: AuthLoadingScreen
        // },
        //
        //
        // IntroScreen: {
        //     screen: IntroScreen
        // },
        //
        // IntroFormScreen: {
        //     screen: IntroFormScreen
        // }
    },


{
    initialRouteName: 'AuthLoadingScreen',


        tabBarOptions: {
        activeTintColor: 'white',
        inactiveTintColor: 'gainsboro',
        activeBackgroundColor: 'skyblue',
        inactiveBackgroundColor: 'skyblue',
        justifyContent: 'center',
        alignItems: 'center',

        showLabel: false,
        showIcon: true,


        },





    }

// export default createBottomTabNavigator({
//         HomeScreen: {
//             screen: HomeScreen,
//           navigationOptions: {
//               tabBarLabel:'Home',
//               tabBarIcon:({tintColor}) => (
//                   <Icon name="ios-home" size={24} />
//               )
//           }
//         },
//
//         AddCityScreen: {
//             screen: AddCityScreen,
//             navigationOptions: {
//               tabBarLabel:'Home',
//               tabBarIcon:({tintColor}) => (
//                   <Icon name="ios-settings" size={24} />
//               )
//             }
//         },
//
//         EditScreen: {
//             screen: EditScreen
//         }
// })






export default createAppContainer(weatherTabNavigator)