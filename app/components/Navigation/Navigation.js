import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SideBar from '../DrawerNavigation/DrawerNavigation';
import ForgotPassword from '../ForgotPassword/index';


import Login from '../Login/index';
import Dashboard from '../Dashboard/index';
import Signup from '../Signup/index';
import CreateTasks from '../MainActivities/Tasks/CreateTasks/index';
import ViewClients from '../MainActivities/Clients/ViewClients/index';
import ViewTasks from '../MainActivities/Tasks/ViewTasks/index';
import RecordExpenses from '../MainActivities/Expenses/RecordExpenses/index';
import CreateInvoice from '../MainActivities/Invoices/CreateInvoice/index';
import CreateRequisition from '../MainActivities/Requisition/CreateRequisition/index';
import ViewRequisitions from '../MainActivities/Requisition/ViewRequisitions/index';


const AppNavigator = createStackNavigator({
    Login,
    SideBar,
    Signup,
    ForgotPassword,
    CreateTasks,
    ViewClients,
    ViewTasks,
    RecordExpenses,
    CreateInvoice,
    CreateRequisition,
},
    {
        initialRouteName: 'Login',
        defaultNavigationOptions: {
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          },
        
    }
);

const Landing = createAppContainer(AppNavigator)
export default Landing;