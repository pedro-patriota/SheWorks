import { React, useState } from 'react'
import { StyleSheet, View, Button, TextInput, TouchableOpacity, Text } from "react-native"
import SearchIcon from "../../../../../assets/Icons/SearchIcon"
import FilterIcon from "../../../../../assets/Icons/FilterIcon"
import FilterModal from "./FilterModal"
import { APP_ROUTES_NAMES } from '../../../../routes/routesName'
import { useNavigation } from '@react-navigation/native';

const ProvidersFilter = () => {
    const [inputValue, setInputValue] = useState('');
    const [filterModalOpen, setFilterModalOpen] = useState('');
    const navigation = useNavigation();


    const handleInputSubmit = () => {
        //captures return click to submit search
        console.log(inputValue)
        setInputValue('')
    };

    const handleFilterPress = () => {
        navigation.navigate(APP_ROUTES_NAMES.HOMELIST)
    }

    const handlefilterModalClose = () => {
        setFilterModalOpen(false);
    }

    return (
        <TouchableOpacity
            onPress={handleFilterPress}
            style={styles.filterLine}
        >

            <SearchIcon style={styles.searchIcon} />
            <Text
                style={styles.input}

            >Buscar Prestadora
            </Text>
            <FilterIcon />

            <FilterModal visible={filterModalOpen} closeModal={handlefilterModalClose} />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    input: {
        width: '70%',
    },
    searchIcon: {
        marginLeft: 19,
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
    }
})

export default ProvidersFilter;