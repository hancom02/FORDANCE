import InstructorProgramContainer from "./InstructorProgramContainer";

const InstructorProgram = (props) => {
    const {
        navigation,
        route
    } = props;

    const {program} = route.params;

    const propsContainer = {
        navigation,
        program,
    }

    return <InstructorProgramContainer{...propsContainer}/>

}
export default InstructorProgram