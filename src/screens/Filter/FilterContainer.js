import FilterScreen from "./views/FilterScreen";

const FilterContainer = (props) => {
    const {
        navigation,

    } = props;

    const propsMainView = {
        navigation,

    }

    return <FilterScreen{...propsMainView} />
}

export default FilterContainer;