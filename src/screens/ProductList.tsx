import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {FlatList, Image, StyleSheet, Text, TextInput, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {ThunkDispatch} from 'redux-thunk';
import {fetchProducts} from '../api/getProducts';
import ProductItem from '../components/ProductItem';
import SkeletonPlaceholder from '../components/SkeletonPlaceholder';
import {RootStackParamList} from '../navigation/Navigation';
import {Product, ProductsActions, ProductsState} from '../store/types';
import ProductListEmptyContent from '../components/ProductListEmptyContent';

type Props = NativeStackScreenProps<RootStackParamList, 'ProductList'>;

const ProductList: React.FC<Props> = ({navigation}) => {
  const [searchText, setSearchText] = useState('');
  const [debouncedSearchText, setDebouncedSearchText] = useState(searchText);
  const dispatch =
    useDispatch<ThunkDispatch<ProductsState, unknown, ProductsActions>>();
  const products = useSelector((state: ProductsState) => state.products);

  const handleProductPress = useCallback(
    (product: Product) => {
      navigation.navigate('ProductInfo', {product});
    },
    [navigation],
  );

  useEffect(() => {
    if (!products.length) {
      dispatch(fetchProducts());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchText(searchText);
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [searchText]);

  const filteredProducts = useMemo(() => products.filter(product =>
    product.title.toLowerCase().includes(debouncedSearchText.toLowerCase())
  ), [debouncedSearchText, products]);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Пошук товарів..."
        placeholderTextColor={'black'}
        value={searchText}
        onChangeText={setSearchText}
      />
      {!products.length ? (
        <SkeletonPlaceholder />
      ) : (
        <FlatList
          data={filteredProducts}
          numColumns={2}
          keyExtractor={({title, id}) => `${title}-${id}`}
          renderItem={({item: product}) => (
            <ProductItem
              product={product}
              onPress={() => handleProductPress(product)}
            />
          )}
          contentContainerStyle={styles.contentContainer}
          columnWrapperStyle={styles.columnWrapper}
          ListEmptyComponent={<ProductListEmptyContent />}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchInput: {
    height: 40,
    color: 'black',
    borderColor: '#ccc',
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    margin: 25,
  },
  contentContainer: {
    paddingBottom: 16,
    flexGrow: 1,
    marginHorizontal: 25,
    marginBottom: 25,
  },
  columnWrapper: {
    justifyContent: 'space-between',
    gap: 13,
  },
});

export default ProductList;
