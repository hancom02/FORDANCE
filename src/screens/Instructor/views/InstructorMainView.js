import { FlatList, StyleSheet, Text, View } from "react-native";
import InstructorComponent from "../../../components/InstructorComponent";

const InstructorMainView = (props) => {
    const {
        navigation,
        instructors
    } = props;
    return(
        <View style={styles.libraryContainer}>
            <Text style={styles.text}>Intructors</Text>
            <View style={styles.instructorContainer}>
                <FlatList 
                    data={instructors}
                    renderItem={({item, index}) =>
                        <View key={index} style={{marginBottom: 16}}>
                            <InstructorComponent 
                                instructor={item}
                                handleNav={() => navigation.navigate('InstructorDetailView', {instructor: item})}
                            />
                        </View>
                    }
                />
            </View>
        </View>
    )
}

export default InstructorMainView;

const styles = StyleSheet.create({
    instructorContainer: {
        flex: 1,
        // flexDirection: 'column',
        paddingHorizontal: 16,
        marginTop: 70,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',

        // backgroundColor: 'pink'
    },
    libraryContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    text: {
        position: "absolute",
        top: 0,
        left: 0,
        margin: 16,
        fontSize: 20,
        fontWeight: '700',
        color: 'black',
        alignSelf: 'flex-start',
    },

})