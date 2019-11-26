import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import FooterNav from '../../FooterNav/index';
import styles from './styles';
import BurgerMenu from '../../Dashboard/BurgerMenu/index';

class Tasks extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <BurgerMenu openSideBar={this.props.navigation} />
                    <Text style={styles.title}>Tasks</Text>
                </View>
                <View style={styles.main}>
                    <Image source={require('../../../../assets/Task.png')} />
                    <TouchableOpacity style={styles.mainItems}><Text style={styles.mainText}>View Tasks</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.mainItems}><Text style={styles.mainText}>Create Tasks</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.mainItems}><Text style={styles.mainText}>Update Status</Text></TouchableOpacity>
                </View>
                <FooterNav />
            </View>
        )
    }
}
export default Tasks;