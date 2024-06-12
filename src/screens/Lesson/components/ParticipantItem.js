import { text } from "@fortawesome/fontawesome-svg-core"

const { View, Image, Text, StyleSheet } = require("react-native")

const ParticipantsItem = ({image_link, name}) => {
    return(
        <View style={styles.container}>
            <Image source={{uri: image_link}} style={styles.image}/>
            <Text style={styles.text}>{name}</Text>
        </View>
    )
}
export default ParticipantsItem

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%',
        // height: 48,
        alignItems: 'center',
        marginBottom: 16,

        // backgroundColor: 'green'
    },
    image: {
        width: 56,
        height: 56,
        borderRadius: 40,
        marginRight: 16
    },
    text: {
        fontSize: 15,
        color: 'black',
        fontWeight: 'bold'
    }
})