import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { APP_ROUTES_NAMES } from '../../../routes/routesName';
import Chat from '../ChatList/ChatList';
import ChatRoom from '../ChatRoom/ChatRoom';

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
    initialRouteName={APP_ROUTES_NAMES.CHATLIST}>
      <Stack.Screen 
      options={{ 
        title:"Conversas",
        headerStyle:{
        backgroundColor: "black",
      }, headerTintColor: '#fff', }} name={APP_ROUTES_NAMES.CHATLIST} component={Chat} />
      <Stack.Screen name={APP_ROUTES_NAMES.CHATROOM} component={ChatRoom}
      options={{ 
        headerStyle:{
        backgroundColor: "black",
      }, headerTintColor: '#fff', }} />
    </Stack.Navigator>
  );
}
export default MyStack;