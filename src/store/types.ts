import {Action} from 'redux';

export enum ProductsActionType {
  SET_PRODUCTS = 'SET_PRODUCTS',
  ADD_NEW_PRODUCT = 'ADD_NEW_PRODUCT',
}

export interface Product {
  id: string;
  title: string;
  price: string;
  description: string;
  image: string;
}

export interface ProductsState {
  products: Product[];
}

export interface SetProductsActionType extends Action {
  type: ProductsActionType.SET_PRODUCTS;
  payload: Product[];
}

export interface AddNewProductActionType extends Action {
  type: ProductsActionType.ADD_NEW_PRODUCT;
  payload: Product;
}

export type ProductsActions = SetProductsActionType | AddNewProductActionType;
