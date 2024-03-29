import React from 'react';
import { View, Image, TextInput, Picker, Text, Dimensions, ScrollView, ActivityIndicator, TouchableOpacity } from 'react-native';
import FooterNav from '../../../public/FooterNav/index';
import styles from './styles';
import Header from '../../../public/Header/index';
import * as Font from 'expo-font';
import ModalDropdown from 'react-native-modal-dropdown';
import { Ionicons } from '@expo/vector-icons';
import RNPickerSelect from 'react-native-picker-select';
import DropDown from '../../../public/DropDown/DropDown';

const { width, height } = Dimensions.get('window');
class CreateRequisition extends React.Component {
    static navigationOptions = {
        drawerLabel: () => null,
        header: null
    }
    constructor(props) {
        super(props);
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
                <Header title="Create Requisition" openSideBar={this.props.navigation} />
                <ScrollView style={{ height: 80 / 100 * height }}>
                    <View style={{ height: '100%', justifyContent: 'center' }}>
                        <View style={styles.inputCon}>
                            <TextInput placeholder="Date" />
                        </View>
                        <DropDown placeholder="Select Type" />
                        <DropDown placeholder="By" />
                        <DropDown placeholder="Select Bill" />
                        <DropDown placeholder="Select Due Date" />
                        <DropDown placeholder="Expense Category" />
                        <DropDown placeholder="Enter Category" />

                        <View style={[styles.inputCon, { height: 70, justifyContent: "flex-end", paddingBottom: 10 }]}>
                            <TextInput placeholder="Enter Purpose / Description" />
                        </View>

                        <View style={styles.inputCon}>
                            <TextInput placeholder="Amount" />
                        </View>
                        <View style={styles.inputCon}>
                            <TextInput placeholder="Related Item" required />
                        </View>
                        <View style={styles.chooseFileCon}>
                            <Text
                                style={[styles.chooseFileText, { fontFamily: 'ptsans-bold' }]}>
                                Upload Invoice/Picture/Document/Evidence of Work
                                </Text>
                            <TouchableOpacity style={styles.chooseFile}>
                                <Text style={[styles.fileButtonText, { fontFamily: 'ptsans-bold' }]}>Choose File</Text>
                            </TouchableOpacity>
                        </View>
                        <View
                            style={{ height: 20 / 100 * height, alignItems: "center", justifyContent: "center" }}>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate('Requisition')}
                                style={styles.actionButton}>
                                <Text style={[styles.actionButtonText, { fontFamily: 'ptsans-bold' }]}>Create Requisition</Text>
                            </TouchableOpacity>
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
export default CreateRequisition;