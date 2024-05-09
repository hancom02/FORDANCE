import InstructorMainView from "./views/InstructorMainView";

const InstructorContainer = (props) => {
    const { 
        navigation,
        instructor
        
    } = props;

    const propsInstructor = {
        navigation,
        instructor

    };

    return <InstructorMainView{...propsInstructor} />
}

export default InstructorContainer;