import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

import styles from './styles';
const ActionButton = (props)=>{
    return (
        <TouchableOpacity
            onPress={() => props.navigation.navigate(props.path)}
            style={styles.mainItems}>
            <Text style={[styles.mainText, 
            { fontFamily: 'ptsans-bold',textAlign:props.textPos, marginLeft:props.marginLeft }]}>{props.name}
            </Text>
        </TouchableOpacity>
    )
}

export default ActionButton;