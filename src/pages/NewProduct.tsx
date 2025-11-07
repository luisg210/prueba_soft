import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import {
  productSchema,
  type ProductFormData,
} from "../validations/productValid";
import { createProductService } from "../service/productService";
import { useNavigate } from "react-router";
import type { Product } from "../types/Product";

const NewProduct = () => {
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(productSchema),
  });

  const onSubmit = async (data: ProductFormData) => {
    await createProductService(data as Product);
    navigate("/dashboard");
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        maxWidth={500}
        width="100%"
        display="flex"
        flexDirection="column"
        gap={2}
        color={"#fff"}
      >
        <Typography variant="h5">Agregar nuevo producto</Typography>

        <TextField
          label="Nombre"
          {...register("nombre")}
          error={!!errors.nombre}
          helperText={errors.nombre?.message}
        />
        <TextField
          label="Descripción"
          multiline
          rows={3}
          {...register("descripcion")}
          error={!!errors.descripcion}
          helperText={errors.descripcion?.message}
        />
        <TextField
          label="Precio"
          type="number"
          {...register("precio", { valueAsNumber: true })}
          error={!!errors.precio}
          helperText={errors.precio?.message}
        />
        <TextField
          label="URL de imagen"
          {...register("imagen")}
          error={!!errors.imagen}
          helperText={errors.imagen?.message}
        />

        <Button variant="contained" type="submit" disabled={isSubmitting}>
          Guardar producto
        </Button>
      </Box>
    </Box>
  );
};

export default NewProduct;
