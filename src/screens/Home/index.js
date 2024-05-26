import HomeContainer from "./HomeContainer";

import { useDispatch, useSelector } from 'react-redux';


const Home = (props) => {
    const dispatch = useDispatch();
    const {
        navigation,        
    } = props;

    const propsContainer = {
        dispatch,
        navigation,

    };

    return <HomeContainer{...propsContainer}/>
}

export default Home;