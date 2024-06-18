import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from '../../../values/colors';
import {useQuery} from 'react-query';
import getDetailInstructor from '../../../api/instructor/getDetail';

const InstructorDetailView = props => {
  const {navigation, route} = props;

  const {instructor: _instructor} = route.params;

  const {data} = useQuery({
    queryKey: ['detail-instructor', _instructor.id],
    queryFn: getDetailInstructor,
  });

  const instructor = data || _instructor;

  // console.log("INSTRUCTOR IN DETAIL SCREEN: ", instructor);

  const handleNavDetailLesson = lesson => {
    console.log('IN handleNavDetailLesson');
    navigation.navigate('Lesson', {isOwner: false, lesson});
  };

  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        key={index}
        style={styles.componentContainer}
        onPress={() => handleNavDetailLesson(item)}>
        <Image style={styles.imageComponent} source={{uri: item.imageUrl}} />

        <View style={{}}>
          <Text style={styles.textLessonName}>{item.name}</Text>
          <Text style={styles.textTime}>{item.description}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backButton}>
        <Ionicons name="arrow-back" size={24} color="white" />
      </TouchableOpacity>
      <Image
        source={{uri: instructor.coverImageUrl}}
        style={styles.imageCover}
      />
      <Image source={{uri: instructor.imageUrl}} style={styles.image} />
      <Text style={styles.textInstructorName}>{instructor.name}</Text>

      <View style={styles.contentContainer}>
        <View style={{paddingHorizontal: 24}}>
          <Text
            style={styles.textNormal}
            numberOfLines={4}
            ellipsizeMode="middle">
            {instructor.introduce}
          </Text>
        </View>
        <View style={styles.classesContainer}>
          <Text style={styles.textRecentClasses}>RECENT LESSONS</Text>

          <View style={{width: '100%', paddingTop: 16}}>
            <FlatList data={instructor.lessons} renderItem={renderItem} />
          </View>
        </View>
      </View>

      {/* <FlatList
                data={categoriesItems}
                renderItem={renderItem}
                keyExtractor={(item) => item.level}
                contentContainerStyle={styles.flatlistContainer}
            /> */}
    </SafeAreaView>
  );
};

export default InstructorDetailView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  contentContainer: {
    width: '100%',
    paddingHorizontal: 16,

    // backgroundColor: 'green'
  },
  backButton: {
    position: 'absolute',
    top: 10,
    left: 10,
    zIndex: 999,
    padding: 10,
    borderRadius: 5,
  },
  imageCover: {
    width: '100%',
    height: 180,
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 90,
    position: 'absolute',
    top: 135,
    alignSelf: 'center',
    zIndex: 999,
  },
  textInstructorName: {
    marginTop: 45 + 16,
    fontSize: 16,
    fontWeight: '700',
    color: 'black',
  },
  textNormal: {
    color: 'black',
  },
  textRecentClasses: {
    fontSize: 18,
    fontWeight: '700',
    color: 'black',
  },
  textLessonName: {
    fontSize: 16,
    fontWeight: '700',
    color: 'black',
  },
  textTime: {
    color: 'black',
  },
  classesContainer: {
    width: '100%',
    alignItems: 'center',
    paddingTop: 40,

    // backgroundColor: 'pink'
  },
  componentContainer: {
    width: '100%',
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    borderColor: 'grey',
    paddingBottom: 16,
    paddingTop: 16,

    // backgroundColor: 'pink'
  },
  imageComponent: {
    width: 138,
    height: 80,
    borderRadius: 0,
    marginRight: 16,
  },
});
