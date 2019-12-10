import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        height: '100%',
    },
    intro: {
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 14,
        lineHeight: 18,
        textAlign: "center"
    },
    header: {
        flexDirection: "row",
        height: 41,
        backgroundColor: '#04304B',
        alignItems: "center",

    },
    headerText: {
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 14,
        lineHeight: 18,
        color: '#fff',
        textAlign: "center"
    },
    table: {
        flexDirection: "row",
        height: 103,
        alignItems: "center"
    },
    tableText: {
        height: '90%',
        borderRightWidth: 1,
        borderRightColor: '#000',
        color: '#000',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 14,
        lineHeight: 18,
        textAlign: "center"
    }
})

export default styles;