import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    FlatList,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from '../../../values/colors';
import Lesson2Component from '../../../components/Lesson2Component';
import ProgramComponent from '../../../components/ProgramComponent';

const ResultScreen = ({ route, navigation }) => {
    const { selectedOption, selectedLevel, selectedStyles } = route.params;

    // Dữ liệu mẫu cho lessons và programs
    const lessonsData = [
        {
            id: '1',
            lessonName: 'Basic Hip-Hop',
            level: 'BEGINNER',
            category: 'Hiphop',
            instructor: 'John Doe',
            timeDuring: 30, // Phút
            image: 'https://example.com/image1.jpg'
        },
        {
            id: '2',
            lessonName: 'Contemporary Dance',
            level: 'INTERMEDIATE',
            category: 'Contemporary',
            instructor: 'Jane Smith',
            timeDuring: 45, // Phút
            image: 'https://example.com/image2.jpg'
        },
        {
            id: '3',
            lessonName: 'Jazz Basics',
            level: 'BEGINNER',
            category: 'Jazz',
            instructor: 'Emily Brown',
            timeDuring: 40,
            image: 'https://example.com/image3.jpg'
        },
        {
            id: '4',
            lessonName: 'Locking Technique',
            level: 'INTERMEDIATE',
            category: 'Locking',
            instructor: 'David Johnson',
            timeDuring: 50,
            image: 'https://example.com/image4.jpg'
        },
        {
            id: '5',
            lessonName: 'K-Pop Dance Moves',
            level: 'ADVANCED',
            category: 'K-Pop',
            instructor: 'Lisa Kim',
            timeDuring: 55,
            image: 'https://example.com/image5.jpg'
        },
        {
            id: '6',
            lessonName: 'Bollywood Dance Fusion',
            level: 'INTERMEDIATE',
            category: 'Bollywood',
            instructor: 'Raj Singh',
            timeDuring: 45,
            image: 'https://example.com/image6.jpg'
        },
        {
            id: '7',
            lessonName: 'Salsa Fundamentals',
            level: 'BEGINNER',
            category: 'Salsa',
            instructor: 'Maria Garcia',
            timeDuring: 40,
            image: 'https://example.com/image7.jpg'
        },
        // Thêm nhiều dữ liệu mẫu khác...
    ];

    const programsData = [
        {
            id: '1',
            programName: 'Hip-Hop Masterclass',
            level: 'ADVANCED',
            category: 'Hiphop',
            instructor: 'Michael Johnson',
            lessonAmount: 12,
            image: 'https://example.com/image3.jpg'
        },
        {
            id: '2',
            programName: 'Ballet Training Program',
            level: 'BEGINNER',
            category: 'Ballet',
            instructor: 'Sarah Lee',
            lessonAmount: 8,
            image: 'https://example.com/image4.jpg'
        },
        {
            id: '3',
            programName: 'Contemporary Fusion',
            level: 'INTERMEDIATE',
            category: 'Contemporary',
            instructor: 'Sophia White',
            lessonAmount: 10,
            image: 'https://example.com/image8.jpg'
        },
        {
            id: '4',
            programName: 'Hip-Hop Dance Crew',
            level: 'ADVANCED',
            category: 'Hiphop',
            instructor: 'Jason Lee',
            lessonAmount: 15,
            image: 'https://example.com/image9.jpg'
        },
        {
            id: '5',
            programName: 'Latin Dance Party',
            level: 'BEGINNER',
            category: 'Latin',
            instructor: 'Carlos Martinez',
            lessonAmount: 8,
            image: 'https://example.com/image10.jpg'
        },
        {
            id: '6',
            programName: 'Urban Dance Showcase',
            level: 'ADVANCED',
            category: 'Urban',
            instructor: 'Tyler Johnson',
            lessonAmount: 12,
            image: 'https://example.com/image11.jpg'
        },
        {
            id: '7',
            programName: 'Breakdance Workshop',
            level: 'INTERMEDIATE',
            category: 'Breaking',
            instructor: 'Eddie Chen',
            lessonAmount: 8,
            image: 'https://example.com/image12.jpg'
        },

    ];

    // Chuẩn hóa dữ liệu style trong lessonsData và programsData
    lessonsData.forEach(item => item.category = item.category.toUpperCase());
    programsData.forEach(item => item.category = item.category.toUpperCase());

    const filteredData = selectedOption === 'LESSONS' ? lessonsData.filter(item =>
        (selectedLevel ? item.level === selectedLevel : true) &&
        (selectedStyles.length ? selectedStyles.some(style => item.category === style.toUpperCase()) : true)
    ) : programsData.filter(item =>
        (selectedLevel ? item.level === selectedLevel : true) &&
        (selectedStyles.length ? selectedStyles.some(style => item.category === style.toUpperCase()) : true)
    );



    const handleClose = () => {
        navigation.navigate('Library');
    };

    const handleFilterPress = () => {
        navigation.navigate('FilterScreen', {
            fromResultScreen: true,
            selectedOption,
            selectedLevel,
            selectedStyles
        });
    };

    const renderItem = ({ item }) => {
        if (selectedOption === 'LESSONS') {
            return <Lesson2Component lessons={item} handleNav={() => handleNavDetailLesson(item)} />;
        } else if (selectedOption === 'PROGRAMS') {
            return <ProgramComponent program={item} handleNav={() => handleNavDetailProgram(item)} />;
        } else {
            // Xử lý trường hợp không xác định
            return null;
        }
    };

    const handleNavDetailLesson = (lesson) => {
        navigation.navigate('Lesson', { isOwner: false, lesson });
    }

    const handleNavDetailProgram = (program) => {
        navigation.navigate('Program', { program });
    };


    // Tính tổng số filter đã chọn
    const totalFilters = (selectedLevel ? 1 : 0) + selectedStyles.length;

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Results</Text>
                <View style={styles.headerIcons}>
                    <TouchableOpacity
                        style={styles.filterButton}
                        onPress={handleFilterPress}
                    >
                        <Ionicons name="filter-outline" size={30} color="black" />
                        {totalFilters > 0 && (
                            <View style={styles.filterCount}>
                                <Text style={styles.filterCountText}>{totalFilters}</Text>
                            </View>
                        )}
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleClose}>
                        <Ionicons name="close-outline" size={30} color="black" />
                    </TouchableOpacity>
                </View>
            </View>
            <FlatList
                data={filteredData}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                contentContainerStyle={styles.flatListContainer}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
        justifyContent: 'center'
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black'
    },
    headerIcons: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    filterButton: {
        marginRight: 10,
        position: 'relative',

    },
    filterCount: {
        position: 'absolute',
        top: -5,
        right: -5,
        backgroundColor: Colors.primaryPupple,
        borderRadius: 10,
        width: 20,
        height: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    filterCountText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 12,
    },
    card: {
        backgroundColor: '#f0f0f0',
        borderRadius: 10,
        marginBottom: 20,
        overflow: 'hidden',
        elevation: 2,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 2,
        shadowOffset: { width: 1, height: 1 },
    },
    image: {
        width: '100%',
        height: 200,
    },
    cardContent: {
        padding: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black'
    },
    tagsContainer: {
        flexDirection: 'row',
        marginTop: 10,
    },
    tag: {
        backgroundColor: 'black',
        color: 'white',
        borderRadius: 5,
        padding: 5,
        marginRight: 5,
        fontSize: 12,
    },
    flatListContainer: {
        paddingBottom: 20, // Thêm padding dưới cho FlatList
        justifyContent: 'center'
    },
});

export default ResultScreen;
