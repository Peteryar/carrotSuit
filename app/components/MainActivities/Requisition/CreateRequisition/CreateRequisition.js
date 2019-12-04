import React from 'react';
import { View, Image, TextInput, Picker, Text, Dimensions, ScrollView, ActivityIndicator, TouchableOpacity } from 'react-native';
import FooterNav from '../../../FooterNav/index';
import styles from './styles';
import BurgerMenu from '../../../Dashboard/BurgerMenu/index';
import * as Font from 'expo-font';
import ModalDropdown from 'react-native-modal-dropdown';
import { Ionicons } from '@expo/vector-icons';
import RNPickerSelect from 'react-native-picker-select';
const { width, height } = Dimensions.get('window');
class CreateRequisition extends React.Component {
    static navigationOptions = {
        drawerLabel: () => null,
        header: null
    }
    constructor(props) {
        super(props);
        this.state = {
            fontsLoaded: false,
            type: "Select Type",
            by: "By",
            billType: 'Select Bill',
            dueDate: "Select Due Date",
            expenseCat: 'Expense Category '
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
        const dropdown = () => <Ionicons name="md-arrow-dropdown" size={35} />
        if (this.state.fontsLoaded) {
            return (

                //onSelect function will make a dropdown components to appear to update the  selected value
                <View style={styles.container}>
                    <View style={styles.header}>
                        <BurgerMenu openSideBar={this.props.navigation} />
                        <Text style={[styles.title, { fontFamily: 'ptsans-bold' }]}>Create Requisition</Text>
                    </View>
                    <ScrollView style={{ height: 80 / 100 * height }}>
                        <View style={{ height: '100%', justifyContent: 'center' }}>
                            <View style={styles.inputCon}>
                                <TextInput placeholder="Date" />
                            </View>
                            <View style={styles.dropDownCon}>
                                <RNPickerSelect
                                    Icon={dropdown}
                                    placeholder={{label:"Select Type", value:'null'}}
                                    style={styles.dropDownCon}
                                    onValueChange={(value) => console.log(value)}
                                    items={[
                                        { label: 'Football', value: 'football' },
                                        { label: 'Baseball', value: 'baseball' },
                                        { label: 'Hockey', value: 'hockey' },
                                    ]}
                               />
                            </View>

                            <View style={styles.dropDownCon}>
                                <RNPickerSelect
                                    Icon={dropdown}
                                    placeholder={{label:"By", value:'null'}}
                                    style={styles.dropDownCon}
                                    onValueChange={(value) => console.log(value)}
                                    items={[
                                        { label: 'Football', value: 'football' },
                                        { label: 'Baseball', value: 'baseball' },
                                        { label: 'Hockey', value: 'hockey' },
                                    ]}
                               />
                            </View>
                            <View style={styles.dropDownCon}>
                                <RNPickerSelect
                                    Icon={dropdown}
                                    placeholder={{label:"Select Bill", value:'null'}}
                                    style={styles.dropDownCon}
                                    onValueChange={(value) => console.log(value)}
                                    items={[
                                        { label: 'Football', value: 'football' },
                                        { label: 'Baseball', value: 'baseball' },
                                        { label: 'Hockey', value: 'hockey' },
                                    ]}
                               />
                            </View>

                            <View style={styles.dropDownCon}>
                                <RNPickerSelect
                                    Icon={dropdown}
                                    placeholder={{label:"Select Due Date", value:'null'}}
                                    style={styles.dropDownCon}
                                    onValueChange={(value) => console.log(value)}
                                    items={[
                                        { label: 'Football', value: 'football' },
                                        { label: 'Baseball', value: 'baseball' },
                                        { label: 'Hockey', value: 'hockey' },
                                    ]}
                               />
                            </View>
                            <View style={styles.dropDownCon}>
                                <RNPickerSelect
                                    Icon={dropdown}
                                    placeholder={{label:"Expense Category", value:'null'}}
                                    style={styles.dropDownCon}
                                    onValueChange={(value) => console.log(value)}
                                    items={[
                                        { label: 'Football', value: 'football' },
                                        { label: 'Baseball', value: 'baseball' },
                                        { label: 'Hockey', value: 'hockey' },
                                    ]}
                               />
                               </View>
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
                                    onPress={() => this.props.navigation.navigate('ViewRequisitions')}
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
        } else {
            return (
                <ActivityIndicator />
            )
        }

    }
}
export default CreateRequisition;