import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, } from "react-native";
import styles from './styles';
import AttchIcon from "../../../assets/Icons/AttachIcon"
import MicIcon from "../../../assets/Icons/MicrophoneIcon"
import SendIcon from "../../../assets/Icons/SendIcon"
import CameraIcon from "../../../assets/Icons/CameraIcon"
import CoinIcon from "../../../assets/Icons/CoinIcon"
import API from '../../API/API';

const InputBox = ({ chatRoomId }) => {
  const [message, setMessage] = useState('');
  const onPress = async () => {
    await API.post("chat_inside/add_msg", {
      
        id_chat: chatRoomId,
        msg: message
      
    }).catch(error => console.log(error))
  }


  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      keyboardVerticalOffset={100}
      style={{ width: '100%' }}
    >
      <View style={styles.container}>
        <View style={styles.mainContainer}>
          <MicIcon name="microphone" size={28} color="white" />
          {/*<Text name="laugh-beam" size={24} color="grey" />*/}
          <TextInput
            placeholder={"Escreva algo aqui"}
            style={styles.textInput}
            multiline
            value={message}
            onChangeText={setMessage}
          />
          <AttchIcon name="attachment" color="grey" style={styles.icon} />
          <CameraIcon name="camera" size={24} color="grey" style={styles.icon} />
          <CoinIcon name="coin" style={styles.icon}></CoinIcon>
        </View>
        <TouchableOpacity onPress={onPress}>
          <View style={styles.buttonContainer}>

            <SendIcon name="send" size={28} color="white" />
          </View>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  )
}
export default InputBox;