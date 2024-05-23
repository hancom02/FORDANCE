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

    const handleGoBack = () => {
        navigation.goBack();
    };

    // Function to handle the action when the "..." is pressed
    const handleMoreOptions = (lesson) => {
        // Add your logic here
        console.log("More options pressed for lesson:", lesson.lessonName);
        setSelectedLesson(lesson);
        setShowDeleteConfirmation(true);
    };

    // Function to delete the selected lesson
    const handleDeleteLesson = () => {
        // Add logic to delete the lesson here
        console.log("Deleting lesson:", selectedLesson.lessonName);
        setShowDeleteConfirmation(false);
    };

    const handleCloseModal = () => {
        setShowDeleteConfirmation(false);
    };

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
                            <View style={{ marginBottom: 16, width: '100%' }}>
                                <SmallerLessonComponent
                                    lesson={item}

                                // handleNav={() => handleNavDetailLesson()}
                                />
                                <TouchableOpacity style={styles.deleteButton} onPress={() => handleMoreOptions(item)}>
                                    <Text style={{ fontSize: 20, color: 'black', marginRight: 10, height: 50 }}>...</Text>
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
        width: 50,
        right: 20,
        top: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    overlayTouchable: {
        ...StyleSheet.absoluteFillObject,
    },
    modalContainer: {
        position: 'absolute',
        bottom: 0,
        width: width,
        backgroundColor: 'white',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
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
