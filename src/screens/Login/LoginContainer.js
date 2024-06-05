const { default: LoginMainView } = require("./views/LoginMainView");

const LoginContainer = (props) => {
    const {
        navigation,
        selectedRole,

    } = props;

    const propsMainView = {
        navigation,
        selectedRole,
    }

    return <LoginMainView{...props}/>
}

export default LoginContainer