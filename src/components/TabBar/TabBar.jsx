import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { APP_ROUTES_NAMES } from '../../routes/routesName';
import Home from '../../screens/Home/Home';
import Chat from "../../screens/Chat/ChatList/ChatList";
import MyStack from "../../screens/Chat/Navigation";
import HomeStack from "../../screens/Home/Navigation";
import Configuration from "../../screens/Configuration/Configuration";
import HomeIcon from "../../../assets/Icons/HomeIcon"
import ChatIcon from "../../../assets/Icons/ChatIcon"
import ConfigIcon from "../../../assets/Icons/ConfigIcon"
import { Image, View } from "react-native";
const Tab = createBottomTabNavigator();

const TabBar = () => {
    return (
        <Tab.Navigator screenOptions={{headerShown: false,tabBarInactiveTintColor:"#A6A6A6" , tabBarActiveTintColor: "#1E1E1E"}} initialRouteName={APP_ROUTES_NAMES.HOMESTACK} >
            <Tab.Screen name={APP_ROUTES_NAMES.HOMESTACK} component={HomeStack} options={{
                tabBarLabel:"Home",
                tabBarIcon: ({color}) => {
                    return (<HomeIcon fill={color}/>)
                }
            }}/>
            <Tab.Screen name={APP_ROUTES_NAMES.CHAT} component={MyStack} options={{
                tabBarLabel:"Conversas",
                tabBarIcon: ({color}) => {
                    return (<ChatIcon fill={color}/>)
                }
            }}/>
            <Tab.Screen name={APP_ROUTES_NAMES.CONFIGURATION} component={Configuration}options={{
                tabBarLabel:"Configurações",
                tabBarIcon: ({color}) => {
                    return (<ConfigIcon fill={color}/>)
                }
                }}/>
        </Tab.Navigator>
    )

}
export default TabBar;
