import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const LessonsSubView = () => {
    return(
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Text>Lesson Sub View</Text>
                <Text>AAAAAAAAAAA</Text>
            </ScrollView>
        </SafeAreaView>
    )
}

export default LessonsSubView;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        
        // backgroundColor: 'pink'
    }
})