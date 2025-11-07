import { Container, Typography, Button, Box } from "@mui/material";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase/firebase";

export default function Login() {
  const handleLogin = () => signInWithPopup(auth, provider);

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Typography variant="h4" gutterBottom>
        Iniciar sesión
      </Typography>

      <Typography variant="body1" gutterBottom>
        Tienda de Luis, si inicias sesion podras crear, actualizar y eliminar
        productos
      </Typography>

      <Box mt={3}>
        <Button variant="contained" onClick={handleLogin}>
          Iniciar sesión con Google
        </Button>
      </Box>
    </Box>
  );
}
