import React, { useState } from "react";
import { Text, View, SafeAreaView, StyleSheet, FlatList, Dimensions, TouchableOpacity } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import Lesson2Component from "../../../../components/Lesson2Component";

const { width } = Dimensions.get('window');
const imgWidth = width * 0.9;

const HistoryView = ({ route, navigation }) => {
    const { lessons } = route.params;

    const [filter, setFilter] = useState('All');

    const handleGoBack = () => {
        navigation.goBack();
    };

    const filteredLessons = lessons.filter(lesson => {
        if (filter === 'All') {
            return true;
        } else if (filter === 'Incomplete') {
            return lesson.progress < 0.9;
        } else if (filter === 'Completed') {
            return lesson.progress >= 0.9;
        }
        return false;
    });

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
                    <Ionicons name="arrow-back" size={24} color="black" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>History</Text>
            </View>
            <View style={styles.filterContainer}>
                <TouchableOpacity
                    style={[styles.filterButton, filter === 'All' && styles.activeFilterButton]}
                    onPress={() => setFilter('All')}
                >
                    <Text style={[styles.filterButtonText, filter === 'All' && styles.activeFilterButtonText]}>All</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.filterButton, filter === 'Incomplete' && styles.activeFilterButton]}
                    onPress={() => setFilter('Incomplete')}
                >
                    <Text style={[styles.filterButtonText, filter === 'Incomplete' && styles.activeFilterButtonText]}>Incomplete</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.filterButton, filter === 'Completed' && styles.activeFilterButton]}
                    onPress={() => setFilter('Completed')}
                >
                    <Text style={[styles.filterButtonText, filter === 'Completed' && styles.activeFilterButtonText]}>Completed</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.contentContainer}>
                <View style={styles.classesContainer}>
                    <FlatList
                        data={filteredLessons}
                        renderItem={({ item }) => (
                            <View style={styles.items}>
                                <Lesson2Component
                                    lessons={item}
                                />
                                <View style={styles.progressBarContainer}>
                                    <View style={[styles.progressBar, { width: `${item.progress * 100}%` }]} />
                                </View>
                            </View>
                        )}
                        horizontal={false}
                        showsVerticalScrollIndicator={false}
                        keyExtractor={(item, index) => index.toString()}
                    />
                </View>
            </View>
        </SafeAreaView>
    );
};

export default HistoryView;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
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
        alignSelf: 'center',
    },
    filterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 10,
        marginHorizontal: 10,
    },
    filterButton: {
        justifyContent: 'center',
        alignItems: 'center',
        width: width * 0.3,
        height: 50,
        paddingVertical: 5,
        borderRadius: 10,
        backgroundColor: '#d9d9d9',
    },
    activeFilterButton: {
        backgroundColor: '#000',
    },
    filterButtonText: {
        fontSize: 16,
        color: 'black',
        fontWeight: '700',
    },
    activeFilterButtonText: {
        color: 'white',
    },
    contentContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    classesContainer: {
        flex: 1,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    items: {
        marginBottom: 25,
        width: imgWidth,
    },
    progressBarContainer: {
        height: 10,
        width: '100%',
        backgroundColor: '#e0e0e0',
        borderRadius: 5,
        overflow: 'hidden',
        position: 'absolute',
        top: 180,
    },
    progressBar: {
        height: '100%',
        backgroundColor: 'purple',
    },
});
