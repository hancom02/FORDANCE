import { StyleSheet, Text, TouchableOpacity, View, ScrollView } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from "../values/colors";

const LibraryHeader = (props) => {
    const {

    } = props;

    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Text style={styles.text}>LOGO</Text>
                <View style={styles.iconContainer}>
                    <TouchableOpacity style={{ marginRight: 15 }} >
                        <Ionicons name="notifications-outline" size={27} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Ionicons name="search-outline" size={27} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.pageContainer}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>Classes</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>Programs</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>Categories</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>Instructors</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}

export default LibraryHeader;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 120,
        backgroundColor: 'white',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        borderColor: 'grey',
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 0
        },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 4,
    },

    logoContainer: {
        width: '100%',
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    pageContainer: {
        flex: 1,
        flexDirection: 'row',
        marginBottom: 10

    },

    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    button: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginHorizontal: 5,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: 'grey',
    },

    buttonText: {
        color: 'black',
        textTransform: 'uppercase',
        fontWeight: '700',
        fontSize: 14,

    },

    iconContainer: {
        flexDirection: 'row',
    },

    text: {
        fontSize: 20,
        fontWeight: '700',
        color: 'black',

    }
})
