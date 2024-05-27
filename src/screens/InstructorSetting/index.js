const { default: InstructorSettingContainer } = require("./InstructorSettingContainer");

const InstructorSetting = (props) => {
    const {
        navigation,

    } = props;

    const propsContainer = {
        navigation,

    }

    return <InstructorSettingContainer{...propsContainer} />
}

export default InstructorSetting;