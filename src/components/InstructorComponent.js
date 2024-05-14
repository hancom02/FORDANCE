const { TouchableOpacity, Image, StyleSheet, View, Text } = require("react-native");

import Ionicons from 'react-native-vector-icons/Ionicons';

const InstructorComponent = (props) => {
    const {
        instructor,
        handleNav
    }  = props;

    const combinedGoals = instructor.goals.join(', ');

    return(
        <TouchableOpacity style={styles.container} onPress={handleNav}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image style={styles.image} source={{uri: instructor.instructorImage}}/>

                <View>
                    <Text style={styles.textName}>{instructor.instructorName}</Text>
                    <Text>{combinedGoals}</Text>
                </View>
            </View>

            <TouchableOpacity style={styles.iconContainer}>
                <Ionicons name="chevron-forward-outline" size={20} color="grey"/>
            </TouchableOpacity>

        </TouchableOpacity>
    )
}

export default InstructorComponent;

const styles = StyleSheet.create({
    container: {
        width: 360,
        height: 'auto',
        paddingBottom: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignContent: 'center',
        borderBottomWidth: 0.5,
        borderColor: 'grey',

        // backgroundColor: 'green',
    },
    image: {
        width: 68,
        height: 68,
        borderRadius: 64,
        marginRight: 24,
    },
    textName: {
        fontSize: 15,
        fontWeight: '700',
        color: 'black'
    },
    iconContainer: {
        // alignSelf: 'flex-end',
        // justifyContent: 'flex-end',
        // alignItems: 'flex-end'
    },

})