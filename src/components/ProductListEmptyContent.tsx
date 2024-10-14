import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';

const ProductListEmptyContent = () => {
  return (
    <View style={styles.container}>
      <Image
        width={100}
        height={100}
        style={styles.image}
        source={{ uri: 'https://emojiisland.com/cdn/shop/products/Thinking_Face_Emoji_large.png?v=1571606036' }}
      />
      <Text style={styles.text}>
        На жаль, нічого не знайдено. Ви можете спробувати знову або змінити пошуковий запит.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  image: {
    alignSelf: 'center',
    marginBottom: 15,
  },
  text: {
    color: 'black',
    textAlign: 'center',
  },
});

export default ProductListEmptyContent;
