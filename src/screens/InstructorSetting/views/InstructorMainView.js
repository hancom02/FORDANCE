import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';

const InstructorSettingMainView = (props) => {
    const {
        navigation
    } = props;

    const handleNavFeedback = () => {
        navigation.navigate('Feedback');
    }

    const handleNavIntroduce = () => {
        navigation.navigate('Introduce');
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Setting</Text>
            </View>
            <View style={styles.separator} />
            <View style={styles.touchContainer}>
                <Text style={styles.textHeader}>About Application</Text>
                <View style={styles.innerContainer}>
                    <TouchableOpacity style={styles.touchItem} onPress={handleNavIntroduce}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Text style={styles.bottomText}>Introduce</Text>
                        </View>
                        <Ionicons name="chevron-forward-outline" size={20} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.touchItem} onPress={handleNavFeedback}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Text style={styles.bottomText}>Feedback</Text>
                        </View>
                        <Ionicons name="chevron-forward-outline" size={20} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.touchItem}>
                        <View>
                            <Text style={styles.bottomText}>Log out</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: 'white',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 20,
        marginVertical: 10,
        height: 30,
    },
    headerTitle: {
        flex: 1,
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
        textTransform: 'uppercase',
        alignSelf: 'center',
    },
    textHeader: {
        marginBottom: 10,
        fontSize: 25,
        fontWeight: 'bold',
        color: 'black',
    },
    separator: {
        height: 1,
        backgroundColor: 'lightgray',
        marginBottom: 10,
        elevation: 3,
    },
    boldText: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'black',
    },
    normalText: {
        fontSize: 15,
        color: 'black',
    },
    touchContainer: {
        flexDirection: 'column',
        paddingHorizontal: 16,
        marginTop: 30,
    },
    innerContainer: {
        marginHorizontal: 16,
        borderRadius: 20,
    },
    touchItem: {
        marginVertical: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    bottomText: {
        fontSize: 16,
        color: 'black',
        fontWeight: '400',
    },
    textHeader: {
        marginLeft: 16,
        marginBottom: 10,
        fontSize: 25,
        fontWeight: 'bold',
        color: 'black',
    },
});
export default InstructorSettingMainView;