const { default: LoginContainer } = require("./LoginContainer")

const Login = (props) => {
    const {
        navigation,
        onSelectRole,

    } = props;

    const propsCongtainer = {
        navigation,
        onSelectRole
    };

    return <LoginContainer{...propsCongtainer}/>
}

export default Login;