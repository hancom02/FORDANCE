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
import {useQuery} from 'react-query';
import getAllLesson from '../../api/lesson/getAll';

const HomeContainer = props => {
  const {dispatch, navigation, route} = props;

  const {data: danceLessons} = useQuery({
    queryKey: ['all lessons', ''],
    queryFn: getAllLesson,
  });

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
    danceLessons: danceLessons || [],
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
