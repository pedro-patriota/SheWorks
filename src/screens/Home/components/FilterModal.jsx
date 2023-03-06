import React from 'react';
import { View, Modal, Text, Button, TouchableOpacity} from 'react-native';

const ModalScreen = ({ visible, closeModal }) => {
  return (
    <Modal visible={visible} animationType="slide">
      <View>
        <Text>This is a modal!</Text>
        <TouchableOpacity title="Close" onPress={closeModal} />
      </View>
    </Modal>
  );
};

export default ModalScreen;