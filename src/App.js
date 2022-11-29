import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import MainRoutes from "./routes/MainRoutes";

function App() {
  return (
    <>
      <Navbar />
      <MainRoutes />
      <Footer />
    </>
  );
}

export default App;
