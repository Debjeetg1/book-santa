import {createBottomTabNavigator} from 'react-navigation-tabs';
import React from 'react';
import{View , Text , Image} from 'react-native';
import BookRequestScreen from '../screens/BookRequestScreen';
import BookDonateScreen from '../screens/BookDonateScreen';

export const BottomTabNavigator = createBottomTabNavigator({
    DonateBooks: {
        screen: BookDonateScreen,
        navigationOptions: {
            tabBarIcon: <Image src={require('../assets/favicon.png')}/>,
            tabBarLabel: 'Donate Books',

        } 
        
    },
    BookRequest: {
        screen: BookRequestScreen,
        navigationOptions: {
            tabBarIcon: <Image src={require('../assets/favicon.png')}/>,
            tabBarLabel: 'Request Books',
        }
    }
})


export default BottomTabNavigator;