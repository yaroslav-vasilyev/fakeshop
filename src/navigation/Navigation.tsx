import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import AddProductItemForm from '../screens/AddProductItemForm';
import ProductInfo from '../screens/ProductInfo';
import ProductList from '../screens/ProductList';
import {Product} from '../store/types';
import AddProductButton from '../screens/AddProductButton';

export type RootStackParamList = {
  ProductList: undefined;
  ProductInfo: {product: Product};
  AddProduct: undefined;
};

const Root = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  return (
    <Root.Navigator>
      <Root.Screen
        name="ProductList"
        component={ProductList}
        options={({ navigation }) => ({
          headerRight: () => (<AddProductButton navigation={navigation} />),
          headerTitle: "Список продуктів",
        })}
      />
      <Root.Screen name="ProductInfo" options={{
        headerTitle: "Деталі товару"
      }} component={ProductInfo} />
      <Root.Screen name="AddProduct" options={{
        headerTitle: "Додати продукт"
      }} component={AddProductItemForm} />
    </Root.Navigator>
  );
};

export default RootNavigator;
