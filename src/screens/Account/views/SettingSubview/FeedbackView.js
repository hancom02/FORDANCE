import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, TextInput } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faFaceLaughBeam, faFaceGrin, faFaceMeh, faFaceFrownOpen, faFaceAngry } from '@fortawesome/free-regular-svg-icons';
import Colors from '../../../../values/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';

const FeedbackView = (props) => {
    const { navigation } = props;

    const handleGoBack = () => {
        navigation.goBack();
    };

    const [selectedIcon, setSelectedIcon] = useState(null);
    const [comment, setComment] = useState('');

    const handleIconPress = (icon) => {
        setSelectedIcon(icon);
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
                    <Ionicons name="arrow-back" size={24} color="black" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Feedback</Text>
            </View>
            <View style={styles.separator} />
            <View style={styles.contentContainer}>
                <View>
                    <Text style={styles.text}>How would you rate your experience?</Text>
                    <View style={styles.ratingContainer}>
                        <TouchableOpacity
                            style={[styles.icon, selectedIcon === faFaceAngry && styles.selectedIcon]}
                            onPress={() => handleIconPress(faFaceAngry)}
                        >
                            <FontAwesomeIcon icon={faFaceAngry} color={selectedIcon === faFaceAngry ? 'white' : 'black'} size={30} />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.icon, selectedIcon === faFaceFrownOpen && styles.selectedIcon]}
                            onPress={() => handleIconPress(faFaceFrownOpen)}
                        >
                            <FontAwesomeIcon icon={faFaceFrownOpen} color={selectedIcon === faFaceFrownOpen ? 'white' : 'black'} size={30} />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.icon, selectedIcon === faFaceMeh && styles.selectedIcon]}
                            onPress={() => handleIconPress(faFaceMeh)}
                        >
                            <FontAwesomeIcon icon={faFaceMeh} color={selectedIcon === faFaceMeh ? 'white' : 'black'} size={30} />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.icon, selectedIcon === faFaceGrin && styles.selectedIcon]}
                            onPress={() => handleIconPress(faFaceGrin)}
                        >
                            <FontAwesomeIcon icon={faFaceGrin} color={selectedIcon === faFaceGrin ? 'white' : 'black'} size={30} />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.icon, selectedIcon === faFaceLaughBeam && styles.selectedIcon]}
                            onPress={() => handleIconPress(faFaceLaughBeam)}
                        >
                            <FontAwesomeIcon icon={faFaceLaughBeam} color={selectedIcon === faFaceLaughBeam ? 'white' : 'black'} size={30} />
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.textHeader}>Comment</Text>
                    <View style={styles.textContainer}>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter your feedback here..."
                            placeholderTextColor={'grey'}
                            value={comment}
                            onChangeText={setComment}
                            multiline={true}
                            numberOfLines={10}
                            textAlignVertical="top"
                        />
                    </View>
                </View>
                <TouchableOpacity style={styles.joinClassContainer} >
                    <Text style={styles.textJoinLesson}>Send Feedback</Text>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
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
    textHeader: {
        marginBottom: 10,
        fontSize: 25,
        fontWeight: 'bold',
        color: 'black',
    },
    contentContainer: {
        flex: 1,
        padding: 16,
        marginHorizontal: 10,
        justifyContent: 'space-between',
    },
    text: {
        fontSize: 16,
        color: 'black',
        fontWeight: '400',
        textAlign: 'justify',
    },
    separator: {
        height: 1,
        backgroundColor: 'lightgray',
        marginBottom: 10,
        elevation: 3,
    },
    ratingContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 30,
        paddingVertical: 20,
        alignItems: 'center',
    },
    icon: {
        padding: 5,
    },
    selectedIcon: {
        backgroundColor: Colors.primaryPupple,
        borderRadius: 30,
        padding: 5,
    },
    textContainer: {
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 5,
        paddingHorizontal: 10,
        marginTop: 10,
    },
    input: {
        height: 200,
        color: 'black',
    },
    joinClassContainer: {
        height: 50,
        marginHorizontal: 10,
        marginBottom: 16,
        backgroundColor: Colors.primaryPupple,
        borderRadius: 3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textJoinLesson: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
        letterSpacing: 2,
        textTransform: 'uppercase',
    },


});

export default FeedbackView;
