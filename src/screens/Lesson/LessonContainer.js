import LessonMainView from "./views/LessonmainView";

const LessonContainer = (props) => {
    const { 
        navigation,
        
    } = props;

    const propsLesson = {
        navigation,

    };

    return <LessonMainView{...propsLesson} />
}

export default LessonContainer;