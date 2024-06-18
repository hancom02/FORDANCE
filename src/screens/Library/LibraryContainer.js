import {useQuery} from 'react-query';
import getAllLesson from '../../api/lesson/getAll';
import LibraryMainView from './views/LibraryMainView';
import {useSelector} from 'react-redux';
import getAllInstructor from '../../api/instructor/getAll';

const LibraryContainer = props => {
  const {navigation} = props;

  const {data: lessons} = useQuery({
    queryKey: ['all lessons', ''],
    queryFn: getAllLesson,
  });

  const {data: instructors} = useQuery({
    queryKey: ['all-instructors', ''],
    queryFn: getAllInstructor,
  });

  const programs = useSelector(state => state.program.allPrograms);

  const categories = [
    {
      category: 'Ballet',
      image:
        'https://img.freepik.com/premium-photo/dance-ballet-studio-with-woman-dancer-training-practicing-dancing-performance-recital-rehearsal-artistic-perform-technique-with-young-female-school-production-art_590464-81910.jpg',
    },
    {
      category: 'Open Style',
      image:
        'https://unica.vn/media/imagesck/1612428593_Choreography-la-gi.jpg?v=1612428593',
    },
    {
      category: 'Kpops',
      image:
        'https://i0.wp.com/ononestudios.com/wp-content/uploads/2022/07/allkpop_1644246173_blackpink-how-you-like-that-dance-performance-video-2-55-screenshot.png?fit=1024%2C576&ssl=1',
    },
  ];

  const propsLibrary = {
    navigation,
    lessons,
    programs,
    categories,
    instructors: instructors || [],
  };

  return <LibraryMainView {...propsLibrary} />;
};

export default LibraryContainer;
