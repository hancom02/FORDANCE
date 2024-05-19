import InstructorAccountMainView from "./views/InstructorAccountMainView";

const InstructorAccountContainer = (props) => {
    const {
        navigation,
        
    } = props;

    const propsMainView = {
        navigation,

    }

    return <InstructorAccountMainView{...propsMainView} />
}

export default InstructorAccountContainer;