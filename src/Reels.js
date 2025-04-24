import React, { useEffect } from 'react';
import { View, Text, Dimensions, TouchableOpacity, BackHandler } from 'react-native';
import ReelsComponent from './ReelsComponent';
import Ionic from 'react-native-vector-icons/Ionicons';

/**
 * Reels component for displaying a vertical list of video reels with interactive features.
 * Supports dynamic data, user personalization, and custom back navigation.
 *
 * @param {Object} props - Component props.
 * @param {Array<Object>} props.data - Array of reel data objects.
 * @param {Object} props.data[].video - URL of the video to display.
 * @param {ImageSourcePropType} [props.data[].postProfile] - Image source for the reel's profile picture.
 * @param {string} [props.data[].title] - Title of the reel.
 * @param {string} [props.data[].description] - Description of the reel.
 * @param {number} [props.data[].likes] - Number of likes for the reel.
 * @param {boolean} [props.data[].isLike] - Whether the reel is liked by the user.
 * @param {Array<Object>} [props.data[].comments] - Array of comment objects for the reel.
 * @param {Object} props.personalData - User-specific data for personalization.
 * @param {string} props.personalData.username - Username of the current user.
 * @param {ImageSourcePropType} [props.personalData.profileImage] - Image source for the user's profile picture.
 * @param {Function} [props.backButton] - Optional function to handle back navigation.
 * @returns {JSX.Element} The Reels component.
 *
 * @example
 * // Example usage with React Navigation
 * import { useNavigation } from '@react-navigation/native';
 * import Reels from './Reels';
 *
 * const App = () => {
 *   const navigation = useNavigation();
 *   const dataReels = [
 *     {
 *       video: 'https://example.com/video.mp4',
 *       postProfile:'https://example.com/image.png',
 *       title: 'Test Reel',
 *       description: 'A test reel',
 *       likes: 10,
 *       isLike: false,
 *       comments: [
 *         { id: '1', user: 'User2', text: 'Great video!', likes: 5, isLiked: false },
 *       ],
 *     },
 *   ];
 *   const personalData = {
 *     username: 'mohamed',
 *     profileImage: "https://example.com/image.png"),
 *   };
 *
 *   const handleBack = () => {
 *     navigation.goBack(); // Navigate back using React Navigation
 *   };
 *
 *   return (
 *     <View style={{ flex: 1 }}>
 *       <Reels
 *         data={dataReels}
 *         personalData={personalData}
 *         backButton={handleBack}
 *       />
 *     </View>
 *   );
 * };
 */
const Reels = ({ data, personalData, backButton }) => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  // Log props for debugging
  console.log('Reels props:', { data, personalData, backButton });

  // Handle hardware back press
  useEffect(() => {
    const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
      if (backButton && typeof backButton === 'function') {
        backButton();
        return true; // Prevent default back action
      }
      return false; // Allow default back action
    });

    return () => backHandler.remove(); // Cleanup on unmount
  }, [backButton]);

  // Check if data is valid
  if (!data || !Array.isArray(data) || data.length === 0) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
        <Text>No reels data provided</Text>
      </View>
    );
  }

  return (
    <View
      style={{
        width: windowWidth,
        height: windowHeight,
        backgroundColor: 'white',
        position: 'relative',
      }}>
      <View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          flexDirection: 'row',
          justifyContent: 'space-between',
          zIndex: 1,
          padding: 10,
        }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>
          Reels
        </Text>
        {backButton && typeof backButton === 'function' && (
          <TouchableOpacity onPress={backButton}>
            <Ionic name="arrow-back" size={24} color="white" />
          </TouchableOpacity>
        )}
      </View>
      <ReelsComponent data={data} personalData={personalData} />
    </View>
  );
};

export default Reels;