import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window')
const styles = StyleSheet.create({
    container: {
        height: '100%',
        justifyContent: "center",
        alignItems: "center"
    },
    container: {
        flex: 1,
    },
    header: {
        height: 10 / 100 * height,
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
    main:{
height:20/100*height,
justifyContent:"center"
    },
    mainItems: {
        width: '89%',
        height: 60,
        backgroundColor: '#04304b',
        borderRadius: 20,
        marginBottom: '2.2%',
        justifyContent: "center",
        alignSelf:"center"
    },
    mainText: {
        marginLeft: '8.4%',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 20,
        lineHeight: 31,
        color: '#fff'
    },
    detailsCon: {
        width: '89%',
        alignSelf:'center'
    },
    detailsHeader: {
        width:89/100*width,
        height: 5.625/100*height,
        flexDirection: 'row',
        backgroundColor: '#04304b',
        height: 5.62 / 100 * height,
        alignItems: "center"
    },
    detailsheaderText:{
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 11,
        lineHeight: 14,
        color: "#fff",
        marginLeft:5
    },
    detailsBodyCon:{
    alignItems:"center"
    },
    detailsBody: {
        width:89/100*width,
        height: 12.2/100*height,
        flexDirection: 'row',
    },
    detailsBodyLeft: {
        width: '50%'
    },
    detailsBodyRight: {
        width: '50%',
    },
    detailsBodyText: {
        marginLeft:5,
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 12,
        lineHeight: 16,
    }
})

export default styles;