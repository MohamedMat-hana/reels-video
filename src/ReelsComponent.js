import React, { useState } from 'react';
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import SingleReel from './SingleReel';
import { videoData } from 'react-native-reels-player/src/Database';

const ReelsComponent = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleChangeIndexValue = ({ index }) => {
    setCurrentIndex(index);
  };

  return (
    <SwiperFlatList
      vertical={true}
      onChangeIndex={handleChangeIndexValue}
      data={data==undefined?videoData:data}
      renderItem={({ item, index }) => (
        <SingleReel item={item} index={index} currentIndex={currentIndex} />
      )}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

export default ReelsComponent;
