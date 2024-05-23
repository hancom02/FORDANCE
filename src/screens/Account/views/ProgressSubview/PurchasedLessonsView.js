import React, { useState } from "react";
import { Text, View, SafeAreaView, StyleSheet, FlatList, Dimensions, TouchableOpacity } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';


//COMPONENT
import Lesson2Component from "../../../../components/Lesson2Component";
//VIEW

const { width, height } = Dimensions.get('window');
const imgWidth = width * 0.9;

const PurchasedLessonsView = ({ route, navigation }) => {
    const { lessons } = route.params;

    const handleGoBack = () => {
        navigation.goBack();
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
                    <Ionicons name="arrow-back" size={24} color="black" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Purchased Lessons</Text>
            </View>
            <View style={styles.contentContainer}>
                <View style={styles.classesContainer}>
                    <FlatList
                        data={lessons}
                        renderItem={({ item, index }) =>
                            <View style={{ marginBottom: 20, width: imgWidth }}>
                                <Lesson2Component
                                    lessons={item}
                                />
                            </View>
                        }
                        horizontal={false}
                        showsVerticalScrollIndicator={false}
                    />
                </View>
            </View>
        </SafeAreaView >
    );
};

export default PurchasedLessonsView;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    contentContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
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
    textHeader: {
        marginBottom: 10,
        fontSize: 25,
        fontWeight: 'bold',
        color: 'black',
    },
    libraryContainer: {
        flex: 1,
        backgroundColor: 'red'
    },
    classesContainer: {
        flex: 1,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
