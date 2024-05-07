import InstructorContainer from "./InstructorContainer";

//import { useDispatch, useSelector } from 'react-redux';


const Instructor = (props) => {
    //const dispatch = useDispatch();
    const {
        navigation,
        //dispatch,
        
    } = props;

    const propsContainer = {
        navigation,

    };

    return <InstructorContainer{...propsContainer}/>
}

export default Instructor;