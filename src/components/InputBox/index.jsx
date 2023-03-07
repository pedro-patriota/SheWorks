import React, {useEffect, useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform,} from "react-native";
import styles from './styles';

const InputBox = ({chatRoomId}) => {
    const [message, setMessage] = useState('');
    console.log("a")
    
    return (
        <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "padding" : "height"}
          keyboardVerticalOffset={100}
          style={{width: '100%'}}
        >
          <View style={styles.container}>
          <View style={styles.mainContainer}>
            <FontAwesome5 name="laugh-beam" size={24} color="grey" />
            <TextInput
              placeholder={"Type a message"}
              style={styles.textInput}
              multiline
              value={message}
              onChangeText={setMessage}
            />
            <Entypo name="attachment" size={24} color="grey" style={styles.icon} />
            {!message && <Fontisto name="camera" size={24} color="grey" style={styles.icon} />}
          </View>
          <TouchableOpacity onPress={onPress}>
            <View style={styles.buttonContainer}>
              {!message
                ? <MaterialCommunityIcons name="microphone" size={28} color="white" />
                : <MaterialIcons name="send" size={28} color="white" />}
            </View>
          </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      )
}
export default InputBox;