const { Vibration, View, StyleSheet, Text, Image, TouchableOpacity, Dimensions } = require("react-native")
import Ionicons from 'react-native-vector-icons/Ionicons';
import InstructorLessonMoreComponent from './InstructorLessonMoreComponent';
import { useState } from 'react';

// type LessonType = {
//     name: String;
//     introduce: String;
//     level: String;
//     category: String;
//     total_time: String;
//     image_link: String;
//     video_URL: String;
//     instructor: InstructorType;
//     community: CommunityType;
//     offline_lesson: OfflineLessonType;

// }

const SmallerLessonComponent2 = (props) => {
    const {
        lesson,
        handleNav,
        // isShowMoreAction,
        onPressOpenMoreAction,
        onPressCloseMoreAction,
    } = props;

    // const [isShowMoreAction, setisShowMoreAction] = useState(false);
    // const onPressOpenMoreAction = () => {
    //     console.log("ON FUNCT: onPressOpenMoreAction")
    //     setisShowMoreAction(true);
    // }
    // const onPressCloseMoreAction = () =>
    // {
    //     setisShowMoreAction(false);
    // }

    return (
        <TouchableOpacity style={styles.container} onPress={handleNav}>
            <View style={styles.firstContainer}>
                <Image style={styles.image} source={{ uri: lesson.image_link }} />
                <View style={styles.textContentContainer}>
                    <Text numberOfLines={2} ellipsizeMode='tail' style={styles.textLessonName}>{lesson.name}</Text>
                    <Text style={styles.textTime}>{lesson.total_time}</Text>
                </View>
            </View>
            <TouchableOpacity style={styles.secondContainer} onPress={onPressOpenMoreAction}>
                <Ionicons name="ellipsis-vertical" size={28} color='black' />
            </TouchableOpacity>

            {/* {isShowMoreAction && 
                <InstructorLessonMoreComponent 
                    onClose={onPressCloseMoreAction} 
                    // onDownloadFile={onPressDownloadFile}
                />
            } */}
        </TouchableOpacity>
    )
}
export default SmallerLessonComponent2;

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width * 0.94,
        height: 104,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',

        //backgroundColor: 'pink'
    },
    firstContainer: {
        width: '90%',
        flexDirection: 'row',
        alignItems: 'center',

        // backgroundColor: 'green'
    },
    secondContainer: {
        width: '10%'
    },
    textContentContainer: {
        width: '50%'
    },
    textLessonName: {
        fontSize: 19,
        fontWeight: '700',
        color: 'black',
        marginBottom: 4
    },
    textTime: {
        fontSize: 14,
        fontWeight: '400',
        color: 'black'
    },
    image: {
        width: '48%',
        height: 100,
        borderRadius: 5,
        marginRight: 16,
    }

})