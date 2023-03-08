import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { APP_ROUTES_NAMES } from '../../../routes/routesName';
import Home from '../Home';
import ProvidersFilter from '../components/Filter/ProvidersFilter';
import ServiceList from '../components/ServiceList/ServiceList';
const Stack = createNativeStackNavigator();

function HomeStack() {
    return (
        <Stack.Navigator
        screenOptions={{headerShown: false}}
            initialRouteName={APP_ROUTES_NAMES.HOME}>
            <Stack.Screen name={APP_ROUTES_NAMES.HOME} component={Home} />
            <Stack.Screen name={APP_ROUTES_NAMES.HOMELIST} component={ServiceList} />
        </Stack.Navigator>
    );
}
export default HomeStack;