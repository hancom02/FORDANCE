import CommunityContainer from "./CommunityContainer";


const Community = (props) => {
    const {
        navigation,

    } = props;

    const propsContainer = {
        navigation,

    };

    return <CommunityContainer{...propsContainer} />
}

export default Community;