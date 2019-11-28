import React from 'react';
import { TouchableOpacity, Text, View, Dimensions} from 'react-native';
import { MaterialCommunityIcons, FontAwesome, AntDesign, MaterialIcons } from '@expo/vector-icons';
import styles from './style';
import { DrawerItems } from 'react-navigation-drawer';

const {width, height} = Dimensions.get('window');
class NavDisplayPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           backgroundColor:'green'
        }
    }
    handleClick(event) {

    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.userCon}>
                    <FontAwesome size={64} name="user-circle" />
                    <View style={styles.userInfo}>
                        <Text style={styles.userName}>Henry Shadrack</Text>
                        <Text style={{color: '#f50a0a'}}>Edit</Text>
                    </View>
                </View>
                <View style={{height:'100%'}}>
                    <DrawerItems itemStyle={{ height: 6/100*height, padding:0, margin:0 }} {...this.props} inactiveTintColor='#04304b' activeBackgroundColor='#04304b' activeTintColor='#fff'/>
                </View>
            </View>
        )
    }
}
export default NavDisplayPage;