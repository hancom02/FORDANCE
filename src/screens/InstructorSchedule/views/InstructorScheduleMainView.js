import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from '../../../values/colors';
import OfflineLessonComponent from '../../../components/OfflineLessonComponent';
import React, {useEffect, useState} from 'react';
import {useQuery} from 'react-query';
import getOfflineLesson from '../../../api/lesson/getOffline';

const InstructorScheduleMainView = props => {
  const {navigation, route, updatedLesson} = props;

  const {data: lessons} = useQuery({
    queryKey: ['offline-lessons'],
    queryFn: getOfflineLesson,
  });

  const handlePress = lesson => {
    navigation.navigate('RegisterList', {lesson});
  };

  const handleNavAddNewClass = () => {
    navigation.navigate('AddNewClass');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={{flexDirection: 'column'}}>
          <Text style={styles.textHeader}>SCHEDULE</Text>
          <Text style={styles.headerTitle}>For Offline</Text>
        </View>
        <View style={{flexDirection: 'column'}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-end',
              marginBottom: 10,
            }}>
            <TouchableOpacity>
              <Ionicons name="notifications-outline" size={25} color="black" />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles.addButton}
            onPress={handleNavAddNewClass}>
            <Text style={styles.addButtonText}>Add new class</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Text style={[styles.headerTitle, {alignSelf: 'center'}]}>
        MY OFFLINE CLASS
      </Text>
      <View style={styles.contentContainer}>
        <FlatList
          data={lessons || []}
          renderItem={({item}) => (
            <View style={{marginBottom: 20, width: '100%'}}>
              <OfflineLessonComponent
                offlinelessons={item}
                handlePress={() => handlePress(item)}
              />
            </View>
          )}
          horizontal={false}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginVertical: 10,
    height: 100,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  textHeader: {
    marginBottom: 10,
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
    textTransform: 'uppercase',
  },
  addButton: {
    backgroundColor: Colors.primaryPupple,
    width: '100%',
    borderRadius: 5,
    padding: 10,
  },
  addButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
  },
  contentContainer: {
    flexGrow: 1,
    marginTop: 10,
    padding: 16,
    width: '100%',
    paddingBottom: 140,
  },
});

export default InstructorScheduleMainView;
