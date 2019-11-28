import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

class Invoices extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <Text> Invoices Screen</Text>
            </View>
        )
    }
}
export default Invoices;