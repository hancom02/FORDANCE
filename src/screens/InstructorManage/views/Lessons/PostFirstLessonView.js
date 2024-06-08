import { SafeAreaView } from "react-native-safe-area-context";
import { Platform } from 'react-native';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, TextInput, ScrollView, ImageBackground } from "react-native";
import React, { useState, useEffect } from 'react';
import { useRoute } from '@react-navigation/native';
import DropDownPicker from "react-native-dropdown-picker";
import DocumentPicker from 'react-native-document-picker';
import { createThumbnail } from 'react-native-create-thumbnail';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from "../../../../values/colors";

const PostLessonFirstView = (props) => {
    const { navigation } = props;
    const route = useRoute();

    // useEffect(() => {
    //     if (route.params?.selectedVideo) {
    //         setSelectedVideo(route.params.selectedVideo);
    //         createThumbnail({
    //             url: route.params.selectedVideo.uri,
    //         }).then(response => {
    //             setThumbnail(response.path);
    //         }).catch(err => console.error(err));
    //     }
    // }, [route.params?.selectedVideo]);

    const handleGoBack = () => {
        navigation.goBack();
    };

    const [comment, setComment] = useState("");
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [thumbnail, setThumbnail] = useState(null);
    const [openLevel, setOpenLevel] = useState(false);
    const [valueLevel, setValueLevel] = useState(null);
    const [itemsLevel, setItemsLevel] = useState([
        { label: 'Beginner', value: 1 },
        { label: 'Intermediate', value: 2 },
        { label: 'Advanced', value: 3 },
    ]);

    const [openCategories, setOpenCategories] = useState(false);
    const [valueCategories, setValueCategories] = useState(null);
    const [itemsCategories, setItemsCategories] = useState([
        { label: 'Hip Hop', value: 1 },
        { label: 'Kpop', value: 2 },
        { label: 'Ballet', value: 3 },
        { label: 'Jazz', value: 4, },
        { label: 'Street Dance', value: 5 },
        { label: 'Test', value: 6 }
    ]);

    const getFilePathFromUri = async (uri) => {
        if (Platform.OS === 'android' && uri.startsWith('content://')) {
            const fileInfo = await fetch(uri);
            const blob = await fileInfo.blob();
            return blob.data; // Đây là đường dẫn tệp thực sự
        } else {
            return uri; // Đường dẫn đã là đường dẫn tệp
        }
    };

    const handleChooseVideo = async () => {
        try {
            const res = await DocumentPicker.pick({
                type: [DocumentPicker.types.video],
            });

            if (res && res.uri && res.uri.startsWith) {
                setSelectedVideo(res);
                createThumbnail({ url: res.uri })
                    .then(thumbnail => setThumbnail(thumbnail))
                    .catch(error => {
                        console.error("Error creating thumbnail:", error);
                        // Xử lý lỗi ở đây nếu cần
                    });
            } else {
                console.error("Invalid or undefined URI:", res);
            }
        } catch (err) {
            if (DocumentPicker.isCancel(err)) {
                console.log('User cancelled the picker');
            } else {
                console.error("Error picking video:", err);
                // Xử lý lỗi ở đây nếu cần
            }
        }
    };

    const handleUpload = async () => {
        if (!selectedVideo) {
            Alert.alert('Error', 'Please select a video');
            return;
        }

        // Gửi video lên máy chủ và nhận đường dẫn của video từ máy chủ
        try {
            // Thực hiện gửi video lên máy chủ và nhận đường dẫn video từ máy chủ
            // Code của bạn ở đây để gửi video lên máy chủ và nhận đường dẫn video từ máy chủ
            const videoUrlFromServer = 'http://example.com/video.mp4'; // Đường dẫn video từ máy chủ

            // Lưu đường dẫn video vào cơ sở dữ liệu hoặc bất kỳ nơi nào phù hợp với ứng dụng của bạn
            console.log('Video URL from server:', videoUrlFromServer);

            // Tiếp theo, bạn cần thực hiện việc hiển thị video và thumbnail trong ứng dụng của bạn
            // Bạn có thể sử dụng videoUrlFromServer để phát video từ máy chủ và thumbnail để hiển thị hình ảnh đại diện
        } catch (error) {
            console.error('Error uploading video:', error);
            Alert.alert('Error', 'Failed to upload video');
        }
    };

    const Username = "UserName";

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>POST LESSON</Text>
                <TouchableOpacity onPress={handleGoBack}>
                    <Ionicons name="close-outline" size={24} color="black" />
                </TouchableOpacity>
            </View>
            <View style={styles.separator} />
            <ScrollView contentContainerStyle={styles.scrollViewContainer}>
                <View style={styles.contentContainer}>
                    <View style={styles.chooseVideoContainer}>
                        {thumbnail ? (
                            <ImageBackground source={{ uri: thumbnail }} style={styles.thumbnail}>
                                <TouchableOpacity style={[styles.chooseVideoButton, { marginBottom: 10, marginRight: 10 }]} onPress={handleChooseVideo}>
                                    <Text style={styles.buttonText}>Choose Video</Text>
                                </TouchableOpacity>
                            </ImageBackground>
                        ) : (
                            <View>
                                <View style={styles.circle}>
                                    <Ionicons name="cloud-upload-outline" size={40} color="#848484" />
                                </View>
                                <TouchableOpacity style={styles.chooseVideoButton} onPress={handleChooseVideo}>
                                    <Text style={styles.buttonText}>Choose Video</Text>
                                </TouchableOpacity>
                            </View>

                        )}
                    </View>

                    <View style={styles.userNameContainer}>
                        <Ionicons name="person-circle-outline" size={40} color="black" />
                        <Text style={styles.usernameText}>{Username}</Text>
                    </View>
                    <View style={styles.separator2} />
                    <View style={styles.titleContainer}>
                        <Text style={styles.titleText}>Title</Text>
                        <View style={styles.inputContainer}>
                            <TextInput
                                style={styles.input}
                                placeholder="Enter title here..."
                                placeholderTextColor={'grey'}
                                value={comment}
                                onChangeText={setComment}
                                multiline={true}
                                numberOfLines={10}
                                textAlignVertical="top"
                            />
                            <Text style={{ color: 'grey', fontSize: 14, alignSelf: 'flex-end', paddingRight: 5, paddingTop: 5, }}>
                                {`${comment.length}/100`}
                            </Text>
                        </View>
                    </View>
                    <View style={styles.separator2} />
                    <View style={[styles.dropDownContainer, { zIndex: 1000 }]}>
                        <Text style={styles.titleText}>Level</Text>
                        <DropDownPicker
                            listMode="SCROLLVIEW"
                            scrollViewProps={{
                                nestedScrollEnabled: true,
                            }}
                            open={openLevel}
                            value={valueLevel}
                            items={itemsLevel}
                            setOpen={setOpenLevel}
                            setValue={setValueLevel}
                            setItems={setItemsLevel}
                            style={{
                                backgroundColor: '#fafafa',
                                width: Dimensions.get('window').width * 0.5,
                            }}
                            dropDownContainerStyle={{
                                backgroundColor: '#dfdfdf',
                                width: Dimensions.get('window').width * 0.5,
                            }}
                            textStyle={{
                                fontSize: 16,
                                color: '#000',
                            }}
                            dropDownDirection="BOT"
                        />
                    </View>
                    <View style={styles.dropDownContainer}>
                        <Text style={styles.titleText}>Category</Text>
                        <DropDownPicker
                            listMode="SCROLLVIEW"
                            scrollViewProps={{
                                nestedScrollEnabled: true,
                            }}
                            open={openCategories}
                            value={valueCategories}
                            items={itemsCategories}
                            setOpen={setOpenCategories}
                            setValue={setValueCategories}
                            setItems={setItemsCategories}
                            style={{
                                backgroundColor: '#fafafa',
                                width: Dimensions.get('window').width * 0.5,
                            }}
                            dropDownContainerStyle={{
                                backgroundColor: '#dfdfdf',
                                width: Dimensions.get('window').width * 0.5,
                            }}
                            textStyle={{
                                fontSize: 16,
                                color: '#000',
                            }}
                            zIndex={500}
                            dropDownDirection="TOP"
                        />
                    </View>
                </View>
                <TouchableOpacity style={styles.uploadButton}>
                    <Text style={styles.uploadButtontxt}>UPLOAD</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
        backgroundColor: 'white'
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        marginVertical: 10,
        height: 30,
    },
    headerTitle: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
        textTransform: 'uppercase',
    },
    textHeader: {
        marginBottom: 10,
        fontSize: 25,
        fontWeight: 'bold',
        color: 'black',
    },
    scrollViewContainer: {
        flexGrow: 1,
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
    separator2: {
        height: 1,
        backgroundColor: 'lightgray',
        marginTop: 10,
    },
    chooseVideoContainer: {
        width: '100%',
        height: 150,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F9F9F9',
        borderRadius: 10,
        marginBottom: 10,
    },
    circle: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#EDEDED',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginBottom: 20,
    },
    chooseVideoButton: {
        width: 'auto',
        height: 'auto',
        backgroundColor: '#5F64E2',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 14,
        color: 'white',
        paddingHorizontal: 16,
        paddingVertical: 10,
        fontWeight: '700'
    },
    thumbnail: {
        width: '100%',
        height: '100%',
        borderRadius: 10,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
    userNameContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    usernameText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
        marginLeft: 10,
    },
    titleContainer: {
        marginTop: 20,
    },
    titleText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
        marginBottom: 10,
    },
    inputContainer: {},
    input: {
        height: 100,
        paddingHorizontal: 10,
    },
    dropDownContainer: {
        marginTop: 20,
    },
    uploadButton: {
        backgroundColor: Colors.primaryPupple,
        width: '30%',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'flex-end',
        marginBottom: 20,
        borderRadius: 15,
        marginRight: 10,
    },
    uploadButtontxt: {
        fontSize: 16,
        color: 'white',
        fontWeight: '600',
        marginVertical: 5,
    },
});


export default PostLessonFirstView;
