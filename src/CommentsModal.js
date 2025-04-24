import React, { useState } from 'react';
import {
    View,
    Image,
    TouchableOpacity,
    StyleSheet,
    FlatList,
    TextInput,
    Modal,
    Text,
} from 'react-native';
import Ionic from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

const CommentsModal = ({ visible, onClose, comments, onUpdateComments, postProfile, personalData }) => {
    const [commentText, setCommentText] = useState('');

    console.log('CommentsModal props:', { visible, comments, postProfile, personalData });

    const handleCommentLike = (commentId) => {
        const updatedComments = comments.map(comment => {
            if (comment.id === commentId) {
                return {
                    ...comment,
                    isLiked: !comment.isLiked,
                    likes: comment.isLiked ? comment.likes - 1 : comment.likes + 1,
                };
            }
            return comment;
        });
        onUpdateComments(updatedComments);
    };

    const handleAddComment = () => {
        if (commentText.trim()) {
            const newComment = {
                id: ((comments || []).length + 1).toString(),
                user: personalData?.username || 'Guest',
                text: commentText,
                ProfileImage: personalData?.profileImage || postProfile,
                likes: 0,
                isLiked: false,
                postProfile: postProfile,
            };
            onUpdateComments([...(comments || []), newComment]);
            setCommentText('');
        }
    };

    const renderComment = ({ item }) => (
        <View style={styles.commentContainer}>
            <View style={styles.commentContent}>
                <View style={styles.commentTextContainer}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text
                            style={[styles.commentUser, item.user === personalData?.username && styles.currentUser]}
                        >
                            {item.user || 'user'}
                        </Text>
                        <Image
                            source={item.ProfileImage ? { uri: item.ProfileImage || postProfile } : require("./Icons/user.png")}
                            style={styles.commentProfileImage}
                        />
                    </View>
                    <Text style={styles.commentText}>{item.text || ''}</Text>
                    <View style={styles.commentActions}>
                        <Text style={styles.commentLikes}>{item.likes || 0}</Text>
                        <TouchableOpacity onPress={() => handleCommentLike(item.id)}>
                            <AntDesign
                                name={item.isLiked ? 'heart' : 'hearto'}
                                style={[styles.commentLikeIcon, { color: item.isLiked ? 'red' : '#000' }]}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
            onRequestClose={onClose}
        >
            <View style={styles.modalOverlay}>
                <View style={styles.modalContent}>
                    <TouchableOpacity style={styles.closeComments} onPress={onClose}>
                        <Ionic name="close" style={styles.closeIcon} />
                    </TouchableOpacity>
                    <Text style={styles.commentsTitle}>التعليقات</Text>
                    <FlatList
                        data={comments || []}
                        renderItem={renderComment}
                        keyExtractor={item => item.id || Math.random().toString()}
                        style={styles.commentsList}
                    />
                    <View style={{ width: '90%', height: 1 }} />
                    <View style={styles.commentInputContainer}>
                        <TextInput
                            style={styles.commentInput}
                            value={commentText}
                            onChangeText={setCommentText}
                            placeholder="أضف تعليقاً..."
                            placeholderTextColor={'#A4ACAD'}
                        />
                        <TouchableOpacity
                            style={{ backgroundColor: '#056EB0', marginRight: 0, padding: 10, borderRadius: 55 }}
                            onPress={handleAddComment}
                        >
                            <Image
                                source={require('./Icons/send.png')}
                                style={styles.sendCommentIcon}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'flex-end',
    },
    modalContent: {
        height: '50%',
        backgroundColor: '#fff',
        padding: 10,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    closeComments: {
        position: 'absolute',
        marginTop: -20,
        zIndex: 1,
        padding: 8,
        alignSelf: 'center',
        borderRadius: 55,
        backgroundColor: "#056EB0",
    },
    closeIcon: {
        color: '#FFF',
        fontSize: 24,
    },
    commentsTitle: {
        color: "#000",
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 10,
    },
    commentsList: {
        flex: 1,
    },
    commentContainer: {
        flexDirection: 'row-reverse',
        alignItems: 'center',
        marginVertical: 5,
    },
    commentContent: {
        flexDirection: 'row-reverse',
        flex: 1,
    },
    commentProfileImage: {
        width: 45,
        height: 45,
        borderRadius: 55,
        marginLeft: 10,
    },
    commentTextContainer: {
        flex: 1,
        alignItems: 'flex-end',
    },
    commentUser: {
        color: '#000',
        fontWeight: 'bold',
        alignSelf: 'center',
    },
    currentUser: {
        color: '#056EB0',
    },
    commentText: {
        color: '#000',
    },
    commentActions: {
        position: 'absolute',
        zIndex: 1,
        alignSelf: 'center',
        left: 5,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
    },
    commentLikes: {
        color: '#000',
        marginRight: 5,
    },
    commentLikeIcon: {
        fontSize: 16,
        marginHorizontal: 5,
    },
    commentInputContainer: {
        flexDirection: 'row-reverse',
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'space-between',
        width: '100%',
    },
    commentInput: {
        width: '85%',
        borderRadius: 80,
        borderColor: '#DCDCDC',
        borderWidth: 1.5,
        backgroundColor: '#F6F6F6',
        color: '#000',
        padding: 10,
        paddingRight: 20,
        textAlign: 'right',
    },
    sendCommentIcon: {
        width: 22,
        height: 22,
        resizeMode: 'contain',
    },
});

export default CommentsModal;