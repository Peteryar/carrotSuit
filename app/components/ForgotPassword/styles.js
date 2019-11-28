import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
    headerBackground: {
        height: 35 / 100 * height
    },
    paddlockCon: {
        width: width,
        height: '100%',
        backgroundColor: 'rgba(245, 10, 10, 0.8)',

    },
    paddlock: {
        height: '90%',
        alignItems: "center",
        justifyContent: "center",
    },
    triangle: {
        alignSelf: "center",
        width: 0,
        height: 0,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderLeftWidth: 25,
        borderRightWidth: 25,
        borderBottomWidth: 50,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: 'rgba(245, 10, 10, 0.79)',
        transform: [
            { rotate: '180deg' }
        ],
    },
    titleCon:{
        width:'85%',
        alignSelf:"center",
        height:15/100*height,
        justifyContent:"center"
    },
    title: {
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 18,
        lineHeight: 23,
        color: '#f50A0a',
    },
    actionInfo:{
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 14,
        lineHeight: 18,
    },
    inputCon: {
        flexDirection: "row",
        width: '88.5%',
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
        alignItems: "center",
        alignSelf: "center",
        height:6.25/100*height,
        marginTop:4.375/100*height,
        marginBottom:4.375/100*height,
    },
    icon: {
        width: '20%',
    },
    input: {
        width: '70%',
    },
    button: {
        width: '88.5%',
        backgroundColor: '#04304B',
        height: 60,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center"
    },
    buttonText: {
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 20,
        lineHeight: 31,
        color: '#fff'
    }
})
export default styles;