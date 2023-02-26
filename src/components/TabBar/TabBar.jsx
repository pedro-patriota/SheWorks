import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { APP_ROUTES_NAMES } from '../../routes/routesName';
import Home from '../../screens/Home/Home';
import Chat from "../../screens/Chat/Chat";
import Configuration from "../../screens/Configuration/Configuration";
import HomeIcon from "../../../assets/Icons/HomeIcon"
import ChatIcon from "../../../assets/Icons/ChatIcon"
import ConfigIcon from "../../../assets/Icons/ConfigIcon"
import { Image, View } from "react-native";
const Tab = createBottomTabNavigator();

const TabBar = () => {
    return (
        <Tab.Navigator screenOptions={{headerShown: false, tabBarActiveTintColor: "#1E1E1E"}} initialRouteName={APP_ROUTES_NAMES.HOME} >
            <Tab.Screen name={APP_ROUTES_NAMES.HOME} component={Home} options={{
                tabBarLabel:"Home",
                tabBarIcon: () => {
                    return (<HomeIcon />)
                }
            }}/>
            <Tab.Screen name={APP_ROUTES_NAMES.CHAT} component={Chat} options={{
                tabBarLabel:"Conversas",
                tabBarIcon: () => {
                    return (<ChatIcon/>)
                }
            }}/>
            <Tab.Screen name={APP_ROUTES_NAMES.CONFIGURATION} component={Configuration}options={{
                tabBarLabel:"Configurações",
                tabBarIcon: () => {
                    return (<ConfigIcon/>)
                }
                }}/>
        </Tab.Navigator>
    )

}
export default TabBar;
