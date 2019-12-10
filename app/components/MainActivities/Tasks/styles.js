import { StyleSheet, Dimensions } from 'react-native';

const {width, height} = Dimensions.get('window')
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        height:15/100*height,
        flexDirection: 'row',
        width: '100%',
        alignItems:"center"
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
    main: {
        height:75/100*height,
        alignItems: "center",
        justifyContent: "center",
        width: '100%'
    },
})

export default styles;