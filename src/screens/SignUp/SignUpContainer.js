import SignUpMainView from "./views/SignUpMainView";

const SignUpContainer = (props) => {
    const {
        navigation,
        dispatch,
        selectedRole
    } = props;

    const propsMainView = {
        navigation,
        dispatch,
        selectedRole
    }

    return <SignUpMainView{...propsMainView}/>;
}

export default SignUpContainer;