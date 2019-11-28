import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

class Receipt extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <Text>Receipt Screen</Text>
            </View>
        )
    }
}
export default Receipt;