import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import FooterNav from '../../FooterNav/index';
import styles from './styles';
import * as Font from 'expo-font';
import BurgerMenu from '../../Dashboard/BurgerMenu/index';

class Clients extends React.Component {
    async componentDidMount() {
        await Font.loadAsync({
            'ptsans-bold': require('../../../../assets/fonts/PTSans-Bold.ttf'),
            'redhattext-bold': require('../../../../assets/fonts/RedHatText-Bold.ttf')
        });
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <BurgerMenu openSideBar={this.props.navigation} />
                    <Text style={[styles.title,{fontFamily:'ptsans-bold'}]}>Clients</Text>
                </View>
                <View style={styles.main}>
                    <Image source={require('../../../../assets/client.png')} />
                    <TouchableOpacity style={styles.mainItems}><Text style={[styles.mainText,{fontFamily:'ptsans-bold'}]}>Create / Edit Client</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.mainItems}><Text style={[styles.mainText,{fontFamily:'ptsans-bold'}]}>View Clients</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.mainItems}><Text style={[styles.mainText,{fontFamily:'ptsans-bold'}]}>View Clients List</Text></TouchableOpacity>
                </View>
                <FooterNav />
            </View>
        )
    }
}
export default Clients;