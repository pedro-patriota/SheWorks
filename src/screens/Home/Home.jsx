import React from "react";
import {ScrollView, SafeAreaView, StatusBar, StyleSheet, Text, View, PixelRatio, Button} from "react-native";
import PersonIcon from "../../../assets/Icons/PersonIcon";
import LocationIcon from "../../../assets/Icons/LocationIcon";
import CategorySlider from "./components/CategorySlider"
import ProvidersSlider from "./components/ProvidersSlider";
import PopularServices from "./components/PopularServices";
import ProvidersFilter from "./components/Filter/ProvidersFilter";

const Home = () => {
    return (
        <View style={styles.home}>
            <View style={styles.marginTopContainer}>
                <View>
                    <LocationIcon style={styles.locationIcon} />
                </View>

                <View style={styles.nameContainer}>
                    <Text style={styles.welcomeName}>Olá, Fulana</Text>
                    <Text style={styles.locationName}>Rua Amaraji 80, Santana</Text>
                </View>

                <View style={styles.personIconBackground}>
                    <PersonIcon/>
                </View>
            </View>
            <ScrollView>
                <View>
                    <ProvidersFilter/>
                </View>
                <View>
                    <View style={{flexDirection: "row"}}>
                        <Text style={styles.homeTitles}>Categorias</Text>
                        <View  style={styles.seeFurtherView}>
                            <Button 
                                title="Ver mais" 
                                color="black"
                                style={{width: 19065}}
                            />
                        </View>
                    </View>
                    <CategorySlider/>
                </View>
                <View>
                    <Text style={styles.homeTitles}>Serviços populares</Text>
                    <PopularServices/>
                </View>
                <View>
                    <Text style={styles.homeTitles}>Prestadoras em destaque</Text>
                    <ProvidersSlider/>
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    home:{
        marginLeft: 27,
        flex: 1,
        overflow: "scroll",
    },
    marginTopContainer: {
        flexDirection: "row",
        height: 100,
        alignItems: "center",
    },
    nameContainer:{
        marginTop: 15,
        marginLeft: 23,
    },  
    welcomeName: {
        font: "roboto",
        fontWeight: 500,
        fontSize: 32,
        lineHeight: 37.5,
    },
    locationName: {
        font: "inter",
        fontWeight: 400,
        fontSize: 12,
        lineHeight: 15,
    },
    locationIcon: {
        width: 18,
        marginTop: 14.3,
        marginLeft: 7,
    },
    personIconBackground:{
        alignItems: "center",
        justifyContent: "center",
        height: 42,
        width: 42,
        marginLeft: 112,
        marginTop: 14.3,
        borderRadius: 50,
        backgroundColor: '#D9D9D9',
    },
    homeTitles: {
        font: "inter",
        fontSize: 24,
        fontWeight: 600,
        lineHeight: 29,
    },
    seeFurtherView:{
        marginLeft: 144,
    },
    seeFurtherButton:{
        font: "inter",
        fontSize: 1200,
        fontWeight: 400,
        lineHeight: 15,
    }
});

export default Home;
