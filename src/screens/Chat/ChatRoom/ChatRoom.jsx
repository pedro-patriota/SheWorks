import React, {useEffect, useState} from 'react';
import {FlatList, Text, ImageBackground, KeyboardAvoidingView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ChatMessageProps from '../../../components/ChatMessage';

const ChatRoom = ({route, navigation}) => {
    const { itemId, itemName } = route.params;
    const id = route.params.id;
    const name = route.params.name;
    return (
        
    )
}
export default ChatRoom;