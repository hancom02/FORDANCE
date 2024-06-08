import ChoseRoleMainView from "./views/ChoseRoleMainView";

const ChoseRoleContainer = (props) => {
    const {
        navigation,
        onSelectRole,

    } = props;

    const propsMainView = {
        navigation,
        onSelectRole
    }

    return <ChoseRoleMainView{...propsMainView}/>
}

export default ChoseRoleContainer;