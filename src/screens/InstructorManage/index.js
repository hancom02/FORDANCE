const { default: InstructorManageContainer } = require("./InstructorManageContainer");

const InstructorManage = (props) => {
    const {
        navigation,

    } = props;

    const propsContainer = {
        navigation,

    }

    return <InstructorManageContainer{...propsContainer}/>
}

export default InstructorManage;