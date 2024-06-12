import { Text, View, StyleSheet, TouchableOpacity, FlatList, Button, Image, Modal, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from 'react-native-vector-icons/Ionicons';
import React, { useState } from 'react';

import Colors from "../../../values/colors"
import CommunityComponent from "../../../components/CommunityComponent";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faAddressBook } from '@fortawesome/free-regular-svg-icons';
import VideoPlayer2 from "../../../components/VideoPlayer2";
import PopUpFormComponent from "../../../components/PopUpFormComponent";
import InstructorLessontab from "../components/InstructorLessonTab";
import ParticipantsItem from "../components/ParticipantItem";

const LessonMainView = (props) => {
    const {
        navigation,
        isOwner,
        comments,
        participants,
    } = props;

    console.log("IS OWNER LESSON: ", isOwner);

    const LessonName = 'Lesson Name';
    const InstructorName = 'Instructor Name';
    const DancerName = 'Dancer Name';
    const Level = 'Beginner';
    const Style = 'Ballet';
    const Time = '10';
    const ImageLesson = 'https://sab.org/wp-content/uploads/2020/04/190508_sab_5222-scaled-e1588882431127.jpg';
    const offlineLesson = {
        title: "Introduction to React Native",
        instructor: "John Doe",
        location: "123 Main Street, Cityville",
        time: "10:00 - 12:00",
        startDate: "20/04/2024",
        endDate: "25/04/20240",
    };
    const Username = "Username";
    const UserImageURL = "https://sab.org/wp-content/uploads/2020/04/190508_sab_5222-scaled-e1588882431127.jpg"

    const [content, setContent] = useState("Community"); // State để xác định nội dung hiện tại

    const [isShowVideo, setIsShowVideo] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);

    const handleNavigateCommunityDetail = () => {
        navigation.navigate('Community');
    }

    const handleNavVideoPlayer = () => {
        // console.log("NAV TO VIDEO PLAYER");

        setIsShowVideo(true);
    }

    const handleSubmit = () => {
        // Xử lý logic submit form tại đây
        console.log('Form submitted!');
        // Đóng pop-up form
        setModalVisible(false);
    };

    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity onPress={() => { navigation.goBack() }} style={styles.backButton}>
                <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>

            <View style={styles.videoContainer}>
                {/* <View style={styles.video}>
                </View> */}
                <Image style={styles.video} source={{ uri: ImageLesson }} />
                <TouchableOpacity onPress={handleNavVideoPlayer}>
                    <VideoPlayer2
                        uri={'https://s3.ap-southeast-2.amazonaws.com/fordance.com/videos/1000049593.mp4'}
                        visible={isShowVideo}
                        setVisible={setIsShowVideo} />
                    <Text>PLAY</Text>
                </TouchableOpacity>
            </View>

            {isOwner ? (
                // Instructor chỉ có 1 icon tạo lịch offline thôi, Khoa bỏ Modal set offline cho instructor vào đây
                <View style={styles.iconContainer}>
                    <TouchableOpacity style={[styles.icon, {marginLeft:16}]} onPress={() => (setModalVisible(true))}>
                        <FontAwesomeIcon icon={faAddressBook} size={25} color={Colors.primaryPupple} />
                    </TouchableOpacity>
                </View>
            ) : (
                // Nội dung khi không phải là chủ sở hữu
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
                    <TouchableOpacity style={styles.icon} onPress={() => (setModalVisible(true))}>
                        <FontAwesomeIcon icon={faAddressBook} size={25} color={Colors.primaryPupple} />
                    </TouchableOpacity>
                    {/* <TouchableOpacity style={styles.icon}>
                        <Ionicons name="arrow-redo-outline" size={30} color={Colors.primaryPupple} />
                    </TouchableOpacity> */}
                </View>
            )}

            {!isOwner && 
            <View style={styles.container2}>
                <Text style={styles.textName}>{LessonName}</Text>
                <View style={styles.instructorContainer}>
                    <View style={styles.circle}></View>
                    <View style={styles.instructorInfo}>
                        <Text style={styles.textName}>{InstructorName}</Text>
                        {/* <Text style={styles.instructorSubtitle}>{DancerName}</Text> */}
                    </View>
                </View>
            </View>}

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

            {/*THANH COMMUNITY VA PARTICIPNAT (STUDENT KO DC XEM PARTICIPANT)  */}
            {isOwner ? (
                <View>
                    <InstructorLessontab onButtonPress={setContent} />
                    {content === 'Community' && (
                        <View style={{paddingHorizontal: 16, height: 320}}>
                            <View style={styles.header}>
                                <Text style={styles.headerText}>Community</Text>
                                <TouchableOpacity onPress={handleNavigateCommunityDetail}>
                                    <Text style={styles.joinHere}>Join Here</Text>
                                </TouchableOpacity>
                            </View>
                            <CommunityComponent comments={comments}/>
                        </View>
                    )}
                    {content === "Participants" && (
                        <View style={styles.participantContainer}>
                            <Text style={styles.headerText}>Participants</Text>
                            <View style={styles.participantContent}>
                                {console.log("PARTICIPANTS: ", participants)}
                                <FlatList 
                                    data={participants}
                                    renderItem={({item, index}) => (
                                        <ParticipantsItem 
                                            key={index}
                                            image_link={item.image_link}
                                            name={item.name}
                                        />
                                    )}
                                />
                            </View>
                        </View>
                    )}
                </View>
            ) : (
                <View style={styles.communityContainer}>
                    <View style={styles.container}>
                        <View style={styles.header}>
                            <Text style={styles.headerText}>Community</Text>
                            <TouchableOpacity onPress={handleNavigateCommunityDetail}>
                                <Text style={styles.joinHere}>Join Here</Text>
                            </TouchableOpacity>
                        </View>
                        <CommunityComponent comments={comments} />
                    </View>
                </View>
            )}

            <TouchableOpacity style={styles.joinClassContainer} onPress={() => handleNavVideoPlayer()}>
                {isOwner && <Text style={styles.textJoinLesson}>WATCH VIDEO LESSON</Text>}
                {!isOwner && <Text style={styles.textJoinLesson}>JOIN LESSON</Text>}
            </TouchableOpacity>

            <Modal
                visible={modalVisible}
                animationType="fade"
                transparent={true}
            >
                <PopUpFormComponent handleSubmit={handleSubmit} offlinelessons={offlineLesson} handleCloseModal={() => { setModalVisible(false) }} />
            </Modal>
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white'
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
        // marginBottom: 15
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
        top: 16,
        left: 16,
        zIndex: 999,
        padding: 10,
        borderRadius: 30,
        backgroundColor: 'white'
    },
    textName: {
        color: 'black',
        fontWeight: '700',
        fontSize: 16,
        textTransform: 'uppercase'
    },
    instructorInfo: {
        flexDirection: 'column',
        justifyContent: 'center',

        // backgroundColor: 'pink'
    },

    infoContainer: {
        // marginTop: 10,
        flexDirection: 'row',
        height: 80,
        marginHorizontal: 16,
        borderColor: 'grey',
        borderBottomWidth: 0.5,

        // backgroundColor: 'pink'

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
    participantContainer: {
        paddingHorizontal: 16,
        paddingVertical: 16
        // backgroundColor: 'pink'
    },
    participantContent: {
        width: '100%',
        height: 260,
        paddingTop: 16
        // backgroundColor: 'green'
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