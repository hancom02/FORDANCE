import {useQuery} from 'react-query';
import getDetailInstructor from '../../api/instructor/getDetail';
import {useAuth} from '../../stores/auth.store';

const {
  default: InstructorManageMainView,
} = require('./views/InstructorManageMainView');

const InstructorManageContainer = props => {
  const {navigation} = props;

  const {id} = useAuth();

  const {data} = useQuery({
    queryKey: ['detail instructor', id],
    queryFn: getDetailInstructor,
    refetchInterval: 1000,
  });

  const instructor = {
    name: 'Ngoc Han',
    email: '2002hoshi@gmail.com',
    image_link:
      'https://www.russianballetinternational.com/wp-content/uploads/2022/11/007_5054-Bolshoi-Academy-Vaganova-Method-Level-2-Level-3-1024x682.jpg',
    introduce: 'We have something to do...',
    prizes: ['Runner 1 red bull 2019', 'Runner 3 tokyo ballet ceremony 2015'],
    // lessons: LessonType[],
    // programs: ProgramType[],
  };

  const myLessons = data?.lessons || [];

  const myPrograms = data?.programs || [];

  const propsMainView = {
    navigation,
    myLessons,
    myPrograms,
  };

  return <InstructorManageMainView {...propsMainView} />;
};

export default InstructorManageContainer;
