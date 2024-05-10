import { FlatList, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import MyHeader from "../../../components/MyHeader";

// ICON
import Ionicons from 'react-native-vector-icons/Ionicons';

// COMPONENT
import LessonComponent from "../../../components/LessonComponent";
import Lesson2Component from "../../../components/Lesson2Component";
import Lesson from "../../Lesson";
import Colors from "../../../values/colors";
import ProgramComponent from "../../../components/ProgramComponent";

const todayLesson = "Today Lessons";
const seeAll = "See All";
const danceprogram = "Dance Programs";
const saveLesson = "Save Lessons";
const danceLesson = 'Dance Lessons'

const HomeMainView = (props) => {
    const {
        navigation,
        lessons,
        todayLessons,
        danceLessons, 
        programs,
        saveLessons
        
    } = props;

    const propsHeader = {

    };

    const handleNavDetailLesson = () => {
        navigation.navigate('Lesson');
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

    return(
        <SafeAreaView style={styles.container}>
            <MyHeader{...propsHeader} />

            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <View style={styles.searchContainer}>
                    <TouchableOpacity>
                        <Ionicons name="search-outline" size={24} color='black'/>

                    </TouchableOpacity>
                </View>

                {/* LESSON CỤM ĐẦU */}
                <View style={styles.contentContainer}>
                    <View style={styles.lessons1Container}>
                        <FlatList
                            data={lessons}
                            renderItem={({item, index}) => 
                                <LessonComponent 
                                    lessons={item} 
                                    handleNav={handleNavDetailLesson}
                                />}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                        />
                    </View>
                </View>

                {/* LESSON CỤM 2 */}
                <View style={styles.todayLessonsContainer}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'baseline', paddingBottom: 16, paddingRight: 16}}>
                        <Text style={styles.textTitle}>{todayLesson}</Text>
                        <TouchableOpacity>
                            <Text style={styles.textSeeAll}>{seeAll}</Text>
                        </TouchableOpacity>
                    </View>

                    <View>
                            <FlatList
                                data={todayLessons}
                                renderItem={({item, index}) => 
                                <Lesson2Component 
                                    lessons={item} 
                                    handleNav={handleNavDetailLesson}
                                />}
                                horizontal
                                showsHorizontalScrollIndicator={false}
                            />
                    </View>
                </View>

                {/* LESSON CỤM 3 */}
                <View style={styles.todayLessonsContainer}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'baseline', paddingBottom: 16, paddingRight: 16}}>
                        <Text style={styles.textTitle}>{danceLesson}</Text>
                        <TouchableOpacity>
                            <Text style={styles.textSeeAll}>{seeAll}</Text>
                        </TouchableOpacity>
                    </View>

                    <View>
                            <FlatList
                                data={danceLessons}
                                renderItem={({item, index}) => 
                                <Lesson2Component 
                                    lessons={item} 
                                    handleNav={handleNavDetailLesson}
                                />}
                                horizontal
                                showsHorizontalScrollIndicator={false}
                            />
                    </View>
                </View>

                {/* PROGRAM LIST */}
                <View style={styles.todayLessonsContainer}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'baseline', paddingBottom: 16, paddingRight: 16}}>
                        <Text style={styles.textTitle}>{danceprogram}</Text>
                        <TouchableOpacity>
                            <Text style={styles.textSeeAll}>{seeAll}</Text>
                        </TouchableOpacity>
                    </View>

                    <View>
                        <FlatList
                            data={programs}
                            renderItem={({item, index}) => <ProgramComponent program={item} handleNav={() => handleNavDetailProgram(programData=item)}/>}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                        />
                    </View>
                </View>

                {/* SAVE LESSON */}
                <View>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'baseline', paddingBottom: 16, paddingRight: 16}}>
                        <Text style={styles.textTitle}>{saveLesson}</Text>
                        <TouchableOpacity>
                            <Text style={styles.textSeeAll}>{seeAll}</Text>
                        </TouchableOpacity>
                    </View>

                    <View>
                        <FlatList
                            data={saveLessons}
                            renderItem={({item, index}) => 
                                <Lesson2Component 
                                    lessons={item} 
                                    handleNav={handleNavDetailLesson}
                                />}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                        />
                    </View>
                </View>
                
            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeMainView;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: 'white'
        // paddingHorizontal: 16,

    },
    scrollContainer: {
        paddingBottom: 60,
        paddingLeft: 16,
    },
    searchContainer: {
        width: '100%',
        paddingVertical: 16,
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'space-between'
    },
    contentContainer: {
        width: '100%'
    },
    lessons1Container: {
        width: '100%',
        paddingBottom: 40,
    },
    todayLessonsContainer: {
        width: '100%',
        paddingBottom: 40,

        // backgroundColor: 'pink'
    },
    textTitle: {
        color: 'black',
        fontSize: 20,
        fontWeight: '800'

    },
    textSeeAll: {
        color: Colors.primaryPupple,
        fontSize: 14,
        fontWeight: '800'
    }


})