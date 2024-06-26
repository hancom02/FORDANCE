import {useState} from 'react';
import {Dimensions, FlatList, TextInput} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useQuery} from 'react-query';
import getAllLesson from '../../../api/lesson/getAll';
import {getAllProgramsApi} from '../../../api/program/getAll';
import Lesson2Component from '../../../components/Lesson2Component';
import WiderProgramComponent from '../../../components/WiderProgramComponent';
import SearchTab from '../components/SearchTab';

const {
  View,
  Text,
  StyleSheet,
  Modal,
  TouchableOpacity,
} = require('react-native');

const search = 'Search';

const Header = ({onClose, setContent, setSearch}) => {
  return (
    <View style={styles.hederContainer}>
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text style={styles.headerText}>{search}</Text>
        <TouchableOpacity onPress={onClose}>
          <Ionicons name="close" size={27} color="black" />
        </TouchableOpacity>
      </View>

      <View style={styles.searchContainer}>
        <Ionicons name="search-outline" size={24} color="black" />
        <TextInput
          style={styles.input}
          placeholder="Search..."
          placeholderTextColor="#888"
          onChangeText={setSearch}
        />
      </View>
      <SearchTab onButtonPress={setContent} />

      <View></View>
    </View>
  );
};

const SearchMainView = props => {
  const {
    navigation,
    infor,
    // onClose
  } = props;

  const [search, setSearch] = useState('');
  const [content, setContent] = useState('Lessons'); // State để xác định nội dung hiện tại

  const {data: lessons} = useQuery({
    queryKey: ['search-lesson', search],
    queryFn: getAllLesson,
  });

  const {data: programs} = useQuery({
    queryKey: ['search-program', search],
    queryFn: getAllProgramsApi,
  });

  const handleNavDetailLesson = lesson => {
    navigation.navigate('Lesson', {isOwner: false, lesson});
  };
  const handleNavDetailProgram = programData => {
    // navigation.navigate('Program', {
    //     tabBarVisible: false,
    //     program: programData
    // });
  };
  const handleCloseSearch = () => {
    navigation.goBack();
  };

  return (
    <Modal visible={true} animationType="slide">
      <View style={styles.container}>
        <Header
          onClose={handleCloseSearch}
          setContent={setContent}
          setSearch={setSearch}
        />
        <View style={styles.resultContainer}>
          {content === 'Lessons' && (
            <View>
              <FlatList
                data={lessons}
                renderItem={({index, item}) => (
                  <Lesson2Component
                    lessons={item}
                    handleNav={() => handleNavDetailLesson(item)}
                  />
                )}
              />
            </View>
          )}
          {content === 'Programs' && (
            <View>
              <FlatList
                data={programs}
                renderItem={({index, item}) => (
                  <WiderProgramComponent
                    program={item}
                    handleNav={() =>
                      handleNavDetailProgram((programData = item))
                    }
                  />
                )}
              />
            </View>
          )}
        </View>
      </View>
    </Modal>
  );
};

export default SearchMainView;

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  hederContainer: {
    width: '100%',
    // height: 180,
    backgroundColor: 'white',
    // justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 24,
    paddingBottom: 16,
    // borderColor: '#888',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 10,
  },
  headerText: {
    fontSize: 24,
    fontWeight: '700',
    color: 'black',
  },
  searchContainer: {
    width: '100%',
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#888',
    marginTop: 24,
    // backgroundColor: 'pink'
  },
  input: {
    marginLeft: 8,
    color: 'black',
  },
  resultContainer: {
    width: '100%',
    paddingHorizontal: 16,
    paddingTop: 16,
    alignItems: 'center',
  },
});
