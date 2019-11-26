import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import FooterNav from '../../FooterNav/index';
import styles from './styles';
import BurgerMenu from '../../Dashboard/BurgerMenu/index';

class Clients extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <BurgerMenu openSideBar={this.props.navigation} />
                    <Text style={styles.title}>Clients</Text>
                </View>
                <View style={styles.main}>
                    <Image source={require('../../../../assets/client.png')} />
                    <TouchableOpacity style={styles.mainItems}><Text style={styles.mainText}>Create / Edit Client</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.mainItems}><Text style={styles.mainText}>View Clients</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.mainItems}><Text style={styles.mainText}>View Clients List</Text></TouchableOpacity>
                </View>
                <FooterNav />
            </View>
        )
    }
}
export default Clients;