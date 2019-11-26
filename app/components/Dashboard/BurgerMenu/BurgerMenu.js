import React from 'react';
import { TouchableOpacity, Image, Dimensions } from 'react-native';


const { width, height } = Dimensions.get("window")

class BurgerMenu extends React.Component {
    render() {
        return (
            <TouchableOpacity onPress={this.props.openSideBar.openDrawer}>
                <Image source={require('../../../../assets/burger.png')} style={{ marginLeft: 4.73 / 100 * width }} />
            </TouchableOpacity>
        )
    }
}

export default BurgerMenu;