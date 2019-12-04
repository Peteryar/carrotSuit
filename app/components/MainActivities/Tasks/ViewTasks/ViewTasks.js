import React from 'react';
import { View, Image, Text, Dimensions, TextInput, TouchableOpacity } from 'react-native';
import FooterNav from '../../../FooterNav/index';
import styles from './styles';
import BurgerMenu from '../../../Dashboard/BurgerMenu/index';
import * as Font from 'expo-font';
import { Ionicons, Foundation, FontAwesome } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

class ViewTasks extends React.Component {
    static navigationOptions = {
        header: null,
    };
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
                    <Text style={[styles.title, { fontFamily: 'ptsans-bold' }]}>View Tasks</Text>
                </View>
                <View style={styles.clientCon}>
                    <View style={styles.clientHeader}>
                        <Text style={styles.clientText}>Task Subjects</Text>
                    </View>

                    <View style={{ alignItems: "center" }}>
                        <TouchableOpacity style={styles.openedClientCon}>
                            <Foundation style={{ marginLeft: 3 / 100 * width, marginRight: 3 / 100 * width }} name="minus" size={20} />
                            <Text>Call Adeyemi</Text>
                        </TouchableOpacity>
                        <View style={styles.openClientInfoCon}>
                            <Text style={styles.clientInfo}>Created By: Adegbenga Adeshina</Text>
                            <Text style={styles.clientInfo}>Assigned To: XYZ Properties Limited</Text>
                            <Text style={styles.clientInfo}>Created Date: Mon,31/12</Text>
                            <Text style={styles.clientInfo}>Due Date: Sun,01/12</Text>
                            <Text style={styles.clientInfo}> Priority: <Text style={{color:'red'}}>Highest</Text></Text>

                        </View>
                        <View style={styles.clientButtonCon}>
                            <TouchableOpacity style={styles.clientButton}><Text style={styles.buttonText}>View</Text></TouchableOpacity>
                            <TouchableOpacity style={styles.clientButton}><Text style={styles.buttonText}>Edit</Text></TouchableOpacity>
                            <TouchableOpacity style={[styles.clientButton, { backgroundColor: 'red' }]}><Text style={styles.buttonText}>Delete</Text></TouchableOpacity>
                        </View>
                    </View>

                    <View style={{ alignItems: "center" }}>
                        <TouchableOpacity style={[styles.closedClientCon, { borderTopWidth: 0 }]}>
                            <FontAwesome style={styles.closedClientText} name="plus" size={20} />
                            <Text style={styles.closedClientText}>Call Henry Shedrack</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ alignItems: "center" }}>
                        <TouchableOpacity style={styles.closedClientCon}>
                            <FontAwesome style={styles.closedClientText} name="plus" size={20} />
                            <Text style={styles.closedClientText}>Call Peter Pietro</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ alignItems: "center" }}>
                        <TouchableOpacity style={styles.closedClientCon}>
                            <FontAwesome style={styles.closedClientText} name="plus" size={20} />
                            <Text style={styles.closedClientText}>Call Fidel Castro Jr</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ alignItems: "center" }}>
                        <TouchableOpacity style={styles.closedClientCon}>
                            <FontAwesome style={styles.closedClientText} name="plus" size={20} />
                            <Text style={styles.closedClientText}>Call Mazi Okeke</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ alignItems: "center" }}>
                        <TouchableOpacity style={styles.closedClientCon}>
                            <FontAwesome style={styles.closedClientText} name="plus" size={20} />
                            <Text style={styles.closedClientText}>Call Olaide Muyideen</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ alignItems: "center" }}>
                        <TouchableOpacity style={styles.closedClientCon}>
                            <FontAwesome style={styles.closedClientText} name="plus" size={20} />
                            <Text style={styles.closedClientText}>Call Onome Pendart</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ alignItems: "center" }}>
                        <TouchableOpacity style={[styles.closedClientCon, { borderBottomWidth: 0 }]}>
                            <FontAwesome style={styles.closedClientText} name="plus" size={20} />
                            <Text style={styles.closedClientText}>Call Ovie King</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{height:20/100*height, alignItems:"center",justifyContent:"center"}}>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('CreateTasks')}style={styles.actionButton}><Text style={[styles.actionButtonText, { fontFamily: 'ptsans-bold' }]}>Create Tasks</Text></TouchableOpacity>
                </View>

                <View style={{height:10/100*height}}>
                    <FooterNav />
                </View>


            </View>
        )
    }
}
export default ViewTasks;