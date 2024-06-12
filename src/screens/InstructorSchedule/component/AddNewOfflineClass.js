import React, { useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity, FlatList, } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Modal from 'react-native-modal';
import PopUpModalAddClass from './PopUpModalAddClass';
import SmallerLessonComponent3 from '../../../components/SmallerLessonComponent3';

const AddNewOfflineClass = (props) => {
    const { navigation } = props;
    const [isModalVisible, setModalVisible] = useState(false);

    const handleGoBack = () => {
        navigation.goBack();
    };

    const handleAddPress = (lesson) => {
        setModalVisible(true);
    };

    const handleCloseModal = () => {
        setModalVisible(false);
    };

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
    ];

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <View>
                    <Text style={styles.headerTitle}>Add New</Text>
                    <Text style={styles.headerTitle}>Offline Class</Text>
                </View>
                <TouchableOpacity onPress={handleGoBack} >
                    <Ionicons name="close-outline" size={30} color="black" />
                </TouchableOpacity>
            </View>
            <Text style={styles.textHeader}>My lessons</Text>
            <View style={styles.contentContainer}>
                <FlatList
                    data={lessons}
                    renderItem={({ item }) => (
                        <View style={styles.itemContainer}>
                            <View style={{ width: '90%' }}>
                                <SmallerLessonComponent3 lesson={item} />
                            </View>
                            <TouchableOpacity style={styles.addButton} onPress={handleAddPress}>
                                <Ionicons name="add-circle-outline" size={24} color="black" />
                            </TouchableOpacity>
                        </View>
                    )}
                    keyExtractor={(item, index) => index.toString()}
                    contentContainerStyle={styles.scrollViewContainer}
                    showsVerticalScrollIndicator={false}
                />
            </View>
            <Modal isVisible={isModalVisible}>
                <View style={styles.modalContent}>
                    <PopUpModalAddClass onClose={handleCloseModal} />
                </View>
            </Modal>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
    },
    header: {
        marginHorizontal: 20,
        marginVertical: 10,
        height: 60,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    headerTitle: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'black',
        textTransform: 'uppercase',
    },
    textHeader: {
        marginTop: 20,
        marginBottom: 10,
        fontSize: 25,
        fontWeight: 'bold',
        color: 'black',
        alignSelf: 'center',
    },
    contentContainer: {
        flex: 1,
        padding: 16,
    },
    text: {
        fontSize: 16,
        color: 'black',
        fontWeight: '400',
        textAlign: 'justify',
    },
    itemContainer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 10,
    },
    addButton: {
        padding: 10,
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        height: 500,
    },
});

export default AddNewOfflineClass;
