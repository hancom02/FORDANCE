import SearchContainer from "./SearchContainer";

const Search = (props) => {
    const {
        navigation,
        onClose
    } = props;

    
    const propsContainer = {
        navigation,
        onClose
    }

    return <SearchContainer{...propsContainer}/>
}

export default Search;