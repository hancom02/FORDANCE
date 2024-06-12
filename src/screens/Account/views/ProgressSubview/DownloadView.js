import React, { useState } from "react";
import { Text, View, SafeAreaView, StyleSheet, FlatList, Dimensions, TouchableOpacity, Modal, Button } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import SmallerLessonComponent from "../../../../components/SmallerLessonComponent";

const { width, height } = Dimensions.get('window');
const imgWidth = width * 0.9;

const DownloadView = (props) => {
    const {
        navigation,
    } = props;


    const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false); // State để xác định xem pop-up xóa có nên được hiển thị hay không
    const [selectedLesson, setSelectedLesson] = useState(null); // State để lưu lesson được chọn để xóa

    //DATA
    const lessons = [
        {
            name: 'How to do plete',
            level: "INMEDIATE",
            category: "Ballet",
            instructor: "ABC",
            instructorImage: "https://www.giasutainangtre.vn/gstnt/uploaddata/images/ballet%20cho%20nguoi%20lon.jpg",
            total_time: '1:15',
            image_link: 'https://www.giasutainangtre.vn/gstnt/uploaddata/images/ballet%20cho%20nguoi%20lon.jpg',
            video_link: ' ',
        },
        {
            name: 'How to do catfish',
            level: "INMEDIATE",
            category: "Ballet",
            instructor: "ABC",
            instructorImage: "https://www.giasutainangtre.vn/gstnt/uploaddata/images/ballet%20cho%20nguoi%20lon.jpg",
            total_time: '1:15',
            image_link: 'https://bizweb.dktcdn.net/thumb/grande/100/356/785/articles/e5.jpg?v=1592195836593',
            video_link: ' ',
        },
        {
            name: 'How to do plete',
            level: "INMEDIATE",
            category: "Ballet",
            instructor: "ABC",
            instructorImage: "https://www.giasutainangtre.vn/gstnt/uploaddata/images/ballet%20cho%20nguoi%20lon.jpg",
            total_time: '1:15',
            image_link: 'https://www.giasutainangtre.vn/gstnt/uploaddata/images/ballet%20cho%20nguoi%20lon.jpg',
            video_link: ' ',
        },
        {
            name: 'How to do catfish',
            level: "INMEDIATE",
            category: "Ballet",
            instructor: "ABC",
            instructorImage: "https://www.giasutainangtre.vn/gstnt/uploaddata/images/ballet%20cho%20nguoi%20lon.jpg",
            total_time: '1:15',
            image_link: 'https://bizweb.dktcdn.net/thumb/grande/100/356/785/articles/e5.jpg?v=1592195836593',
            video_link: ' ',
        },
    ]

    const handleGoBack = () => {
        navigation.goBack();
    };

    // Function to handle the action when the "..." is pressed
    const handleMoreOptions = (lesson) => {
        // Add your logic here
        console.log("More options pressed for lesson:", lesson.name);
        setSelectedLesson(lesson);
        setShowDeleteConfirmation(true);
    };

    // Function to delete the selected lesson
    const handleDeleteLesson = () => {
        // Add logic to delete the lesson here
        console.log("Deleting lesson:", selectedLesson.name);
        setShowDeleteConfirmation(false);
    };

    const handleCloseModal = () => {
        setShowDeleteConfirmation(false);
    };

    const handleNavDetailLesson = (lesson) => {
        navigation.navigate('Lesson', {isOwner: false, lesson})
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
                    <Ionicons name="arrow-back" size={24} color="black" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Download</Text>
            </View>
            <View style={styles.contentContainer}>
                <View style={styles.itemContainer}>
                    <FlatList
                        data={lessons}
                        renderItem={({ item }) => (
                            <View style={{ marginBottom: 16, width: '100%', flexDirection: 'row', justifyContent: 'space-between' }}>
                                <SmallerLessonComponent
                                    lesson={item}

                                    handleNav={() => handleNavDetailLesson(item)}
                                />
                                <TouchableOpacity style={styles.deleteButton} onPress={() => handleMoreOptions(item)}>
                                    <Ionicons name="ellipsis-vertical" size={20} color="black" />
                                </TouchableOpacity>
                            </View>
                        )}
                    />
                </View>
            </View>

            {/* Modal delete */}
            {showDeleteConfirmation &&
                <Modal
                    visible={true}
                    animationType="fade"
                    transparent={true}
                >
                    <TouchableOpacity style={styles.overlay} onPress={handleCloseModal} />
                    <View style={styles.modalContainer}>
                        <View style={styles.modalContent}>
                            <TouchableOpacity style={styles.deleteModal} onPress={handleDeleteLesson}>
                                <Ionicons name="trash-outline" size={30} color="black"></Ionicons>
                                <Text style={styles.textDelete}>DELETE THIS DOWNLOAD</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            }
        </SafeAreaView >
    );
};

export default DownloadView;

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
    contentContainer: {
        flex: 1,
        width: '100%',
    },
    itemContainer: {
        flex: 1,
        marginTop: 20,
    },
    deleteButton: {
        position: 'absolute',
        width: 30,
        right: 0,
        top: 25
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContainer: {
        position: 'absolute',
        bottom: 0,
        width: width,
        backgroundColor: 'white',
        borderTopLeftRadius: 10,
        borderTopRadius: 10,
        padding: 20,
        alignItems: 'center',
        elevation: 5,
    },
    modalContent: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    deleteModal: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    textDelete: {
        fontSize: 16,
        fontWeight: '700',
        color: 'black',
        marginLeft: 10,
    },
});
