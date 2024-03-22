import DashboardPage from "views/Dashboard/Dashboard.jsx";
import UserProfile from "views/UserProfile/UserProfile.jsx";
import TableList from "views/TableList/TableList.jsx";
import Maps from "views/Maps/Maps.jsx";
import GraphPage from "../views/Graph/GraphPage";

import {
    Dashboard, Person, ContentPaste, LibraryBooks, BubbleChart, LocationOn, Notifications
} from 'material-ui-icons';

const appRoutes = [
    { path: "/dashboard", sidebarName: "Dashboard", navbarName: "Material Dashboard", icon: Dashboard, component: DashboardPage },
    { path: "/user", sidebarName: "User Profile", navbarName: "Profile", icon: Person, component: UserProfile },
    { path: "/table", sidebarName: "Table List", navbarName: "Table List", icon: ContentPaste, component: TableList },    
    { path: "/maps", sidebarName: "Maps", navbarName: "Map", icon: LocationOn, component: Maps },
    // { path: "/notifications", sidebarName: "Notifications", navbarName: "Notifications", icon: Notifications, component: NotificationsPage },
    { path: "/graph", sidebarName: "Graph", navbarName: "Graph", icon: Notifications, component: GraphPage },
    { redirect: true, path: "/", to: "/dashboard", navbarName: "Redirect" }
];

export default appRoutes;
