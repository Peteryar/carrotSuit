import React from 'react';
import { View, Image, Text, Dimensions, TextInput, TouchableOpacity } from 'react-native';
import FooterNav from '../../../FooterNav/index';
import styles from './styles';
import Client from './Client';
import BurgerMenu from '../../../Dashboard/BurgerMenu/index';
import * as Font from 'expo-font';
import { Ionicons, Foundation, FontAwesome } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');
class ViewClients extends React.Component {
    static navigationOptions = {
        header: null,
    };
    constructor(props) {
        super(props);
        this.state = {
            clients: [{
                name: "Smith Ikpa",
                email: 'excellentlystrategic@gmail.com',
                phone: '08026847945',
                quantity: "Quantity: 1.00"
            },
            {
                name: "Henry Shadrack",
                email: 'excellentlystrategic@gmail.com',
                phone: '08026847945',
                quantity: "Quantity: 1.00"
            },
            {
                name: "Peter Pietro",
                email: 'excellentlystrategic@gmail.com',
                phone: '08026847945',
                quantity: "Quantity: 1.00"
            },
            {
                name: "Fidel Castro Jr",
                email: 'excellentlystrategic@gmail.com',
                phone: '08026847945',
                quantity: "Quantity: 1.00"
            },
            {
                name: "Mazi Okeke",
                email: 'excellentlystrategic@gmail.com',
                phone: '08026847945',
                quantity: "Quantity: 1.00"
            },
            {
                name: "Onome Pendart",
                email: 'excellentlystrategic@gmail.com',
                phone: '08026847945',
                quantity: "Quantity: 1.00"
            },
            {
                name: "Olaide Muyideen",
                email: 'excellentlystrategic@gmail.com',
                phone: '08026847945',
                quantity: "Quantity: 1.00"
            },
            {
                name: "Ovie King",
                email: 'excellentlystrategic@gmail.com',
                phone: '08026847945',
                quantity: "Quantity: 1.00"
            }
            ],
        }
    }
    async componentDidMount() {
        await Font.loadAsync({
            'ptsans-bold': require('../../../../../assets/fonts/PTSans-Bold.ttf'),
            'redhattext-bold': require('../../../../../assets/fonts/RedHatText-Bold.ttf')
        });
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <BurgerMenu openSideBar={this.props.navigation} />
                    <Text style={[styles.title, { fontFamily: 'ptsans-bold' }]}>View Clients</Text>
                </View>
                <View style={{ width: width, justifyContent: "center", alignItems: "center", height: 20 / 100 * height }}>
                    <View style={styles.searchCon}>
                        <TextInput style={[styles.input, { fontFamily: 'ptsans-bold' }]} />
                        <Ionicons name="md-search" style={{ color: '#f50a0a' }} size={35} />
                    </View>

                    <Text
                        style={styles.description}>You can search clients by “Product, Payment Status and marketer”
                     </Text>
                </View>
                <View style={styles.clientCon}>
                    <View style={styles.clientHeader}>
                        <Text style={styles.clientText}>Clients</Text>
                    </View>
                    {/* Clients 1*/}
                    <Client clients={this.state.clients}/>

                </View>
                <View style={{ width: width, height: 10 / 100 * height }}>
                    <FooterNav />
                </View>
            </View>
        )
    }
}
export default ViewClients;