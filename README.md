# 📱 React Native Reels

A ready-to-use vertical video feed (like Instagram Reels or TikTok) built with React Native. This package allows you to embed short video feeds with play/pause on scroll, mute/unmute on tap, and interactive features like like/share/comments.

---
## 🚀 Features

- Vertical scrollable video feed
- Auto play/pause based on visibility
- Tap to mute/unmute
- Like, comment, and share functionality
- Lightweight and customizable
- Built with `react-native-video` and `react-native-swiper-flatlist`

---
## 🎥 Demo Video

Click the image below to watch the demo video:

[![Demo Video](https://via.placeholder.com/500x300.png?text=Click+to+Watch+Video)](https://d2j573v2dl06b0.cloudfront.net/v7j3x0%2Ffile%2F9821547da33508fd5344ad0593998ae1_a9f45b85f91fa973db42a8fe72b51b03.mp4?response-content-disposition=inline%3Bfilename%3D%229821547da33508fd5344ad0593998ae1_a9f45b85f91fa973db42a8fe72b51b03.mp4%22%3B&response-content-type=video%2Fmp4&Expires=1745185571&Signature=AGsE6H~uHH9WQ7~iGwHXL3EMCbSPEJ8YBECnZZSRBe69UCN8Y3J6kstcl8rqCKbbJlP9EFaXZVuJQTRKzsQTKf6o5uR3slqx~Q225a4iT0Ig0KJt0zKiSuTcksWwj89J4BqbPKg8V8owrDesGTb0767Znc8bfA3ar3qMPHdWg2n8Xerqr~HA9iKOF9Ra7oF5OrJ9W6yRHjTp1fJ2zN-lsyxbuEbTh-JqGOG-lGfoK-FPKpXJr2lsDNsRI6AnTjicSxoCzs2K6Gk0dT9VBxeEDoDt-HUPYv4VxynGp67WeVzXu3Vp6DtxOvdMdpjMTgjoEGMe7sLHcoBJV0fkdUuNbw__&Key-Pair-Id=APKAJT5WQLLEOADKLHBQ)
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
import Reels from 'react-native-reels-player';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Reels data={data} />
    </SafeAreaView>
  );
}
```

## 🧠 Data Format
This package uses a predefined data format for each video item:

```
[
  {
    video: 'https://your-video-url.mp4',
    postProfile:'https://your-Image-url.ong',
    title: 'Username',
    description: 'Video description...',
    likes: 100,
    isLike: false,
  },
  ...
]
```
You can customize the videoData array inside the ReelsComponent if you want to use your own API or state management system.

Please make sure to update tests as appropriate.

## 📁 File Structure
```
src/
├── Reels.jsx            // Main screen
├── ReelsComponent.jsx   // SwiperFlatList wrapper
├── SingleReel.jsx       // Video and UI per reel
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
- Comment Support
- Automatic or Mute Sound
- Add Custom Reactions
- Social Video Sharing Support
## 👨‍💻 Who is the Developer?
react-native-reels-player

Designed by: [Mohamed Mat-hana](https://github.com/MohamedMat-hana)
