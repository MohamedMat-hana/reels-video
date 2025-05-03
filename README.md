# 📱 react-native-reels-player

A ready-to-use vertical video feed (like Instagram Reels or TikTok) built with React Native. This package allows you to embed short video feeds with play/pause on scroll, mute/unmute on tap, and interactive features like like/share/comments, including liking and adding comments, custom back navigation handling, and video link sharing.

---
## 🚀 Features

- Vertical scrollable video feed
- Auto play/pause based on visibility
- Like, comment, and share video links
- Support for adding comments with user profiles
- Like/unlike comments
- Custom back handler for hardware back press navigation
- Lightweight and customizable
- Built with `react-native-video` , `react-native-vector-icons` and `react-native-swiper-flatlist`

---
## 🎥 Demo Video

Click the image below to watch the demo video:

[![Demo Video](https://d1vjgq82aec6f4.cloudfront.net/h6ftto%2Ffile%2F7409afd137797410f2718b127c68dcd6_433cffab12deb12f02d2be5b3fa1899c.mp4?response-content-disposition=inline%3Bfilename%3D%227409afd137797410f2718b127c68dcd6_433cffab12deb12f02d2be5b3fa1899c.mp4%22%3B&response-content-type=video%2Fmp4&Expires=1746301039&Signature=Df-HwfQynknygyy1M~OKSvNPEti0Ts-9V~pnjw3TsdkR1F-4QF9lej605u4nv-102Piyl~94QP4q~luO-MUOjIFoAlSYb2oVItXPZKpFLfxXzRG-XGdTmiHoy86nZD-PyxDpcF1nhL0rmUGyT54nQrXcSKZAs~f6oeSeA-oAbkqZ8B5C34MM684FmO9rbAzKVcfUx~2JhSbcLiEAo-ztyoclBfh6pQNJZ1S4Hg-XUwcmdQpjy4N39meQPkiw8hkUSw3eIZIjzUnwao6AtrpJSLMa3Fayqg82dVN4kVy39xYRuPmQrcUwifBQxs9owy6w24D-YoGT8-id-w2qJ6QXlQ__&Key-Pair-Id=APKAJT5WQLLEOADKLHBQ)](https://d1vjgq82aec6f4.cloudfront.net/h6ftto%2Ffile%2F7409afd137797410f2718b127c68dcd6_433cffab12deb12f02d2be5b3fa1899c.mp4?response-content-disposition=inline%3Bfilename%3D%227409afd137797410f2718b127c68dcd6_433cffab12deb12f02d2be5b3fa1899c.mp4%22%3B&response-content-type=video%2Fmp4&Expires=1746301039&Signature=Df-HwfQynknygyy1M~OKSvNPEti0Ts-9V~pnjw3TsdkR1F-4QF9lej605u4nv-102Piyl~94QP4q~luO-MUOjIFoAlSYb2oVItXPZKpFLfxXzRG-XGdTmiHoy86nZD-PyxDpcF1nhL0rmUGyT54nQrXcSKZAs~f6oeSeA-oAbkqZ8B5C34MM684FmO9rbAzKVcfUx~2JhSbcLiEAo-ztyoclBfh6pQNJZ1S4Hg-XUwcmdQpjy4N39meQPkiw8hkUSw3eIZIjzUnwao6AtrpJSLMa3Fayqg82dVN4kVy39xYRuPmQrcUwifBQxs9owy6w24D-YoGT8-id-w2qJ6QXlQ__&Key-Pair-Id=APKAJT5WQLLEOADKLHBQ)
---

## Installation

 
```bash
npm install react-native-reels-player
```
Make sure to also install peer dependencies:
```
npm install react-native-video react-native-vector-icons react-native-swiper-flatlist
```

## 🛠️ Usage
 
```javascript
import React from 'react';
import { SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Reels from 'react-native-reels-player';

export default function App() {
  const navigation = useNavigation();
  
  const handleBack = () => {
    navigation.goBack(); // Navigate back using React Navigation
  };

  const personalData = {
    username: 'YourUsername',
    profileImage: 'https://your-profile-image-url.png'
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Reels 
        data={data} 
        personalData={personalData} 
        backButton={handleBack} 
      />
    </SafeAreaView>
  );
}
```

## 🧠 Data Format
This package uses a predefined data format for each video item:

```javascript
[
  {
    video: 'https://your-video-url.mp4',
    postProfile: 'https://your-image-url.png',
    title: 'Username',
    description: 'Video description...',
    likes: 100,
    isLike: false,
    comments: [
      {
        id: '1',
        user: 'User1',
        text: 'Great video!',
        ProfileImage: 'https://your-image-url.png',
        likes: 5,
        isLiked: false
      },
      ...
    ]
  },
  ...
]
```
You can customize the data array inside the Reels component if you want to use your own API or state management system. The personalData prop allows customization of the current user's profile:

```javascript
const personalData = {
  username: 'YourUsername',
  profileImage: 'https://your-profile-image-url.png'
};
```

## 📁 File Structure
```java
src/
├── Reels.jsx            // Main screen with back handler support
├── ReelsComponent.jsx   // SwiperFlatList wrapper
├── SingleReel.jsx       // Video and UI per reel
├── CommentsModal.jsx    // Modal for viewing and adding comments
└── data.js              // Array of videos
```
## 🧩 Dependencies
- react-native-video
- react-native-vector-icons
- react-native-swiper-flatlist



## 🔒 License

MIT © 2025 — [Mohamed Mat-hana](https://github.com/MohamedMat-hana)

## 👨‍💻 Contributing
Feel free to fork the repo, improve the component, and submit a pull request. Contributions are welcome!
## 🎨   Additional Features (Coming Soon)
- Automatic or Mute Sound
- Add Custom Reactions

## 🎨 Implemented Features
- Comment Support (view, add, and display comments)
- Like/Unlike Comments
- Custom Back Handler for Navigation
- Social Video Sharing Support
## 👨‍💻 Who is the Developer?
react-native-reels-player

Designed by: [Mohamed Mat-hana](https://github.com/MohamedMat-hana)