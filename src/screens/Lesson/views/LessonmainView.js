import { Text, View, StyleSheet, TouchableOpacity, FlatList, Button, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from 'react-native-vector-icons/Ionicons';
import React, { useState } from 'react';


import Colors from "../../../values/colors"
import CommunityComponent from "../../../components/CommunityComponent";
import VideoPlayer from "./VideoPalyer";

const LessonMainView = (props) => {
    const {
        navigation,
        comments,
    } = props;

    const LessonName = 'Lesson Name';
    const InstructorName = 'Instructor Name';
    const DancerName = 'Dancer Name';
    const Level = 'Beginner';
    const Style = 'Ballet';
    const Time = '10';
    const ImageLesson = 'https://sab.org/wp-content/uploads/2020/04/190508_sab_5222-scaled-e1588882431127.jpg';

    const [isShowVideo, setIsShowVideo] = useState(false);

    const handleNavigateCommunityDetail = () => {
        navigation.navigate('Community');
    }

    const handleNavVideoPlayer = () => {
        // console.log("NAV TO VIDEO PLAYER");

        setIsShowVideo(true);
        // <VideoPlayer 
        //     isShowVideo={isShowVideo}
        // />
    }

    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>

            <View style={styles.videoContainer}>
                {/* <View style={styles.video}>
                </View> */}
                <Image style={styles.video} source={{uri: ImageLesson}}/>
            </View>

            <View style={styles.iconContainer}>
                <TouchableOpacity style={[styles.icon, { marginLeft: 16 }]}>
                    <Ionicons name="heart-outline" size={30} color={Colors.primaryPupple} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.icon}>
                    <Ionicons name="cloud-download-outline" size={30} color={Colors.primaryPupple} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.icon}>
                    <Ionicons name="calendar-clear-outline" size={30} color={Colors.primaryPupple} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.icon}>
                    <Ionicons name="share-social-outline" size={30} color={Colors.primaryPupple} />
                </TouchableOpacity>
            </View>

            <View style={styles.container2}>
                <Text style={styles.textName}>{LessonName}</Text>
                <View style={styles.instructorContainer}>
                    <View style={styles.circle}></View>
                    <View style={styles.instructorInfo}>
                        <Text style={styles.textName}>{InstructorName}</Text>
                        {/* <Text style={styles.instructorSubtitle}>{DancerName}</Text> */}
                    </View>
                </View>
            </View>

            <View style={styles.infoContainer}>
                <View style={[styles.info, { alignItems: 'flex-start' }]}>
                    <View style={{ flexDirection: 'column', }}>
                        <Text style={styles.textInfo}>LEVEL</Text>
                        <Text style={styles.textInfo2}>{Level}</Text>
                    </View>
                </View>
                <View style={[styles.info, { alignItems: 'center' }]}>
                    <View style={{ flexDirection: 'column' }}>
                        <Text style={styles.textInfo}>STYLE</Text>
                        <Text style={styles.textInfo2}>{Style}</Text>
                    </View>
                </View>
                <View style={[styles.info, { alignItems: 'flex-end' }]} >
                    <View style={{ flexDirection: 'column' }}>
                        <Text style={styles.textInfo}>TIME</Text>
                        <Text style={styles.textInfo2}>{Time} min</Text>
                    </View>
                </View>

            </View>

            <View style={styles.communityContainer}>
                <View style={styles.container}>
                    <View style={styles.header}>
                        <Text style={styles.headerText}>Community</Text>
                        <TouchableOpacity onPress={handleNavigateCommunityDetail} >
                            <Text style={styles.joinHere}>Join Here</Text>
                        </TouchableOpacity>
                    </View>
                    <CommunityComponent comments={comments} />
                </View>
            </View>

           <TouchableOpacity style={styles.joinClassContainer} onPress={() => handleNavVideoPlayer()}>
                <Text style={styles.textJoinLesson}>JOIN LESSON</Text>
           </TouchableOpacity>

           {/* RENDER VIDEOPLAYER */}
           {isShowVideo && <VideoPlayer onClose={() => setIsShowVideo(false)}/>}
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    container2: {
        flexDirection: 'column',
        paddingHorizontal: 16,
    },
    videoContainer: {
        paddingHorizontal: 0,

    },
    video: {
        width: '100%',
        height: 200,
        // backgroundColor: 'blue',
    },
    iconContainer: {
        width: '100%',
        height: 50,
        alignItems: 'center',
        backgroundColor: 'white',
        flexDirection: 'row',
        borderColor: 'grey',
        borderWidth: 0.5,
        marginBottom: 15
    },
    instructorContainer: {
        flexDirection: 'row',
        marginTop: 20,
        paddingBottom: 16,
        borderColor: 'grey',
        borderBottomWidth: 0.5,
        alignItems: 'center',

        // backgroundColor: 'green'
    },
    circle: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: 'grey',
        marginRight: 20,
        // marginBottom: 10
    },

    instructorSubtitle: {
        fontSize: 16,

    },
    icon: {
        marginRight: 10,
    },
    backButton: {
        position: 'absolute',
        top: 10,
        left: 10,
        zIndex: 999,
        padding: 10,
        borderRadius: 5,
    },
    textName: {
        color: 'black',
        fontWeight: '700',
        fontSize: 16,

    },
    instructorInfo: {
        flexDirection: 'column',
        justifyContent: 'center',

        // backgroundColor: 'pink'
    },

    infoContainer: {
        marginTop: 10,
        flexDirection: 'row',
        height: 80,
        marginHorizontal: 16,
        borderColor: 'grey',
        borderBottomWidth: 0.5,

    },
    info: {
        flex: 1,
        justifyContent: 'center'
    },
    textInfo: {
        marginBottom: 5,
        fontSize: 16,
        fontWeight: '300',
        color: 'black'
    },
    textInfo2: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black'
    },
    communityContainer: {
        flex: 1,
        marginHorizontal: 16
    },
    containerJoin: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'

    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 15,
        marginBottom: 15,
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black'
    },
    joinHere: {
        color: Colors.primaryPupple,
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },
    joinClassContainer: {
        height: 50,
        marginHorizontal: 16,
        marginBottom: 16,
        backgroundColor: Colors.primaryPupple,
        borderRadius: 3,

        justifyContent: 'center',
        alignItems: 'center'
    },
    textJoinLesson: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
        letterSpacing: 2
    },
})

export default LessonMainView;