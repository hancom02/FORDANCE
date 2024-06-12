import InstructorProgramContainer from "./InstructorProgramContainer";

const InstructorProgram = (props) => {
    const {
        navigation,
        route
    } = props;

    const {instructorProgram} = route.params;

    const propsContainer = {
        navigation,
        instructorProgram,
    }

    return <InstructorProgramContainer{...propsContainer}/>

}
export default InstructorProgram