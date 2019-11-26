import React from 'react';
import { Image, StatusBar, TextInput, StyleSheet, View, Dimensions, Text, TouchableOpacity } from 'react-native';
import { Ionicons, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import styles from './styles';
import * as Font from 'expo-font';

const { width, height } = Dimensions.get("window");
export default class Login extends React.Component {
    static navigationOptions = {
        header: null,
    };
    componentDidMount() {
        // Font.loadAsync({
        //   'PTSans': require('../../../assets/fonts/PTSans-Bold.ttf'),
        // });
    }
    handleClick(event) {
        const { name } = event.target;
        this.props.navigation.navigate('Dashboard');
        //    switch(name){
        //        case 'dashboard':
        //             this.props.navigation.navigate('Dashboard');
        //             break;
        //        case 'signup':
        //            this.props.navigation.navigate('Signup');
        //    }
    }
    handleSignup() {
        this.props.navigation.navigate('Signup');
    }
    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Image style={styles.logo} source={require('../../../assets/logo.png')} />
                    <View style={styles.welcomeCon}>
                        <Text style={[styles.welcome]}>Welcome</Text>
                        <Image source={require('../../../assets/welcome.png')} />
                    </View>

                    <View style={{alignSelf:"center", width:'80%'}}>
                        <View style={styles.inputsCon}>
                            <MaterialCommunityIcons style={styles.icon} name="email-outline" size={20} />
                            <TextInput style={styles.inputs} placeholder="Email Address"/>
                        </View>
                        <View style={styles.inputsCon}>
                            <FontAwesome size={20} style={styles.icon} name="key" />
                            <TextInput secureTextEntry={true}  style={styles.inputs} placeholder="Password" />
                        </View>
                        <View>
                            <Text style={styles.forgotPassword}>Forgot Password?</Text>
                        </View>

                    </View>
                    <View style={{ alignItems: "center", marginTop: '7.5%' }}>
                        <TouchableOpacity style={styles.loginButton} name="dashboard" onPress={this.handleClick.bind(this)}>
                            <Text style={{ color: '#fff', fontWeight: 'bold' }}>Login</Text>
                        </TouchableOpacity>
                        <Text style={{ marginTop: '7.3%' }}>New to <Text style={{ fontWeight: 'bold', fontSize: 14 }}>Carrot</Text><Text style={{ fontWeight: 'bold', fontSize: 14, color: '#ed392f' }}>Suite</Text>? <Text name="signup" style={styles.signup} onPress={this.handleSignup.bind(this)}>Sign Up </Text></Text>
                    </View>

                </View>

            </View>
        )
    }
}