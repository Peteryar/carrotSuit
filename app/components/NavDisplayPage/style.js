import { StyleSheet, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#dce3de',
        width: '100%',
        height: height,
        shadowColor: 'rgba(0, 0, 0, 0.25)',
        shadowOffset: { width: 4, height: 13 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
    },
    userCon: {
        flexDirection: 'row',
        height: '12.6%',
        paddingRight: '5.3%',
        borderBottomWidth: 1,
        borderBottomColor: '#C4C4C4',
        marginTop: 5
    },
    userInfo: {
        flex: 2,
        alignItems: "flex-end",
    },
    userName: {
        fontWeight: 16,
        fontFamily: 'Roboto',
        lineHeight: 19,
        fontStyle: 'normal',
        fontWeight:"bold",
        marginBottom:'10%'
    },
    dashboard: {
        height: '87.4%'
    },
    activeItem:{
        backgroundColor:'#04304b',
    },
    dashboardItems: {
        color:'#04304b',
        marginTop: '3%',
        marginLeft: '5%',
        fontFamily: 'Roboto',
        fontSize: 18,
        fontWeight: "normal",
        lineHeight: 21
    }
})

export default styles;