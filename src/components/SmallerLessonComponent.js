const {
  Vibration,
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
} = require('react-native');
import Ionicons from 'react-native-vector-icons/Ionicons';

const SmallerLessonComponent = props => {
  const {lesson, isOwner, index, handleNav, handleDelete} = props;

  // console.log("LESSON IN SMALL COMPONENT: ,", lesson);

  return (
    <TouchableOpacity style={styles.container} onPress={handleNav}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Text style={styles.textIndex}>{index}</Text>
        <Image style={styles.image} source={{uri: lesson.imageUrl}} />
        <View>
          <Text style={styles.textLessonName}>{lesson.name}</Text>
          {/* <Text style={styles.textTime}>{lesson.total_time}</Text> */}
        </View>
      </View>
      {isOwner && (
        <TouchableOpacity style={styles.containerIcon} onPress={handleDelete}>
          <Ionicons name="trash-outline" size={24} />
        </TouchableOpacity>
      )}
    </TouchableOpacity>
  );
};
export default SmallerLessonComponent;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 80,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: 16,

    // backgroundColor: 'pink'
  },
  textIndex: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'black',
    paddingHorizontal: 10,
  },
  textLessonName: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'black',
  },
  textTime: {
    fontSize: 12,
    fontWeight: '400',
    color: 'black',
  },
  image: {
    width: 138,
    height: 80,
    borderRadius: 5,
    marginRight: 16,
  },
  containerIcon: {
    // width: 40,
    // alignSelf: 'flex-end',
    justifyContent: 'flex-end',
  },
});
