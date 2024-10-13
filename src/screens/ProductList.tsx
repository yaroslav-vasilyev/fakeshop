import React, {useEffect} from 'react';
import {FlatList, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {ThunkDispatch} from 'redux-thunk';
import {fetchProducts} from '../api/getProducts';
import {ProductsActions, ProductsState} from '../store/types';

const ProductList = () => {
  const dispatch =
    useDispatch<ThunkDispatch<ProductsState, unknown, ProductsActions>>();
  const products = useSelector((state: ProductsState) => state.products);

  useEffect(() => {
    !products.length && dispatch(fetchProducts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View>
      <Text>ProductList</Text>
      {products.map(product => (
        <Text>{product.title}</Text>
      ))}
      <FlatList
        data={products}
        contentContainerStyle={{ gap: 16, paddingBottom: 16 }}
        keyExtractor={({ title, id }) => `${title}-${id}`}
        renderItem={({ item: product }) => (
          <Text>{product.title}</Text>
        )}
      />
    </View>
  );
};

export default ProductList;
