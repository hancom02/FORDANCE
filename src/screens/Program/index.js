import ProgramContainer from "./ProgramContainer";

//import { useDispatch, useSelector } from 'react-redux';


const Program = (props) => {
    //const dispatch = useDispatch();
    const {
        navigation,
        route,
        
        //dispatch,
        
    } = props;

    const {program} = route.params;

    const propsContainer = {
        navigation,
        program

    };

    // console.log("PROGRAM IN PROGRAM INDEX: ", program);


    return <ProgramContainer{...propsContainer}/>
}

export default Program;