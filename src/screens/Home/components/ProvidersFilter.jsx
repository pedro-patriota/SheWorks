import {React, useState} from 'react'
import { StyleSheet, View, Button, TextInput, TouchableOpacity } from "react-native"
import SearchIcon from "../../../../assets/Icons/SearchIcon"
import FilterIcon from "../../../../assets/Icons/FilterIcon"
import FilterModal from "./FilterModal"
const ProvidersFilter = () => {
    const [inputValue, setInputValue] = useState('');
    const [filterModalOpen, setFilterModalOpen] = useState('');

    const handleInputSubmit = () => {
        //captures return click to submit search
        console.log(inputValue)
        setInputValue('')
    };

    const handleFilterPress = () => {
        setFilterModalOpen(true);
    }

    const handlefilterModalClose = () => {
        setFilterModalOpen(false);
    }

    return (
        <View style={styles.filterLine}>
            <SearchIcon style={styles.searchIcon} />
            <TextInput
                style={styles.input}
                placeholder="Buscar Prestadora"
                onChangeText={setInputValue}
                onSubmitEditing={handleInputSubmit}
                value={inputValue}
                returnKeyType="search"
            />
            <TouchableOpacity
                onPress={handleFilterPress}
            >
                <FilterIcon />
            </TouchableOpacity>

            <FilterModal visible={filterModalOpen} closeModal={handlefilterModalClose}/>
        </View>
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
        flex: "none",
        order: 0,
        alignSelf: "stretch",
        flexGrow: 0,
        marginBottom: 19,
        marginTop: 17,
    }
})

export default ProvidersFilter;