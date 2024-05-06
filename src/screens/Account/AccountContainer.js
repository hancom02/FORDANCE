import AccountMainView from "./views/AccountMainView";

const AccountContainer = (props) => {
    const { 
        navigation,
        
    } = props;

    const propsAccount = {
        navigation,

    };

    return <AccountMainView{...propsAccount} />
}

export default AccountContainer;