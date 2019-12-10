import React from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator, Dimensions, Image } from 'react-native';
import { MaterialCommunityIcons, FontAwesome, AntDesign, MaterialIcons, Feather } from '@expo/vector-icons';
import styles from './style';
import * as Font from 'expo-font';
import FooterNav from '../public/FooterNav/index';
import Header from '../public/Header/index';
import { ScrollView } from 'react-native-gesture-handler';
import Chart from './Chart';

const { width, height } = Dimensions.get("window");

const DashBoardItem = (props) => {
    return (
        <TouchableOpacity
            onPress={() => props.navigation.navigate(props.pathName)}
            style={{ width: 50 / 100 * width, height: 50 / 100 * width, justifyContent: "center", alignItems: "center" }}>
            <View style={styles.dashboardItem}>
                {props.icon}
                <Text style={styles.dashboardItemTexts}>{props.details}</Text>
            </View>
        </TouchableOpacity>

    )
}
class Dashboard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            fontsLoaded: false
        }
    }
    async componentDidMount() {
        await Font.loadAsync({
            'ptsans-bold': require('../../../assets/fonts/PTSans-Bold.ttf'),
            'redhattext-bold': require('../../../assets/fonts/RedHatText-Bold.ttf')
        });
        this.setState({
            fontsLoaded: true
        })
    }
    render() {
        const clientIcon = <MaterialCommunityIcons
            size={50} style={{ color: '#fff' }} name="clipboard-account" />;
        const staffsIcon = <Feather
            name="users" size={50} style={{ color: '#fff' }} />;
        const sales = <MaterialIcons
            name="shopping-cart" size={50} style={{ color: '#fff' }} />
        const expenses = <Image
            source={require('../../../assets/Expenses.png')} />
        return (
            <View style={styles.container}>
                <View style={styles.header} >
                    <Header title="DashBoard" openSideBar={this.props.navigation} />
                </View>
                <ScrollView style={{ height: 75 / 100 * height }}>
                    <View style={{ flexDirection: "row", justifyContent: "center", width: 100 / 100 * width }}>
                        <DashBoardItem
                            pathName="ViewClients"
                            navigation={this.props.navigation}
                            icon={clientIcon} details={`4000 \n CLIENTS `} />

                        <DashBoardItem
                            pathName="Staffs"
                            navigation={this.props.navigation}
                            icon={staffsIcon} details={`388 \n STAFFS `} />
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "center", width: 100 / 100 * width }}>
                        <DashBoardItem
                            pathName="Sales"
                            navigation={this.props.navigation} icon={sales}
                            details={` N 350,573, 957,160.00 \n SALES `} />

                        <DashBoardItem
                            pathName="Expenses"
                            navigation={this.props.navigation}
                            icon={expenses} details={`N 350,573, 957,160.00  \n TOTAL EXPENSES `} />
                    </View>

                    <Chart />
                </ScrollView>

                <View style={{ height: 10 / 100 * height }}>
                    <FooterNav />
                </View>

            </View>
        )
    }
}


export default Dashboard;