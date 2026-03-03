import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Ticker from "./components/Ticker";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
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

  useEffect(() => {
    const interval = setInterval(() => {
      setVisitorCount((prev) => prev + Math.floor(Math.random() * 3));
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-zinc-50 font-sans text-zinc-900 pb-16">
      <Header visitorCount={visitorCount} />

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
                  />
                }
              />
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
