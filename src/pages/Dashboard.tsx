import { Typography, Button, Box } from "@mui/material";
import ProductList from "../components/ProductList";
import { useNavigate } from "react-router";
import { useProducts } from "../hooks/useProducts";
import { useEffect } from "react";

export default function Dashboard() {
  const navigate = useNavigate();
  const { getProducts, products } = useProducts();

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <Box>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={2}
      >
        <Typography variant="h5">Productos disponibles</Typography>
        <Button variant="contained" onClick={() => navigate("/dashboard/new")}>
          Agregar artículo
        </Button>
      </Box>
      <ProductList products={products} />
    </Box>
  );
}
