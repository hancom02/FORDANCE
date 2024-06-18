import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Modal from 'react-native-modal';
import PopUpModalAddClass from './PopUpModalAddClass';
import SmallerLessonComponent3 from '../../../components/SmallerLessonComponent3';
import {useSelector} from 'react-redux';
import {useQuery} from 'react-query';
import getDetailInstructor from '../../../api/instructor/getDetail';
import {useAuth} from '../../../stores/auth.store';

const AddNewOfflineClass = props => {
  const {navigation} = props;
  const [isModalVisible, setModalVisible] = useState(false);

  const {isStudent, id} = useAuth();

  const [lesson, setLesson] = useState(null);

  const {data} = useQuery({
    queryKey: ['detail instructor', id],
    queryFn: getDetailInstructor,
    refetchInterval: 1000,
    enabled: !isStudent,
  });

  const lessons = data?.lessons || [];

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleAddPress = lesson => {
    setLesson(lesson);
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.headerTitle}>Add New</Text>
          <Text style={styles.headerTitle}>Offline Class</Text>
        </View>
        <TouchableOpacity onPress={handleGoBack}>
          <Ionicons name="close-outline" size={30} color="black" />
        </TouchableOpacity>
      </View>
      <Text style={styles.textHeader}>My lessons</Text>
      <View style={styles.contentContainer}>
        <FlatList
          data={lessons}
          renderItem={({item}) => (
            <View style={styles.itemContainer}>
              <View style={{width: '90%'}}>
                <SmallerLessonComponent3 lesson={item} />
              </View>
              <TouchableOpacity
                style={styles.addButton}
                onPress={() => handleAddPress(item)}>
                <Ionicons name="add-circle-outline" size={24} color="black" />
              </TouchableOpacity>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={styles.scrollViewContainer}
          showsVerticalScrollIndicator={false}
        />
      </View>
      <Modal isVisible={isModalVisible}>
        <View style={styles.modalContent}>
          <PopUpModalAddClass lesson={lesson} onClose={handleCloseModal} />
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
  },
  header: {
    marginHorizontal: 20,
    marginVertical: 10,
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
    textTransform: 'uppercase',
  },
  textHeader: {
    marginTop: 20,
    marginBottom: 10,
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
    alignSelf: 'center',
  },
  contentContainer: {
    flex: 1,
    padding: 16,
  },
  text: {
    fontSize: 16,
    color: 'black',
    fontWeight: '400',
    textAlign: 'justify',
  },
  itemContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  addButton: {
    padding: 10,
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    height: 500,
  },
});

export default AddNewOfflineClass;
