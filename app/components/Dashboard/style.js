import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 100 / 100 * height
    },
    header: {
        marginTop: 2/100*height,
        width: '100%',
        flexDirection: 'row',
        alignItems: "center"
    },
    titleCon: {
        alignItems:"center",
        justifyContent: 'center',
        width: '75.27%',
    },
    titleText: {
        fontWeight: 'bold',
        fontSize: 24,
        lineHeight: 31,
        textAlign:"center"
    },
    chartCon:{
        marginTop:10.5/100*height,
        width: '100%',
        alignItems: "center"
    }
})

export default styles;