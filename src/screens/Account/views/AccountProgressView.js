import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';


const AccountProgressView = (props) => {
    const {
        navigation,
        user
    } = props;

    const classJoined = 8;
    const lessonCompleted = 10;

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.classInfoContainer}>
                <View style={styles.classInfoItem}>
                    <Text style={styles.boldText}>{classJoined}</Text>
                    <Text style={styles.normalText}>Classes joined</Text>
                </View>
                <View style={styles.classInfoItem}>
                    <Text style={styles.boldText}>{lessonCompleted}</Text>
                    <Text style={styles.normalText}>Classes completed</Text>
                </View>
            </View>
            <View style={styles.touchContainer}>
                <View style={styles.innerContainer}>
                    <TouchableOpacity style={styles.touchItem}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Ionicons name="heart-outline" size={30} color="black" style={{ marginHorizontal: 10, }} />
                            <Text style={styles.bottomText}>Favourites</Text>
                        </View>
                        <Ionicons name="chevron-forward-outline" size={20} color="black" />
                    </TouchableOpacity>
                    <View style={styles.divider} />
                    <TouchableOpacity style={styles.touchItem}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Ionicons name="time-outline" size={30} color="black" style={{ marginHorizontal: 10, }} />
                            <Text style={styles.bottomText}>History</Text>
                        </View>
                        <Ionicons name="chevron-forward-outline" size={20} color="black" />
                    </TouchableOpacity>
                    <View style={styles.divider} />
                    <TouchableOpacity style={styles.touchItem}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Ionicons name="cloud-download-outline" size={30} color="black" style={{ marginHorizontal: 10, }} />
                            <Text style={styles.bottomText}>Download</Text>
                        </View>
                        <Ionicons name="chevron-forward-outline" size={20} color="black" />
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
    classInfoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        marginTop: 20,
    },
    classInfoItem: {
        flex: 1,
        alignItems: 'center',
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
        marginTop: 50,
        borderRadius: 20,
    },
    innerContainer: {
        marginHorizontal: 16,
        backgroundColor: '#D9D9D9',
        borderRadius: 20,
    },
    touchItem: {
        marginHorizontal: 10,
        marginVertical: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between', // Căn giữa văn bản và icon
    },
    bottomText: {
        fontSize: 16,
        color: 'black',
        fontWeight: '400',
    },
    divider: {
        height: 0.5,
        backgroundColor: 'grey',
    },
});

export default AccountProgressView;
