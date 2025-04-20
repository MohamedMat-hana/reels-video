import React from 'react';
import { View, Text, Dimensions, StyleSheet } from 'react-native';
import ReelsComponent from './ReelsComponent';

const Reels = ({ data }) => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  return (
    <View style={[styles.container, { width: windowWidth, height: windowHeight }]}>
      <View style={styles.header}>
        <Text style={styles.titleText}>Reels</Text>
      </View>
      <ReelsComponent data={data} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    position: 'relative',
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    zIndex: 1,
    padding: 10,
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default Reels;
