import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";
// import LinearGradient from 'react-native-linear-gradient';
import Colors from "../values/colors";

const LessonComponent = (props) => {
    const {
        lessons,
        handleNav,
    } = props;

    return (
        <View style={styles.container}>
            <ImageBackground
                source={{uri: lessons.image_link}}
                style={styles.background}
            >
                {/* <LinearGradient
                    colors={['rgba(0,0,0,0.8)', 'rgba(0,0,0,0)']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0.5, y: 0 }}
                    style={styles.gradient}
                /> */}

                <View style={styles.contentContainer}>
                    <View style={{ width: '100%', height: '50%', paddingVertical: 16 }}>
                        <View style={styles.level_seeDetailContainer}>
                            <View style={styles.levelContainer}>
                                <Text style={styles.textLevel}>{lessons.level}</Text>
                            </View>
                            <TouchableOpacity
                                style={styles.seeDetailContainer}
                                onPress={handleNav}
                            >
                                <Text style={styles.textSeeDetail}>See detail</Text>
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.textName}>{lessons.name}</Text>
                    </View>

                    <View style={{ width: '100%', height: '50%', justifyContent: 'center' }}>
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
        height: 190,
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
    gradient: {
        ...StyleSheet.absoluteFillObject,
    },
    contentContainer: {
        width: '100%',
        justifyContent: 'center',
        paddingHorizontal: 16,

    },
    level_seeDetailContainer: {
        flexDirection: 'row',
        height: 30,
        justifyContent: 'space-between',
        alignItems: 'baseline',

        // backgroundColor: 'pink'
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
        backgroundColor: 'orange'
    },
    seeDetailContainer: {
        width: '26%',
        height: '50%',
        alignItems: 'flex-end',

        // backgroundColor: 'white'
    },
    textLevel: {
        width: 'auto',
        color: 'white',
        fontSize: 11,
        fontWeight: '700'
    },
    textSeeDetail: {
        color: Colors.primaryPupple,
        fontSize: 12,
        fontWeight: '700'
    },
    textName: {
        fontSize: 22,
        fontWeight: '800',
        color: 'white'
    },
    textChoreo: {
        color: 'white',
        fontWeight: '700'
    },
    textInstructor: {
        color: 'white',
        fontWeight: '700'

    },
})
