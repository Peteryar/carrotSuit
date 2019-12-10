import React from 'react';
import { Image, StatusBar, TextInput, StyleSheet, ActivityIndicator, View, Dimensions, Text, TouchableOpacity } from 'react-native';
import { Ionicons, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import styles from './styles';
import * as Font from 'expo-font';

const { width, height } = Dimensions.get("window");
export default class Login extends React.Component {
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
            'ptsans-regular': require('../../../assets/fonts/PTSans-Regular.ttf'),
            'redhattext-bold': require('../../../assets/fonts/RedHatText-Bold.ttf')
        });
        this.setState({
            fontsLoaded: true
        })
    }
    handleClick(event) {
        const { name } = event.target;
        this.props.navigation.navigate('Dashboard');
    }
    handleSignup() {
        this.props.navigation.navigate('Signup');
    }
    render() {
        //conditional rendering inorder to wait for the successful loading of fonts! else will throw error
        if (this.state.fontsLoaded) {
            return (
                <View style={styles.container}>
                    <View style={styles.logo}>
                        <Image source={require('../../../assets/logo.png')} />
                    </View>

                    <View style={styles.welcomeCon}>
                        <Text style={[styles.welcome, { fontFamily: 'ptsans-bold' }]}>Welcome Back!</Text>
                        <Image source={require('../../../assets/welcome.png')} />
                    </View>

                    <View style={{ alignSelf: "center", height:20/100*height, width: '88.5%' }}>
                        <View style={styles.inputsCon}>
                            <MaterialCommunityIcons style={styles.icon} name="email-outline" size={20} />
                            <TextInput style={styles.inputs} placeholder="Email Address" />
                        </View>
                        <View style={styles.inputsCon}>
                            <FontAwesome size={20} style={styles.icon} name="key" />
                            <TextInput secureTextEntry={true} style={styles.inputs} placeholder="Password" />
                        </View>
                        <View>
                            <Text onPress={() => this.props.navigation.navigate('ForgotPassword')} style={[styles.forgotPassword, { fontFamily: 'redhattext-bold' }]}>Forgot Password?</Text>
                        </View>

                    </View>
                    <View style={{ alignItems: "center", marginTop: '7.5%' }}>
                        <TouchableOpacity style={styles.loginButton} name="dashboard" onPress={this.handleClick.bind(this)}>
                            <Text style={{ color: '#fff', fontWeight: 'bold', fontFamily: 'ptsans-bold' }}>Login</Text>
                        </TouchableOpacity>
                        <Text onPress={this.handleSignup.bind(this)} style={{ fontFamily: 'redhattext-bold', marginTop: '7.3%' }}>New to <Text style={{ fontWeight: 'bold', fontFamily: 'redhattext-bold', fontSize: 14 }}>Carrot</Text><Text style={{ fontWeight: 'bold', fontSize: 14, color: '#ed392f' }}>Suite</Text>? <Text name="signup" style={[styles.signup, { fontFamily: 'redhattext-bold' }]} >Sign Up </Text></Text>
                    </View>
                </View>
            )
        } else {
            return (
                <View style={{ alignItems: "center", height: '100%', justifyContent: "center" }}>
                    <ActivityIndicator size="large" />
                </View>
            )
        }

    }
}