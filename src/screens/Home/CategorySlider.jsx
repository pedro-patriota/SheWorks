import React from "react"
import { View, FlatList, Dimensions } from "react-native"


const CategorySlider = () => {


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
                <View
                    style={{     
                        backgroundColor: item,
                        height: 64,
                        width: 120,
                        borderRadius: 8,
                        marginHorizontal: 8,
                    }}
                />
            )}

        />
    )
};

export default CategorySlider;