import { FlatList, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import MyHeader from "../../../components/MyHeader";

// ICON
import Ionicons from 'react-native-vector-icons/Ionicons';
import LessonComponent from "../../../components/LessonComponent";
import Lesson2Component from "../../../components/Lesson2Component";

const todayLesson = "Today Lessons";
const seeAll = "See All";

const HomeMainView = (props) => {
    const {
        navigation,
        lessons,
        programs,
        saveLessons
        
    } = props;

    const propsHeader = {

    };

    return(
        <SafeAreaView style={styles.container}>
            <MyHeader{...propsHeader} />

            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <View style={styles.searchContainer}>
                    <TouchableOpacity>
                        <Ionicons name="search-outline" size={24} color='black'/>

                    </TouchableOpacity>
                </View>

                <View style={styles.contentContainer}>
                    <View style={styles.lessons1Container}>
                        <FlatList
                            data={lessons}
                            renderItem={({item, index}) => <LessonComponent lessons={item} />}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                        />
                    </View>
                </View>

                <View style={styles.todayLessonsContainer}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingBottom: 16}}>
                        <Text>{todayLesson}</Text>
                        <TouchableOpacity>
                            <Text>{seeAll}</Text>
                        </TouchableOpacity>
                    </View>

                    <View>
                            <FlatList
                                data={lessons}
                                renderItem={({item, index}) => <Lesson2Component lessons={item} />}
                                horizontal
                                showsHorizontalScrollIndicator={false}
                            />
                    </View>
                </View>

                <View style={styles.todayLessonsContainer}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingBottom: 16}}>
                        <Text>{todayLesson}</Text>
                        <TouchableOpacity>
                            <Text>{seeAll}</Text>
                        </TouchableOpacity>
                    </View>

                    <View>
                            <FlatList
                                data={lessons}
                                renderItem={({item, index}) => <Lesson2Component lessons={item} />}
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
        paddingHorizontal: 16,
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
        paddingBottom: 28,
    },
    todayLessonsContainer: {
        width: '100%',
        paddingBottom: 28,

        // backgroundColor: 'pink'
    },


})