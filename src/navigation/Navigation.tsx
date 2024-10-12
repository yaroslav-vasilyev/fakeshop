import React from 'react';
import AddProductItemForm from '../screens/AddProductItemForm';
import ProductItem from '../screens/ProductItem';
import ProductList from '../screens/ProductList';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Root = createNativeStackNavigator();

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
