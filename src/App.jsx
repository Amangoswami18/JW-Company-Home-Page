import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";
import { CartProvider } from "./context/CartContext";
import { Toaster } from "react-hot-toast"; // ✅ correct

function App() {
  return (
    <CartProvider>
      <Header />
      <HomePage />
      <Footer />
      <Toaster position="top-right" /> {/* ✅ single toaster */}
    </CartProvider>
  );
}

export default App;
