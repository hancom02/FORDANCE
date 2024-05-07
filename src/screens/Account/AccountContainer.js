import AccountMainView from "./views/AccountMainView";

const AccountContainer = (props) => {
    const {
        navigation,
        
    } = props;

    const user = {
        name: "",
        email: "",
    }
    const propsAccount = {
        navigation,
        user,
    };

    return <AccountMainView{...propsAccount} />
}

export default AccountContainer;