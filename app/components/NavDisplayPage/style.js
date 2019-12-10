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
        height: 15/100*height,
        marginBottom:3,
        paddingRight: '5.3%',
        borderBottomWidth: 1,
        borderBottomColor: '#C4C4C4',
        paddingTop:4/100*height
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
        marginLeft: '5%',
        fontFamily: 'Roboto',
        fontSize: 15,
        fontWeight: "normal",
        lineHeight: 21,
    }
})

export default styles;