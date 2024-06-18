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
