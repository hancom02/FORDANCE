import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import AccountTopTabs from "../../../navigation/AccountTopTab";


const AccountSettingView = (props) => {
    const {
        navigation,
        categories,
    } = props;


    const handleNavAccountSetting = () => {
        navigation.navigate('SubView');

    }

    const handleNavDancePreference = () => {
        navigation.navigate('DancePreference');
    }

    const handleNavFeedback = () => {
        navigation.navigate('Feedback');
    }

    const handleNavIntroduce = () => {
        navigation.navigate('Introduce');
    }

    const classJoined = 8;
    const lessonCompleted = 10;

    return (

        <SafeAreaView style={styles.container}>
            <View style={styles.touchContainer}>
                <Text style={styles.textHeader}>Account Setting</Text>
                <View style={styles.innerContainer}>
                    <TouchableOpacity style={styles.touchItem} onPress={handleNavDancePreference}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Text style={styles.bottomText}>Dance Preference</Text>
                        </View>
                        <Ionicons name="chevron-forward-outline" size={20} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.touchItem} onPress={handleNavAccountSetting}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Text style={styles.bottomText}>Account Setting</Text>
                        </View>
                        <Ionicons name="chevron-forward-outline" size={20} color="black" />
                    </TouchableOpacity>
                </View>
            </View>
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
        marginTop: 40,
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

export default AccountSettingView;
