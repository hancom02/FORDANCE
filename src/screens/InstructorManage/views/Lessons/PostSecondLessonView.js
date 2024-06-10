import React, { useState } from 'react';
import { SafeAreaView } from "react-native-safe-area-context";
import { View, FlatList, StyleSheet, TouchableOpacity, Text, } from 'react-native';
import Video from 'react-native-video';
import Ionicons from 'react-native-vector-icons/Ionicons';
import VideoPlayer2 from '../../../../components/VideoPlayer2';

const PostLessonSecondView = (props) => {
    const { navigation, } = props;
    const [visible, setVisible] = useState(false);
    const [currentPlayingVideo, setCurrentPlayingVideo] = useState(null);
    const [videos, setVideos] = useState([
        { id: '1', uri: 'https://www.w3schools.com/html/mov_bbb.mp4', duration: null },
        { id: '2', uri: 'https://www.w3schools.com/html/movie.mp4', duration: null },
        { id: '3', uri: 'https://www.w3schools.com/html/mov_bbb.mp4', duration: null },
        { id: '4', uri: 'https://www.w3schools.com/html/movie.mp4', duration: null },
        { id: '5', uri: 'https://www.w3schools.com/html/mov_bbb.mp4', duration: null },
        { id: '6', uri: 'https://www.w3schools.com/html/movie.mp4', duration: null },
        // Thêm các video khác ở đây
    ]);

    const handleGoBack = () => {
        navigation.goBack();
    };

    const handleLongPress = (item) => {
        setCurrentPlayingVideo(item);
        setVisible(true);
    };

    const handlePress = (item) => {
        // console.log("Selected Item: ", item);
        navigation.navigate('PostClassFirst', { selectedVideo: item });
    }


    const handleLoad = (data, index) => {
        const newVideos = [...videos];
        newVideos[index].duration = data.duration;
        setVideos(newVideos);
    };

    const renderItem = ({ item, index }) => (
        <TouchableOpacity style={styles.videoContainer}
            onPress={() => handlePress(item)}
            onLongPress={() => handleLongPress(item)}
        >
            <Video
                source={{ uri: item.uri }}
                style={styles.video}
                paused={true}
                resizeMode="cover"
                onLoad={(data) => handleLoad(data, index)}
            />
            {
                item.duration && (
                    <View style={styles.durationContainer}>
                        <Text style={styles.durationText}>{formatTime(item.duration)}</Text>
                    </View>
                )
            }
        </TouchableOpacity >
    );

    const formatTime = (seconds) => {
        const h = Math.floor(seconds / 3600);
        const m = Math.floor((seconds % 3600) / 60);
        const s = Math.floor(seconds % 60);
        return [h, m, s]
            .map(v => (v < 10 ? `0${v}` : v))
            .filter((v, i) => v !== '00' || i > 0)
            .join(':');
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
                    <Ionicons name="arrow-back" size={24} color="black" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Go Back</Text>
            </View>
            <View style={styles.separator} />
            <View style={styles.contentContainer}>
                <Text style={styles.textHeader}>Choose a video (hold to open video)</Text>
                <FlatList
                    data={videos}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    numColumns={3}
                    key={3}
                />
                {currentPlayingVideo && (
                    <VideoPlayer2
                        uri={currentPlayingVideo.uri}
                        visible={visible}
                        setVisible={setVisible}
                    />
                )}
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 20,
        marginVertical: 10,
        height: 30,
    },
    headerTitle: {
        flex: 1,
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
        textTransform: 'uppercase',
        marginLeft: 20,
    },
    textHeader: {
        marginBottom: 10,
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
    },
    contentContainer: {
        flex: 1,
        padding: 16,
        marginHorizontal: 10,
    },
    separator: {
        height: 1,
        backgroundColor: 'lightgray',
        marginBottom: 10,
        elevation: 3,
    },
    videoContainer: {
        position: 'relative',
        margin: 5,
        width: '30%',
        aspectRatio: 1, // Đảm bảo tỷ lệ 1:1 cho container
    },
    video: {
        width: '100%',
        height: '100%',
    },
    durationContainer: {
        position: 'absolute',
        bottom: 5,
        right: 5,
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        borderRadius: 3,
        padding: 2,
    },
    durationText: {
        color: '#fff',
        fontSize: 12,
    },
});

export default PostLessonSecondView;
