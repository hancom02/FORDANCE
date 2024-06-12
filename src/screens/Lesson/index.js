import LessonContainer from "./LessonContainer";

//import { useDispatch, useSelector } from 'react-redux';


const Lesson = (props) => {
    //const dispatch = useDispatch();
    const {
        navigation,
        route
        //dispatch,

    } = props;

    const { lesson } = route.params;

    const propsContainer = {
        navigation,
        lesson
    };

    return <LessonContainer{...propsContainer} />
}

export default Lesson;