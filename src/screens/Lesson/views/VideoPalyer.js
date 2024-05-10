const { View, Text, Modal, ImageBackground, TouchableOpacity, StyleSheet } = require("react-native");

const VideoPlayer = (props) => {
    const {
        onClose
    } = props;

    console.log("IN VIDEO PLAYER");

    return (
        <Modal
            visible={true}
            animationType='slide'
        >
                <View style={styles.container}>
                    <ImageBackground 
                        source={require('../../../assets/videoPlayer90.png')} 
                        style={styles.imageBackground}
                        resizeMode='stretch'
                    >
                        <TouchableOpacity onPress={onClose}>
                            <Text>Close</Text>
                        </TouchableOpacity>
                    </ImageBackground>
                        
                    
                </View>

        </Modal>
    )
}

export default VideoPlayer;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',

        // backgroundColor: 'pink'
    },
    imageBackground: {
        width: '100%',
        height: '100%'
    }
})