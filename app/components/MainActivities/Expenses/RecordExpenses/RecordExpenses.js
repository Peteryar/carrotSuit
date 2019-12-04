import React from 'react';
import { View, Image, TextInput, Picker, Text, Dimensions, ActivityIndicator, TouchableOpacity } from 'react-native';
import FooterNav from '../../../../components/FooterNav/index';
import styles from './styles';
import BurgerMenu from '../../../Dashboard/BurgerMenu/index';
import * as Font from 'expo-font';
import ModalDropdown from 'react-native-modal-dropdown';
import { Ionicons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');
class RecordExpenses extends React.Component {
    static navigationOptions = {
        header: null
   }
    constructor(props) {
        super(props);
        this.state = {
            fontsLoaded: false,
            assignTo:"Select Credit Account",
            notify:"Select Related Item",
            priority:'Select Beneficiary',
            selectTask:"Expense Category",
        }
    }
    async componentDidMount() {
        await Font.loadAsync({
            'ptsans-bold': require('../../../../../assets/fonts/PTSans-Bold.ttf'),
        });
        this.setState({ fontsLoaded: true })
    }
    selectOptions(index, value){
        this.setState({
            assignTo: value
        })
    }
    render() {
        if (this.state.fontsLoaded) {
            return (
                //onSelect function is written dropdown components to update the  selected value
                <View style={styles.container}>
                    <View style={styles.header}>
                        <BurgerMenu openSideBar={this.props.navigation.state.params.navigation}/>
                        <Text style={[styles.title, { fontFamily: 'ptsans-bold' }]}>Expenses</Text>
                    </View>
                    <View style={{alignItems:"center", height: '80%', justifyContent:'center'}}>
                        <View style={styles.inputCon}>
                            <TextInput placeholder="Expense Date" />
                        </View>

                        <View style={styles.inputCon}>
                            <TextInput placeholder="Reference Number" />
                        </View>

                        <ModalDropdown onSelect={(index, value)=>this.setState({assignTo:value})} onSelect={(index, value)=>this.setState({assignTo:value})} options={['Family', 'School', 'State', 'Area']} style={styles.dropDownCon}>
                            <View style={styles.dropDownField}>
                                <TextInput placeholder={this.state.assignTo} style={{width:'93%'}}/>
                                <Ionicons name="md-arrow-dropdown"  size={35} />
                            </View>
                        </ModalDropdown>

                        <ModalDropdown onSelect={(index, value)=>this.setState({notify:value})} options={['Family', 'School', 'State', 'Area']} style={styles.dropDownCon}>
                            <View style={styles.dropDownField}>
                                <TextInput placeholder={this.state.notify} style={{width:'93%'}}/>
                                <Ionicons name="md-arrow-dropdown"  size={35} />
                            </View>
                        </ModalDropdown>

                        <ModalDropdown onSelect={(index, value)=>this.setState({priority:value})} options={['Family', 'School', 'State', 'Area']} style={styles.dropDownCon}>
                            <View style={styles.dropDownField}>
                                <TextInput placeholder={this.state.priority} style={{width:'93%'}}/>
                                <Ionicons name="md-arrow-dropdown"  size={35} />
                            </View>
                        </ModalDropdown>

                        <ModalDropdown onSelect={(index, value)=>this.setState({selectTask:value})} options={['Family', 'School', 'State', 'Area']} style={styles.dropDownCon}>
                            <View style={styles.dropDownField}>
                                <TextInput placeholder={this.state.selectTask} style={{width:'93%'}}/>
                                <Ionicons name="md-arrow-dropdown"  size={35} />
                            </View>
                        </ModalDropdown>
                        <View style={styles.inputCon}>
                            <TextInput placeholder="Amount" />
                        </View>
                        <View style={styles.inputCon}>
                            <TextInput placeholder="Description" />
                        </View>
                        <View style={styles.uploadCon}>
                            <Text style={{width:'50%'}}>Upload Document(s)</Text>
                            <Text style={{width:'50%', textAlign:"right"}}>Remove</Text>
                        </View>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>Save Expense</Text>
                        </TouchableOpacity>
                    </View>
                       <FooterNav />
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