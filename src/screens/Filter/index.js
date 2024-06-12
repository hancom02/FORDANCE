const { default: FilterContainer } = require("./FilterContainer");

const Filter = (props) => {
    const {
        navigation,

    } = props;

    const propsContainer = {
        navigation,

    }

    return <FilterContainer{...propsContainer} />
}

export default Filter;