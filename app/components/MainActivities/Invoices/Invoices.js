import React from 'react';
import { View, Image, Text, Dimensions, TextInput, TouchableOpacity } from 'react-native';
import FooterNav from '../../FooterNav/index';
import InvoiceItems from './InvoiceItems';
import styles from './styles';
import BurgerMenu from '../../Dashboard/BurgerMenu/index';
import * as Font from 'expo-font';
import { Ionicons, Foundation, FontAwesome } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

class ViewTasks extends React.Component {
    static navigationOptions = {
        header: null,
    };
    constructor(props){
        super(props);
        this.state ={
            invoiceData:[
                {
                name:'Smith Ikpa',
                invoiceNum:'159 - Pending',
                due:'03/12/2019',
                amount:'N 6,733,125.00 ',
                balance:' N 6,733,125.00'
            },
            {
                name:'Fiedel Castro Jr',
                invoiceNum:'159 - Pending',
                due:'03/12/2019',
                amount:'N 6,733,125.00 ',
                balance:' N 6,733,125.00'
            },
            {
                name:'Henry Shadrack',
                invoiceNum:'159 - Pending',
                due:'03/12/2019',
                amount:'N 6,733,125.00 ',
                balance:' N 6,733,125.00'
            },
            {
                name:'Peter Pietro',
                invoiceNum:'159 - Pending',
                due:'03/12/2019',
                amount:'N 6,733,125.00 ',
                balance:' N 6,733,125.00'
            },
            {
                name:'Mazi Okeke',
                invoiceNum:'159 - Pending',
                due:'03/12/2019',
                amount:'N 6,733,125.00 ',
                balance:' N 6,733,125.00'
            },
            {
                name:'Onome Pendart',
                invoiceNum:'159 - Pending',
                due:'03/12/2019',
                amount:'N 6,733,125.00 ',
                balance:' N 6,733,125.00'
            },
            {
                name:'Olaide Muyideen',
                invoiceNum:'159 - Pending',
                due:'03/12/2019',
                amount:'N 6,733,125.00 ',
                balance:' N 6,733,125.00'
            },
            {
                name:'Ovie King',
                invoiceNum:'159 - Pending',
                due:'03/12/2019',
                amount:'N 6,733,125.00 ',
                balance:' N 6,733,125.00'
            },

        ]
        }
    }
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
                    <Text style={[styles.title, { fontFamily: 'ptsans-bold' }]}>Invoices</Text>
                </View>
                <View style={styles.clientCon}>
                    <View style={styles.clientHeader}>
                        <Text style={styles.clientText}>Clients</Text>
                    </View>
                    <InvoiceItems invoiceData={this.state.invoiceData}/>
                </View>

                <View style={{ height: 20 / 100 * height, alignItems: "center", justifyContent: "center" }}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('CreateInvoice')} style={styles.actionButton}><Text style={[styles.actionButtonText, { fontFamily: 'ptsans-bold' }]}>Create New Invoice</Text></TouchableOpacity>
                </View>

                <View style={{ height: 10 / 100 * height }}>
                    <FooterNav />
                </View>


            </View>
        )
    }
}
export default ViewTasks;