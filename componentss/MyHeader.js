import * as React from 'react';
import {Header, Icon} from 'react-native-elements';
import {View, TouchableOpacity , Text , StyleSheet} from 'react-native';

const MyHeader = (props) => {

    return(
        <Header centerComponent={{
            text: props.title,
            style: {color: 'white', fontSize: 20,
            fontWeight:'bold', } 

        }} backgroundColor='cyan' />
        )
}

export default MyHeader;