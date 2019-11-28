import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

class UserProfile extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <Text>UserProfile Screen</Text>
            </View>
        )
    }
}
export default UserProfile;