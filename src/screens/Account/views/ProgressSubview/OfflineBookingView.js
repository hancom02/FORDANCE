import React, { useState } from "react";
import { Text, View, SafeAreaView, StyleSheet, FlatList, Dimensions, TouchableOpacity, Modal } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';

//COMPONENT
import OfflineLessonComponent from "../../../../components/OfflineLessonComponent";
import PopUpFormComponent from "../../../../components/PopUpFormComponent";
//VIEW

const { width, height } = Dimensions.get('window');
const imgWidth = width * 0.9;

const OfflineBookingView = (props) => {
    const {
        navigation,
    } = props;


    const handleGoBack = () => {
        navigation.goBack();
    };

    //DATA
    const lessons = [
        {
            lessonName: "Ballet Basic",
            category: "Ballet",
            instructor: "Ngoc Han",
            image: 'https://www.russianballetinternational.com/wp-content/uploads/2022/11/007_5054-Bolshoi-Academy-Vaganova-Method-Level-2-Level-3-1024x682.jpg',
            location: 'Ho Chi Minh City Opera House',
            startDate: '2024-06-01',
            endDate: '2024-06-15',
        },
        {
            lessonName: 'The Boy Is Mine',
            category: "Choreography",
            instructor: "Redy",
            image: "https://unica.vn/media/imagesck/1612428593_Choreography-la-gi.jpg?v=1612428593",
            location: 'Saigon Central Post Office',
            startDate: '2024-06-05',
            endDate: null,
        },
        {
            lessonName: 'Kpop Basic',
            category: "Kpop",
            instructor: "Lip J",
            image: "https://i0.wp.com/ononestudios.com/wp-content/uploads/2022/07/allkpop_1644246173_blackpink-how-you-like-that-dance-performance-video-2-55-screenshot.png?fit=1024%2C576&ssl=1",
            location: 'Ben Thanh Market',
            startDate: '2024-06-10',
            endDate: '2024-06-20',
        },
        {
            lessonName: 'Kpop Intermediate',
            category: "Kpop",
            instructor: "Lip J",
            image: "https://i0.wp.com/ononestudios.com/wp-content/uploads/2022/07/allkpop_1644246173_blackpink-how-you-like-that-dance-performance-video-2-55-screenshot.png?fit=1024%2C576&ssl=1",
            location: 'Notre-Dame Cathedral Basilica of Saigon',
            startDate: '2024-06-15',
            endDate: null,
        },
    ];

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
                    <Ionicons name="arrow-back" size={24} color="black" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Offline Booking</Text>
            </View>
            <View style={styles.contentContainer}>
                <View style={styles.classesContainer}>
                    <FlatList
                        data={lessons}
                        renderItem={({ item, index }) =>
                            <View style={{ marginBottom: 20, width: imgWidth }}>
                                <OfflineLessonComponent
                                    offlinelessons={item}
                                // handlePress={handlePress}
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

export default OfflineBookingView;

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
