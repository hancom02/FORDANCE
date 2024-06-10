import { Dimensions, FlatList, StyleSheet, Text, View } from "react-native";
import ManageHeader from "../component/ManageHeader";
import Lesson2Component from "../../../components/Lesson2Component";
import WiderProgramComponent from "../../../components/WiderProgramComponent";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import SmallerLessonComponent2 from "../../../components/lessonComponents/SmallerLessonComponent2";
import InstructorLessonMoreComponent from "../../../components/lessonComponents/InstructorLessonMoreComponent";

const MyLessons = "My Lessons";
const MyPrograms = "My Programs"

const InstructorManageMainView = (props) => {
    const {
        navigation,
        myLessons,
        myPrograms,
    } = props;

    // console.log("MY LESSONS: ", myLessons);
    // console.log("MY PROGRAMS: ", myPrograms);

    const [content, setContent] = useState("My Lessons");

    const [expandedItem, setExpandedItem] = useState(null);
    const onPressOpenMoreAction = (lessonId) => {
        setExpandedItem(lessonId);
    };
    const onPressCloseMoreAction = () => {
        setExpandedItem(null);
    };

    const [isShowMoreAction, setisShowMoreAction] = useState(false);

    // const onPressOpenMoreAction = () => {
    //     console.log("ON FUNCT: onPressOpenMoreAction")
    //     setisShowMoreAction(true);
    // }
    // const onPressCloseMoreAction = () =>
    // {
    //     setisShowMoreAction(false);
    // }

    const handleNavDetailLesson = () => {
        navigation.navigate('Lesson', { tabBarVisible: false });
    }

    const handleNavDetailProgram = (
        programData
    ) => {
        // console.log("PROGRAM DATA AFTER PROPS FROM LIBRARY MAIN VIEW: ", programData);
        navigation.navigate('Program', {
            tabBarVisible: false,
            program: programData
        });
    }

    const handleNavPostLesson = () => {
        navigation.navigate('PostClassFirst');
    }

    const handleNavPostProgram = () => {
        navigation.navigate('PostProgramFirst');
    }


    return (
        <SafeAreaView style={styles.container}>
            <ManageHeader onPressButton={setContent} onPressPostClass={handleNavPostLesson} onPressPostProgram={handleNavPostProgram} />
            <View style={styles.contentContainer}>
                {content === "My Lessons" &&
                    <View style={styles.manageContainer}>
                        <Text style={styles.text}>{MyLessons}</Text>
                        <View style={styles.classesContainer}>
                            <FlatList
                                data={myLessons}
                                renderItem={({ item, index }) =>
                                    <View style={{ marginBottom: 16, width: '100%', }}>
                                        <View>
                                            <SmallerLessonComponent2
                                                lesson={item}
                                                handleNav={handleNavDetailLesson}
                                                onPressOpenMoreAction={() => onPressOpenMoreAction(item.lessonId)}
                                                onPressCloseMoreAction={onPressCloseMoreAction}
                                            />
                                        </View>
                                        {expandedItem === item.lessonId && (
                                            <View style={styles.lessonMoreContainer}>
                                                <InstructorLessonMoreComponent onClose={onPressCloseMoreAction} />
                                            </View>
                                        )}
                                    </View>
                                }
                                horizontal={false}
                                showsVerticalScrollIndicator={false}
                            />
                        </View>
                    </View>
                }
                {content === "My Programs" &&
                    <View style={styles.manageContainer}>
                        <Text style={styles.text}>{MyPrograms}</Text>
                        <View style={styles.programsContainer}>
                            <FlatList
                                data={myPrograms}
                                renderItem={({ item, index }) =>
                                    <View key={index} style={{ marginBottom: 24, width: '100%' }}>
                                        <WiderProgramComponent
                                            program={item}
                                            handleNav={() => handleNavDetailProgram(
                                                programData = item
                                            )}
                                        />
                                    </View>
                                }
                                showsVerticalScrollIndicator={false}
                            />
                        </View>
                    </View>
                }
            </View>
        </SafeAreaView>
    )
}

export default InstructorManageMainView;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: Dimensions.get('window').width,
        backgroundColor: 'white'
    },
    contentContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

        // backgroundColor: 'green'
    },
    manageContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    text: {
        position: "absolute",
        top: 0,
        left: 0,
        margin: 16,
        fontSize: 20,
        fontWeight: '700',
        color: 'black',
        alignSelf: 'flex-start',
    },
    classesContainer: {
        flex: 1,
        marginTop: 70,
        paddingHorizontal: 16,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',

        // backgroundColor: 'pink'
    },
    programsContainer: {
        flex: 1,
        paddingHorizontal: 16,
        marginTop: 70,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',

        // backgroundColor: 'pink'
    },
    instructorContainer: {
        flex: 1,
        // flexDirection: 'column',
        paddingHorizontal: 16,
        marginTop: 70,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',

        // backgroundColor: 'pink'
    },
    lessonMoreContainer: {
        position: 'absolute',
        height: '200%',
        width: '50%',
        top: 0,
        left: '50%',
        right: 0,
        bottom: 0,
    }
});
