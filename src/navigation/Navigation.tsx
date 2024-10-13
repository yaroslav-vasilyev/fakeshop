import React from 'react';
import AddProductItemForm from '../screens/AddProductItemForm';
import ProductItem from '../screens/ProductItem';
import ProductList from '../screens/ProductList';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export type RootStackParamList = {
  ProductList: undefined;
  ProductItem: { productID: string };
  AddProduct: undefined;
};

const Root = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  return (
    <Root.Navigator>
      <Root.Screen name="ProductList" component={ProductList} />
      <Root.Screen name="ProductItem" component={ProductItem} />
      <Root.Screen name="AddProduct" component={AddProductItemForm} />
    </Root.Navigator>
  );
};

export default RootNavigator;
