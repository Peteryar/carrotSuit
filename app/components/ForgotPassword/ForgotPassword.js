import React from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, Dimensions, ImageBackground } from 'react-native';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import styles from './styles';
import * as Font from 'expo-font';


const { width, height } = Dimensions.get("window");
class ForgotPassword extends React.Component {
    static navigationOptions = {
        header: null,
    };
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        Font.loadAsync({
            'ptsans-bold': require('../../../assets/fonts/PTSans-Bold.ttf'),
        });
    }
        render() {
            return (
                <View>
                    <ImageBackground source={require('../../../assets/Task.png')} style={styles.headerBackground}>
                        <View style={styles.paddlockCon}>
                            <MaterialIcons name="arrow-back" onPress={()=>this.props.navigation.navigate('Login')} size={25} style={{ padding: 10, color: '#fff' }} />
                            <View style={styles.paddlock}>
                                <Image source={require('../../../assets/paddlock.png')} />
                            </View>
                        </View>
                    </ImageBackground>
                    <View style={[styles.triangle, this.props.style]} />
                    <View style={styles.titleCon}>
                        <Text style={[styles.title,{fontFamily:"ptsans-bold"}]}>Forgot Password?</Text>
                        <Text style={[styles.actionInfo,{fontFamily:"ptsans-bold"}]}>Please enter your registered email address below</Text>
                    </View>

                    <View style={styles.inputCon}>
                        <MaterialCommunityIcons style={styles.icon} name="email-outline" size={20} />
                        <TextInput style={styles.input} placeholder="Enter Email Address" />
                    </View>
                    <View style={{ alignItems: "center", justifyContent: "center", height: 30 / 100 * height }}>
                        <TouchableOpacity style={styles.button}>
                            <Text style={[styles.buttonText,{fontFamily:"ptsans-bold"}]}>Reset Password</Text>
                        </TouchableOpacity>
                        <Text onPress={()=>this.props.navigation.navigate('Login')} style={{ marginTop: 2.81 / 100 * height, fontFamily:'ptsans-bold' }}>Login</Text>
                    </View>
                </View>
            )
        }
    }
    export default ForgotPassword;