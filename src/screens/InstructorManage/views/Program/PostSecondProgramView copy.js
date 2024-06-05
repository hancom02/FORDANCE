import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView, TextInput } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from '../../../../values/colors';

const PostSecondProgramView = (props) => {
    const {
        navigation,
    } = props;

    const handleGoBack = () => {
        navigation.goBack();
    };

    const [title, setTitle] = useState('');
    const [introduce, setIntroduce] = useState('');
    const [learn, setLearn] = useState('');
    const [need, setNeed] = useState('');
    const [openLevel, setOpenLevel] = useState(false);
    const [valueLevel, setValueLevel] = useState(null);
    const [itemsLevel, setItemsLevel] = useState([
        { label: 'Beginner', value: 1 },
        { label: 'Intermediate', value: 2 },
        { label: 'Advanced', value: 3 },
    ]);

    const [openCategories, setOpenCategories] = useState(false);
    const [valueCategories, setValueCategories] = useState(null);
    const [itemsCategories, setItemsCategories] = useState([
        { label: 'Hip Hop', value: 1 },
        { label: 'Kpop', value: 2 },
        { label: 'Ballet', value: 3 },
        { label: 'Jazz', value: 4, },
        { label: 'Street Dance', value: 5 },
        { label: 'Test', value: 6 }
    ]);

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
            <ScrollView contentContainerStyle={styles.scrollViewContainer}>

            </ScrollView>
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
    },

});

export default PostSecondProgramView;
