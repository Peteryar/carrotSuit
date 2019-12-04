import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        height: 10 / 100 * height,
        flexDirection: 'row',
        width: '100%',
        alignItems: "center"
    },
    inputCon: {
        width: '88.5%',
        height: 50,
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        justifyContent: 'center'

    },
    dropDownCon: {
        width: '88.5%',
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
        height: 40,
        marginTop: 10
    },
    dropDownField: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: "center"
    },
    title: {
        width: '75.27%',
        textAlign: "center",
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 24,
        lineHeight: 31
    },
    button: {
        width: "88.5%",
        height: 48,
        backgroundColor: '#04304b',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        justifyContent:"center",
        alignItems:"center",

    },
    uploadCon:{
    flexDirection:"row",
    width:'85.5%',
    height:9.5/100*height,
    alignItems:"center"
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