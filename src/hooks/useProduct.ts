import { useSelector } from "react-redux";
import { ProductsState } from "../store/types";

const useProduct = (productID: string) => {
  const products = useSelector((state: ProductsState) => state.products);
  return products.find(product => product.id === productID);
};

export default useProduct;
