import { useState } from "react";
import { getProductsService } from "../service/productService";
import type { Product } from "../types/Product";

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([] as Product[]);

  const getProducts = async () => {
    const productsResponse = await getProductsService();

    setProducts(productsResponse);
  };

  return {
    products,

    getProducts,
  };
};
