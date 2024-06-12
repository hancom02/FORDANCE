import { Text, View, StyleSheet, TouchableOpacity, FlatList, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from "../../../values/colors";
import OfflineLessonComponent from "../../../components/OfflineLessonComponent";
import React from 'react';

const InstructorScheduleMainView = (props) => {
    const { navigation } = props;

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

    const handlePress = (lesson) => {
        navigation.navigate('RegisterList', { lesson });
    }

    const handleNavAddNewClass = () => {
        navigation.navigate('AddNewClass');
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <View style={{ flexDirection: 'column' }}>
                    <Text style={styles.textHeader}>SCHEDULE</Text>
                    <Text style={styles.headerTitle}>For Offline</Text>
                </View>
                <View style={{ flexDirection: 'column' }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginBottom: 10 }}>
                        <TouchableOpacity>
                            <Ionicons name="notifications-outline" size={25} color="black" />
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={styles.addButton} onPress={handleNavAddNewClass}>
                        <Text style={styles.addButtonText}>Add new class</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <Text style={[styles.headerTitle, { alignSelf: 'center' }]}>MY OFFLINE CLASS</Text>
            <View style={styles.contentContainer}>
                <FlatList
                    data={lessons}
                    renderItem={({ item }) =>
                        <View style={{ marginBottom: 20, width: '100%' }}>
                            <OfflineLessonComponent
                                offlinelessons={item}
                                handlePress={() => handlePress(item)}
                            />
                        </View>
                    }
                    horizontal={false}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%'
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        marginVertical: 10,
        height: 100,
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
    },
    textHeader: {
        marginBottom: 10,
        fontSize: 25,
        fontWeight: 'bold',
        color: 'black',
        textTransform: 'uppercase',
    },
    addButton: {
        backgroundColor: Colors.primaryPupple,
        width: '100%',
        borderRadius: 5,
        padding: 10,
    },
    addButtonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 14,
    },
    contentContainer: {
        flexGrow: 1,
        marginTop: 10,
        padding: 16,
        width: '100%',
        paddingBottom: 140,
    },
})

export default InstructorScheduleMainView;
