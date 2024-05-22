import React, { useState } from "react";
import { Text, View, SafeAreaView, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';

//COMPONENT
import Lesson2Component from "../../../../components/Lesson2Component";

//VIEW


const PurchasedLessonsView = (props) => {
    const {
        navigation,
    } = props;

    //Data 
    const lessons = [
        {
            lessonName: "Ballet Basic",
            category: "Ballet",
            instructor: "Ngoc Han",
            instructorImage: 'https://www.russianballetinternational.com/wp-content/uploads/2022/11/007_5054-Bolshoi-Academy-Vaganova-Method-Level-2-Level-3-1024x682.jpg',
            level: 'BEGINNER',
            timeDuring: 16,
            image: 'https://img.freepik.com/premium-photo/dance-ballet-studio-with-woman-dancer-training-practicing-dancing-performance-recital-rehearsal-artistic-perform-technique-with-young-female-school-production-art_590464-81910.jpg'

        },
        {
            lessonName: 'The Boy Is Mine',
            category: "Chogreophy",
            instructor: "Redy",
            level: "INTERMEDIATE",
            timeDuring: 16,
            image: "https://unica.vn/media/imagesck/1612428593_Choreography-la-gi.jpg?v=1612428593"
        },
        {
            lessonName: 'The Boy Is Mine',
            category: "Chogreophy",
            instructor: "Redy",
            level: "INTERMEDIATE",
            timeDuring: 16,
            image: "https://unica.vn/media/imagesck/1612428593_Choreography-la-gi.jpg?v=1612428593"

        },
    ]

    const handleGoBack = () => {
        navigation.goBack();
    };

    const handleNavDetailLesson = () => {
        navigation.navigate('Lesson');
    }


    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
                    <Ionicons name="arrow-back" size={24} color="black" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Purchased Lessons</Text>
            </View>
            <View style={styles.contentContainer}>
                <View style={styles.libraryContainer}>
                    <View style={styles.classesContainer}>
                        <FlatList
                            data={lessons}
                            renderItem={({ item, index }) =>
                                <View style={{ marginBottom: 25 }}>
                                    <Lesson2Component
                                        lessons={item}
                                        handleNav={handleNavDetailLesson}
                                    />
                                </View>
                            }
                            horizontal={false}
                            showsVerticalScrollIndicator={false}
                        />
                    </View>
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
    },
    classesContainer: {
        flex: 1,
        marginTop: 20,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
});
