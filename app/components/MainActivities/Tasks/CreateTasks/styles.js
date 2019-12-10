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
    
    title: {
        width: '75.27%',
        textAlign: "center",
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 24,
        lineHeight: 31
    },
    main: {
        height: 10 / 100 * height,
        justifyContent: "center"
    },
    mainItems: {
        width: 89/100*width,
        height: 60,
        backgroundColor: '#04304b',
        borderRadius: 20,
        justifyContent: "center",
        alignSelf: "center"
    },
    mainText: {
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 20,
        lineHeight: 31,
        color: '#fff',
        textAlign:"center"
    },
})

export default styles;