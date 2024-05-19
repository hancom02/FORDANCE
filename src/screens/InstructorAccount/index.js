const { default: InstructorAccountContainer } = require("./InstructorAccountContainer");

const InstructorAccount = (props) => {
    const {
        navigation,

    } = props;

    const propsContainer = {
        navigation,

    }

    return <InstructorAccountContainer{...propsContainer}/>
}

export default InstructorAccount;