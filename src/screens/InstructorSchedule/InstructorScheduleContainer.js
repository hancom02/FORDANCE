import InstructorScheduleMainView from "./views/InstructorScheduleMainView";

const InstructorScheduleContainer = (props) => {
    const {
        navigation,

    } = props;

    const propsMainView = {
        navigation,

    }

    return <InstructorScheduleMainView{...propsMainView} />
}

export default InstructorScheduleContainer;