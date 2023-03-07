import React from "react";
import { View, Text, FlatList, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { APP_ROUTES_NAMES } from "../../../routes/routesName";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ChatListItem from "../../../components/ChatListItems";
import chatRooms from "../../../../server/Data/ChatRoom";

const Chat = ({ navigation }) => {
    return (
        <View style={{
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <FlatList
                style={{ width: '100%' }}
                data={chatRooms}
                renderItem={({ item }) => <ChatListItem chatRoom={item} />}
                keyExtractor={(item) => item.id}
            />
            {/* <Button
                title="Go to ChatRoom"
                onPress={() =>
                    navigation.navigate(APP_ROUTES_NAMES.CHATROOM)
                }
            /> */}

        </View>
    )
}
export default Chat;