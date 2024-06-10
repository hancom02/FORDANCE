import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, FlatList } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from '../../../../values/colors';

import SmallerLessonComponent from '../../../../components/SmallerLessonComponent';

const PostSecondProgramView = (props) => {
    const { navigation, route } = props;
    const [selectedItems, setSelectedItems] = useState([]);

    useEffect(() => {
        if (route.params?.selectedItems) {
            setSelectedItems(route.params.selectedItems);
            console.log('Selected Items:', route.params.selectedItems);
        }
    }, [route.params?.selectedItems]);

    const handleGoBack = () => {
        navigation.goBack();
    };

    const handleDeleteItem = (index) => {
        const updatedItems = [...selectedItems];
        updatedItems.splice(index, 1); // Loại bỏ item có index được truyền vào
        setSelectedItems(updatedItems); // Cập nhật danh sách
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>POST PROGRAM</Text>
                <TouchableOpacity onPress={handleGoBack}>
                    <Ionicons name="close-outline" size={24} color="black" />
                </TouchableOpacity>
            </View>
            <View style={styles.separator} />
            <View style={styles.lessonsContainer}>
                <Text style={styles.overviewtxt}>LESSONS</Text>
                <TouchableOpacity style={styles.uploadBtn} onPress={() => navigation.navigate('ChooseLesson')}>
                    <Text style={styles.buttonText}>UPLOAD</Text>
                </TouchableOpacity>
            </View>
            <View style={[styles.separator2, { marginHorizontal: 16 }]} />
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={[styles.normalButton, { marginRight: 10 }]}>
                    <Text style={styles.buttonText}>GO BACK</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.normalButton}>
                    <Text style={styles.buttonText}>FINISH</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                data={selectedItems}
                renderItem={({ item, index }) => (
                    <View style={styles.itemContainer}>
                        <View style={{ with: '80%' }}>
                            <SmallerLessonComponent lesson={item} index={index + 1} />
                        </View>
                        <TouchableOpacity onPress={() => handleDeleteItem(index)} style={styles.deleteButton}>
                            <Ionicons name="trash-outline" size={24} color="black" />
                        </TouchableOpacity>
                    </View>
                )}
                keyExtractor={(item, index) => index.toString()}
                contentContainerStyle={styles.scrollViewContainer}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
        backgroundColor: 'white'
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        marginVertical: 10,
        height: 30,
    },
    headerTitle: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
        textTransform: 'uppercase',
    },
    textHeader: {
        marginBottom: 10,
        fontSize: 25,
        fontWeight: 'bold',
        color: 'black',
    },
    scrollViewContainer: {
        flexGrow: 1,
    },
    lessonsContainer: {
        padding: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    separator: {
        height: 1,
        backgroundColor: 'lightgray',
        marginBottom: 10,
        elevation: 3,
    },
    separator2: {
        height: 1,
        backgroundColor: 'lightgray',
        marginBottom: 10
    },
    overviewtxt: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black'
    },
    uploadBtn: {
        width: '25%',
        height: 'auto',
        backgroundColor: '#5F64E2',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 14,
        color: 'white',
        paddingHorizontal: 16,
        paddingVertical: 10,
        fontWeight: '700'
    },
    titleContainer: {
        paddingHorizontal: 16
    },
    titleText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
        marginBottom: 10,
    },
    normalButton: {
        width: '25%',
        height: 'auto',
        backgroundColor: Colors.primaryPupple,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'flex-end',
        paddingHorizontal: 16,
        marginBottom: 20,
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingVertical: 10,
    },
    deleteButton: {
        padding: 10,
    },
});

export default PostSecondProgramView;
