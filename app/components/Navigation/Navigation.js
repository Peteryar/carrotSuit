import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SideBar from '../DrawerNavigation/DrawerNavigation';
import ForgotPassword from '../ForgotPassword/index';


import Login from '../Login/index';
import Dashboard from '../Dashboard/index';
import Signup from '../Signup/index';
import NavDisplayPage from '../NavDisplayPage/index';
import CreateTasks from '../MainActivities/Tasks/CreateTasks/index'


const AppNavigator = createStackNavigator({
    Login,
    SideBar,
    Signup,
    ForgotPassword,
    CreateTasks
},
    {
        initialRouteName: 'Login'
    }
);

const Landing = createAppContainer(AppNavigator)
export default Landing;