import React from 'react';
import { View, Text, TouchableOpacity, Dimensions, Image } from 'react-native';
import { MaterialCommunityIcons, FontAwesome, AntDesign, MaterialIcons } from '@expo/vector-icons';
import styles from './style';
import * as Font from 'expo-font';
import FooterNav from '../FooterNav/index';
import BurgerMenu from './BurgerMenu/index';

const { width, height } = Dimensions.get("window")
class Dashboard extends React.Component {
 constructor(props){
     super(props)
 }
 async componentDidMount() {
    await Font.loadAsync({
        'ptsans-bold': require('../../../assets/fonts/PTSans-Bold.ttf'),
        'redhattext-bold': require('../../../assets/fonts/RedHatText-Bold.ttf')
    });
}
    openDrawer() {
        this.props.navigation.openDrawer();
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header} >
                    <BurgerMenu openSideBar ={this.props.navigation}/>

                    <View style={styles.titleCon}>
                        <Text style={[styles.titleText,{fontFamily:'ptsans-bold'}]}>Dashboard</Text>
                    </View>
                </View>

                <View style={styles.chartCon}>
                    <Image source={require('../../../assets/chart1.png')} />
                    <Image source={require('../../../assets/chart2.png')} style={{ marginTop: '7.4%' }} />
                </View>
                <FooterNav />
            </View>
        )
    }
}

export default Dashboard;