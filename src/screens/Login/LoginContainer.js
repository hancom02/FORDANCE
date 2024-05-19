const { default: LoginMainView } = require("./views/LoginMainView");

const LoginContainer = (props) => {
    const {
        navigation,
        onSelectRole,

    } = props;

    const propsLogin = {
        navigation,
        onSelectRole
    }

    return <LoginMainView{...propsLogin}/>
}

export default LoginContainer;