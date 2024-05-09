import ProgramMainView from "./views/ProgramMainView";

const ProgramContainer = (props) => {
    const { 
        navigation,
        program
        
    } = props;

    const propsProgram = {
        navigation,
        program

    };

    // console.log("PROGRAM IN PROGRAM CONTAINER: ", program);

    return <ProgramMainView{...propsProgram} />
}

export default ProgramContainer;