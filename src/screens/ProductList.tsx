import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useCallback, useEffect} from 'react';
import {FlatList, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {ThunkDispatch} from 'redux-thunk';
import {fetchProducts} from '../api/getProducts';
import {RootStackParamList} from '../navigation/Navigation';
import {Product, ProductsActions, ProductsState} from '../store/types';
import ProductItem from './ProductItem';
import SkeletonPlaceholder from './SkeletonPlaceholder';

type Props = NativeStackScreenProps<RootStackParamList, 'ProductList'>;

const ProductList: React.FC<Props> = ({navigation}) => {
  const dispatch =
    useDispatch<ThunkDispatch<ProductsState, unknown, ProductsActions>>();
  const products = useSelector((state: ProductsState) => state.products);

  const handleProductPress = useCallback((product: Product) => {
    navigation.navigate('ProductInfo', { product });
  }, [navigation]);

  useEffect(() => {
    !products.length && dispatch(fetchProducts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={{ flex: 1 }}>
      {!products.length ? (
        <SkeletonPlaceholder />
      ) : (
        <FlatList
          data={products}
          numColumns={2}
          keyExtractor={({title, id}) => `${title}-${id}`}
          renderItem={({item: product}) => (
            <ProductItem product={product} onPress={() => handleProductPress(product)} />
          )}
          contentContainerStyle={{ paddingBottom: 16, flexGrow: 1, margin: 25 }}
          columnWrapperStyle={{ justifyContent: 'space-between', gap: 13 }}
        />
      )}
    </View>
  );
};

export default ProductList;
