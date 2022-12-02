import { Box } from "@mui/material";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import { useAuth } from "./contexts/AuthContext";
import { useProducts } from "./contexts/ProductContextProvider";
import AuthPage from "./pages/AuthPage";
import MainRoutes from "./routes/MainRoutes";

function App() {
  const { auth } = useAuth();
  return (
    <Box>
      <Navbar />
      <MainRoutes />
      <Footer />
      {auth ? <AuthPage className="auth" /> : <></>}
    </Box>
  );
}

export default App;
