import { SafeAreaView, } from "react-native-safe-area-context";
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Dimensions, ScrollView } from "react-native";
import React, { useState } from 'react';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from "../../../values/colors";

const { width, height } = Dimensions.get('window');

const DancePreference = (props) => {
    const {
        navigation,
        categories,
    } = props;


    const handleGoBack = () => {
        navigation.goBack();
    };

    //Phần categories
    const danceGenresData = [
        { name: 'Hip Hop' },
        { name: 'Kpop' },
        { name: 'Ballet' },
        { name: 'Jazz' },
        { name: 'Contemporary' },
        { name: 'Tap' },
        { name: 'Street Dance' },
        { name: 'Salsa' },
        { name: 'Bollywood' },
        { name: 'Breakdance' },
    ];

    const [selectedGenres, setSelectedGenres] = useState([]);

    const toggleSelectGenre = (name) => {
        if (selectedGenres.includes(name)) {
            setSelectedGenres(selectedGenres.filter(genre => genre !== name));
        } else {
            setSelectedGenres([...selectedGenres, name]);
        }
    };


    const renderItemCategories = ({ item }) => {
        const backgroundColor = selectedGenres.includes(item.name) ? Colors.primaryPupple : 'white';
        const color = selectedGenres.includes(item.name) ? 'white' : 'black';

        return (
            <TouchableOpacity
                style={[styles.itemCategories, { backgroundColor }]}
                onPress={() => toggleSelectGenre(item.name)}
            >
                <Text style={[styles.categoriesText, { color }]}>{item.name}</Text>
            </TouchableOpacity>
        );
    };


    //Phần level + data
    const [levels, setLevels] = useState([
        { id: '1', text: 'Brand New', selected: true },
        { id: '2', text: 'Beginner', selected: false },
        { id: '3', text: 'Intermediate', selected: false },
        { id: '4', text: 'Advanced', selected: false },
    ]);

    const handleSelectLevel = (id) => {
        const updatedLevels = levels.map(level => {
            if (level.id === id) {
                return { ...level, selected: !level.selected };
            } else {
                return { ...level, selected: false }; // Unselect other levels
            }
        });
        setLevels(updatedLevels);
    };

    const renderItemLevel = ({ item }) => (
        <TouchableOpacity
            style={[styles.item, item.selected && styles.selectedItem]}
            onPress={() => handleSelectLevel(item.id)}
        >
            <Ionicons
                name={item.selected ? 'radio-button-on-outline' : 'radio-button-off-outline'}
                size={24}
                color={item.selected ? Colors.primaryPupple : 'black'}
            />
            <Text style={[styles.levelText, item.selected && styles.selectedText]}>{item.text}</Text>
        </TouchableOpacity>
    );


    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
                    <Ionicons name="arrow-back" size={24} color="black" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Dance Preference</Text>
                <TouchableOpacity>
                    <Text style={styles.saveButton}>Save</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.contentContainer}>
                <Text style={styles.title}>My Dance Preference</Text>
                <View style={styles.levelContainer}>
                    <Text style={styles.textHeader}>Dance Level</Text>
                    <FlatList
                        data={levels}
                        renderItem={renderItemLevel}
                        keyExtractor={item => item.id}
                        extraData={levels}
                    />
                </View>
                <View style={[styles.levelContainer, { flex: 1 }]}>
                    <Text style={styles.textHeader}>Favorite Categories</Text>
                    <ScrollView contentContainerStyle={styles.categoriesContainer}>
                        {danceGenresData.map((item) => renderItemCategories({ item, key: item.name }))}
                    </ScrollView>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        marginVertical: 10,
        height: 30,
    },
    headerTitle: {
        flex: 1,
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
        textTransform: 'uppercase',
    },
    saveButton: {
        color: Colors.primaryPupple,
        textAlign: 'center'
    },
    contentContainer: {
        padding: 16,
        flex: 1,
    },
    textHeader: {
        marginTop: 30,
        marginBottom: 10,
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
    },
    levelContainer: {
        width: '100%',
    },
    item: {
        marginLeft: 10,
        paddingVertical: 10,
        borderBottomColor: '#ccc',
        flexDirection: 'row',
        alignItems: 'center',
    },
    title: {
        fontSize: 35,
        color: Colors.primaryPupple,
        fontWeight: '600',
    },
    selectedText: {
        color: Colors.primaryPupple,
    },
    levelText: {
        color: 'black',
        marginLeft: 10,
        fontSize: 14,
    },
    categoriesContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    itemCategories: {
        width: width * 0.45 - 20,
        margin: 10,
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: Colors.primaryPupple,
        alignItems: 'center',
        justifyContent: 'center',
    },
    categoriesText: {
        fontSize: 16,
        fontWeight: 400,
    },



});

export default DancePreference;