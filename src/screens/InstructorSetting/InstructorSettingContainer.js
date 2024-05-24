import InstructorSettingMainView from "./views/InstructorSettingMainView";

const InstructorSettingContainer = (props) => {
    const {
        navigation,

    } = props;

    const propsMainView = {
        navigation,

    }

    return <InstructorSettingMainView{...propsMainView} />
}

export default InstructorSettingContainer;