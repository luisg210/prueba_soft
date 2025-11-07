import { Box, Grid, Typography } from "@mui/material";
import ProductCard from "./ProductCard";
import type { Product } from "../types/Product";

type Props = {
  products: Product[];
};

const ProductList = ({ products }: Props) => {
  return (
    <>
      {Array.isArray(products) && (
        <Grid
          container
          spacing={3}
          justifyContent={"initial"}
          alignItems={"center"}
        >
          {products.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
      )}

      {Array.isArray(products) && products.length == 0 && (
        <Grid container spacing={2}>
          <Typography variant="body2">No hay productos</Typography>
        </Grid>
      )}
    </>
  );
};

export default ProductList;
