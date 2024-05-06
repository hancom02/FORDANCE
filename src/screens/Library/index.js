import LibraryContainer from "./LibraryContainer";

const Library = (props) => {
    const {
        navigation,

    } = props;

    const propsContainer = {
        navigation,

    };

    return <LibraryContainer{...propsContainer}/>
}

export default Library;