import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";
// import LinearGradient from 'react-native-linear-gradient';
import Colors from "../values/colors";

const Lesson2Component = (props) => {
    const {
        lessons,
        handleNav,

    } = props;

    return (
        <View>
            <View style={styles.container1}>
                <ImageBackground
                    source={{ uri: lessons.image_link }}
                    style={styles.background}
                >
                    {/* <LinearGradient
                        colors={['rgba(0,0,0,0.8)', 'rgba(0,0,0,0)']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 0.5, y: 0 }}
                        style={styles.gradient}
                    /> */}
                    <View style={styles.contentContainer}>
                        <Text style={styles.textName}>{lessons.name}</Text>
                        <TouchableOpacity
                            onPress={handleNav}
                        >
                            <Text style={styles.textSeeDetail}>See Detail</Text>
                        </TouchableOpacity>
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
                <Text style={styles.textTime}>{lessons.total_time} minutes</Text>
            </View>
        </View>
    )
}

export default Lesson2Component;

const styles = StyleSheet.create({
    container: {
        width: 340,
        // height: 210,
        marginRight: 8,
        overflow: 'hidden',
        // backgroundColor: 'pink'
    },
    background: {
        flex: 1,
        resizeMode: 'contain', // 'cover', 'contain', 'stretch', 'repeat', 'center'
        justifyContent: 'flex-start', // 'center', 'flex-start', 'flex-end', 'space-between', 'space-around'
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
    gradient: {
        ...StyleSheet.absoluteFillObject,
    },
    contentContainer: {
        width: '100%',
        // height: '50%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 16,

        // backgroundColor: 'rgba(255, 255, 255, 0.7)',
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
        width: 100,
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
    textSeeDetail: {
        fontSize: 12,
        fontWeight: '700',
        color: Colors.primaryPupple
    },
    textLevel: {
        width: 'auto',
        color: 'white',
        fontSize: 11,
        fontWeight: '700'
    },
    textName: {
        fontSize: 22,
        fontWeight: '800',
        color: 'white',
    },
    textCategory: {
        color: 'white',
        fontSize: 11,
        fontWeight: '700'
    },
    textInstructor: {
        color: 'white',
        fontSize: 11,
        fontWeight: '700'
    },
    textTime: {
        color: 'black',
        fontSize: 11
    },
})
