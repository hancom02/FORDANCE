import ChoseRoleContainer from "./ChoseRoleContainer";

const ChoseRole = (props) => {
    const {
        navigation,
        onSelectRole,

    } = props;

    const propsCongtainer = {
        navigation,
        onSelectRole
    };

    return <ChoseRoleContainer{...propsCongtainer}/>
}

export default ChoseRole;