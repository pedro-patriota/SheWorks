import React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';

const GeneralStatusBarColor = ({ backgroundColor, ...props }) => (
  <View style={[styles.statusBar, { backgroundColor }]}>
  <StatusBar translucent backgroundColor={backgroundColor} {...props} />
  </View>
  );

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;

const styles = StyleSheet.create({
  statusBar: {
    height: STATUSBAR_HEIGHT
  }
});
export default GeneralStatusBarColor;