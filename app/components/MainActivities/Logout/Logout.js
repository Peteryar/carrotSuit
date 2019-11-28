import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles'

class Logout extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <Text> Logout Screen</Text>
            </View>
        )
    }
}
export default Logout;