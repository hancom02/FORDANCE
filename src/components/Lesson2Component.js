import { ImageBackground, StyleSheet, Text, View } from "react-native";

const Lesson2Component = (props) => {
    const {
        lessons
    } = props;

    return (
        <View style={styles.container}>
            <View style={styles.container1}>
                <ImageBackground
                    source={{uri: lessons.image}}
                    style={styles.background}
                >
                    <View style={styles.contentContainer}>
                        <Text style={styles.textName}>{lessons.lessonName}</Text>                        
                    </View>
                </ImageBackground>
            </View>
            
            <View style={styles.container2}>
                <View style={styles.levelContainer}>
                    <Text style={styles.textLevel}>{lessons.level}</Text>
                </View>
                <View style={styles.categoryContainer}>
                    <Text style={styles.textCategory}>{lessons.category}</Text>
                </View>
                <View style={styles.instrucContainer}>
                    <Text style={styles.textInstructor}>{lessons.instructor}</Text>
                </View>
            </View>

            <View style={styles.container3}>
                <Text style={styles.textTime}>{lessons.timeDuring} minutes</Text>
            </View>
        </View>
    )
}

export default Lesson2Component;

const styles = StyleSheet.create({
    container: {
        width: 330,
        // height: 210,
        marginRight: 8,
        overflow: 'hidden',
        // backgroundColor: 'pink'
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
    container1: {
        width: '100%',
        height: 190,
        borderRadius: 10,
        overflow: 'hidden'
    },
    contentContainer: {
        width: '100%',
        height: '100%',
        // justifyContent: 'flex-end',
        paddingHorizontal: 16,
        paddingVertical: 16,
        // backgroundColor: 'pink'
    },
    container2: {
        flexDirection: 'row',
        paddingVertical: 8,
        paddingHorizontal: 8,
        alignContent: 'flex-start',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',

        // backgroundColor: 'green',
    },
    container3: {
        paddingHorizontal: 8
    },
    levelContainer: {
        width: 80,
        height: 20,
        paddingHorizontal: 8,
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 3,
        marginRight: 8,
        backgroundColor: 'orange'
    },
    categoryContainer: {
        width: 80,
        height: 20,
        paddingHorizontal: 8,
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 3,
        marginRight: 8,
        backgroundColor: 'black'
    },
    instrucContainer: {
        width: 80,
        height: 20,
        paddingHorizontal: 8,
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 3,
        marginRight: 8,
        backgroundColor: 'black'
    },
    textLevel: {
        width: 'auto',
        color: 'white',
        fontSize: 11
    },
    textName: {
        fontSize: 22,
        fontWeight: '600',
        color: 'black'
    },
    textCategory: {
        color: 'white',
        fontSize: 11
    },
    textInstructor: {
        color: 'white',
        fontSize: 11
    },
    textTime: {
        color: 'black',
        fontSize: 11
    },
})