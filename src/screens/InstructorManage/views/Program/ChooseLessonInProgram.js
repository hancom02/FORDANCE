import React, { useState, useEffect } from 'react';
import { SafeAreaView } from "react-native-safe-area-context";
import { View, FlatList, StyleSheet, TouchableOpacity, Text, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from '../../../../values/colors';

const ChooseLessonInProgram = (props) => {
    const { navigation } = props;
    const [selectedItems, setSelectedItems] = useState([]);
    const [lessons, setLessons] = useState([]);

    useEffect(() => {
        const fetchedLessons = [
            // Các bài học
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
        ];

        let uniqueId = 1; // Biến đếm để tạo id duy nhất

        const uniqueLessons = fetchedLessons.map((lesson) => ({
            id: uniqueId++, // Sử dụng biến đếm làm id
            ...lesson,
        }));

        setLessons(uniqueLessons);
    }, []);

    const handleGoBack = () => {
        navigation.goBack();
    };

    const handlePressGoBack = () => {
        navigation.navigate('PostProgramSecond', { selectedItems });
    };
    const handlePress = (lesson) => {
        let newSelectedItems = selectedItems.slice(); // Tạo một bản sao của mảng selectedItems

        const existingIndex = newSelectedItems.findIndex(item => item.id === lesson.id);

        if (existingIndex !== -1) {
            // Nếu mục đã được chọn, hãy bỏ chọn nó
            newSelectedItems.splice(existingIndex, 1);
        } else {
            // Nếu mục chưa được chọn, hãy thêm nó vào mảng
            newSelectedItems.push(lesson);
        }

        // Sắp xếp lại mảng theo id
        // newSelectedItems.sort((a, b) => a.id - b.id);

        // Đánh chỉ số mới cho mỗi mục dựa trên vị trí của chúng trong mảng
        newSelectedItems.forEach((item, index) => {
            item.index = index + 1;
        });

        // Cập nhật selectedItems với các mục được chọn mới
        setSelectedItems(newSelectedItems);
    };


    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.videoContainer} onPress={() => handlePress(item)}>
            <Image source={{ uri: item.lessonImage }} style={styles.video} resizeMode="cover" />
            <TouchableOpacity
                style={[
                    styles.selectionButton,
                    selectedItems.some(selectedItem => selectedItem.id === item.id) ? { backgroundColor: Colors.primaryPupple } : null,
                ]}
                onPress={() => handlePress(item)}
            >
                <Text style={styles.selectionButtonText}>
                    {item.index || ''}
                </Text>
            </TouchableOpacity>
            {
                item.totalTime && (
                    <View style={styles.durationContainer}>
                        <Text style={styles.durationText}>{item.totalTime}</Text>
                    </View>
                )
            }
        </TouchableOpacity >
    );

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
                    <Ionicons name="close-outline" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.normalButton} onPress={handlePressGoBack}>
                    <Text style={styles.buttonText}>SAVE</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.separator} />
            <View style={styles.contentContainer}>
                <FlatList
                    data={lessons}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id.toString()}
                    numColumns={3}
                />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 20,
        marginVertical: 10,
        height: 30,
    },
    textHeader: {
        marginBottom: 10,
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
    },
    contentContainer: {
        flex: 1,
        padding: 16,
        marginHorizontal: 10,
    },
    separator: {
        height: 1,
        backgroundColor: 'lightgray',
        marginBottom: 10,
        elevation: 3,
    },
    videoContainer: {
        position: 'relative',
        margin: 5,
        width: '30%',
        aspectRatio: 1,
    },
    video: {
        width: '100%',
        height: '100%',
    },
    durationContainer: {
        position: 'absolute',
        bottom: 5,
        right: 5,
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        borderRadius: 3,
        padding: 2,
    },
    durationText: {
        color: '#fff',
        fontSize: 12,
    },
    buttonText: {
        fontSize: 14,
        color: 'white',
        paddingVertical: 5,
        fontWeight: '700',
    },
    normalButton: {
        width: '25%',
        height: 'auto',
        backgroundColor: Colors.primaryPupple,
        borderRadius: 15,
        marginLeft: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    selectedText: {
        color: 'white',
        fontSize: 20,
    },
    selectionButton: {
        position: 'absolute',
        top: 5,
        right: 5,
        width: 20,
        height: 20,
        borderRadius: 10,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
    },
    selectionButtonText: {
        fontSize: 12,
        color: 'white',
        textAlign: 'center',
        fontWeight: '500',
    },
});

export default ChooseLessonInProgram;
