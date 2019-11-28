import React from 'react';
import { Text, View, TextInput, Dimensions, Image, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons, FontAwesome, AntDesign, MaterialIcons } from '@expo/vector-icons';
import styles from './styles';
import * as Font from 'expo-font';



const { width, height } = Dimensions.get("window")

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fontsLoaded: false
        }
    }
    static navigationOptions = {
        header: null,
    };
    async componentDidMount() {
        await Font.loadAsync({
            'ptsans-bold': require('../../../assets/fonts/PTSans-Bold.ttf'),
            'redhattext-bold': require('../../../assets/fonts/RedHatText-Bold.ttf')
        });
        this.setState({
            fontsLoaded: true
        })
    }
    handleSubmit() {
        this.props.navigation.navigate('Dashboard')
    }
    handleSignin() {
        this.props.navigation.navigate('Login');
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={[styles.title, {fontFamily:'ptsans-bold'}]}>Sign Up</Text>
                <View style={styles.input}>
                    <AntDesign style={styles.icon} name="user" size={20} />
                    <TextInput style={styles.placeHolder} placeholder="First Name" />
                </View>

                <View style={styles.input}>
                    <AntDesign style={styles.icon} name="user" size={20} />
                    <TextInput style={styles.placeHolder} placeholder="Last Name" />
                </View>

                <View style={styles.input}>
                    <MaterialCommunityIcons style={styles.icon} name="home-map-marker" size={20} />
                    <TextInput style={styles.placeHolder} placeholder="Company Name" />
                </View>
                <View style={styles.input}>
                    <MaterialCommunityIcons style={styles.icon} name="email-outline" size={20} />
                    <TextInput style={styles.placeHolder} placeholder="Email Address" />
                </View>

                <View style={styles.input}>
                    <MaterialIcons style={styles.icon} name="location-city" size={20} />
                    <TextInput style={styles.placeHolder} placeholder="Select Operating Country" />
                </View>

                <View style={styles.input}>
                    <FontAwesome style={styles.icon} name="phone-square" size={20} />
                    <TextInput style={styles.placeHolder} placeholder="Phone Number" />
                </View>

                <View style={styles.input}>
                    <FontAwesome style={styles.icon} size={20} name="key" />
                    <TextInput style={styles.placeHolder} secureTextEntry={true} placeholder="Password" />
                </View>

                <View style={{ marginTop: 5.5 / 100 * width }}>
                    <TouchableOpacity style={styles.signupButton} onPress={this.handleSubmit.bind(this)}>
                        <Text style={{ color: '#fff', fontWeight: 'bold', fontFamily:'ptsans-bold' }}>Sign up</Text>
                    </TouchableOpacity>
                    <Text onPress={this.handleSignin.bind(this)}style={{ marginTop: '7.3%' }}>Have a <Text style={{ fontWeight: 'bold', fontSize: 14 }}>Carrot
                        </Text><Text style={{ fontWeight: 'bold', fontSize: 14, color: '#ed392f' }}>Suite</Text> Account?
                        <Text style={styles.signin} onPress={this.handleSignin.bind(this)}> Sign In </Text></Text>
                </View>
            </View>
        )
    }
}

export default SignUp;