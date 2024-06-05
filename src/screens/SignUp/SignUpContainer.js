import SignUpMainView from "./views/SignUpMainView";

const SignUpContainer = (props) => {
    const {
        navigation,
        dispatch,
    } = props;

    const propsMainView = {
        navigation,
        dispatch
    }

    return <SignUpMainView{...propsMainView}/>;
}

export default SignUpContainer;