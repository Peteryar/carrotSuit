import React from 'react';
import { TouchableOpacity, Text, View, Dimensions } from 'react-native';
import { MaterialCommunityIcons, FontAwesome, AntDesign, MaterialIcons } from '@expo/vector-icons';
import styles from './style';
import Dashboard from '../Dashboard';


const { width, height } = Dimensions.get('window');

function DrawerItem(props) {
    return (
        <View
            style={{
                height: '7.5%', justifyContent: "center",
                backgroundColor: props.active === props.num ? '#04304b' : null,
            }}>
            <Text onPress={props.handleClick}
                style={[styles.dashboardItems,
                { color: props.active === props.num ? '#fff' : '#04304b' }]}>{props.name}</Text>
        </View>
    )
    
}
class NavDisplayPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: 0,
            sideBarItems: [{ name: "Dashboard",  path: "Dashboard" }, { name: "Tasks",  path: "Tasks" },
            { name: "Clients", path: 'Clients' }, { name: "Invoices",  path: 'Invoices' }, { name: "Receipts",  path: 'Receipts' },
            { name: "Pending Invoice & Receipt Approval",  path: 'Pending Invoice & Receipt Approval' },
            { name: "Requisition",  path: 'Requisition' }, { name: "Expenses", path: 'Expenses' }, { name: "Vendors",  path: 'Vendors' },
            { name: "Bills",  path: 'Bills' }, { name: "Repair Request", path: 'LogRepair' },
            { name: 'Staff', path: 'Staffs' }, { name: 'User Profile',  path: 'User Profile' }, { name: 'Logout',  path: 'Login' }
            ],
            backgroundColor: 'green'
        }
    }
    render() {
        const items = this.state.sideBarItems.map((item, key) => {
            return (
                <DrawerItem
                    navProps={this.props.navigation}
                    active={this.state.active}
                    handleClick={() => {
                        this.setState({active:key})
                        this.props.navigation.navigate(item.path)
                    }}
                    num={key}
                    active={this.state.active}
                    key={key} name={item.name}
                    pathName={item.path} />)
            }
        )
        return (
            <View style={styles.container}>
                <View style={styles.userCon}>
                    <FontAwesome size={64} name="user-circle" />
                    <View style={styles.userInfo}>
                        <Text style={styles.userName}>Henry Shadrack</Text>
                        <Text style={{ color: '#f50a0a' }}>Edit</Text>
                    </View>
                </View>
                <View style={{ height: 80 / 100 * height }}>
                    {items}
                </View>
            </View>
        )
    }
}
export default NavDisplayPage;