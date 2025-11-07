import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import type { Product } from "../types/Product";
import { getProductByIdService } from "../service/productService";

const DetailsProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | undefined>(undefined);

  const getById = async () => {
    if (id) {
      const response = await getProductByIdService(id);
      setProduct(response as Product);
    }
  };

  useEffect(() => {
    getById();
  }, [id]);

  return (
    <Box maxWidth={600} mx="auto" mt={4}>
      <Typography variant="h4">{product?.nombre}</Typography>
      <img
        src={product?.imagen}
        alt={product?.nombre}
        style={{ width: "100%", maxWidth: 400 }}
      />
      <Typography variant="body1" sx={{ mt: 2 }}>
        {product?.descripcion}
      </Typography>
      <Typography variant="h6" sx={{ mt: 2 }}>
        ${product?.precio.toFixed(2)}
      </Typography>

      <Typography variant="body1" sx={{ mt: 2 }}>
        Creado por: {product?.creadoPor}
      </Typography>
    </Box>
  );
};

export default DetailsProduct;
