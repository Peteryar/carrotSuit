import React from 'react'
import { View, TouchableOpacity } from 'react-native';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import styles from './styles';

class FooterNav extends React.Component {
    render() {
        return (
            <View style={styles.footNav}>
                <TouchableOpacity>
                    <FontAwesome size={25} name="pie-chart" style={styles.footerItems} />
                </TouchableOpacity>

                <TouchableOpacity>
                    <FontAwesome size={25} name="user" style={styles.footerItems} />
                </TouchableOpacity>

                <TouchableOpacity>
                    <FontAwesome size={25} name="home" style={styles.footerItems} />
                </TouchableOpacity>

                <TouchableOpacity>
                    <MaterialCommunityIcons size={25} name="bell" style={styles.footerItems} />
                </TouchableOpacity>

                <TouchableOpacity>
                    <MaterialCommunityIcons size={25} name="email" style={[styles.footerItems, { marginRight: 0 }]} />
                </TouchableOpacity>
            </View>
        )
    }
}

export default FooterNav;