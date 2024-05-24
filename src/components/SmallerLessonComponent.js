const { Vibration, View, StyleSheet, Text, Image, TouchableOpacity } = require("react-native")

const SmallerLessonComponent = (props) => {
    const {
        lesson,
        index,
        handleNav
    } = props;

    // console.log("LESSON IN SMALL COMPONENT: ,", lesson);

    return (
        <TouchableOpacity style={styles.container} onPress={handleNav}>
            <Text style={styles.textIndex}>{index}</Text>
            <Image style={styles.image} source={{ uri: lesson.lessonImage }} />
            <View>
                <Text style={styles.textLessonName}>{lesson.lessonName}</Text>
                <Text style={styles.textTime}>{lesson.totalTime}</Text>
            </View>
        </TouchableOpacity>
    )
}
export default SmallerLessonComponent;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 80,
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: ''

        // backgroundColor: 'pink'
    },
    textIndex: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'black',
        paddingHorizontal: 10
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