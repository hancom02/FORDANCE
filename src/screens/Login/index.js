const { default: LoginContainer } = require("./LoginContainer");

const Login = (props) => {
    const {
        navigation,
        selectedRole,

    } = props;

    const propsContainer = {
        navigation,
        selectedRole,
    }

    return <LoginContainer{...propsContainer}/>
}

export default Login