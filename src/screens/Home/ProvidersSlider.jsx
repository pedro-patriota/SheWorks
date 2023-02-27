import React from "react"
import { View, FlatList, Dimensions, StyleSheet} from "react-native"
import StarIcon from "../../../assets/Icons/StarIcon"
import PicIcon from "../../../assets/Icons/PicIcon"

const ProvidersSlider = () => {

    //simulates the data shown in the cards
    const data = [
        '#D9D9D9',
        "#D9D9D9",
        "#D9D9D9",
        "#D9D9D9",
        "#D9D9D9",
        "#D9D9D9",
        "#D9D9D9",
    ]


    return (
        <FlatList
            data={data}
            keyExtractor={(item) => String(item)}
            showsHorizontalScrollIndicator={false}
            horizontal
            snapToAlignment={"start"}
            scrollEventThrottle={16}
            decelerationRate={"fast"}
            style={{
                marginTop: 8,
                marginBottom: 20,
            }}
            renderItem={({ item }) => (
                <View style={styles.providerCard}>
                    <StarIcon style={styles.starIcon}/>
                    <PicIcon style={styles.picIcon}/>
                </View>
                
            )}

        />
    )
};


const styles = StyleSheet.create({
    providerCard:{
        backgroundColor: '#D9D9D9',
        height: 150,
        width: 120,
        borderRadius: 8,
        marginHorizontal: 8,
    },
    starIcon:{
        marginTop: 8,
        marginLeft: 8,
    },
    picIcon:{
        marginTop: 32,
        marginLeft: 31,
    },
})

export default ProvidersSlider;