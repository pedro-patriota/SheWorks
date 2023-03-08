import React from "react";
import { Text, View, FlatList, Dimensions, StyleSheet } from "react-native";
import StarIcon from "../../../../assets/Icons/StarIcon";
import PicIcon from "../../../../assets/Icons/PicIcon";

const ServicesSlider = () => {
    //simulates the data shown in the cards
    const data = [
        {
            title: "Troca de Resistência",
            providersAmt: 12,
            medium: 4.5,
        },
        {
            title: "Troca de Resistência",
            providersAmt: 12,
            medium: 4.5,
        },
        {
            title: "Troca de Resistência",
            providersAmt: 12,
            medium: 4.5,
        },
        {
            title: "Troca de Resistência",
            providersAmt: 12,
            medium: 4.5,
        },
        {
            title: "Troca de Resistência",
            providersAmt: 12,
            medium: 4.5,
        },
    ];

    return (
        // <FlatList
        //     data={data}
        //     keyExtractor={(item) => String(item.title)}
        //     vertical
        //     decelerationRate={"fast"}
        //     initialNumToRender={3}
        //     maxToRenderPerBatch={3}
        //     windowSize={3}
        //     contentContainerStyle={{ flexGrow: 1 }}
        //     style={{
        //         marginTop: 8,
        //         marginBottom: 20,
        //         height: 232,
        //     }}
        //     renderItem={({ item }) => (
        //         <View style={styles.serviceCard}>
        //             <View style={styles.servicePic}/>
        //             <View style={{marginLeft:12.51, marginTop:7}}>
        //                 <Text style={styles.serviceName}>{item.title}</Text>
        //                 <Text style={styles.providersAmt}>{item.providersAmt} prestadoras na sua área</Text>
        //                 <Text style={styles.mediumStar}>Média de {item.medium}</Text>
        //             </View>
        //         </View>

        //     )}

        // />

        <View>
            {data.slice(0, 3).map((item) => (
                <View style={styles.serviceCard}>
                    <View style={styles.servicePic} />
                    <View style={{ marginLeft: 12.51, marginTop: 7 }}>
                        <Text style={styles.serviceName}>{item.title}</Text>
                        <Text style={styles.providersAmt}>
                            {item.providersAmt} prestadoras na sua área
                        </Text>
                        <Text style={styles.mediumStar}>Média de {item.medium}</Text>
                    </View>
                </View>
            )
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    serviceCard: {
        flexDirection: "row",
        backgroundColor: "#F3F3F3",
        height: 72,
        width: 367,
        borderRadius: 8,
        marginVertical: 8,
    },
    servicePic: {
        backgroundColor: "#D9D9D9",
        height: 72,
        width: 90.72,
        borderRadius: 8,
    },
    serviceName: {
        font: "inter",
        fontSize: 16,
        fontWeight: 600,
        lineHeight: 19,
    },
    mediumStar: {
        font: "inter",
        fontSize: 10,
        fontWeight: 400,
        lineHeight: 12,
    },
    providersAmt: {
        font: "inter",
        fontSize: 12,
        fontWeight: 400,
        lineHeight: 14.52,
    },
});

export default ServicesSlider;
