import React from 'react';
import { View, Image, TextInput, Picker, Text, Dimensions, ActivityIndicator, TouchableOpacity } from 'react-native';
import FooterNav from '../../../public/FooterNav/index';
import styles from './styles';
import Header from '../../../public/Header/index';
import * as Font from 'expo-font';
import ModalDropdown from 'react-native-modal-dropdown';
import RNPickerSelect from 'react-native-picker-select';
import { Ionicons } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';

const DropDown = (props) => {
    const dropdown = () => <Ionicons name="md-arrow-dropdown" size={35} />
    return (
        <View style={styles.dropDownCon}>
            <RNPickerSelect
                placeholder={{ label: props.placeholder, value: 'null' }}
                style={styles.dropDownCon}
                onValueChange={(value) => console.log(value)}
                items={[
                    { label: 'Football', value: 'football' },
                    { label: 'Baseball', value: 'baseball' },
                    { label: 'Hockey', value: 'hockey' },
                ]}
            />
        </View>
    )
}

const { width, height } = Dimensions.get('window');
class RecordExpenses extends React.Component {
    static navigationOptions = {
        header: null
    }
    constructor(props) {
        super(props);
        this.state = {
            fontsLoaded: false,
            assignTo: "Select Credit Account",
            notify: "Select Related Item",
            priority: 'Select Beneficiary',
            selectTask: "Expense Category",
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
                //onSelect function is written dropdown components to update the  selected value
                <View style={styles.container}>
                        <Header title="Expenses" openSideBar={this.props.navigation.state.params.navigation} />
                    <ScrollView style={{ height: 75 / 100 * height }}>
                        <View style={{ alignItems: "center", height: '100%', justifyContent: 'center' }}>
                            <View style={styles.inputCon}>
                                <TextInput placeholder="Expense Date" />
                            </View>

                            <View style={styles.inputCon}>
                                <TextInput placeholder="Reference Number" />
                            </View>

                            <DropDown placeholder="Select Credit Account" />

                            <DropDown placeholder="Select Related Item" />

                            <DropDown placeholder="Select Beneficiary" />

                            <DropDown placeholder="Expense Category" />

                            <View style={styles.inputCon}>
                                <TextInput placeholder="Amount" />
                            </View>
                            <View style={styles.inputCon}>
                                <TextInput placeholder="Description" />
                            </View>
                            <View style={{ width: 89 / 100 * width, height: 10 / 100 * height, justifyContent: "center" }}>
                                <TouchableOpacity style={styles.chooseFile}>
                                    <Text style={[styles.fileButtonText, { fontFamily: 'ptsans-bold' }]}>Choose File</Text>
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate('Expenses')}
                                style={styles.actionButton}>
                                <Text style={[styles.actionButtonText, { fontFamily: 'ptsans-bold' }]}>Save Expenses</Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                    <View style={{height:10/100*height}}>
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
export default RecordExpenses;