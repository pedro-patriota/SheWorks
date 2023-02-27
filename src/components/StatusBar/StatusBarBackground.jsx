import {View, Text, StyleSheet, Platform} from 'react-native';

const StatusBarBackground = () => {
    return(
        <View style={styles.statusBarBackground || {}}> 
        </View>
    );
}

const styles = StyleSheet.create({
  statusBarBackground: {
    height: (Platform.OS === 'ios') ? 18 : 0,
    backgroundColor: "black",
  }

})

export default StatusBarBackground;