import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Button,
  Image,
  Modal,
  ScrollView,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DateTimePicker from '@react-native-community/datetimepicker';
import React, {useState, useEffect} from 'react';

import Colors from '../../../values/colors';
import CommunityComponent from '../../../components/CommunityComponent';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faAddressBook} from '@fortawesome/free-regular-svg-icons';
import VideoPlayer2 from '../../../components/VideoPlayer2';
import PopUpFormComponent from '../../../components/PopUpFormComponent';
import InstructorLessontab from '../components/InstructorLessonTab';
import ParticipantsItem from '../components/ParticipantItem';
import ScheduleLessonComponent from '../../../components/ScheduleLessonComponent';
import {useMutation, useQuery} from 'react-query';
import getDetailLesson from '../../../api/lesson/getDetail';
import {useAuth} from '../../../stores/auth.store';
import updateLesson from '../../../api/lesson/update';
import {saveLesson, unsaveLesson} from '../../../api/lesson/save';
import {
  fetchAllLessons,
  fetchSavedLessons,
} from '../../../redux/slices/lessonSlice';
import {useDispatch} from 'react-redux';
import {updateJoinLesson} from '../../../api/lesson/join';

const LessonMainView = props => {
  const dispatch = useDispatch();

  const {navigation, comments, lesson: _lesson, participants} = props;

  const {id: userId} = useAuth();

  const {data, refetch} = useQuery({
    queryKey: ['detail-lesson', _lesson.id],
    queryFn: getDetailLesson,
  });

  const {mutate} = useMutation({
    mutationFn: updateLesson,
    onSuccess: () => {
      refetch();
    },
  });

  const lesson = data || _lesson;

  const isOwner = userId === lesson?.instructor?.id;

  const [offlinelessons, setOfflineLessons] = useState();

  const [selectedDate, setSelectedDate] = useState(new Date());

  const [content, setContent] = useState('Community'); // State để xác định nội dung hiện tại
  const [isShowVideo, setIsShowVideo] = useState(false);
  const [isModalOfflineVisible, setModalOfflineVisible] = useState(false);
  const [isModalOfflineStudentVisible, setModalOfflineStudentVisible] =
    useState(false);
  const [isModalScheduleVisible, setIsModalScheduleVisible] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [isJoined, setIsJoined] = useState(false);

  const {mutate: saveLessonMutate} = useMutation({
    mutationFn: saveLesson,
    onSuccess: () => {
      dispatch(fetchSavedLessons());
    },
  });
  const {mutate: unsaveLessonMutate} = useMutation({
    mutationFn: unsaveLesson,
    onSuccess: () => {
      dispatch(fetchSavedLessons());
    },
  });

  const {mutate: mutateLessonJoinState} = useMutation({
    mutationFn: updateJoinLesson,
    onSuccess: () => {
      dispatch(fetchAllLessons());
    },
  });

  useEffect(() => {
    if (data) {
      setOfflineLessons({...data, location: data.address});
      setIsSaved(data?.isSaved);
      setIsJoined(data.isJoined);
    }
  }, [JSON.stringify(data)]);

  const handleNavigateCommunityDetail = () => {
    navigation.navigate('Community');
  };

  const handleNavVideoPlayer = () => {
    // console.log("NAV TO VIDEO PLAYER");

    setIsShowVideo(true);
  };

  const onChangeDate2 = (event, selectedDate) => {
    if (event.type === 'set') {
      setSelectedDate(selectedDate);
      setIsModalScheduleVisible(false);
    }
  };

  const handleSubmit = () => {
    // Xử lý logic submit form tại đây
    console.log('Form submitted!');
    // Đóng pop-up form
    setModalVisible(false);
  };

  const handleSubmitOffline = formData => {
    mutate({
      id: _lesson.id,
      startDate: formData.startDate,
      endDate: formData.endDate,
      address: formData.location,
    });
    setOfflineLessons({
      ...offlinelessons,
      instructorEmail: formData.instructorEmail,
      instructorPhone: formData.instructorPhone,
    });
    setModalOfflineVisible(false);
  };

  const handleSave = () => {
    if (isSaved) {
      setIsSaved(false);
      unsaveLessonMutate({id: _lesson.id});
    } else {
      setIsSaved(true);
      saveLessonMutate({id: _lesson.id});
    }
  };

  const handleJoin = () => {
    setIsJoined(!isJoined);
    mutateLessonJoinState({id: _lesson.id, isJoin: !isJoined});
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
        style={styles.backButton}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>

      <View style={styles.videoContainer}>
        <Image style={styles.video} source={{uri: lesson.imageUrl}} />
        <TouchableOpacity onPress={handleNavVideoPlayer}>
          <VideoPlayer2
            uri={lesson.videoUrl}
            visible={isShowVideo}
            setVisible={setIsShowVideo}
          />
        </TouchableOpacity>
      </View>

      {isOwner ? (
        // Instructor chỉ có 1 icon tạo lịch offline thôi, Khoa bỏ Modal set offline cho instructor vào đây
        <View style={styles.iconContainer}>
          <TouchableOpacity
            style={[styles.icon, {marginLeft: 16}]}
            onPress={() => setModalOfflineVisible(true)}>
            <FontAwesomeIcon
              icon={faAddressBook}
              size={25}
              color={Colors.primaryPupple}
            />
          </TouchableOpacity>
        </View>
      ) : (
        // Nội dung khi không phải là chủ sở hữu
        <View style={styles.iconContainer}>
          <TouchableOpacity
            style={[styles.icon, {marginLeft: 16}]}
            onPress={handleSave}>
            <Ionicons
              name={isSaved ? 'heart' : 'heart-outline'}
              size={30}
              color={Colors.primaryPupple}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.icon}>
            <Ionicons
              name="cloud-download-outline"
              size={30}
              color={Colors.primaryPupple}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.icon}
            onPress={() => setIsModalScheduleVisible(true)}>
            <Ionicons
              name="calendar-clear-outline"
              size={30}
              color={Colors.primaryPupple}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.icon}
            onPress={() => setModalOfflineStudentVisible(true)}>
            <FontAwesomeIcon
              icon={faAddressBook}
              size={25}
              color={Colors.primaryPupple}
            />
          </TouchableOpacity>
          {/* <TouchableOpacity style={styles.icon}>
                        <Ionicons name="arrow-redo-outline" size={30} color={Colors.primaryPupple} />
                    </TouchableOpacity> */}
        </View>
      )}

      <View style={styles.container2}>
        <Text style={styles.textName}>{lesson.name}</Text>

        {!isOwner && (
          <View style={styles.instructorContainer}>
            <Image
              source={{uri: lesson.instructorImage}}
              style={styles.circle}></Image>
            <View style={styles.instructorInfo}>
              <Text style={styles.textName}>{lesson.instructor?.name}</Text>
              {/* <Text style={styles.instructorSubtitle}>{DancerName}</Text> */}
            </View>
          </View>
        )}
      </View>

      <View style={styles.infoContainer}>
        <View style={[styles.info, {alignItems: 'flex-start'}]}>
          <View style={{flexDirection: 'column'}}>
            <Text style={styles.textInfo}>LEVEL</Text>
            <Text style={styles.textInfo2}>{lesson.level}</Text>
          </View>
        </View>
        <View style={[styles.info, {alignItems: 'center'}]}>
          <View style={{flexDirection: 'column'}}>
            <Text style={styles.textInfo}>STYLE</Text>
            <Text style={styles.textInfo2}>{lesson.category}</Text>
          </View>
        </View>
        <View style={[styles.info, {alignItems: 'flex-end'}]}>
          <View style={{flexDirection: 'column'}}>
            <Text style={styles.textInfo}>TIME</Text>
            <Text style={styles.textInfo2}>{lesson.total_time} min</Text>
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
              <CommunityComponent comments={comments} />
            </View>
          )}
          {content === 'Participants' && (
            <View style={styles.participantContainer}>
              <Text style={styles.headerText}>Participants</Text>
              <View style={styles.participantContent}>
                {console.log('PARTICIPANTS: ', participants)}
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

      <TouchableOpacity
        style={styles.joinClassContainer}
        onPress={() => {
          if (isOwner || isJoined) handleNavVideoPlayer();
          else handleJoin();
        }}>
        {isOwner || lesson?.isJoined ? (
          <Text style={styles.textJoinLesson}>WATCH VIDEO LESSON</Text>
        ) : (
          <Text style={styles.textJoinLesson}>
            {!isJoined ? 'JOIN LESSON' : 'WATCH VIDEO'}
          </Text>
        )}
      </TouchableOpacity>

      <Modal
        visible={isModalOfflineStudentVisible}
        animationType="fade"
        transparent={true}>
        <PopUpFormComponent
          handleSubmit={handleSubmit}
          offlinelessons={offlinelessons}
          handleCloseModal={() => {
            setModalOfflineStudentVisible(false);
          }}
        />
      </Modal>

      <Modal
        visible={isModalOfflineVisible}
        animationType="fade"
        transparent={true}>
        <ScheduleLessonComponent
          handleSubmit={handleSubmitOffline}
          offlinelessons={offlinelessons}
          handleCloseModal={() => {
            setModalOfflineVisible(false);
          }}
        />
      </Modal>

      <Modal visible={isModalScheduleVisible}>
        <DateTimePicker
          testID="selectDatePicker"
          value={selectedDate}
          mode="date"
          display="calendar"
          onChange={(event, selectedDate) => onChangeDate2(event, selectedDate)}
        />
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  container2: {
    marginTop: 12,
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
    backgroundColor: 'white',
  },
  textName: {
    color: 'black',
    fontWeight: '700',
    fontSize: 20,
    textTransform: 'uppercase',
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
    justifyContent: 'center',
  },
  textInfo: {
    marginBottom: 5,
    fontSize: 16,
    fontWeight: '300',
    color: 'black',
  },
  textInfo2: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  communityContainer: {
    flex: 1,
    marginHorizontal: 16,
  },
  containerJoin: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  participantContainer: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    // backgroundColor: 'pink'
  },
  participantContent: {
    width: '100%',
    height: 260,
    paddingTop: 16,
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
    color: 'black',
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
    alignItems: 'center',
  },
  textJoinLesson: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    letterSpacing: 2,
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    height: 500,
  },
});

export default LessonMainView;
