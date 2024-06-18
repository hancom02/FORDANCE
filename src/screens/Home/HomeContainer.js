import {useEffect, useState} from 'react';
import {
  collection,
  firebaseDatabase,
  firestore,
  getDocs,
} from '../../firebase/reactNativeFirebase/firebaseConnect';
import {
  fetchAllLessons,
  fetchSavedLessons,
  fetchTodayLessons,
} from '../../redux/slices/lessonSlice';
import {fetchAllPrograms} from '../../redux/slices/programSlice';
import {useSelector} from 'react-redux';
import {fetchInstructors, fetchStudents} from '../../redux/slices/userSlice';
import HomeMainView from './views/HomeMainView';

const HomeContainer = props => {
  const {dispatch, navigation, route} = props;

  const danceLessons = [
    {
      name: 'Naughty Boy',
      category: 'Breaking',
      instructor: 'Loi Choi',
      instructorImage:
        'https://unica.vn/media/imagesck/1612428593_Choreography-la-gi.jpg?v=1612428593',
      level: 'ADVANCED',
      total_time: 16,
      image_link:
        'https://t3.ftcdn.net/jpg/05/98/71/10/360_F_598711013_QsPD9pZZU5LGEuPtqtdvgQKRuO2rV07k.jpg',
    },
    {
      name: 'How to do plete',
      category: 'Ballet',
      instructor: 'Lisa',
      instructorImage:
        'https://unica.vn/media/imagesck/1612428593_Choreography-la-gi.jpg?v=1612428593',
      level: 'INTERMEDIATE',
      total_time: 16,
      image_link:
        'https://www.commercialappeal.com/gcdn/presto/2019/10/18/PMCA/a511454f-ba76-47ae-98a0-845cd0d1925a-101719CollageDanceCollective05.jpg?width=700&height=467&fit=crop&format=pjpg&auto=webp',
    },
    {
      name: 'Naughty Boy',
      category: 'Breaking',
      instructor: 'Loi Choi',
      instructorImage:
        'https://unica.vn/media/imagesck/1612428593_Choreography-la-gi.jpg?v=1612428593',
      level: 'ADVANCED',
      total_time: 16,
      image_link:
        'https://t3.ftcdn.net/jpg/05/98/71/10/360_F_598711013_QsPD9pZZU5LGEuPtqtdvgQKRuO2rV07k.jpg',
    },
    {
      name: 'How to do plete',
      category: 'Ballet',
      instructor: 'Lisa',
      instructorImage:
        'https://unica.vn/media/imagesck/1612428593_Choreography-la-gi.jpg?v=1612428593',
      level: 'INTERMEDIATE',
      total_time: 16,
      image_link:
        'https://www.commercialappeal.com/gcdn/presto/2019/10/18/PMCA/a511454f-ba76-47ae-98a0-845cd0d1925a-101719CollageDanceCollective05.jpg?width=700&height=467&fit=crop&format=pjpg&auto=webp',
    },
  ];

  const programs = useSelector(state => state.program.allPrograms);
  const lessons = useSelector(state => state.lesson.allLessons);
  const saveLessons = useSelector(state => state.lesson.savedLessons);
  const todayLessons = useSelector(state => state.lesson.todayLessons);

  const {
    allLessons,
    loading: lessonsLoading,
    error: lessonsError,
  } = useSelector(state => state.lesson);
  const {
    allPrograms,
    loading: programsLoading,
    error: programsError,
  } = useSelector(state => state.program);
  const {
    students,
    instructors,
    loading: userLoading,
    error: userError,
  } = useSelector(state => state.user);

  useEffect(() => {
    dispatch(fetchAllLessons()); //dùng dispatch để gửi actions vào reducer của lessonSlice
    dispatch(fetchSavedLessons());
    dispatch(fetchTodayLessons());

    dispatch(fetchAllPrograms());
    dispatch(fetchStudents());
    dispatch(fetchInstructors());
  }, [dispatch]);

  const propsHome = {
    dispatch,
    navigation,
    lessons,
    todayLessons,
    danceLessons,
    programs,
    saveLessons,
    allLessons,
    allPrograms,
    students,
    instructors,
    loading: lessonsLoading || programsLoading || userLoading,
    error: lessonsError || programsError || userError,
  };

  return <HomeMainView {...propsHome} />;
};

export default HomeContainer;
