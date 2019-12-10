import React from 'react';
import { View, Image, TextInput, Picker, Text, Dimensions, ScrollView, ActivityIndicator, TouchableOpacity } from 'react-native';
import FooterNav from '../../../public/FooterNav/index';
import styles from './styles';
import Header from '../../../public/Header/index';
import * as Font from 'expo-font';
import ModalDropdown from 'react-native-modal-dropdown';
import { Ionicons } from '@expo/vector-icons';

import DropDown from '../../../public/DropDown/DropDown';
import ItemInfo from './ItemInfo';
import ActionButton from '../../../public/ActionButton/ActionButton'

const { width, height } = Dimensions.get('window');
class CreateInvoice extends React.Component {
    static navigationOptions = {
        drawerLabel: () => null,
        header: null
    }
    constructor(props) {
        super(props);
        this.state = {
            displayInfo: "none"
        }
    }
    displayInfo = () => {
        this.state.displayInfo === 'none' ?
            this.setState({ displayInfo: 'flex' }) :
            this.setState({ displayInfo: 'none' })
    }
    async componentDidMount() {
        await Font.loadAsync({
            'ptsans-bold': require('../../../../../assets/fonts/PTSans-Bold.ttf'),
        });
    }
    render() {
        return (
            //onSelect function will make a dropdown components to appear to update the  selected value
            <View style={styles.container}>
                    <Header title="Create Invoice" openSideBar={this.props.navigation} />
                <ScrollView style={{ height: 80 / 100 * height }}>
                    <View style={{ height: '100%', justifyContent: 'center' }}>
                        <View style={styles.inputCon}>
                            <TextInput placeholder="Invoice Number" />
                        </View>

                        <View style={styles.inputCon}>
                            <TextInput placeholder="Invoice Date" />
                        </View>

                        <DropDown placeholder="Select a Client" />

                        <DropDown placeholder="Select SalesRep" />

                        <View style={styles.inputCon}>
                            <TextInput placeholder="Discount" />
                        </View>

                        <View style={styles.inputCon}>
                            <TextInput placeholder="Discount %" />
                        </View>

                        <DropDown placeholder="Commision Type" />

                        <View style={styles.addItemCon}>
                            <TouchableOpacity onPress={this.displayInfo}
                                style={styles.addItem}>
                                <Text style={styles.addItemText}>Add an Item</Text>
                            </TouchableOpacity>
                        </View>
                        <ItemInfo displayInfo={this.state.displayInfo} />
                        <View style={[styles.inputCon, { height: 61.5, marginTop: 5.16 / 100 * height }]}>
                            <TextInput style={{ width: '93%' }} placeholder="Enter Description" />
                        </View>
                        <View style={{ width: '70%', alignSelf: "center", marginTop: 8.44 / 100 * height }}>
                            <Text style={[styles.invoiceSummaryTitle, { fontFamily: 'ptsans-bold' }]}>Invoice Summary</Text>
                            <View style={{ flexDirection: "row" }}>
                                <View style={styles.invoiceSummaryCon}>
                                    <Text style={[styles.invoiceSummaryLeftText, { fontFamily: 'ptsans-bold' }]}>Total Discount:</Text>
                                    <Text style={[styles.invoiceSummaryLeftText, { fontFamily: 'ptsans-bold' }]}>Total Exclusive:</Text>
                                    <Text style={[styles.invoiceSummaryLeftText, { fontFamily: 'ptsans-bold' }]}>Total VAT:</Text>
                                    <Text style={[styles.invoiceSummaryLeftText, { fontFamily: 'ptsans-bold' }]}>Total:</Text>
                                </View>
                                <View style={styles.invoiceSummaryCon}>
                                    <Text style={[styles.invoiceSummaryRightText, { fontFamily: 'ptsans-bold' }]}>N 0.00</Text>
                                    <Text style={[styles.invoiceSummaryRightText, { fontFamily: 'ptsans-bold' }]}>N 0.00</Text>
                                    <Text style={[styles.invoiceSummaryRightText, { fontFamily: 'ptsans-bold' }]}>N 0.00</Text>
                                    <Text style={[styles.invoiceSummaryRightText, { fontFamily: 'ptsans-bold' }]}>N 0.00</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ height: 20 / 100 * height, alignItems: "center", justifyContent: "center" }}>
                            <ActionButton marginLeft={0} navigation={this.props.navigation} textPos="center" name="Create Invoice" path="Invoices" />
                        </View>
                    </View>
                </ScrollView>
                <View style={{ height: 10 / 100 * height }}>
                    <FooterNav />
                </View>

            </View>
        )

    }
}
export default CreateInvoice;