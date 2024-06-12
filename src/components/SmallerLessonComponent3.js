const { View, StyleSheet, Text, Image, TouchableOpacity } = require("react-native")

const SmallerLessonComponent3 = (props) => {
    const {
        lesson,
        handleNav
    } = props;

    // console.log("LESSON IN SMALL COMPONENT: ,", lesson);

    return (
        <TouchableOpacity style={styles.container} onPress={handleNav}>
            <Image style={styles.image} source={{ uri: lesson.lessonImage }} />
            <View>
                <Text style={styles.textLessonName}>{lesson.lessonName}</Text>
                <Text style={styles.textTime}>{lesson.totalTime}</Text>
            </View>
        </TouchableOpacity>
    )
}
export default SmallerLessonComponent3;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 80,
        flexDirection: 'row',
        alignItems: 'center',
    },
    textLessonName: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'black'
    },
    textTime: {
        fontSize: 12,
        fontWeight: '400',
        color: 'black'
    },
    image: {
        width: 138,
        height: 80,
        borderRadius: 5,
        marginRight: 16,
    }
})