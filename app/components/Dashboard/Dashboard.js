import React from 'react';
import { View, Text, TouchableOpacity, Dimensions, Image } from 'react-native';
import { MaterialCommunityIcons, FontAwesome, AntDesign, MaterialIcons } from '@expo/vector-icons';
import styles from './style';
import FooterNav from '../FooterNav/index';
import BurgerMenu from './BurgerMenu/index';

const { width, height } = Dimensions.get("window")
class Dashboard extends React.Component {
 constructor(props){
     super(props)
 }
    openDrawer() {
        this.props.navigation.openDrawer();
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header} >
                    <BurgerMenu openSideBar ={this.props.navigation}/>
                    {/* <TouchableOpacity onPress={this.openDrawer.bind(this)}>
                        <Image  source={require('../../../assets/burger.png')} style={{ marginLeft: 4.73 / 100 * width }} />
                    </TouchableOpacity> */}

                    <View style={styles.titleCon}>
                        <Text style={styles.titleText}>Dashboard</Text>
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