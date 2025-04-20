import React, { useRef, useState } from 'react';
import {
  View,
  Dimensions,
  TouchableOpacity,
  Image,
  Share,
  Text,
  StyleSheet,
} from 'react-native';
import Video from 'react-native-video';
import Ionic from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

const SingleReel = ({ item, index, currentIndex }) => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  const [mute, setMute] = useState(false);
  const [like, setLike] = useState(item.isLike);
  const [likeCount, setLikeCount] = useState(item.likes);

  const handleLike = () => {
    if (like) {
      setLikeCount(prevCount => prevCount - 1);
    } else {
      setLikeCount(prevCount => prevCount + 1);
    }
    setLike(!like);
  };

  const shareVideo = async (videoUrl) => {
    try {
      const result = await Share.share({
        message: `Check out this video: ${videoUrl}`,
        url: videoUrl,
        title: 'Share Video',
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          console.log('Shared with activity type:', result.activityType);
        } else {
          console.log('Shared successfully');
        }
      } else if (result.action === Share.dismissedAction) {
        console.log('Share dismissed');
      }
    } catch (error) {
      console.error('Error sharing video:', error.message);
    }
  };

  const videoRef = useRef(null);
  const onBuffer = buffer => console.log('buffering', buffer);
  const onError = error => console.log('error', error);

  return (
    <View style={[styles.container, { width: windowWidth, height: windowHeight }]}>
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => setMute(!mute)}
        style={styles.touchArea}>
        <Video
          videoRef={videoRef}
          onBuffer={onBuffer}
          onError={onError}
          repeat={true}
          resizeMode="contain"
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

      <View style={[styles.contentBottom, { width: windowWidth }]}>
        <TouchableOpacity style={{ width: 150 }}>
          <View style={styles.profileRow}>
            <View style={styles.profileImageContainer}>
              <Image
                source={{ uri: item.postProfile }}
                style={styles.profileImage}
              />
            </View>
            <Text style={styles.titleText}>{item.title}</Text>
          </View>
        </TouchableOpacity>
        <Text style={styles.descriptionText}>{item.description}</Text>
        <View style={styles.audioRow}>
          <Ionicons name="musical-note" style={styles.audioIcon} />
          <Text style={styles.audioText}>Original Audio</Text>
        </View>
      </View>

      <View style={styles.actionsContainer}>
        <TouchableOpacity onPress={handleLike} style={styles.actionButton}>
          <AntDesign
            name={like ? 'heart' : 'hearto'}
            style={[styles.likeIcon, { color: like ? 'red' : "#fff" }]}
          />
          <Text style={styles.iconText}>{likeCount.toLocaleString()}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton}>
          <EvilIcons name="comment" size={30} style={styles.iconColor} />
        </TouchableOpacity>

        <TouchableOpacity style={[styles.actionButton, { zIndex: 1, marginBottom: 40, }]} onPress={() => shareVideo(item.video)}>
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
    backgroundColor: "#000"
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
    color: "#fff",

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
    backgroundColor: "#fff",

    margin: 10,
  },
  profileImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 100,
  },
  titleText: {
    color: "#fff",

    fontSize: 20,
  },
  descriptionText: {
    color: "#fff",

    fontSize: 14,
    marginHorizontal: 10,
  },
  audioRow: {
    flexDirection: 'row',
    padding: 10,
  },
  audioIcon: {
    color: "#fff",

    fontSize: 16,
  },
  audioText: {
    color: "#fff",

  },
  actionsContainer: {
    position: 'absolute',
    bottom: 10,
    right: 0,
  },
  actionButton: {
    padding: 10,
    alignItems: "center"
  },
  likeIcon: {
    fontSize: 25,
  },
  iconText: {
    color: "#fff",
    textAlign: "center"
  },
  iconColor: {
    color: "#fff",
  },
  shareIcon: {
    color: "#fff",
    fontSize: 25,
  },
  miniProfileContainer: {
    width: 30,
    height: 30,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#fff",
  },
  miniProfileImage: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    resizeMode: 'cover',
  },
});

export default SingleReel;