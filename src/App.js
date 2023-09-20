import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Cart from "./pages/cart/cart";
import Shop from "./pages/shop/shop";
import ShopContextProvider from "./context/shop-context";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-slate-200 to-slate-100">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <main className="max-w-6xl mx-auto pt-12 pb-20">
            <Routes>
              <Route path="/" element={<Shop />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </main>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
