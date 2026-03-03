import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import Header from "./components/Header";
import CartPopup from "./components/CartPopup";
import Footer from "./components/Footer";
import Ticker from "./components/Ticker";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ProductSpecifications from "./pages/ProductSpecifications";
import Brands from "./pages/Brands";
import Gallery from "./pages/Gallery";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";

export default function App() {
  const [filterCategory, setFilterCategory] = useState("All");
  const [filterGender, setFilterGender] = useState("All");
  const [filterColor, setFilterColor] = useState("All");
  const [filterSize, setFilterSize] = useState("All");
  const [filterBrand, setFilterBrand] = useState("All");
  const [filterPrice, setFilterPrice] = useState("All");
  const [visitorCount, setVisitorCount] = useState(1248);
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeItem(productId);
      return;
    }
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const removeItem = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setVisitorCount((prev) => prev + Math.floor(Math.random() * 3));
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-zinc-50 font-sans text-zinc-900 pb-16">
      <Header
        visitorCount={visitorCount}
        cartCount={cart.length}
        cart={cart}
        onCartClick={() => setIsCartOpen(!isCartOpen)}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeItem}
      />

      <CartPopup
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cart}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeItem}
      />

      <main>
        <AnimatePresence mode="wait">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Routes>
              <Route
                path="/"
                element={
                  <Home
                    setFilterCategory={setFilterCategory}
                    setFilterGender={setFilterGender}
                    setFilterColor={setFilterColor}
                    setFilterSize={setFilterSize}
                    setFilterBrand={setFilterBrand}
                  />
                }
              />
              <Route
                path="/shop"
                element={
                  <Shop
                    filterCategory={filterCategory}
                    filterGender={filterGender}
                    filterColor={filterColor}
                    filterSize={filterSize}
                    filterBrand={filterBrand}
                    filterPrice={filterPrice}
                    onCategoryChange={setFilterCategory}
                    onGenderChange={setFilterGender}
                    onColorChange={setFilterColor}
                    onSizeChange={setFilterSize}
                    onBrandChange={setFilterBrand}
                    onPriceChange={setFilterPrice}
                    onAddToCart={addToCart}
                  />
                }
              />
              <Route path="/product/:productId" element={<ProductSpecifications onAddToCart={addToCart} />} />
              <Route path="/brands" element={<Brands />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/contact" element={<ContactUs />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />

      <Ticker />
    </div>
  );
}
