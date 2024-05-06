import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";

const LessonComponent = (props) => {
    const {
        lessons
    } = props;



    return (
        <View style={styles.container}>
            <ImageBackground
                source={{uri: lessons.image}}
                style={styles.background}
            >
                <View style={styles.contentContainer}>
                    <View style={{width: '100%', height: '50%', paddingVertical: 16}}>
                        <View style={styles.levelContainer}>
                            <Text style={styles.textLevel}>{lessons.level}</Text>
                        </View>
                        <Text style={styles.textName}>{lessons.lessonName}</Text>
                    </View>

                    <View style={{width: '100%', height: '50%', justifyContent:'center'}}>
                        <Text style={styles.textChoreo}>{lessons.category}</Text>
                        <Text style={styles.textInstructor}>{lessons.instructor}</Text>
                    </View>
                </View>
            </ImageBackground>
        </View>
    )
}

export default LessonComponent;

const styles = StyleSheet.create({
    container: {
        width: 340,
        height: 180,
        marginRight: 8,
        borderRadius: 10,
        borderWidth: 0,
        overflow: 'hidden',
        backgroundColor: 'pink'
    },
    background: {
        flex: 1,
        resizeMode: 'contain', // 'cover', 'contain', 'stretch', 'repeat', 'center'
        justifyContent: 'center', // 'center', 'flex-start', 'flex-end', 'space-between', 'space-around'
        width: '100%',
        height: '100%',

        borderRadius: 20,
        // backgroundColor: 'pink'
    },
    contentContainer: {
        width: '100%',
        justifyContent: 'center',
        paddingHorizontal: 16,

    },
    levelContainer: {
        width: 80,
        height: 20,
        paddingHorizontal: 8,
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 3,
        marginBottom: 8,
        backgroundColor: 'orange'
    },
    textLevel: {
        width: 'auto',
        color: 'white',
        fontSize: 11,
    },
    textName: {
        fontSize: 22,
        fontWeight: '600',
        color: 'black'
    },
    textChoreo: {
        color: 'black'
    },
    textInstructor: {
        color: 'black'
    },
})