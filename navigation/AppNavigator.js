import React from 'react';
import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer, createSwitchNavigator} from "react-navigation";
import {createBottomTabNavigator} from 'react-navigation-tabs';
import StyleSheet from "react-native";
import HomeScreen from "../screens/HomeScreen";
import AuthLoadingScreen from "../screens/AuthLoadingScreen";
import IntroScreen from "../screens/Introscreen";
import IntroFormScreen from "../screens/IntroFormScreen";
import AddCityScreen from "../screens/AddCityScreen";
import EditScreen from "../screens/EditScreen";
import Ionicons from 'react-native-vector-icons/Ionicons';


const AppStack =
    createBottomTabNavigator({

            Home: {
                screen: HomeScreen,
                navigationOptions: {
                    title: 'Accueil',

                }
            },

            AddCityScreen: {
                screen: AddCityScreen,
                navigationOptions: {
                    title: 'Ajouter',

                }
            },

            EditScreen: {
                screen: EditScreen,
                navigationOptions: {
                    title: 'Prénom',

                }
            }
        },

{
    defaultNavigationOptions: ({navigation}) => ({
        tabBarIcon: ({ focused, horizontal, tintColor}) => {
            const { routeName } = navigation.state;
            let IconComponent = Ionicons;
            let iconName;
            switch (routeName){
                case 'Home':
                    iconName = `ios-home`;
                    break;
                case 'AddCityScreen':
                    iconName= `ios-add-circle-outline`;
                    break;
                case 'EditScreen':
                    iconName= `ios-person`;
                    break;
            }

            return <IconComponent name={iconName} size={30} color={tintColor}/>;
        },
    }),
    tabBarOptions: {
        activeBackgroundColor: 'skyblue',
        inactiveBackgroundColor: 'skyblue',
        activeTintColor: 'white',
        inactiveTintColor: 'gainsboro',
        showLabel: false,
        showIcon: true

    }
})






const AuthStack =
    createStackNavigator({SignIn: IntroFormScreen, Welcome: IntroScreen});


// const weatherTabNavigator =
//     createBottomTabNavigator({
//         HomeScreen: {
//             screen: AuthStack,
//             navigationOptions: {
//                 title: 'Accueil',
//
//             }
//         },
//         AddCityScreen: {
//             screen: AddCityScreen,
//             navigationOptions: {
//                 title: 'Ajouter',
//
//
//             }
//         },
//
//         EditScreen: {
//             screen: EditScreen,
//             navigationOptions: {
//                 title: 'Modifier',
//
//
//             }
//         }
//     },
//
// {
//     tabBarOptions: {
//         activeBackgroundColor: 'skyblue',
//         inactiveBackgroundColor: 'skyblue',
//         activeTintColor: 'white'
//     }
//
//
//
//
//     })

// export default createAppContainer(weatherTabNavigator)

export default createAppContainer(createSwitchNavigator(
    {
        AuthLoading: AuthLoadingScreen,
        App: AppStack,
        Auth: AuthStack,
    },
    {
        initialRouteName: 'AuthLoading',
    }
));



