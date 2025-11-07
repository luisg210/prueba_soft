import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { CircularProgress, Box } from "@mui/material";
import { useAuth } from "../hooks/useAuth";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import AuthLayout from "../layouts/AuthLayout";
import NewProduct from "../pages/NewProduct";
import EditProduct from "../pages/EditProduct";
import DetailsProduct from "../pages/DetailsProduct";

export default function AppRouter() {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" mt={4}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={user ? <Navigate to="/dashboard" /> : <Login />}
        />
        <Route
          path="/dashboard"
          element={user ? <AuthLayout /> : <Navigate to="/" />}
        >
          <Route index element={<Dashboard />} />
          <Route path="new" element={<NewProduct />} />
          <Route path="edit/:id" element={<EditProduct />} />
          <Route path="details/:id" element={<DetailsProduct />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}
