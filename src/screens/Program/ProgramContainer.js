import {useQuery} from 'react-query';
import getDetailProgram from '../../api/program/getDetail';
import ProgramMainView from './views/ProgramMainView';

const ProgramContainer = props => {
  const {navigation, program: _program} = props;

  const {data} = useQuery({
    queryKey: ['detail-program', _program.id],
    queryFn: getDetailProgram,
  });

  const program = data || _program;

  const propsProgram = {
    navigation,
    program,
  };

  // console.log("PROGRAM IN PROGRAM CONTAINER: ", program);

  return <ProgramMainView {...propsProgram} />;
};

export default ProgramContainer;
