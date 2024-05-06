import ScheduleContainer from "./ScheduleContainer";

const Schedule = (props) => {
    const {
        navigation,

    } = props;

    const propsContainer = {
        navigation,

    };

    return <ScheduleContainer{...propsContainer}/>
}

export default Schedule;