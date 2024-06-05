import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView, TextInput, Dimensions } from 'react-native';
import Video from 'react-native-video';
import DropDownPicker from 'react-native-dropdown-picker';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from '../../../../values/colors';

const PostFirstProgramView = (props) => {
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
            <View style={styles.contentContainer}>
                <Text style={styles.overviewtxt}>OVERVIEW</Text>
                <View style={styles.separator2}></View>
                <TouchableOpacity style={styles.uploadBtn} onPress={() => navigation.navigate('PostProgramSecond')}>
                    <Text style={styles.buttonText}>ADD LESSON</Text>
                </TouchableOpacity>
            </View>
            <ScrollView contentContainerStyle={styles.scrollViewContainer}>
                <View style={styles.titleContainer}>
                    <Text style={styles.titleText}>Title</Text>
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter title here..."
                            placeholderTextColor={'grey'}
                            value={title}
                            onChangeText={setTitle}
                            multiline={true}
                            numberOfLines={10}
                            textAlignVertical="top"
                        />
                        <Text style={{ color: 'grey', fontSize: 14, alignSelf: 'flex-end', paddingRight: 5, paddingTop: 5, }}>
                            {`${title.length}/100`}
                        </Text>
                    </View>
                    <View style={styles.separator2} />
                </View>
                <View style={styles.titleContainer}>
                    <Text style={styles.titleText}>Introduce</Text>
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter introduce here..."
                            placeholderTextColor={'grey'}
                            value={introduce}
                            onChangeText={setIntroduce}
                            multiline={true}
                            numberOfLines={10}
                            textAlignVertical="top"
                        />
                        <Text style={{ color: 'grey', fontSize: 14, alignSelf: 'flex-end', paddingRight: 5, paddingTop: 5, }}>
                            {`${title.length}/300`}
                        </Text>
                    </View>
                    <View style={styles.separator2} />
                </View>
                <View style={styles.chooseContainer}>
                    <View style={styles.seperateContainer}>
                        <Text style={styles.titleText}>Level</Text>
                        <DropDownPicker
                            listMode="SCROLLVIEW"
                            scrollViewProps={{
                                nestedScrollEnabled: true,
                            }}
                            open={openLevel}
                            value={valueLevel}
                            items={itemsLevel}
                            setOpen={setOpenLevel}
                            setValue={setValueLevel}
                            setItems={setItemsLevel}
                            style={{
                                backgroundColor: '#fafafa',
                                width: '100%'
                            }}
                            dropDownContainerStyle={{
                                backgroundColor: '#dfdfdf',
                                width: '100%'
                            }}
                            textStyle={{
                                fontSize: 16,
                                color: '#000',
                            }}
                            zIndex={500}
                            dropDownDirection="BOT"
                        />
                    </View>
                    <View style={styles.separator3} />
                    <View style={styles.seperateContainer}>
                        <Text style={styles.titleText}>Category</Text>
                        <DropDownPicker
                            listMode="SCROLLVIEW"
                            scrollViewProps={{
                                nestedScrollEnabled: true,
                            }}
                            open={openCategories}
                            value={valueCategories}
                            items={itemsCategories}
                            setOpen={setOpenCategories}
                            setValue={setValueCategories}
                            setItems={setItemsCategories}
                            style={{
                                backgroundColor: '#fafafa',
                                width: '100%',
                                maxHeight: 150,
                                overflowY: 'auto',
                            }}
                            dropDownContainerStyle={{
                                backgroundColor: '#dfdfdf',
                                width: '100%',
                                maxHeight: 120,
                                overflowY: 'auto',
                            }}
                            textStyle={{
                                fontSize: 16,
                                color: '#000',
                            }}
                            zIndex={500}
                            dropDownDirection="BOT"
                        />
                    </View>
                </View>
                <View style={styles.titleContainer}>
                    <Text style={styles.titleText}>What they'll learn</Text>
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter here..."
                            placeholderTextColor={'grey'}
                            value={need}
                            onChangeText={setNeed}
                            multiline={true}
                            numberOfLines={10}
                            textAlignVertical="top"
                        />
                        <Text style={{ color: 'grey', fontSize: 14, alignSelf: 'flex-end', paddingRight: 5, paddingTop: 5, }}>
                            {`${title.length}/300`}
                        </Text>
                    </View>
                    <View style={styles.separator2} />
                </View>
                <View style={[styles.titleContainer, { marginBottom: 20 }]}>
                    <Text style={styles.titleText}>What they'll need</Text>
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter here..."
                            placeholderTextColor={'grey'}
                            value={title}
                            onChangeText={setTitle}
                            multiline={true}
                            numberOfLines={10}
                            textAlignVertical="top"
                        />
                        <Text style={{ color: 'grey', fontSize: 14, alignSelf: 'flex-end', paddingRight: 5, paddingTop: 5, }}>
                            {`${title.length}/300`}
                        </Text>
                    </View>
                </View>
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
    contentContainer: {
        padding: 16,
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
        marginTop: 10,
        marginBottom: 10
    },
    overviewtxt: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black'
    },
    uploadBtn: {
        width: 'auto',
        height: 'auto',
        backgroundColor: Colors.primaryPupple,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'flex-end',
        marginTop: 10,
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
    inputContainer: {},
    input: {
        height: 100,
        paddingHorizontal: 10,
    },
    chooseContainer: {
        width: '100%',
        flexDirection: 'row'
    },
    seperateContainer: {
        flex: 1,
        flexDirection: 'column',
        height: 100,

        marginHorizontal: 16,
    },
    separator3: {
        width: 1,
        backgroundColor: 'lightgray',
    }
});

export default PostFirstProgramView;
