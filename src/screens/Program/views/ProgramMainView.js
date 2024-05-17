import { FlatList, Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// ICON
import Ionicons from 'react-native-vector-icons/Ionicons';
import ProgramDetailHeader from "../../../components/ProgramDeatailHeader";
import { useState } from "react";
import SmallerLessonComponent from "../../../components/SmallerLessonComponent";

const aboutInstructor = "About Instructor";
const experience = "Experience";
const aboutProgram = "About This Program"
const whatLearn = "What you will learn";
const whatNeed = "What you will need";

const ProgramMainView = (props) => {
    const {
        navigation,
        user,
        program,

    } = props;

    console.log("PROGRAM IN DETAIL SCREEN: ", program);

    const handleNavDetailLesson = () => {
        navigation.navigate('Lesson')
    } 

    const [content, setContent] = useState("Overview"); // State để xác định nội dung hiện tại

    return(
        <SafeAreaView style={styles.container}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>

            {/* ẢNH DEMO */}
            <View style={styles.videoContainer}>
                <ImageBackground 
                    style={styles.video}
                    source={{uri: program.image}}
                >
                </ImageBackground>
            </View>

            <ProgramDetailHeader onButtonPress={setContent}/>
            <View style={styles.contentContainer}>
                {content === "Overview" && 
                    <SafeAreaView>
                        <ScrollView style={styles.overviewContainer} showsVerticalScrollIndicator={false}>
                            {/* ABOUT INSTRUCTOR */}
                            <View style={styles.instructorContainer}>
                                <Text style={styles.titileOverviewText}>{aboutInstructor}</Text>
                                <View>
                                    <Text style={styles.textInstructor}>{program.instructor}</Text>
                                    <Image source={{uri: program.instructorImage}} style={styles.imageInstructor}/>
                                </View>
                                <View>
                                    <Text style={styles.textInstructor}>{experience}</Text>
                                    <View>
                                        <Text numberOfLines={4} ellipsizeMode='tail' style={styles.textNomal}>
                                            - Redbull Confest 2021
                                            {'\n'}- 2th winner Supper Dance Champion 2019 
                                            {'\n'}- ...
                                        </Text>
                                    </View>
                                </View>
                            </View>

                            {/* ABOUT THIS PROGRAM */}
                            <View style={styles.aboutProgramContainer}>
                                <Text style={styles.titileOverviewText}>{aboutProgram}</Text>
                                <Text style={styles.textNomal} numberOfLines={5} ellipsizeMode='clip'>This program...................................................................................................................................................................................................................</Text>
                            </View>

                            {/* WHAT YOU WILL LEARN */}
                            <View style={styles.whatLearnContainer}>
                                <Text style={styles.titileOverviewText}>{whatLearn}</Text>
                                <Text style={styles.textNomal} numberOfLines={5} ellipsizeMode='clip'>This program...................................................................................................................................................................................................................</Text>
                            </View>

                            {/* WHAT YOU WILL NEED */}
                            <View style={styles.whatNeedContainer}>
                                <Text style={styles.titileOverviewText}>{whatNeed}</Text>
                                <Text style={styles.textNomal} numberOfLines={5} ellipsizeMode='clip'>This program...................................................................................................................................................................................................................</Text>
                            </View>
                        </ScrollView>
                    </SafeAreaView>

                }
                {content === "Lessons" &&
                    <SafeAreaView style={styles.lessonContainer}>
                        {/* <ScrollView style={styles.lessonContainer}>

                        </ScrollView> */}
                        <FlatList 
                            data={program.lessons}
                            renderItem={({item, index}) => 
                                <View style={{marginBottom: 16}}>
                                    <SmallerLessonComponent
                                    lesson={item}
                                    index={index+1}
                                    handleNav={() => handleNavDetailLesson()}
                                />
                                </View>
                            }
                        />
                    </SafeAreaView>

                }
            </View>
        </SafeAreaView>
    )
}

export default ProgramMainView;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        paddingBottom: 60
    },
    backButton: {
        position: 'absolute',
        top: 10,
        left: 10,
        zIndex: 999,
        padding: 10,
        borderRadius: 5,
    },
    videoContainer: {
        paddingHorizontal: 0,

    },
    video: {
        width: '100%',
        height: 200,
        backgroundColor: 'blue',
    },
    contentContainer: {
        width: '100%',
        height: '100',
        // paddingHorizontal: 16,
        // paddingTop: 24,
        paddingBottom: 120,
        marginBottom: 60,

        // backgroundColor: 'green'
    },
    overviewContainer: {
        width: '100%',
        height: '100%',
        paddingTop: 24,
        paddingHorizontal: 16,

        backgroundColor: 'white'
    },
    lessonContainer: {
        width: '100%',
        height: '100%',
        paddingTop: 24,

        backgroundColor: 'white'

        // paddingHorizontal: 16,

    },
    instructorContainer: {
        width: '100%',
        paddingBottom: 32,
        // height: 'auto'
    },
    instructorContent: {
        marginTop: 16,
    },
    textInstructor: {
        fontSize: 18, 
        fontWeight: '400',
        color: 'black',

    },
    textNomal: {
        fontSize: 14,
        fontWeight: '400',
        color: 'black'
    },
    imageInstructor: {
        width: '100%',
        height: 180,
        borderRadius: 10,
        marginTop: 8,
        marginBottom: 16
    },
    aboutProgramContainer: {
        paddingBottom: 32
    },
    whatLearnContainer: {
        paddingBottom: 32

    },
    whatNeedContainer: {
        paddingBottom: 32

    },
    titileOverviewText: {
        fontSize: 20,
        fontWeight: '700',
        color: 'black',
    }
})