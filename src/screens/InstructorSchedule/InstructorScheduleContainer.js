import InstructorScheduleMainView from "./views/InstructorScheduleMainView";

const InstructorScheduleContainer = (props) => {
    const {
        navigation,
        updatedLesson

    } = props;

    const propsMainView = {
        navigation,
        updatedLesson

    }

    return <InstructorScheduleMainView{...propsMainView} />
}

export default InstructorScheduleContainer;