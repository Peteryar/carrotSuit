import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
    constainer:{
        flex:1
    },
    header: {
        height: 15 / 100 * height,
        flexDirection: 'row',
        width: '100%',
        alignItems: "center"
    },
    burger: {
        marginLeft: '4.1%'
    },
    title: {
        width: '75.27%',
        textAlign: "center",
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 24,
        lineHeight: 31
    },
    searchCon: {
        alignItems: "center",
        flexDirection: "row",
        height: 54,
        width: '86%',
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 10,
    },
    input: {
        width: '90%',
    },
    description: {
        width: '86%',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 14,
        lineHeight: 18,
        textAlign: "center",
    },
    clientCon:{
      height: 55/100*height,
      justifyContent:"center"
    },
    clientHeader: {
        width: '86%',
        height: 35,
        backgroundColor: '#04304b',
        justifyContent: "center",
        alignSelf: "center"
    },
    clientText: {
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 18,
        lineHeight: 23,
        color: '#fff',
        textAlign: "center",
    },
    openedClientCon: {
        height: 3.35/100*height,
        width: '86%',
        backgroundColor: '#c4c4c4',
        flexDirection: 'row',
        alignItems: "center"
    },
    openClientInfoCon: {
        width: '67.5%',
    },
    clientInfo: {
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 14,
        lineHeight: 18,
        color: '#6d6464'

    },
    clientButtonCon: {
        flexDirection: "row",
        width: '67.5%',
        alignItems: "center",
        marginTop:10,
        marginBottom:10,
    },
    clientButton: {
        height: 22,
        width: 17.5 / 100 * width,
        backgroundColor: '#04304b',
        marginRight: 7.5 / 100 * width,
        justifyContent: "center",
        alignItems: "center"

    },
    buttonText: {
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 14,
        lineHeight: 18,
        color: '#fff'
    },
    closedClientCon: {
        height: 3.35/100*height,
        width: '86%',
        backgroundColor: '#04304b',
        flexDirection: "row",
        alignItems: "center",
        borderColor: '#000',
        borderTopWidth: 1,
        borderBottomWidth: 1
    },
    closedClientText: {
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 14,
        lineHeight: 18,
        color: '#fff',
        marginLeft: 3 / 100 * width,
        marginRight: 3 / 100 * width
    }
})
export default styles;