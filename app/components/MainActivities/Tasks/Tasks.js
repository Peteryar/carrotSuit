import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import FooterNav from '../../FooterNav/index';
import styles from './styles';
import BurgerMenu from '../../Dashboard/BurgerMenu/index';
import * as Font from 'expo-font';

class Tasks extends React.Component {
    async componentDidMount() {
        await Font.loadAsync({
            'ptsans-bold': require('../../../../assets/fonts/PTSans-Bold.ttf'),
            'redhattext-bold':require('../../../../assets/fonts/RedHatText-Bold.ttf')
        });
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <BurgerMenu openSideBar={this.props.navigation} />
                    <Text style={[styles.title,{fontFamily:'ptsans-bold'}]}>Tasks</Text>
                </View>
                <View style={styles.main}>
                    <Image source={require('../../../../assets/Task.png')} />
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('ViewTasks')} style={styles.mainItems}><Text style={[styles.mainText,{fontFamily:'ptsans-bold'}]}>View Tasks</Text></TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('CreateTasks')} style={styles.mainItems}><Text style={[styles.mainText,{fontFamily:'ptsans-bold'}]}>Create Tasks</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.mainItems}><Text style={[styles.mainText,{fontFamily:'ptsans-bold'}]}>Update Status</Text></TouchableOpacity>
                </View>
                <FooterNav />
            </View>
        )
    }
}
export default Tasks;