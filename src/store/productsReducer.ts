import {ProductsActionType, ProductsActions, ProductsState} from './types';

const initialState: ProductsState = {
  products: [],
};

const productReducer = (
  state = initialState,
  action: ProductsActions,
): ProductsState => {
  switch (action.type) {
    case ProductsActionType.SET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };

    case ProductsActionType.ADD_NEW_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload],
      };

    default:
      return state;
  }
};

export default productReducer;
