import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Slider from "./components/Slider";
import ScrollCard from "./components/ScrollCard";
import TextSection from "./components/TextSection";
import Map from "./components/Map";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Register from "./components/Register";
import Cart from "./components/Cart";
import ProductDetail from "./components/ProductDetail";
import Contact from "./components/Contact";
import Products from "./components/Products";
import Men from "./components/Men";
import Women from "./components/Women";

function App() {
  const [auth, setAuth] = useState(!!localStorage.getItem("token"));

  return (
    <>
      {/* Homepage components */}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Slider />
              <TextSection />
              <ScrollCard />
              <Map />
            </>
          }
        />
        <Route path="/login" element={<Login setAuth={setAuth} />} />
        <Route path="/products" element={<Products setAuth={setAuth} />} />
        <Route path="/men" element={<Men setAuth={setAuth} />} />
        <Route path="/women" element={<Women setAuth={setAuth} />} />
        <Route path="/contact" element={<Contact setAuth={setAuth} />} />
        <Route path="/register" element={<Register setAuth={setAuth} />} />{" "}
        {/* Added Register Route */}
        {auth && <Route path="/cart" element={<Cart />} />}
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>

      <Footer />
    </>
  );
}

function AppWithRouter() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWithRouter;
