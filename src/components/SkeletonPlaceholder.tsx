import { View, StyleSheet } from 'react-native';
import React from 'react';

const SkeletonPlaceholder = () => {
  return (
    <View style={styles.container}>
      {Array(6).fill(0).map((_, index) => (
        <View style={styles.skeletonCard} key={index}>
          <View style={styles.imagePlaceholder} />
          <View style={styles.textContainer}>
            <View style={styles.textPlaceholder} />
            <View style={styles.textPlaceholder} />
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 16,
    gap: 13,
  },
  skeletonCard: {
    width: '48%',
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 25,
    paddingHorizontal: 10,
    paddingVertical: 15,
    gap: 25,
  },
  imagePlaceholder: {
    width: 100,
    height: 100,
    borderRadius: 10,
    backgroundColor: '#EDEDED',
  },
  textContainer: {
    gap: 5,
    flexGrow: 1,
    width: '100%',
  },
  textPlaceholder: {
    height: 20,
    borderRadius: 5,
    backgroundColor: '#EDEDED',
  },
});

export default SkeletonPlaceholder;
