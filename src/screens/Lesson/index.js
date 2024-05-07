import LessonContainer from "./LessonContainer";

//import { useDispatch, useSelector } from 'react-redux';


const Lesson = (props) => {
    //const dispatch = useDispatch();
    const {
        navigation,
        //dispatch,
        
    } = props;

    const propsContainer = {
        navigation,

    };

    return <LessonContainer{...propsContainer}/>
}

export default Lesson;