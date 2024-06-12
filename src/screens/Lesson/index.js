import LessonContainer from "./LessonContainer";

//import { useDispatch, useSelector } from 'react-redux';


const Lesson = (props) => {
    //const dispatch = useDispatch();
    const {
        navigation,
        route
        //dispatch,
        
    } = props;

    const {isOwner} = route.params;

    console.log("IS LESSON OWNER IN INDEX: ", isOwner);

    const propsContainer = {
        navigation,
        isOwner
    };

    return <LessonContainer{...propsContainer}/>
}

export default Lesson;