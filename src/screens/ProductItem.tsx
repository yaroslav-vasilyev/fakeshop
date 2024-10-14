import { View, Text, Image, Pressable } from 'react-native';
import React from 'react';
import { Product } from '../store/types';

interface Props {
  product: Product;
  onPress: () => void;
}

const ProductItem: React.FC<Props> = ({ product, onPress }) => {  
  return (
    <Pressable 
      onPress={onPress} 
      style={{ width: '48%', flexShrink: 1, borderRadius: 10, minHeight: 156, backgroundColor: 'white', alignItems: 'center', marginBottom: 25, paddingHorizontal: 10, paddingVertical: 15, gap: 25 }}>
      <Image width={100} height={100} style={{ resizeMode: 'contain' }} source={{ uri: product.image }} />
      <View style={{ alignItems: 'center', gap: 5 }}>
        <Text 
          style={{ 
            textAlign: 'center', 
            color: 'black', 
          }}
          numberOfLines={2}
          ellipsizeMode="tail"
        >
          {product.title}
        </Text>
        <Text style={{ color: 'red' }}>{product.price} UAH</Text>
      </View>
    </Pressable>
  );
};

const areEqual = (prevProps: Props, nextProps: Props) => {
  return prevProps.product.title === nextProps.product.title;
};

export default React.memo(ProductItem, areEqual);
