import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Dialog,
  DialogTitle,
  DialogActions,
} from "@mui/material";
import type { Product } from "../types/Product";
import { useNavigate } from "react-router";
import { useState } from "react";
import { deleteProduct } from "../service/productService";

type Props = {
  product: Product;
};

const ProductCard = ({ product }: Props) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleDelete = async () => {
    await deleteProduct(product.id);
    setOpen(false);
    navigate("/");
  };

  return (
    <>
      <Card sx={{ maxWidth: "250px", minWidth: "250px" }} elevation={2}>
        <CardMedia
          component="img"
          height="140"
          image={product.imagen}
          alt={product.nombre}
        />
        <CardContent>
          <Typography variant="h6">
            {product.nombre.length > 10
              ? product.nombre.slice(0, 10).concat("...")
              : product.nombre}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {product.descripcion.length > 20
              ? product.descripcion.slice(0, 20).concat("...")
              : product.descripcion}
          </Typography>
          <Typography variant="subtitle1" sx={{ mt: 1 }}>
            ${product.precio.toFixed(2)}
          </Typography>

          <Typography variant="subtitle1" sx={{ mt: 1 }}>
            {product.label}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            onClick={() => navigate(`/dashboard/details/${product.id}`)}
          >
            Ver más
          </Button>
          <Button
            size="small"
            onClick={() => navigate(`/dashboard/edit/${product.id}`)}
          >
            Editar
          </Button>
          <Button size="small" color="error" onClick={() => setOpen(true)}>
            Eliminar
          </Button>
        </CardActions>
      </Card>

      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>¿Eliminar este producto?</DialogTitle>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancelar</Button>
          <Button onClick={handleDelete} color="error">
            Eliminar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ProductCard;
