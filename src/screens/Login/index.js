import { useDispatch } from "react-redux";

const { default: LoginContainer } = require("./LoginContainer");

const Login = (props) => {
    const dispatch = useDispatch();
    const {
        navigation,
        selectedRole,
    } = props;

    const propsContainer = {
        navigation,
        selectedRole,
        dispatch,
    }

    return <LoginContainer{...propsContainer}/>
}

export default Login