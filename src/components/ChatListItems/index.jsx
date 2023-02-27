import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    Image,
    TouchableWithoutFeedback
} from "react-native";
import moment from 'moment';
import styles from "./style";
import { useNavigation } from '@react-navigation/native';

const ChatListItem = (ChatListItemProps) => {
    const { chatRoom } = ChatListItemProps;
    console.log(chatRoom)
   /*  const [ otherUser, setOtherUser] = useState(null);
    setOtherUser(chatRoom.chatRoomUsers.items[0].user); */
    const navigation = useNavigation();
    const onClick = () => {
        navigation.navigate('ChatRoom', {
            id: chatRoom.id,
            name: chatRoom.name,
        })
    }
    return (
        <TouchableWithoutFeedback onPress={onClick}>
      <View style={styles.container}>
        <View style={styles.lefContainer}>
          <Image source={{ uri: "https://www.linkpicture.com/q/IMG-20230105-WA0004.jpg"}} style={styles.avatar}/>

          <View style={styles.midContainer}>
            <Text style={styles.username}>{chatRoom.name}</Text>
            <Text
              numberOfLines={2}
              style={styles.lastMessage}>
              {chatRoom.lastMessage
                ? `${chatRoom.lastMessage.content}`
                : ""}
            </Text>
          </View>

        </View>

        <Text style={styles.time}>
          {chatRoom.lastMessage && moment(chatRoom.lastMessage.createdAt).format("DD/MM/YYYY")}
        </Text>
      </View>
    </TouchableWithoutFeedback>
      )
};
export default ChatListItem;
