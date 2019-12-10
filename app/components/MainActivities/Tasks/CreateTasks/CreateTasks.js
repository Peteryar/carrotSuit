import React from 'react';
import { View, Image, TextInput, Picker, CheckBox, Text, Dimensions, ActivityIndicator, TouchableOpacity } from 'react-native';
import FooterNav from '../../../public/FooterNav/index';
import styles from './styles';
import Header from '../../../public/Header/index';
import * as Font from 'expo-font';
import ModalDropdown from 'react-native-modal-dropdown';
import { Ionicons } from '@expo/vector-icons';
import RNPickerSelect from 'react-native-picker-select';
import { ScrollView } from 'react-native-gesture-handler';
import DropDown from '../../../public/DropDown/DropDown'

const { width, height } = Dimensions.get('window');
class CreateTask extends React.Component {
    static navigationOptions = {
        header: null
    }
    constructor(props) {
        super(props);
        this.state = {
            checkbox: false
        }
    }
    async componentDidMount() {
        await Font.loadAsync({
            'ptsans-bold': require('../../../../../assets/fonts/PTSans-Bold.ttf'),
        });
    }
    selectOptions(index, value) {
        this.setState({
            assignTo: value
        })
    }
    render() {
        return (
            <View style={styles.container}>
                <Header title="Create Task" openSideBar={this.props.navigation} />
                <ScrollView style={{ height: 75 / 100 * height }}>
                    <View style={{ alignItems: "center", height: '100%', justifyContent: 'center' }}>
                        <View style={styles.inputCon}>
                            <TextInput placeholder="Task Subject" />
                        </View>

                        <View style={styles.inputCon}>
                            <TextInput placeholder="Task Description" />
                        </View>
                        <DropDown placeholder="Assign To" />
                        <DropDown placeholder="When Done Notify" />
                        <DropDown placeholder="Priority" />
                        <DropDown placeholder="Select Task Status" />
                        <DropDown placeholder="Set Reminder" />
                        <DropDown placeholder="Due Date" />
                        <DropDown placeholder="Due Date Duration" />
                        <View style={styles.inputCon}>
                            <TextInput placeholder="Take Frequency" />
                        </View>
                        <DropDown placeholder="Frequency Duration" />
                        <View style={{ flexDirection: 'row', height: 10 / 100 * height, width: '89%', alignItems: "center" }}>
                            <Text>Send SMS/Email Notification</Text>
                            <CheckBox onValueChange={() => this.state.checkbox ? this.setState({ checkbox: false }) : this.setState({ checkbox: true })} />
                        </View>

                        <View style={styles.main}>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate('ViewTasks', { navigation: this.props.navigation })}
                                style={styles.mainItems}>
                                <Text style={[styles.mainText, { fontFamily: 'ptsans-bold' }]}>Create Tasks</Text>
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
export default CreateTask;