import React from 'react';
import { View, Image, TextInput, Picker, Text, Dimensions, ScrollView, ActivityIndicator, TouchableOpacity } from 'react-native';
import FooterNav from '../../../FooterNav/index';
import styles from './styles';
import BurgerMenu from '../../../Dashboard/BurgerMenu/index';
import * as Font from 'expo-font';
import ModalDropdown from 'react-native-modal-dropdown';
import { Ionicons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');
class CreateInvoice extends React.Component {
    static navigationOptions = {
        drawerLabel: () => null,
        header: null
    }
    constructor(props) {
        super(props);
        this.state = {
            fontsLoaded: false,
            client: "Select a Client",
            salesRep: "Select SalesRep",
            commisionType: 'Commision Type'
        }
    }
    async componentDidMount() {
        await Font.loadAsync({
            'ptsans-bold': require('../../../../../assets/fonts/PTSans-Bold.ttf'),
        });
        this.setState({ fontsLoaded: true })
    }
    selectOptions(index, value) {
        this.setState({
            assignTo: value
        })
    }
    render() {
        if (this.state.fontsLoaded) {
            return (
                //onSelect function will make a dropdown components to appear to update the  selected value
                <View style={styles.container}>
                    <View style={styles.header}>
                        <BurgerMenu openSideBar={this.props.navigation} />
                        <Text style={[styles.title, { fontFamily: 'ptsans-bold' }]}>Create Invoice</Text>
                    </View>
                    <ScrollView style={{ height: 80 / 100 * height }}>
                        <View style={{ height: '100%', justifyContent: 'center' }}>
                            <View style={styles.inputCon}>
                                <TextInput placeholder="Invoice Number" />
                            </View>

                            <View style={styles.inputCon}>
                                <TextInput placeholder="Invoice Date" />
                            </View>

                            <ModalDropdown onSelect={(index, value) => this.setState({ assignTo: value })} onSelect={(index, value) => this.setState({ assignTo: value })} options={['Family', 'School', 'State', 'Area']} style={styles.dropDownCon}>
                                <View style={styles.dropDownField}>
                                    <TextInput placeholder={this.state.client} style={{ width: '93%' }} />
                                    <Ionicons name="md-arrow-dropdown" size={35} />
                                </View>
                            </ModalDropdown>

                            <ModalDropdown onSelect={(index, value) => this.setState({ notify: value })} options={['Family', 'School', 'State', 'Area']} style={styles.dropDownCon}>
                                <View style={styles.dropDownField}>
                                    <TextInput placeholder={this.state.salesRep} style={{ width: '93%' }} />
                                    <Ionicons name="md-arrow-dropdown" size={35} />
                                </View>
                            </ModalDropdown>

                            <View style={styles.inputCon}>
                                <TextInput placeholder="Discount" />
                            </View>

                            <View style={styles.inputCon}>
                                <TextInput placeholder="Discount %" />
                            </View>

                            <ModalDropdown onSelect={(index, value) => this.setState({ dueDateDu: value })} options={['Family', 'School', 'State', 'Area']} style={styles.dropDownCon}>
                                <View style={styles.dropDownField}>
                                    <TextInput placeholder={this.state.commisionType} style={{ width: '93%' }} />
                                    <Ionicons name="md-arrow-dropdown" size={35} />
                                </View>
                            </ModalDropdown>

                            <View style={styles.addItemCon}>
                                <TouchableOpacity style={styles.addItem}>
                                    <Text style={styles.addItemText}>Add an Item</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={[styles.inputCon,{height:61.5, marginTop:5.16/100*height}]}>
                                <TextInput style={{ width: '93%' }} placeholder="Enter Description" />
                            </View>
                            <View style={{ width: '70%', alignSelf: "center", marginTop:8.44/100*height }}>
                                <Text style={[styles.invoiceSummaryTitle, {fontFamily:'ptsans-bold'}]}>Invoice Summary</Text>
                                <View style={{ flexDirection: "row" }}>
                                    <View style={styles.invoiceSummaryCon}>
                                        <Text style={[styles.invoiceSummaryLeftText,{fontFamily:'ptsans-bold'}]}>Total Discount:</Text>
                                        <Text style={[styles.invoiceSummaryLeftText,{fontFamily:'ptsans-bold'}]}>Total Exclusive:</Text>
                                        <Text style={[styles.invoiceSummaryLeftText,{fontFamily:'ptsans-bold'}]}>Total VAT:</Text>
                                        <Text style={[styles.invoiceSummaryLeftText,{fontFamily:'ptsans-bold'}]}>Total:</Text>
                                    </View>
                                    <View style={styles.invoiceSummaryCon}>
                                        <Text style={[styles.invoiceSummaryRightText,{fontFamily:'ptsans-bold'}]}>N 0.00</Text>
                                        <Text style={[styles.invoiceSummaryRightText,{fontFamily:'ptsans-bold'}]}>N 0.00</Text>
                                        <Text style={[styles.invoiceSummaryRightText,{fontFamily:'ptsans-bold'}]}>N 0.00</Text>
                                        <Text style={[styles.invoiceSummaryRightText,{fontFamily:'ptsans-bold'}]}>N 0.00</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={{ height: 20 / 100 * height, alignItems: "center", justifyContent: "center" }}>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate('CreateInvoice')} style={styles.actionButton}>
                                    <Text style={[styles.actionButtonText, { fontFamily: 'ptsans-bold' }]}>Create Invoice</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ScrollView>
                    <View style={{ height: 10 / 100 * height }}>
                        <FooterNav />
                    </View>

                </View>
            )
        } else {
            return (
                <ActivityIndicator />
            )
        }

    }
}
export default CreateInvoice;