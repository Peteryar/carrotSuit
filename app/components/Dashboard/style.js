import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 100 / 100 * height
    },
    header: {
        height: 15 / 100 * height,
        width: '100%',
        flexDirection: 'row',
        alignItems: "center",
    },
    titleCon: {
        alignItems: "center",
        justifyContent: 'center',
        width: '75.27%',
    },
    titleText: {
        fontWeight: 'bold',
        fontSize: 24,
        lineHeight: 31,
        textAlign: "center"
    },
    dashboardItem: {
        width: 35 / 100 * width,
        height: 35 / 100 * width,
        backgroundColor: '#04304B',
        borderRadius: 22,
        alignItems: "center",
        justifyContent: "center"

    },
    dashboardItemTexts: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 14,
        lineHeight: 16,
        color: '#fff',
        textAlign: "center"
    },
    chartCon: {
        width: 86.1 / 100 * width,
        alignSelf:"center"
    },
    chartTitle: {
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 18,
        lineHeight: 23,
        marginBottom:15
    },
    chartText:{
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 14,
        lineHeight: 18,
        color: '#6D6464',
        marginBottom:5
    },
    chartPeriod:{
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 18,
        lineHeight: 23, 
    },
    chartTotal:{
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 24,
        lineHeight: 31,
        color: '#F50A0A' 
    },
    chartInfoCon:{
        flexDirection:"row"
    },
    chartInfo:{
        width:'50%',
    }
})

export default styles;