import InstructorProgramMainView from "./InstructorProgramMainView";

const InstructorProgramContainer = (props) => {
    const {
        navigation,
        program,
        
    } = props;

    const programData = {

    }

    const propsMainView = {
        navigation,
        program,
    }

    return <InstructorProgramMainView{...propsMainView}/>
}
export default InstructorProgramContainer