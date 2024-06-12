import React, { useState } from "react";
import { Text, View, SafeAreaView, StyleSheet, FlatList, Dimensions, TouchableOpacity } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import Lesson2Component from "../../../../components/Lesson2Component";
import ProgramComponent from "../../../../components/ProgramComponent"; // giả sử bạn có một component cho programs

const { width } = Dimensions.get('window');
const imgWidth = width * 0.9;

const FavouritesView = ({ route, navigation }) => {
    // const { lessons, programs } = route.params;

    const lessons = [
        {
            lessonName: "Ballet Basic",
            category: "Ballet",
            instructor: "Ngoc Han",
            instructorImage: 'https://www.russianballetinternational.com/wp-content/uploads/2022/11/007_5054-Bolshoi-Academy-Vaganova-Method-Level-2-Level-3-1024x682.jpg',
            level: 'BEGINNER',
            timeDuring: 16,
            image: 'https://img.freepik.com/premium-photo/dance-ballet-studio-with-woman-dancer-training-practicing-dancing-performance-recital-rehearsal-artistic-perform-technique-with-young-female-school-production-art_590464-81910.jpg',
            progress: 0.5,
        },
        {
            lessonName: 'The Boy Is Mine',
            category: "Chogreophy",
            instructor: "Redy",
            level: "INTERMEDIATE",
            timeDuring: 16,
            image: "https://unica.vn/media/imagesck/1612428593_Choreography-la-gi.jpg?v=1612428593",
            process: 1,
        },
        {
            lessonName: 'Kpop basic',
            category: "Kpop",
            instructor: "Lip J",
            level: "ADVANCED",
            timeDuring: 10,
            image: "https://i0.wp.com/ononestudios.com/wp-content/uploads/2022/07/allkpop_1644246173_blackpink-how-you-like-that-dance-performance-video-2-55-screenshot.png?fit=1024%2C576&ssl=1",
            progress: 0.5,
        },
        {
            lessonName: 'Kpop Intermediate',
            category: "Kpop",
            instructor: "Lip J",
            level: "ADVANCED",
            timeDuring: 10,
            image: "https://i0.wp.com/ononestudios.com/wp-content/uploads/2022/07/allkpop_1644246173_blackpink-how-you-like-that-dance-performance-video-2-55-screenshot.png?fit=1024%2C576&ssl=1",
            progress: 0.95,
        },
        {
            lessonName: 'Kpop Advanced',
            category: "Kpop",
            instructor: "Lip J",
            level: "ADVANCED",
            timeDuring: 10,
            image: "https://i0.wp.com/ononestudios.com/wp-content/uploads/2022/07/allkpop_1644246173_blackpink-how-you-like-that-dance-performance-video-2-55-screenshot.png?fit=1024%2C576&ssl=1",
            progress: 0.7,
        },
    ]
    const programs = [
        {
            programName: "Ballet Basic",
            category: "Ballet",
            instructor: "Ngoc Han",
            instructorImage: 'https://www.russianballetinternational.com/wp-content/uploads/2022/11/007_5054-Bolshoi-Academy-Vaganova-Method-Level-2-Level-3-1024x682.jpg',
            level: 'BEGINNER',
            lessonAmount: 15,
            image: 'https://img.freepik.com/premium-photo/dance-ballet-studio-with-woman-dancer-training-practicing-dancing-performance-recital-rehearsal-artistic-perform-technique-with-young-female-school-production-art_590464-81910.jpg',

            lessons: [
                {
                    lessonName: 'How to do plete',
                    totalTime: '1:15',
                    lessonImage: 'https://www.giasutainangtre.vn/gstnt/uploaddata/images/ballet%20cho%20nguoi%20lon.jpg',
                    lesonsVideo: ' ',
                },
                {
                    lessonName: 'How to do catfish',
                    totalTime: '1:15',
                    lessonImage: 'https://bizweb.dktcdn.net/thumb/grande/100/356/785/articles/e5.jpg?v=1592195836593',
                    lesonsVideo: ' ',
                },
                {
                    lessonName: 'How to do plete',
                    totalTime: '1:15',
                    lessonImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHHdZ2dMu6iPlTO62u0iwyL-gXlEO1pyBQToaodjY5izWyDcI8ohCh3SVJBzCzb8-aUio&usqp=CAU',
                    lesonsVideo: ' ',
                },
                {
                    lessonName: 'How to do catfish',
                    totalTime: '1:15',
                    lessonImage: 'https://bizweb.dktcdn.net/thumb/grande/100/356/785/articles/e5.jpg?v=1592195836593',
                    lesonsVideo: ' ',
                },
                {
                    lessonName: 'How to do plete',
                    totalTime: '1:15',
                    lessonImage: 'https://media.istockphoto.com/id/1272937508/vi/anh/ballerina-dancing-with-silk-fabric-modern-ballet-dancer-in-fluttering-waving-cloth-pointe-shoes.jpg?s=612x612&w=0&k=20&c=YzCYit-TSpIQdrjJZhbWkgipgHzNUspeWI-xYrnrCHU=',
                    lesonsVideo: ' ',
                },
                {
                    lessonName: 'How to do plete',
                    totalTime: '1:15',
                    lessonImage: 'https://www.giasutainangtre.vn/gstnt/uploaddata/images/ballet%20cho%20nguoi%20lon.jpg',
                    lesonsVideo: ' ',
                },
                {
                    lessonName: 'How to do catfish',
                    totalTime: '1:15',
                    lessonImage: 'https://bizweb.dktcdn.net/thumb/grande/100/356/785/articles/e5.jpg?v=1592195836593',
                    lesonsVideo: ' ',
                },
            ]
        },
        {
            programName: 'The Boy Is Mine',
            category: "Chogreophy",
            instructor: "Redy",
            instructorImage: 'https://new1m.s3.ap-northeast-2.amazonaws.com/teachers/profile/152_240213001705817.jpg',
            level: "INTERMEDIATE",
            lessonAmount: 8,
            image: "https://unica.vn/media/imagesck/1612428593_Choreography-la-gi.jpg?v=1612428593"
        },
        {
            programName: 'Easy Kpop',
            category: "Chogreophy",
            instructor: "Lip J",
            instructorImage: 'https://i.ytimg.com/vi/5tZ7OaEbQBk/sddefault.jpg',
            level: "INTERMEDIATE",
            lessonAmount: 5,
            image: "https://i0.wp.com/ononestudios.com/wp-content/uploads/2022/07/allkpop_1644246173_blackpink-how-you-like-that-dance-performance-video-2-55-screenshot.png?fit=1024%2C576&ssl=1",

        },
    ];



    // Hàm trộn hai mảng
    const mergeArrays = (lessons, programs) => {
        const mergedArray = [];
        const maxLength = Math.max(lessons.length, programs.length);
        for (let i = 0; i < maxLength; i++) {
            if (i < lessons.length) {
                mergedArray.push({ type: 'lesson', data: lessons[i] });
            }
            if (i < programs.length) {
                mergedArray.push({ type: 'program', data: programs[i] });
            }
        }
        return mergedArray;
    };

    const mergedData = mergeArrays(lessons, programs);

    const handleGoBack = () => {
        navigation.goBack();
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
                    <Ionicons name="arrow-back" size={24} color="black" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>History</Text>
            </View>
            <View style={styles.contentContainer}>
                <View style={styles.classesContainer}>
                    <FlatList
                        data={mergedData}
                        renderItem={({ item }) => (
                            <View style={styles.items}>
                                {item.type === 'lesson' ? (
                                    <Lesson2Component
                                        lessons={item.data}
                                    />
                                ) : (
                                    <ProgramComponent
                                        program={item.data}
                                    />
                                )}
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

export default FavouritesView;

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
        height: 40,
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
