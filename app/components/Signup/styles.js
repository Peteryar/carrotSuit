import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title:{
      fontWeight:"bold",
      fontSize:24,
      lineHeight: 31
        },
    input:{
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        width: '88.5%',
        flexDirection:'row',
        alignItems:"center"
    },
    placeHolder:{
      color:'#6d6464',
      width: "80%",
      height:60,

    },
    icon:{
        width:'20%'
    },
    signupButton:{
        alignSelf:"center",
        backgroundColor:'#04304b',
        height:45,
        width: 192,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent:"center"
    },
    signin:{
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 14,
        lineHeight: 19
    }
})

export default styles;