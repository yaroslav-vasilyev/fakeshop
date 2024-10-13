import {AddNewProductActionType, Product, ProductsActionType, SetProductsActionType} from './types';

export const setProducts = (products: Product[]): SetProductsActionType => {
  return {
    type: ProductsActionType.SET_PRODUCTS,
    payload: products,
  };
};

export const addNewProduct = (newProduct: Product): AddNewProductActionType => {
  return {
    type: ProductsActionType.ADD_NEW_PRODUCT,
    payload: newProduct,
  };
};
