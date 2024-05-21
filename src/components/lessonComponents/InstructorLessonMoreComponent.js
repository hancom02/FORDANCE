import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';

import Colors from "../../values/colors";
import { useState } from "react";

const InstructorLessonMoreComponent = (props) => {
    console.log("ON OPEN InstructorLessonMoreComponent");

    const {
        mylesson,
        onClose
    } = props;

    return (
        // <View style={styles.container}>
            <View style={styles.contentContainer}>
                <TouchableOpacity style={styles.editContainer}>
                    <View style={styles.iconContainer}>
                        <Ionicons name="add-outline" size={20} color='white'/> 
                    </View>
                    <Text style={styles.text}>Add to program</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.editContainer}>
                    <View style={styles.iconContainer}>
                        <Ionicons name="create-outline" size={20} color='white'/> 
                    </View>
                    <Text style={styles.text}>Edit</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.deleteContainer}>
                    <View style={styles.iconContainer}>
                        <Ionicons name="trash-outline" size={20} color='white'/> 
                    </View>
                    <Text style={styles.text}>Delete</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={onClose} style={styles.closeContainer}>
                    <View style={styles.iconContainer}>
                        <Ionicons name="close-outline" size={20} color='white'/> 
                    </View>
                    <Text style={styles.text}>Close</Text>
                </TouchableOpacity>
            </View>
        // </View>
    )
}

export default InstructorLessonMoreComponent;

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        width: '50%',
        height: '100%',
        top: 10,
        left: '50%',
        // right: 0,
        // bottom: 30,
        // justifyContent: 'center',
        alignItems: 'center',
        justifyContent: 'flex-start',
        // elevation: Platform.OS == 'android' ? 4 : 0,
        // backgroundColor: `rgba(0,0,0,0.5)`,
        // backgroundColor: Colors.primaryPupple,
        backgroundColor: 'white',
        paddingTop: 100,
        borderRadius: 12,
        borderWidth: 1,
    },
    contentContainer: {
        backgroundColor: 'black',
        width: '95%',
        paddingHorizontal: 10,
        // borderRadius: 12,
        // borderWidth: 1,
    },
    editContainer: {
        height: 30,
        flexDirection: 'row',
        alignItems: 'center'

    },
    deleteContainer: {
        height: 30,
        flexDirection: 'row',
        alignItems: 'center'

    },
    closeContainer: {
        height: 32,
        flexDirection: 'row',
        alignItems: 'center',
        borderTopWidth: 0.5,
        borderTopColor: 'white'
    },
    iconContainer: {
        width: 30
    },
    text: {
        color: 'white'
    }
})