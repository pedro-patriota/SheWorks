import React from "react";
import { View, Text, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const ChatRoom = ({route, navigation}) => {
    const { itemId, itemName } = route.params;
    const id = route.params.id;
    const name = route.params.name;
    return (
        <View style={{
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <Text>
                Olá, {name}
            </Text>

        </View>
    )
}
export default ChatRoom;