import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import FooterNav from '../../public/FooterNav/index';
import styles from './styles';
import Header from '../../public/Header/index';
import * as Font from 'expo-font';
import ActionButton from '../../public/ActionButton/ActionButton';

class Tasks extends React.Component {
    async componentDidMount() {
        await Font.loadAsync({
            'ptsans-bold': require('../../../../assets/fonts/PTSans-Bold.ttf'),
            'redhattext-bold': require('../../../../assets/fonts/RedHatText-Bold.ttf')
        });
    }
    render() {
        return (
            <View style={styles.container}>
                <Header title="Tasks" openSideBar={this.props.navigation} />
                <View style={styles.main}>
                    <Image source={require('../../../../assets/Task.png')} />
                    <ActionButton marginLeft='8.4%' navigation={this.props.navigation} name="View Tasks" path="ViewTasks" />
                    <ActionButton marginLeft='8.4%' navigation={this.props.navigation} name="Create Tasks" path="CreateTasks" />
                    <ActionButton marginLeft='8.4%' navigation={this.props.navigation} name="Update Status" path="" />
                </View>
                <FooterNav />
            </View>
        )
    }
}
export default Tasks;