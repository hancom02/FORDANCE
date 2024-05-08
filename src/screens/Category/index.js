import CategoryContainer from "./CategoryContainer";


const Category = (props) => {
    const {
        navigation,

    } = props;

    const propsContainer = {
        navigation,

    };

    return <CategoryContainer{...propsContainer} />
}

export default Category;