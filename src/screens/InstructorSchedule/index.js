const { default: InstructorScheduleContainer } = require("./InstructorScheduleContainer");

const InstructorSchedule = (props) => {
    const {
        navigation,
        route

    } = props;

    const updatedLesson = route.params?.updatedLesson || null;

    const propsContainer = {
        navigation,
        updatedLesson
    }

    return <InstructorScheduleContainer{...propsContainer} />
}

export default InstructorSchedule;