import ProgramMainView from "./views/ProgramMainView";

const ProgramContainer = (props) => {
    const { 
        navigation,
        
    } = props;

    const propsProgram = {
        navigation,

    };

    return <ProgramMainView{...propsProgram} />
}

export default ProgramContainer;