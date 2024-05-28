import InstructorSettingMainView from "./views/InstructorMainView";

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