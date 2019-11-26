import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SideBar from '../DrawerNavigation/DrawerNavigation'


import Login from '../Login/index';
import Dashboard from '../Dashboard/index';
import Signup from '../Signup/index';
import NavDisplayPage from '../NavDisplayPage/index';


const AppNavigator = createStackNavigator({
    Login,
    SideBar,
    Signup
},
    {
        initialRouteName: 'Login'
    }
);

const Landing = createAppContainer(AppNavigator)
export default Landing;