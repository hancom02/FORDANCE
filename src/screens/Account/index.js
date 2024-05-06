import AccountContainer from "./AccountContainer";

const Account = (props) => {
    const {
        navigation,

    } = props;

    const propsContainer = {
        navigation,

    };

    return <AccountContainer{...propsContainer}/>
}

export default Account;