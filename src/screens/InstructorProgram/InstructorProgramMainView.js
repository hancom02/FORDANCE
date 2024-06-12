import React, { useState } from "react";

const { View, StyleSheet, Dimensions, SafeAreaView } = require("react-native");
import { FlatList, Image, ImageBackground, ScrollView, Text, TextInput, TouchableOpacity,  } from "react-native";

// ICON
import Ionicons from 'react-native-vector-icons/Ionicons';
import SmallerLessonComponent from "../../components/SmallerLessonComponent";
import ProgramDetailHeader from "../../components/ProgramDeatailHeader";
import Colors from "../../values/colors";

const aboutInstructor = "About Instructor";
const experience = "Experience";
const aboutProgram = "About This Program"
const whatLearn = "What you will learn";
const whatNeed = "What you will need";

// type MyProps = {
//     // Định nghĩa kiểu của props ở đây
//     navigation,
//     instructorProgram
// }

const InstructorProgramMainView = (props) => {
   const {
        navigation,
        program,
   } = props

    const [isEditing, setIsEditing] = useState(false);
    const [introduce, setIntroduce] = useState(program.introduce);
    const [learn_what, setLearnWhat] = useState(program.learn_what);
    const [need_what, setNeedWhat] = useState(program.need_what);

    const [content, setContent] = useState("Overview"); // State để xác định nội dung hiện tại


    const handleEdit = () => setIsEditing(true);
    const handleSave = () => {
        setIsEditing(false);
        //Goi ham update tai day
    }
    const handleCancel = () => setIsEditing(false);

    const handleNavDetailLesson = () => {
        navigation.navigate('Lesson', { isOwner: true }); //Truyền vào lesson với isOwner = true
    }
    const handleDelete = () => {
        //Goi ham delete lesson o day
    }

    return(
        <SafeAreaView style={styles.container}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>

            {/* ẢNH DEMO */}
            <View style={styles.videoContainer}>
                <ImageBackground 
                    style={styles.video}
                    source={{uri: program.image_link}}
                >
                </ImageBackground>
            </View>

            <ProgramDetailHeader onButtonPress={setContent}/>
            <View style={styles.contentContainer}>
                {content === "Overview" && 
                    <SafeAreaView>
                        <ScrollView style={styles.overviewContainer} showsVerticalScrollIndicator={false}>
                            {/* EDIT */}
                            {!isEditing && (
                            <TouchableOpacity style={styles.editBtn} onPress={handleEdit}>
                                <Text style={styles.editBtnText}>EDIT</Text>
                            </TouchableOpacity>)}

                            {isEditing && (
                                <View style={styles.profileFooter}>
                                    <TouchableOpacity style={styles.saveBtn} onPress={handleSave}>
                                        <Text style={styles.saveBtnText}>SAVE</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.cancelBtn} onPress={handleCancel}>
                                        <Text style={styles.cancelBtnText}>CANCEL</Text>
                                    </TouchableOpacity>
                                </View>
                            )}

                            {/* ABOUT INSTRUCTOR */}
                            <View style={styles.instructorContainer}>
                                <Text style={styles.titileOverviewText}>{aboutInstructor}</Text>
                                <View>
                                    <Text style={styles.textInstructor}>{program.instructor.name}</Text>
                                    <Image source={{uri: program.instructor.image_link,}} style={styles.imageInstructor}/>
                                </View>
                                <View>
                                    <Text style={styles.textInstructor}>{experience}</Text>
                                    <View>
                                        <Text numberOfLines={4} ellipsizeMode='tail' style={styles.textNomal}>
                                            {/* - Redbull Confest 2021
                                            {'\n'}- 2th winner Supper Dance Champion 2019 
                                            {'\n'}- ... */}
                                            {program.instructor.prizes}
                                        </Text>
                                    </View>
                                </View>
                            </View>

                            {/* ABOUT THIS PROGRAM */}
                            <View style={styles.aboutProgramContainer}>
                                <Text style={styles.titileOverviewText}>{aboutProgram}</Text>
                                {isEditing ? (
                                    <TextInput
                                        style={styles.input}
                                        value={introduce}
                                        onChangeText={setIntroduce}
                                        color="black"
                                    />
                                    ) : (
                                        <Text style={styles.textNomal} numberOfLines={5} ellipsizeMode='clip'>{program.introduce}</Text>
                                )}
                            </View>

                            {/* WHAT YOU WILL LEARN */}
                            <View style={styles.whatLearnContainer}>
                                <Text style={styles.titileOverviewText}>{whatLearn}</Text>
                                {isEditing ? (
                                    <TextInput
                                        style={styles.input}
                                        value={learn_what}
                                        onChangeText={setLearnWhat}
                                        color="black"
                                    />
                                    ) : (
                                        <Text style={styles.textNomal} numberOfLines={5} ellipsizeMode='clip'>{program.learn_what}</Text>
                                )}
                            </View>

                            {/* WHAT YOU WILL NEED */}
                            <View style={styles.whatNeedContainer}>
                                <Text style={styles.titileOverviewText}>{whatNeed}</Text>
                                {isEditing ? (
                                    <TextInput
                                        style={styles.input}
                                        value={need_what}
                                        onChangeText={setNeedWhat}
                                        color="black"
                                    />
                                    ) : (
                                        <Text style={styles.textNomal} numberOfLines={5} ellipsizeMode='clip'>{program.need_what}</Text>
                                )}
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
                                    isOwner={true}
                                    index={index+1}
                                    handleNav={() => handleNavDetailLesson()}
                                    handleDelete={() => handleDelete()}
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

export default InstructorProgramMainView

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width,
        flex: 1,
        flexDirection: 'column',
        paddingBottom: 60,
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
    input: {
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 10,
        borderColor: '#ddd',
        borderWidth: 1,
        marginBottom: 5,
        width: '100%',
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
    editBtn: {
        // marginTop: 8,
        backgroundColor: Colors.primaryPupple,
        borderRadius: 20,
        padding: 10,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginBottom: 16,
    },
    editBtnText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '700',
    },
    profileFooter: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignSelf: 'center',
        width: '70%',
        marginTop: 10,
        marginBottom: 20,
    },
    saveBtn: {
        backgroundColor: Colors.primaryPupple,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        height: 30,
        width: 80,
        marginBottom: 8
    },
    saveBtnText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
    cancelBtn: {
        backgroundColor: '#bbb',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        height: 30,
        width: 70,
    },
    cancelBtnText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
    titileOverviewText: {
        fontSize: 20,
        fontWeight: '700',
        color: 'black',
    }
})