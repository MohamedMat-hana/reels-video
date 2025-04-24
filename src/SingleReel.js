import React, { useRef, useState } from 'react';
import {
  View,
  Dimensions,
  TouchableOpacity,
  Image,
  Share,
  StyleSheet,
  Text,
} from 'react-native';
import Video from 'react-native-video';
import Ionic from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import CommentsModal from './CommentsModal';

const SingleReel = ({ item, index, currentIndex, updatePostData, personalData }) => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  const [mute, setMute] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [videoError, setVideoError] = useState(null);

  // Log props for debugging
  console.log('SingleReel props:', { item, personalData, index, currentIndex });

  const handleLike = () => {
    updatePostData({
      isLike: !item.isLike,
      likes: item.isLike ? item.likes - 1 : item.likes + 1,
    });
  };

  const shareVideo = async (videoUrl) => {
    try {
      const result = await Share.share({
        message: `Check out this video: ${videoUrl}`,
        url: videoUrl,
        title: 'Share Video',
      });

      if (result.action === Share.sharedAction) {
        console.log('Shared successfully');
      } else if (result.action === Share.dismissedAction) {
        console.log('Share dismissed');
      }
    } catch (error) {
      console.error('Error sharing video:', error.message);
    }
  };

  const videoRef = useRef(null);
  const onBuffer = buffer => console.log('Buffering:', buffer);
  const onError = error => {
    console.log('Video error:', error);
    setVideoError(error);
  };

  if (!item || !item.video) {
    return (
      <View style={[styles.container, { width: windowWidth, height: windowHeight, justifyContent: 'center', alignItems: 'center' }]}>
        <Text>Invalid reel data</Text>
      </View>
    );
  }

  if (videoError) {
    return (
      <View style={[styles.container, { width: windowWidth, height: windowHeight, justifyContent: 'center', alignItems: 'center' }]}>
        <Text>Failed to load video: {item.video}</Text>
      </View>
    );
  }

  return (
    <View style={[styles.container, { width: windowWidth, height: windowHeight }]}>
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => setMute(!mute)}
        style={styles.touchArea}>
        <Video
          ref={videoRef}
          onBuffer={onBuffer}
          onError={onError}
          repeat={true}
          muted={mute}
          resizeMode="cover"
          paused={currentIndex !== index}
          source={{ uri: item.video }}
          style={styles.video}
        />
      </TouchableOpacity>

      <Ionic
        name="volume-mute"
        style={[
          styles.volumeIcon,
          {
            fontSize: mute ? 20 : 0,
            padding: mute ? 20 : 0,
          },
        ]}
      />

      <CommentsModal
        visible={showComments}
        onClose={() => setShowComments(false)}
        comments={item.comments || []}
        onUpdateComments={(updatedComments) => updatePostData({ comments: updatedComments })}
        postProfile={item.postProfile ? { uri: item.postProfile } : require("./Icons/user.png")}
        personalData={personalData}
      />

      <View style={[styles.contentBottom, { width: windowWidth }]}>
        <TouchableOpacity style={{ width: 150 }}>
          <View style={styles.profileRow}>
            <View style={styles.profileImageContainer}>
              <Image
                source={item.postProfile ? { uri: item.postProfile } : require("./Icons/user.png")}
                style={styles.profileImage}
              />
            </View>
            <Text style={styles.titleText}>{item.title || 'Untitled'}</Text>
          </View>
        </TouchableOpacity>

        <Text style={styles.descriptionText}>{item.description || ''}</Text>
      </View>

      <View style={styles.actionsContainer}>
        <TouchableOpacity onPress={handleLike} style={styles.actionButton}>
          <AntDesign
            name={item.isLike ? 'heart' : 'hearto'}
            style={[styles.likeIcon, { color: item.isLike ? 'red' : "white" }]}
          />
          <Text style={styles.iconText}>{(item.likes || 0).toLocaleString()}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton} onPress={() => setShowComments(true)}>
          <EvilIcons name="comment" size={30} style={styles.iconColor} />
          <Text style={styles.iconText}>{(item.comments || []).length}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.actionButton, { zIndex: 1, marginBottom: 40 }]} onPress={() => shareVideo(item.video)}>
          <Ionic name="paper-plane-outline" style={styles.shareIcon} />
        </TouchableOpacity>

        <View style={styles.miniProfileContainer}>
          <Image
            source={{ uri: item.postProfile }}
            style={styles.miniProfileImage}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  touchArea: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  video: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  volumeIcon: {
    color: "white",
    position: 'absolute',
    backgroundColor: 'rgba(52,52,52,0.6)',
    borderRadius: 100,
  },
  contentBottom: {
    position: 'absolute',
    zIndex: 1,
    bottom: 0,
    padding: 10,
  },
  profileRow: {
    width: 100,
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImageContainer: {
    width: 32,
    height: 32,
    borderRadius: 100,
    backgroundColor: "white",
    margin: 10,
  },
  profileImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 100,
  },
  titleText: {
    color: "white",
    fontSize: 20,
  },
  descriptionText: {
    color: "white",
    fontSize: 14,
    marginHorizontal: 10,
  },
  audioRow: {
    flexDirection: 'row',
    padding: 10,
  },
  audioIcon: {
    color: "white",
    fontSize: 16,
  },
  audioText: {
    color: "white",
  },
  actionsContainer: {
    position: 'absolute',
    bottom: 10,
    right: 0,
  },
  actionButton: {
    padding: 10,
    right: 10,
  },
  likeIcon: {
    fontSize: 25,
  },
  iconText: {
    color: "white",
    textAlign: 'center',
  },
  iconColor: {
    color: "white",
  },
  shareIcon: {
    color: "white",
    fontSize: 25,
  },
  miniProfileContainer: {
    width: 30,
    height: 30,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "white",
  },
  miniProfileImage: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    resizeMode: 'cover',
  },
});

export default SingleReel;