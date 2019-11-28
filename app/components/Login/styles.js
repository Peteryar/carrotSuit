import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    logo: {
        marginTop: '3.6%',
        marginLeft: '2.3%',
    },
    welcomeCon: {
      
    },
    welcome: {
        width: 100 / 100 * width,
        textAlign: "center",
        fontWeight: 'bold',
        fontSize: 24,
        lineHeight: 32,
        marginTop: '19%',
        marginBottom: '4.5%',
    },
    inputsCon: {
        flexDirection:'row',
        alignItems:"center",
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        width:'100%'
    },
    placeHolder:{
        width: "80%",
        height:60,
  
      },
      icon:{
          width:'20%'
      },
    inputs: {
        height: 50,
        width:'100%',
    },
    forgotPassword: {
        width: 88.5 / 100 * width,
        textAlign: 'right',
        marginTop: 2,
        fontWeight: 'bold'
    },
    loginButton: {
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 30,
        backgroundColor: '#04304b',
        width: 192,
        height: 45,
    },
    signup: {
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 14,
        lineHeight: 19
    }

})

export default styles;