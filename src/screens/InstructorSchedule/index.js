const { default: InstructorScheduleContainer } = require("./InstructorScheduleContainer");

const InstructorSchedule = (props) => {
    const {
        navigation,

    } = props;

    const propsContainer = {
        navigation,

    }

    return <InstructorScheduleContainer{...propsContainer} />
}

export default InstructorSchedule;