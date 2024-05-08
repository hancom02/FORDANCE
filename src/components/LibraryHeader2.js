const { View, Text, TouchableOpacity, StyleSheet } = require("react-native");
import Ionicons from 'react-native-vector-icons/Ionicons';


const LibraryHeader2 = (props) => {
    const {

    } = props;

    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Text style={styles.text}>FORDANCE</Text>
                <View style={styles.iconContainer}>
                    <TouchableOpacity style={{ marginRight: 15 }} >
                        <Ionicons name="filter-outline" size={27} color='black'/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Ionicons name="search-outline" size={27} color='black'/>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default LibraryHeader2;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 70,
        backgroundColor: 'white',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingTop: 32,
        paddingBottom: 8,
        borderColor: 'grey',
        
    },

    logoContainer: {
        width: '100%',
        height: 'auto',
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        // backgroundColor: 'orange',

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
