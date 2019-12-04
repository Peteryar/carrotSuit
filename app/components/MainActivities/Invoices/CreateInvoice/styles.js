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
        justifyContent: 'center',
        alignSelf: "center",

    },
    dropDownCon: {
        width: '88.5%',
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
        height: 40,
        marginTop: 10,
        alignSelf: "center"
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
    addItemCon: {
        width: '88.5%',
        alignSelf: "center"
    },
    addItem: {
        marginTop:2.9/100*height,
        alignSelf: "flex-start",
        width: 119,
        height: 51,
        backgroundColor: '#FF1414',
        justifyContent: "center",
        alignItems: "center"
    },
    addItemText: {
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 14,
        lineHeight: 23,
        color: '#FFFFFF'
    },
    invoiceSummaryTitle: {
        textAlign: "center",
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 18,
        lineHeight: 23
    },
    invoiceSummaryCon: {
        width: '50%',
    },
    invoiceSummaryLeftText: {
        textAlign: "center",
        fontStyle: 'normal',
        fontSize: 14,
        lineHeight: 23,
        textAlign: "left",
    },
    invoiceSummaryRightText: {
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 14,
        lineHeight: 23,
        textAlign: "right"
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