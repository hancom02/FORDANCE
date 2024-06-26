import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Colors from '../../../values/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useMutation} from 'react-query';
import createComment from '../../../api/comment/create';
import {useAuth} from '../../../stores/auth.store';

const CommunityDetailScreen = props => {
  const {comments: _comments, lesson, navigation} = props;

  const {displayname, photoUrl} = useAuth();

  const [comments, setComments] = useState([]);

  const [replyText, setReplyText] = useState('');
  const handleGoBack = () => {
    navigation.goBack();
  };

  const {mutate} = useMutation({
    mutationFn: createComment,
    onSuccess: data => {
      console.log({data});
    },
  });

  useEffect(() => {
    if (_comments) setComments(_comments);
  }, [JSON.stringify(_comments)]);

  const renderItem = ({item, index}) => {
    console.log({item});
    return (
      <View style={styles.commentContainer}>
        <Image source={{uri: item.student?.photoUrl}} style={styles.avatar} />
        <View style={styles.commentContent}>
          <View style={styles.commentHeader}>
            <Text style={styles.commentUser}>{item.student?.name}</Text>
            <Text style={styles.commentText}>{item.content}</Text>
          </View>
          {/* <TouchableOpacity style={styles.replyButton}>
            <Text style={{color: 'blue'}}>Reply</Text>
          </TouchableOpacity> */}
          {/* {item.replies &&
            item.replies.map((reply, replyIndex) => (
              <View
                key={replyIndex}
                style={[
                  styles.replyContainer,
                  reply.isUser && styles.userReplyContainer,
                ]}>
                <Image
                  source={require('../../../values/avatar.jpg')}
                  style={styles.replyAvatar}
                />
                <View style={styles.commentHeader}>
                  <Text
                    style={[
                      styles.replyText,
                      reply.isUser && styles.userReplyText,
                    ]}>
                    <Text style={styles.replyUser}>{reply.user}</Text>
                  </Text>
                  <Text style={styles.replyText}>{reply.text}</Text>
                </View>
              </View>
            ))} */}
        </View>
      </View>
    );
  };

  const handleReply = () => {
    mutate({content: replyText, lessonId: lesson.id});
    setComments(prev => [
      ...prev,
      {
        content: replyText,
        student: {
          photoUrl,
          name: displayname,
        },
      },
    ]);
    setReplyText('');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Community</Text>
      </View>
      <View style={styles.separator} />
      <FlatList
        data={comments}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.replyInputContainer}>
        <TextInput
          style={styles.replyInput}
          placeholder="Your question..."
          value={replyText}
          onChangeText={setReplyText}
        />
        {/* <TouchableOpacity style={{marginTop: 20, marginLeft: 10}}>
          <Ionicons name="image-outline" size={27} color="black" />
        </TouchableOpacity> */}
        <TouchableOpacity style={styles.replySendButton} onPress={handleReply}>
          <Text style={styles.submitText}>Submit</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f0f0f0',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    height: 30,
  },
  backButton: {},
  headerTitle: {
    flex: 1,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
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
  separator: {
    height: 1,
    backgroundColor: 'lightgray',
    marginBottom: 10,
    elevation: 3,
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
    marginLeft: 10,
  },
  replyInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: 'lightgray',
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  replyInput: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: 20,
    borderRadius: 20,
    paddingHorizontal: 15,
    fontSize: 16,
    color: 'black',
  },
  replySendButton: {
    marginTop: 20,
    // backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  submitText: {
    color: Colors.primaryPupple,
    textTransform: 'uppercase',
    fontSize: 16,
  },
});

export default CommunityDetailScreen;
