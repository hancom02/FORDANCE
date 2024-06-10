import { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import Colors from "../../../values/colors";

const SplashMainView = (props) => {
    const {
        navigation
    } = props;

    useEffect(() => {
        const timer = setTimeout(() => {
            // Chuyển hướng đến màn hình HOME
            navigation.navigate('ChoseRole');
        }, 3000); // 3000 milliseconds = 3 giây

        return () => clearTimeout(timer); // Xóa timer khi component unmounts
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.text}>WELCOME TO FORDANCE!</Text>
            <Text>Ở đây 3 giây nó tự sang trang Home</Text>
        </View>
    )
}

export default SplashMainView;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: Colors.primaryPupple
    }
})