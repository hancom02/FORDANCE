import CommunityContainer from './CommunityContainer';

const Community = props => {
  const {navigation, route} = props;

  const {lesson, comments} = route.params;

  const propsContainer = {
    navigation,
    lesson,
    comments,
  };

  return <CommunityContainer {...propsContainer} />;
};

export default Community;
