import { useState } from "react";
import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Lesson2Component from "../../../components/Lesson2Component";

const LessonsSubView = (props) => {
    const {
        navigation,
        // lessons,
        // categories,
    } = props;

    const lessons = [
        {
            lessonName: "Ballet Basic",
            category: "Ballet",
            instructor: "Ngoc Han",
            level: 'BEGINNER',
            timeDuring: 16,
            image: 'https://img.freepik.com/premium-photo/dance-ballet-studio-with-woman-dancer-training-practicing-dancing-performance-recital-rehearsal-artistic-perform-technique-with-young-female-school-production-art_590464-81910.jpg'

        },
        {
            lessonName: 'The Boy Is Mine',
            category: "Chogreophy",
            instructor: "Redy",
            level: "INTERMEDIATE",
            timeDuring: 16,
            image: "https://unica.vn/media/imagesck/1612428593_Choreography-la-gi.jpg?v=1612428593"
        },
    ]

    const handleNavDetailLesson = () => {
        navigation.navigate('Lesson', { tabBarVisible: false });
    }

    const [content, setContent] = useState("Classes");

    return(
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.contentContainer}>
                {content === "Classes" &&
                    <View style={styles.libraryContainer}>
                        <Text style={styles.text}>Classes</Text>
                        <View style={styles.classesContainer}>
                            {lessons.map((item, index) => 
                                <View key={index} style={{ marginBottom: 25 }}>
                                    <Lesson2Component 
                                        lessons={item}
                                        handleNav={handleNavDetailLesson}
                                    />
                                </View>

                            )}
                            {/* <FlatList
                                data={lessons}
                                renderItem={({ item, index }) =>
                                    <View style={{ marginBottom: 25 }}>
                                        <Lesson2Component
                                            lessons={item}
                                            handleNav={handleNavDetailLesson}
                                        />
                                    </View>
                                }
                                horizontal={false}
                                showsVerticalScrollIndicator={false}
                            /> */}
                        </View>
                    </View>
                }
                {content === "Programs" && <ProgramMainView />}
                {content === "Categories" && <CategoryMainView categories={categories} navigation={navigation} />}
                {content === "Instructors" && <InstructorMainView />}
            </View>

            </ScrollView>
        </SafeAreaView>
    )
}

export default LessonsSubView;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',

        backgroundColor: 'white'
    },
    contentContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    libraryContainer: {
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
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
})