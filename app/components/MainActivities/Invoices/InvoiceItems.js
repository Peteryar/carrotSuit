import React from 'react';
import { View, Image, Text, Dimensions, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles';
import * as Font from 'expo-font';
import { Ionicons, Foundation, FontAwesome } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');
class InvoiceItems extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clientInfoDisplay: "none",
            active: 0,
        }
    }
    async componentDidMount() {
        await Font.loadAsync({
            'ptsans-bold': require('../../../../assets/fonts/PTSans-Bold.ttf'),
            'redhattext-bold': require('../../../../assets/fonts/RedHatText-Bold.ttf')
        });
    }
    displayClientInfo = (key) => {
        this.state.active === key ? this.setState({ active: -1 }) : this.setState({ active: key });
    }
    render() {
        const invoice = this.props.invoiceData.map((invoice, key)=>{
            return(
                <View key={key} style={{ alignItems: "center" }}>
                    <TouchableOpacity
                        onPress={() => this.displayClientInfo(key)}
                        style={this.state.active === key ? styles.openedClientCon : styles.closedClientCon}>
                        {this.state.active !== key ? <FontAwesome
                            style={styles.closedClientText} name="plus" size={20} /> :
                            <Foundation
                                style={{ marginLeft: 3 / 100 * width, marginRight: 3 / 100 * width }}
                                name="minus" size={20} />}
                        <Text style={this.state.active === key ? [styles.closedClientText, { color: '#000' }] : styles.closedClientText}>{invoice.name}</Text>
                    </TouchableOpacity>

                    <View
                        style={[styles.openClientInfoCon,
                        { display: this.state.active === key ? "flex" : "none" }]}>
                        <Text style={styles.clientInfo}>Invoice #: {invoice.invoiceNum}</Text>
                        <Text style={styles.clientInfo}>Due : {invoice.due}</Text>
                        <Text style={styles.clientInfo}>Amount : {invoice.amount}</Text>
                        <Text style={styles.clientInfo}>Balance : {invoice.balance}</Text>
                    </View>

                    <View style={[styles.clientButtonCon, { display: this.state.active === key ? "flex" : "none" }]}>
                        <TouchableOpacity
                            style={styles.clientButton}>
                            <Text style={styles.buttonText}>View</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.clientButton}>
                            <Text style={styles.buttonText}>Edit</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )
        })
       
        return (
            invoice
        )
    }
}

export default InvoiceItems;