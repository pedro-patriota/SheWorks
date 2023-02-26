import React from "react";
import {SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";

const Home = () => {
    return (
        <View>
            <View  style={styles.topContainer}>
                <Text style={styles.welcomeName}>
                    Olá Fulana
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    topContainer: {
        flexDirection: 'row',
        height: 100,
        padding: 20,
        backgroundColor: 'blue',
        // justifyContent: 'center',
        alignItems: 'center',
    },
    welcomeName:{
        fontWeight: 'bold',
    }

})

export default Home;