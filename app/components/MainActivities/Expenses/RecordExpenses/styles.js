import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        height: 15 / 100 * height,
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
    chooseFile:{
        height:30,
        width:101,
        backgroundColor:'#F3F3F3',
        alignItems:"center",
        justifyContent:"center"
    },
    fileButtonText:{
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 13,
        lineHeight: 17,
    },
    actionButton: {
        marginTop: 5,
        width: '89%',
        height: 60,
        backgroundColor: '#04304b',
        borderRadius: 20,
        marginBottom: '2.2%',
        justifyContent: "center",
        alignItems:"center"
    },
    actionButtonText: {
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 20,
        lineHeight: 31,
        color: '#fff',
        textAlign:"center"
    }
})

export default styles;