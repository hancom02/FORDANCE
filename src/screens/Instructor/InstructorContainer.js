import InstructorMainView from "./views/InstructorMainView";

const InstructorContainer = (props) => {
    const { 
        navigation,
        
    } = props;

    const propsInstructor = {
        navigation,

    };

    return <InstructorMainView{...propsInstructor} />
}

export default InstructorContainer;