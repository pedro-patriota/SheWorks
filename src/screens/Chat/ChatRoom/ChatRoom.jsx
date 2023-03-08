import React, { useEffect, useState } from "react";
import { View, Text, Image, ImageBackground, FlatList } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ChatMessageProps from "../../../components/ChatMessage";
import Chat from "../../../../server/Data/Chats";
import InputBox from "../../../components/InputBox";
import BG from "../../../../assets/Img/BG.png";
import API from "../../../API/API";

const ChatRoom = ({ route, navigation }) => {
    const { itemId, itemName } = route.params;
    const [messages, setMessages] = useState([]);
    const id = route.params.id;
    const name = route.params.name;

     const  get_msgs = async () => {
        await API.get("chat_inside/filtered_msgs", {
            params: {
                id_chat: id
            }
        }).then((res, err) => {
            setMessages(res.data)
            
        }).catch(error => console.log(error))
    }
     
    useEffect(() => {
        get_msgs()
    }, [])
    
    return (
        <ImageBackground style={{ width: '100%', height: '100%' }} source={require("../../../../assets/Img/BG.png")}>
            {<FlatList
            data={messages}
            renderItem={({ item }) => <ChatMessageProps id={id} message={item} />}
            inverted={false}>
                
            </FlatList>}
            <InputBox chatRoomId={id}></InputBox>
        </ImageBackground>
    )
}
export default ChatRoom;