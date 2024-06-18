import {useQuery} from 'react-query';
import InstructorMainView from './views/InstructorMainView';
import getDetailInstructor from '../../api/instructor/getDetail';

const InstructorContainer = props => {
  const {navigation, instructor} = props;

  const propsInstructor = {
    navigation,
    instructor,
  };

  return <InstructorMainView {...propsInstructor} />;
};

export default InstructorContainer;
