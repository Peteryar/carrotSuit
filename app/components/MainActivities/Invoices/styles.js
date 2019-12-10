import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
    constainer:{
        flex:1,
        height: height
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
    clientCon:{
      height: 60/100*height,
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
        marginBottom:10
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
    },
    main: {
        height:80/100*height,
        alignItems: "center",
        justifyContent: "center",
        width: '100%'
    },
    actionButton: {
        marginTop:5,
        width: '89%',
        height: 60,
        backgroundColor: '#04304b',
        borderRadius: 20,
        marginBottom: '2.2%',
        justifyContent: "center",
    },
    actionButtonText: {
        marginLeft: '8.4%',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 20,
        lineHeight: 31,
        color: '#fff',
    },
    
})
export default styles;