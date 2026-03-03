import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowRight, ChevronRight } from "lucide-react";

export default function Home({
  setFilterCategory,
  setFilterGender,
  setFilterColor,
  setFilterSize,
  setFilterBrand,
}) {
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    setFilterCategory(category);
    setFilterGender("All");
    setFilterColor("All");
    setFilterSize("All");
    setFilterBrand("All");
    navigate("/shop");
  };

  return (
    <div className="space-y-20">
      <section className="relative h-full sm:h-[80vh] flex items-center justify-center overflow-hidden rounded-3xl mx-4 mt-4 pt-10 pb-10">
        <img
          src="https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg?auto=compress&cs=tinysrgb&w=1920&h=750&dpr=2"
          alt="Hero"
          className="absolute inset-0 w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
        <div className="relative z-10 text-center text-white px-4  max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-8xl font-black mb-6 tracking-tighter"
          >
            TRAVEL IN <br />
            <span className="text-indigo-300">EXCELLENCE.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl font-light mb-10 opacity-90"
          >
            Bronx Luggage offers a curated selection of high-quality travel gear
            designed to last a lifetime. From affordable sets to premium brands.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link
              to="/shop"
              onClick={() => {
                setFilterCategory("All");
                setFilterGender("All");
                setFilterColor("All");
                setFilterSize("All");
                setFilterBrand("All");
              }}
              className="px-8 py-4 bg-white text-zinc-900 rounded-full font-bold hover:bg-indigo-500 hover:text-white transition-all duration-300 flex justify-center items-center gap-2 w-full sm:w-auto"
            >
              Explore Collection <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/about"
              className="px-8 py-4 bg-white/10 backdrop-blur border border-white/20 text-white rounded-full font-bold hover:bg-white/20 transition-all duration-300 w-full sm:w-auto"
            >
              Our Story
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-black tracking-tight text-zinc-900">
              BROWSE CATEGORIES
            </h2>
            <p className="text-zinc-500 mt-2">
              Find the perfect companion for your next journey.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: "Luggage",
              img: "https://images.unsplash.com/photo-1565026057447-bc90a3dceb87?auto=format&fit=crop&q=80&w=800",
            },
            {
              name: "Bags",
              img: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&q=80&w=800",
            },
            {
              name: "Backpacks",
              img: "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&q=80&w=800?auto=format&fit=crop&q=80&w=800",
            },
          ].map((cat) => (
            <motion.div
              key={cat.name}
              whileHover={{ y: -10 }}
              onClick={() => handleCategoryClick(cat.name)}
              className="relative h-96 rounded-2xl overflow-hidden cursor-pointer group"
            >
              <img
                src={cat.img}
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-8 left-8">
                <h3 className="text-3xl font-black text-white mb-2">
                  {cat.name.toUpperCase()}
                </h3>
                <p className="text-white/70 flex items-center gap-2">
                  Shop Now <ChevronRight className="w-4 h-4" />
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
