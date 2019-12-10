import {StyleSheet, Dimensions} from 'react-native';


const {width, height} = Dimensions.get('window')
const styles = StyleSheet.create({
    mainItems: {
        width: '89%',
        height: 60,
        backgroundColor: '#04304b',
        borderRadius: 20,
        marginBottom: '2.2%',
        justifyContent: "center"
    },
    mainText: {
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 20,
        lineHeight: 31,
        color: '#fff'
    }
})
export default styles;