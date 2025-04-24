import React, { useState } from 'react';
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import SingleReel from './SingleReel';

const ReelsComponent = ({ data, personalData }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [reelData, setReelData] = useState(data || []);

  // Log props and state for debugging
  console.log('ReelsComponent props:', { data, personalData, reelData });

  const handleChangeIndexValue = ({ index }) => {
    setCurrentIndex(index);
  };

  const updatePostData = (postIndex, updatedPost) => {
    setReelData(prevData =>
      prevData.map((post, idx) =>
        idx === postIndex ? { ...post, ...updatedPost } : post
      )
    );
  };

  // Fallback if no data
  if (!reelData || reelData.length === 0) {
    return null; // Or a fallback UI if needed
  }

  return (
    <SwiperFlatList
      vertical={true}
      onChangeIndex={handleChangeIndexValue}
      data={reelData}
      renderItem={({ item, index }) => (
        <SingleReel
          item={item}
          index={index}
          currentIndex={currentIndex}
          updatePostData={(updatedPost) => updatePostData(index, updatedPost)}
          personalData={personalData}
        />
      )}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

export default ReelsComponent;