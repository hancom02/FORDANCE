import { Text, View, StyleSheet, TouchableOpacity, ImageBackground } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from 'react-native-vector-icons/Ionicons';
import React from 'react';
import { format } from 'date-fns';

const OfflineLessonComponent = (props) => {
    const { offlinelessons, handlePress } = props;

    const formattedStartDate = format(new Date(offlinelessons.startDate), 'dd/MM/yyyy');
    const formattedEndDate = offlinelessons.endDate ? format(new Date(offlinelessons.endDate), 'dd/MM/yyyy') : null;

    return (
        <TouchableOpacity style={styles.container} onPress={handlePress}>
            <ImageBackground
                source={{ uri: offlinelessons.image }}
                style={styles.background}
            >
                {/* <LinearGradient
                    colors={['rgba(0,0,0,0.8)', 'rgba(0,0,0,0)']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0.5, y: 0 }}
                    style={styles.gradient}
                /> */}
                <View style={styles.contentContainer}>
                    <Text style={styles.textName}>{offlinelessons.lessonName}</Text>
                    <Text style={styles.textInstructorName}>{offlinelessons.instructor}</Text>
                    <View style={styles.icon_textContainer}>
                        <Ionicons name="location" color="white" size={20} />
                        <Text style={styles.text}>{offlinelessons.location}</Text>
                    </View>
                    <View style={styles.icon_textContainer}>
                        <Ionicons name="calendar-clear-outline" color="white" size={20} />
                        <Text style={styles.text}>
                            {formattedStartDate}
                            {formattedEndDate ? ` - ${formattedEndDate}` : ''}
                        </Text>
                    </View>
                </View>
            </ImageBackground>
        </TouchableOpacity>
    )
}

export default OfflineLessonComponent;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 190,
        borderRadius: 10,
        overflow: 'hidden'
    },
    background: {
        flex: 1,
        resizeMode: 'cover',
    },
    gradient: {
        ...StyleSheet.absoluteFillObject,
    },
    contentContainer: {
        padding: 16,
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(0,0,0,0.3)', // Tạo nền cho văn bản để làm cho nó dễ đọc hơn
    },
    textName: {
        fontSize: 22,
        fontWeight: '800',
        color: 'white',
        marginBottom: 5,
    },
    textInstructorName: {
        fontSize: 20,
        fontWeight: '800',
        color: 'white',
        textTransform: 'uppercase',
        marginBottom: 5,
    },
    icon_textContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
    },
    iconText: {
        fontSize: 20,
        color: 'white',
        marginRight: 5,
    },
    text: {
        fontSize: 20,
        fontWeight: '800',
        color: 'white',
        marginLeft: 5,
    },
});
