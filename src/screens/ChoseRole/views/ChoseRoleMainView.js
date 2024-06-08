import Colors from "../../../values/colors";

const { useState } = require("react")
const { View, TouchableOpacity, Text, StyleSheet, Dimensions, Button } = require("react-native")

const ChoseRoleMainView = (props) => {
    const {
        navigation,
        onSelectRole,

    } = props

    const [selectedRole, setSelectedRole] = useState(null);
    // const isSelected = selectedRole === buttonName;

    return (
        <View style={styles.container}>
            <TouchableOpacity 
                onFocus={styles.studentFocusContainer} 
                onPress={() => {
                    setSelectedRole("student");
                    onSelectRole('student')
                }}
                style={[styles.studentContainer, selectedRole==="student" && styles.studentFocusContainer]}
            >
                <Text style={[styles.buttonText, selectedRole==='student' && styles.selectedButtonText]}>STUDENT</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                onPress={() => {
                    setSelectedRole("instructor");
                    onSelectRole('instructor');
                }}
                style={[styles.studentContainer, selectedRole==="instructor" && styles.studentFocusContainer]}
            >
                <Text style={[styles.buttonText, selectedRole==='instructor' && styles.selectedButtonText]}>INSTRUCTOR</Text>
            </TouchableOpacity>

            <Button 
                title={'Log In With ' + selectedRole + ' Account'}
                // onPress={() => 
                //     navigation.navigate('MyStudentBottomTab')
                // }
                onPress={() => {
                    // if (selectedRole === "student") {
                    //     navigation.navigate('MyStudentBottomTab');
                    // } else if (selectedRole === "instructor") {
                    //     // Điều hướng đến màn hình của Instructor
                    //     navigation.navigate('MyInstructorBottomTab');

                    // }
                    navigation.navigate('Login');
                }}
            />
        </View>
    )
}

export default ChoseRoleMainView;

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    studentContainer: {
        width: 300,
        height: 80,
        marginBottom: 32,
        borderRadius: 8,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: Colors.primaryPupple,
        backgroundColor: 'white', 
    },
    studentFocusContainer: {
        backgroundColor: Colors.primaryPupple,
        color: 'white'
    },
    buttonText: {
        color: 'black',
        textTransform: 'uppercase',
        fontWeight: '700',
        fontSize: 14,
    },
    selectedButtonText: {
        color: 'white',
    },
})