import LibraryMainView from "./views/LibraryMainView";

const LibraryContainer = (props) => {
    const { 
        navigation,
        
    } = props;

    const propsLibrary = {
        navigation,

    };

    return <LibraryMainView{...propsLibrary} />
}

export default LibraryContainer;