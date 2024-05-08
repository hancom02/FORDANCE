import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';

const CommunityComponent = (props) => {
    const {
        comments,
    } = props;

    const renderItem = ({ item, index }) => {
        return (
            <View style={styles.commentContainer}>
                <Image source={require('../values/avatar.jpg')} style={styles.avatar} />
                <View style={styles.commentContent}>
                    <View style={styles.commentHeader}>
                        <Text style={styles.commentUser}>{item.user}</Text>
                        <Text style={styles.commentText}>{item.text}</Text>
                    </View>
                    {item.replies && item.replies.map((reply, replyIndex) => (
                        <View key={replyIndex} style={[styles.replyContainer, reply.isUser && styles.userReplyContainer]}>
                            <Image source={require('../values/avatar.jpg')} style={styles.replyAvatar} />
                            <View style={styles.commentHeader}>
                                <Text style={[styles.replyText, reply.isUser && styles.userReplyText]}>
                                    <Text style={styles.replyUser}>{reply.user}</Text>
                                </Text>
                                <Text style={styles.replyText}>{reply.text}</Text>
                            </View>
                        </View>
                    ))}
                </View>
            </View>
        );
    };

    return (
        <FlatList
            data={comments}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
        />
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,

    },

    joinHere: {
        color: 'blue',
        fontWeight: 'bold',
    },
    commentContainer: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginBottom: 10,
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 10,
    },
    commentContent: {
        flex: 1,
    },
    commentHeader: {
        flexDirection: 'column',
        backgroundColor: '#eeecec',
        borderRadius: 10,
        flex: 1,
    },
    commentUser: {
        fontWeight: '700',
        fontSize: 16,
        color: 'black',
        margin: 5,
        marginLeft: 10,
    },
    commentText: {
        fontSize: 16,
        fontWeight: '400',
        color: 'black',
        marginBottom: 10,
        marginLeft: 10,
    },
    replyContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 5,
        padding: 8,
        marginTop: 5,
        marginLeft: 10,
    },
    replyAvatar: {
        width: 30,
        height: 30,
        borderRadius: 15,
        marginRight: 10,
    },
    replyText: {
        fontSize: 16,
        color: 'black',
        marginBottom: 10,
        marginLeft: 10,
    },
    userReplyContainer: {
        alignSelf: 'flex-start',
        flex: 1,
    },
    userReplyText: {
        margin: 5,
        marginLeft: 10,
    },
    replyUser: {
        fontWeight: 'bold',
        color: 'black',
    },
    replyButton: {
        color: 'blue',
        marginTop: 5,
    },
});

export default CommunityComponent;
