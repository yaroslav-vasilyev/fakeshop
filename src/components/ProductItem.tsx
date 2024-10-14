import { View, Text, Image, Pressable, StyleSheet } from 'react-native';
import React from 'react';
import { Product } from '../store/types';

interface Props {
  product: Product;
  onPress: () => void;
}

const ProductItem: React.FC<Props> = ({ product, onPress }) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Image width={100} height={100} style={styles.image} source={{ uri: product.image }} />
      <View style={styles.textContainer}>
        <Text
          style={styles.title}
          numberOfLines={2}
          ellipsizeMode="tail"
        >
          {product.title}
        </Text>
        <Text style={styles.price}>{product.price} UAH</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxWidth: '48%',
    flexShrink: 1,
    borderRadius: 10,
    minHeight: 156,
    backgroundColor: 'white',
    alignItems: 'center',
    marginBottom: 25,
    paddingHorizontal: 10,
    paddingVertical: 15,
    gap: 25,
  },
  image: {
    resizeMode: 'contain',
  },
  textContainer: {
    alignItems: 'center',
    gap: 5,
  },
  title: {
    textAlign: 'center',
    color: 'black',
  },
  price: {
    color: 'red',
  },
});

const areEqual = (prevProps: Props, nextProps: Props) => {
  return prevProps.product.title === nextProps.product.title;
};

export default React.memo(ProductItem, areEqual);
