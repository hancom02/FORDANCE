import { useDispatch, useSelector } from 'react-redux';
import SignUpContainer from './SignUpContainer';

const SignUp = (props) => {
    const dispatch = useDispatch();
    const {
        navigation,
        selectedRole,
    } = props

    const propsContainer = {
        navigation,
        dispatch,
        selectedRole,
    }
    return <SignUpContainer{...propsContainer}/>

}

export default SignUp;