import React from "react"
import { Text, FlatList, Dimensions, StyleSheet, View, StatusBar } from "react-native"
import { ScrollView, TextInput } from "react-native-gesture-handler";
import SearchIcon from "../../../../../assets/Icons/SearchIcon";
import FilterIcon from "../../../../../assets/Icons/FilterIcon"
import ProvidersFilter from "../Filter/ProvidersFilter";
import Workers from "../../../../../server/Data/Workers";
import WorkersList from "../../../../components/WorkersList";
const ServiceList = () => {

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

        <View style={styles.home}>
            <StatusBar
                animated={true}
                barStyle={'dark-content'}
                backgroundColor="#FFFFFF"
            />
            <View style={styles.marginTopContainer}>
                <View style={styles.nameContainer}>
                    <Text style={styles.welcomeName}>Pesquisa</Text>
                </View>
            </View>
            <ScrollView>
                <View style={styles.filterLine}>
                    <SearchIcon style={styles.searchIcon} />

                    <TextInput
                        style={styles.input}
                        placeholder="Buscar Prestadora"


                        returnKeyType="search"
                    />
                    <FilterIcon />
                </View>
                
                <FlatList
                style={{ width: '100%' }}
                data={Workers}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <WorkersList workers={item} />}>

                </FlatList>

            </ScrollView>

        </View >
    )
};




export default ServiceList;
const styles = StyleSheet.create({
    home: {
        marginLeft: 27,
        flex: 1,
        overflow: "scroll",
    },
    searchIcon: {
        marginLeft: 19,
    },
    marginTopContainer: {
        flexDirection: "row",
        height: 100,
        alignItems: "center",
    },
    nameContainer: {
        marginTop: 10,
        marginLeft: 23,
    },
    welcomeName: {
        font: "roboto",
        fontWeight: 500,
        fontSize: 24,
        lineHeight: 29,
    },
    filterLine: {

        boxSizing: 'border-box',
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: 0,
        paddingRight: 16,
        gap: 24,
        width: 355,
        height: 40,
        background: "#FFFFFF",
        borderWidth: 1,
        borderColor: "#D3D3D3",
        borderRadius: 4,
        flex: 0,
        order: 0,
        alignSelf: "stretch",
        flexGrow: 0,
        marginBottom: 19,
        marginTop: 17,
    },
    personIconBackground: {
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
    seeFurtherView: {
        marginLeft: 144,
    },
    input: {
        width: '70%',
    },
    seeFurtherButton: {
        font: "inter",
        fontSize: 1200,
        fontWeight: 400,
        lineHeight: 15,
    }
});