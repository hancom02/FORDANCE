import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Colors from '../../../values/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';

const LessonWithAddScheduleIcon = props => {
  const {lessons, handleNav} = props;

  return (
    <TouchableOpacity style={styles.container} onPress={handleNav}>
      <View style={styles.container1}>
        <ImageBackground
          source={{uri: lessons.image}}
          style={[styles.background, styles.shadow]}>
          {/* <LinearGradient 
                        color='black'
                        style={styles.overlay}
                    /> */}
          <View style={styles.contentContainer}>
            <TouchableOpacity onPress={handleNav}>
              <Ionicons
                name="calendar-outline"
                size={24}
                color={Colors.primaryPupple}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.lessonNameContainer}>
            <Text style={styles.textName}>{lessons.lessonName}</Text>
          </View>
        </ImageBackground>
      </View>

      <View style={styles.container2}>
        <View style={styles.levelContainer}>
          <Text style={styles.textLevel}>{lessons.level}</Text>
        </View>
        <View style={styles.categoryContainer}>
          <Text style={styles.textCategory}>{lessons.category}</Text>
        </View>
        <View style={styles.instrucContainer}>
          <Text style={styles.textInstructor}>{lessons.instructor.name}</Text>
        </View>
      </View>

      <View style={styles.container3}>
        <Text numberOfLines={1} ellipsizeMode="middle" style={styles.textTime}>
          {lessons.timeDuring} minutes
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default LessonWithAddScheduleIcon;

const styles = StyleSheet.create({
  container: {
    width: 360,
    // height: 210,
    marginRight: 8,
    overflow: 'hidden',
    marginBottom: 16,
    // backgroundColor: 'pink'
  },
  background: {
    flex: 1,
    resizeMode: 'contain', // 'cover', 'contain', 'stretch', 'repeat', 'center'
    justifyContent: 'space-between', // 'center', 'flex-start', 'flex-end', 'space-between', 'space-around'
    width: '100%',
    height: '100%',

    borderRadius: 20,
    // backgroundColor: 'pink'
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  container1: {
    width: '100%',
    height: 190,
    borderRadius: 10,
    overflow: 'hidden',
  },
  contentContainer: {
    width: '100%',
    // height: '50%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 16,

    // backgroundColor: 'rgba(255, 255, 255, 0.7)',
  },
  container2: {
    flexDirection: 'row',
    paddingVertical: 8,
    paddingHorizontal: 8,
    alignContent: 'flex-start',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',

    // backgroundColor: 'green',
  },
  container3: {
    paddingHorizontal: 8,
  },
  lessonNameContainer: {
    // backgroundColor: 'green',
    marginBottom: 16,
    marginHorizontal: 16,
  },
  levelContainer: {
    width: 100,
    height: 20,
    paddingHorizontal: 8,
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
    marginRight: 8,
    backgroundColor: 'orange',
  },
  categoryContainer: {
    width: 80,
    height: 20,
    paddingHorizontal: 8,
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
    marginRight: 8,
    backgroundColor: 'black',
  },
  instrucContainer: {
    width: 80,
    height: 20,
    paddingHorizontal: 8,
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
    marginRight: 8,
    backgroundColor: 'black',
  },
  textSeeDetail: {
    fontSize: 12,
    fontWeight: '700',
    color: Colors.primaryPupple,
  },
  textLevel: {
    width: 'auto',
    color: 'white',
    fontSize: 11,
    fontWeight: '700',
  },
  textName: {
    fontSize: 22,
    fontWeight: '800',
    color: 'black',
  },
  textCategory: {
    color: 'white',
    fontSize: 11,
    fontWeight: '700',
  },
  textInstructor: {
    color: 'white',
    fontSize: 11,
    fontWeight: '700',
  },
  textTime: {
    color: 'black',
    fontSize: 11,
  },
  shadow: {
    // shadowColor: 'green',
    // shadowOffset: {
    //     width: 30,
    //     height: 30,
    // },
    // shadowOpacity: 0.5,
    // shadowRadius: 5,
    // elevation: 50, // Sử dụng elevation cho Android
  },
});
