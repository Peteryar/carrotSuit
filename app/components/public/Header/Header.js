import React from 'react';
import { TouchableOpacity, Text, View, Image, StyleSheet, Dimensions } from 'react-native';


const { width, height } = Dimensions.get("window")

const Header = (props) => {
    return (
        <View style={styles.header}>
            <TouchableOpacity onPress={props.openSideBar.openDrawer}>
                <Image source={require('../../../../assets/burger.png')} style={{ marginLeft: 4.73 / 100 * width }} />
            </TouchableOpacity>
            <Text style={[styles.title, { fontFamily: 'ptsans-bold' }]}>{props.title}</Text>

        </View>
    )
}
const styles = StyleSheet.create({
    header: {
        height: 15 / 100 * height,
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
})

export default Header;