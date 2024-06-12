import LessonContainer from "./LessonContainer";

//import { useDispatch, useSelector } from 'react-redux';


const Lesson = (props) => {
    //const dispatch = useDispatch();
    const {
        navigation,
        route
        //dispatch,

    } = props;

    const { lesson, isOwner } = route.params;

    const propsContainer = {
        navigation,
        lesson,
        isOwner,
    };
  
    //console.log("IS LESSON OWNER IN INDEX: ", isOwner);

    return <LessonContainer{...propsContainer} />
}

export default Lesson;