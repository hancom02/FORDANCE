const { default: InstructorManageMainView } = require("./views/InstructorManageMainView")

const InstructorManageContainer = (props) => {
    const {
        navigation,
        
    } = props;

    const propsMainView = {
        navigation,

    }

    return <InstructorManageMainView{...propsMainView} />
}

export default InstructorManageContainer;