import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";

// ICON
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from "../values/colors";

const seeDetail = "See Detail";

const WiderProgramComponent = (props) => {
    const {
        program,
        handleNav,
    } = props;

    return (
        <View style={styles.container}>
            <ImageBackground
                source={{uri: program.image_link}}
                style={styles.backgroundContainer}
            >
                <View style={styles.contenContainer}>

                    {/* SEE ALL */}
                    <View style={styles.topContentContainer}>
                        <TouchableOpacity
                            onPress={handleNav}
                        >
                            <Text style={styles.textSeeDetail}>{seeDetail}</Text>
                        </TouchableOpacity>
                    </View>

                    {/* CONTTENT PHÍA DƯỚI */}
                    <View style={styles.bottomContentContainer}>
                        <View style={styles.level_lesson_Container}>
                            <View style={styles.levelContainer}>
                                <Text style={styles.textLevel}>{program.level}</Text>
                            </View>
                            <View style={styles.lessonContainer}>
                                <Ionicons name="play-circle-outline" size={14} color='white'/>
                                <Text style={styles.textLesson}> {program.lessons_amount} LESSONS</Text>
                            </View>
                        </View>

                        <Text style={styles.textName}>{program.name}</Text>

                        <View style={styles.category_instructor_Container}>
                            <View style={styles.categoryContainer}>
                                <Text style={styles.textCategory}>{program.category}</Text>
                            </View>
                            <View style={styles.dot}></View>
                            <View style={styles.instructorContainer}>
                                <Text style={styles.textInstructor}>{program.instructor.name}</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </ImageBackground>
        </View>
    )
}

export default WiderProgramComponent;

const styles = StyleSheet.create({
    container: {
        width: 360,
        height: 500,
        borderRadius: 10,
        overflow: 'hidden',
        marginRight: 8,


        // backgroundColor: 'pink'
    },
    backgroundContainer: {
        width: '100%',
        height: '100%',

        // backgroundColor: 'pink'

        // justifyContent: 'flex-end',
    },
    contenContainer: {
        width: '100%',
        height: '100%',
        justifyContent: 'space-between'
    },
    topContentContainer: {
        width: 'auto',
        height: '20%',
        paddingHorizontal: 16,
        paddingVertical: 16,
        alignItems: 'flex-end',

        // backgroundColor: 'pink'
    },
    bottomContentContainer: {
        width: '100%',
        height: '30%',
        paddingHorizontal: 16,
        paddingTop: 20,
        paddingBottom: 20,
        justifyContent: 'space-between',

        backgroundColor: 'rgba(0, 0, 0, 0.7)',
    },
    level_lesson_Container: {
        flexDirection: 'row',
        // width: '76%',
        // justifyContent: 'space-evenly'
    },
    levelContainer: {
        width: 100,
        height: 20,
        paddingHorizontal: 8,
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 3,
        marginBottom: 8,
        marginRight: 8,
        backgroundColor: 'orange'
    },
    lessonContainer: {
        flexDirection: 'row',
        width: 100,
        height: 20,
        paddingHorizontal: 8,
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 3,
        marginBottom: 8,
        backgroundColor: 'black'
    },
    category_instructor_Container: {
        // width: '50%',
        flexDirection: 'row',
        marginTop: 8

        // backgroundColor: 'pink'
    },
    categoryContainer: {
        width: 'auto',
        marginRight: 8,

        // backgroundColor: 'white'
    },
    dot: {
        width: 4,
        height: 4,
        borderRadius: 4,
        backgroundColor: 'white',
        alignSelf: 'center'
    },
    instructorContainer: {
        width: 'auto',
        marginLeft: 8

        // backgroundColor: 'white'
    },
    textSeeDetail: {
        fontSize: 12,
        fontWeight: '700',
        color: Colors.primaryPupple
    },
    textLevel: {
        fontSize: 11,
        fontWeight: '700',
        color: 'white'
    },
    textLesson: {
        fontSize: 11,
        fontWeight: '700',
        color: 'white'
    },
    textName: {
        fontSize: 22,
        fontWeight: '800',
        color: 'white'
    },
    textCategory: {
        fontSize: 12,
        fontWeight: '400',
        color: 'white'
    },
    textInstructor: {
        fontSize: 12,
        fontWeight: '400',
        color: 'white'
    },
})