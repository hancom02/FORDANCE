import InstructorProgramMainView from "./InstructorProgramMainView";

const InstructorProgramContainer = (props) => {
    const {
        navigation,
        instructorProgram,
        
    } = props;

    const programData = {

    }

    const propsMainView = {
        navigation,
        instructorProgram,
    }

    return <InstructorProgramMainView{...propsMainView}/>
}
export default InstructorProgramContainer