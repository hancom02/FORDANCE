import React from 'react';
import {
  Text,
  View,
  FlatList,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from '../../../values/colors';
import {useQuery} from 'react-query';
import getAllLesson from '../../../api/lesson/getAll';

const CategoryDetail = ({route, navigation}) => {
  const {category} = route.params;

  const {data: categoriesItems} = useQuery({
    queryKey: ['lessons-category', '', category],
    queryFn: getAllLesson,
  });

  const renderItem = ({item}) => (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => {
        navigation.navigate('Lesson', {
          tabBarVisible: false,
          lesson: item,
          isOwner: false,
        });
      }}>
      <ImageBackground
        source={{uri: item.imageUrl}}
        style={styles.itemImage}
        resizeMode="cover">
        <Text style={styles.itemName}>{item.name}</Text>
      </ImageBackground>

      <View style={styles.itemContent}>
        <Text style={styles.itemLevel}>{item.level}</Text>
        <Text style={styles.itemText}>{item.instructor.name}</Text>
        {/* <Text style={styles.itemText}>{item.dancer}</Text> */}
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{category}</Text>
        <TouchableOpacity style={styles.filterButton}>
          <Ionicons name="filter-outline" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <FlatList
        data={categoriesItems || []}
        renderItem={renderItem}
        keyExtractor={item => item.level}
        contentContainerStyle={styles.flatlistContainer}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
    height: 50,
  },
  backButton: {},
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  filterButton: {
    marginRight: 10, // Thiết lập khoảng cách phía bên phải
  },
  itemContainer: {
    marginHorizontal: 16,
    marginVertical: 10,
  },
  itemImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    overflow: 'hidden',
    justifyContent: 'flex-end',
  },
  itemContent: {
    flexDirection: 'row',
    // backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  itemLevel: {
    width: 100,
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    backgroundColor: Colors.primaryPupple,
    textTransform: 'uppercase',
    fontSize: 11,
    paddingHorizontal: 5,
    marginRight: 5,
    borderRadius: 5,
  },

  itemText: {
    color: 'white',
    fontWeight: 'bold',
    backgroundColor: 'black',
    textTransform: 'uppercase',
    paddingHorizontal: 5,
    fontSize: 11,
    marginRight: 5,
    borderRadius: 5,
  },
  flatlistContainer: {
    paddingTop: 10,
  },
  itemName: {
    margin: 5,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    // backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    alignSelf: 'flex-start',
  },
});

export default CategoryDetail;
