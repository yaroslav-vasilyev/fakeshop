import {Dispatch} from 'redux';
import {ThunkAction} from 'redux-thunk';
import {setProducts} from '../store/productActions';
import {Product, ProductsActions, ProductsState} from '../store/types';

export const fetchProducts = (): ThunkAction<
  Promise<void>,
  ProductsState,
  unknown,
  ProductsActions
> => {
  return async (dispatch: Dispatch<ProductsActions>): Promise<void> => {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const products = (await response.json()) as Product[];
      dispatch(setProducts(products));
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };
};
