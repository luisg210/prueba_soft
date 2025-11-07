import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import "./App.css";
import AppRouter from "./routes/Router";

const theme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppRouter />
    </ThemeProvider>
  );
}

export default App;
