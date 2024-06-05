import { useDispatch, useSelector } from 'react-redux';
import SignUpContainer from './SignUpContainer';

const SignUp = (props) => {
    const dispatch = useDispatch();
    const {
        navigation,

    } = props

    const propsContainer = {
        navigation,
        dispatch,
    }
    return <SignUpContainer{...propsContainer}/>

}

export default SignUp;