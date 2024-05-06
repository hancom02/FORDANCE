import ScheduleMainView from "./views/ScheduleMainView";

const ScheduleContainer = (props) => {
    const { 
        navigation,
        
    } = props;

    const propsSchedule = {
        navigation,

    };

    return <ScheduleMainView{...propsSchedule} />
}

export default ScheduleContainer;