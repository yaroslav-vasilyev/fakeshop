import { View, Text, Button } from 'react-native';
import React from 'react';
import useProduct from '../hooks/useProduct';
import { RootStackParamList } from '../navigation/Navigation';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type Props = NativeStackScreenProps<RootStackParamList, 'ProductItem'>;

const ProductItem: React.FC<Props> = ({ route, navigation }) => {
  const { productID } = route.params;
  const product = useProduct(productID);

  return (
    <View>
      <Button
        title="Go Back"
        onPress={() => navigation.goBack()}
      />
      <Text>{product?.title}</Text>
    </View>
  );
};

export default ProductItem;
