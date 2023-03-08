import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    Image,
    TouchableWithoutFeedback
} from "react-native";
import moment from 'moment';
import StartIcon from "../../../assets/Icons/StarIcon"
import styles from "./style";

const WorkersList = (WorkersListProps) => {
    const { workers } = WorkersListProps;
   /*  const [ otherUser, setOtherUser] = useState(null);
    setOtherUser(workers.chatRoomUsers.items[0].user); */
    
    return (
        <TouchableWithoutFeedback >
      <View style={styles.container}>
        <View style={styles.lefContainer}>
          <Image source={{ uri: workers.imageUri}} style={styles.avatar}/>

          <View style={styles.midContainer}>
            <Text style={styles.username}>{workers.name}</Text>
            <Text
              style={styles.lastMessage}>
              {workers.service}
            </Text>
            <Text
              style={styles.lastMessage}>
              {workers.dist}km de você
            </Text>
          </View>

        </View>
        
        <Text style={styles.time}>
          {workers.stars}☆
        </Text>
      </View>
    </TouchableWithoutFeedback>
      )
};
export default WorkersList;
