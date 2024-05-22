import AccountMainView from "./views/AccountMainView";
import AccountSubView from "./views/SettingSubview/AccountSubView";
import { View } from "react-native";

const AccountContainer = (props) => {
    const {
        navigation,

    } = props;

    const categories = [
        { name: 'Hip Hop' },
        { name: 'Kpop' },
        { name: 'Ballet' },
        { name: 'Jazz' },
        { name: 'Contemporary' },
        { name: 'Tap' },
        { name: 'Street Dance' },
        { name: 'Salsa' },
        { name: 'Bollywood' },
        { name: 'Breakdance' },
    ]

    const user = {
        name: "1",
        email: "2",
    }
    const propsAccount = {
        navigation,
        user,
        categories,
    };

    return (
        <AccountMainView {...propsAccount} />
    )
}

export default AccountContainer;