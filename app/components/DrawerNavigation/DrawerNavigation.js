import { createDrawerNavigator } from 'react-navigation-drawer';

import Bills from '../MainActivities/Bills/index';
import Clients from '../MainActivities/Clients/index';
import Expenses from '../MainActivities/Expenses/index';
import Invoices from '../MainActivities/Invoices/index';
import RepairRequest from '../MainActivities/RepairRequest';
import Receipts from '../MainActivities/Receipts/index';
import Tasks from '../MainActivities/Tasks/index';
import PendingInvoicesAReceipt from '../MainActivities/PendingInvoicesAReceipt';
import Logout from '../MainActivities/Logout/index';
import Dashboard from '../Dashboard/index';
import NavDisplayPage from '../NavDisplayPage/index';
import UserProfile from '../MainActivities/UserProfile/index';
import Vendors from '../MainActivities/Vendors/index';
import Staffs from '../MainActivities/Staffs/index';
import Requisition from '../MainActivities/Requisition/index';




const SideBar = createDrawerNavigator({
    Dashboard,
    Tasks,
    Clients,
    Invoices,
    Receipts,
    "Pending Invoice & Receipt Approval": PendingInvoicesAReceipt,
    Requisition,
    Expenses,
    Vendors,
    Bills,
     "Repair Request":RepairRequest,
     Staffs,
     "User Profile":UserProfile,
     Logout
}, {
    navigationOptions: { header: null },
    contentComponent: NavDisplayPage,
    drawerCloseRoute: 'DrawerClose',
    drawerOpenRoute: 'DrawerOpen',
    drawerToggle: 'DrawerToggle',
    drawerBackgroundColor: '#000',
})
export default SideBar