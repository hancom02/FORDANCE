import { Text, View, SafeAreaView, StyleSheet } from "react-native";
import LibraryHeader from "../../../components/LibraryHeader";

const LibraryMainView = (props) => {
    const {
        navigation,

    } = props;
    return (
        <SafeAreaView style={styles.container}>
            <LibraryHeader></LibraryHeader>



            <Text>Library Main View</Text>
        </SafeAreaView>
    )
}

export default LibraryMainView;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: 'white'
        // paddingHorizontal: 16,

    },
    scrollContainer: {
        paddingBottom: 60,
        paddingHorizontal: 16,
    },
    contentContainer: {
        width: '100%'
    },


})