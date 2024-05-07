import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

// ICON
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from "../values/colors";

const MyHeader = (props) => {
    const {

    } = props;

    return (
        <View style={styles.container}>
            <Text style={styles.text}>FORDANCE</Text>
            <TouchableOpacity>
                <Ionicons name="notifications-outline" size={27} />
            </TouchableOpacity>
        </View>
    )
}

export default MyHeader;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 78,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        // borderBottomWidth: 1,
        borderColor: 'grey',
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 0
        },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 4,
        // backgroundColor: Colors.primaryPupple
    },
    text: {
        fontSize: 20,
        fontWeight: '700',
        color: 'black'
    }
})