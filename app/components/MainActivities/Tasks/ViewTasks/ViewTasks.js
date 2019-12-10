import React from 'react';
import { View, Image, Text, Dimensions,  TouchableOpacity } from 'react-native';
import FooterNav from '../../../public/FooterNav/index';
import Task from './Task';
import styles from './styles';
import Header from '../../../public/Header/index';
import * as Font from 'expo-font';
import { Ionicons, Foundation, FontAwesome } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

class ViewTasks extends React.Component {
    static navigationOptions = {
        header: null,
    };
    constructor(props){
        super(props);
        this.state={
            active:0,
            tasks:[{task:'Call Adeyemi'}, {task:'Call Henry Shedrack'}, {task:'Call Peter Pietro'},
            {task:'Call Fidel Castro Jr'}, {task:'Call Mazi Okeke'}, {task:'Call Olaide Muyideen'}, {task:'Call Onome Pendart'},
            {task:'Call Ovie King'},
            ]
        }
    }
    async componentDidMount() {
        await Font.loadAsync({
            'ptsans-bold': require('../../../../../assets/fonts/PTSans-Bold.ttf'),
            'redhattext-bold': require('../../../../../assets/fonts/RedHatText-Bold.ttf')
        });
    }
    displayTaskInfo = (key)=>{
      this.setState({
          active:key
      })
    }
    render() {
        return (
            <View style={styles.container}>
                    <Header title="View Tasks" openSideBar={this.props.navigation} />
                <View style={styles.clientCon}>
                    <View style={styles.clientHeader}>
                        <Text style={styles.clientText}>Task Subjects</Text>
                    </View>
                    <Task active={this.state.active} tasks={this.state.tasks}/>
                </View>

                <View style={{ height: 15 / 100 * height, alignItems: "center", justifyContent: "center" }}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('CreateTasks')} style={styles.actionButton}><Text style={[styles.actionButtonText, { fontFamily: 'ptsans-bold' }]}>Create Tasks</Text></TouchableOpacity>
                </View>

                <View style={{ height: 10 / 100 * height, justifyContent: "center" }}>
                    <FooterNav />
                </View>


            </View>
        )
    }
}
export default ViewTasks;