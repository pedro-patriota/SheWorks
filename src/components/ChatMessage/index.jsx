import React from 'react';
import {Text, View} from 'react-native';
import moment from "moment";
import styles from './styles';

const ChatMessageProps = ({message, id}) => {

  const isMyMessage = () => {
        return message.user.id !== id;
    }
    return (
        <View style={styles.container}>
          <View style={[
            styles.messageBox, {
              backgroundColor: isMyMessage() ? '#DCF8C5' : 'white',
              marginLeft: isMyMessage() ? 50 : 0,
              marginRight: isMyMessage() ? 0 : 50,
            }
          ]}>
            {!isMyMessage() && <Text style={styles.name}>{message.user.name}</Text>}
            <Text style={styles.message}>{message.content}</Text>
            <Text style={styles.time}>{moment(message.createdAt).fromNow()}</Text>
          </View>
        </View>
      )
}
export default ChatMessageProps;