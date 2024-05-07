import ProgramContainer from "./ProgramContainer";

//import { useDispatch, useSelector } from 'react-redux';


const Program = (props) => {
    //const dispatch = useDispatch();
    const {
        navigation,
        //dispatch,
        
    } = props;

    const propsContainer = {
        navigation,

    };

    return <ProgramContainer{...propsContainer}/>
}

export default Program;