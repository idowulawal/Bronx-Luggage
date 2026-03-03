import React, { useState } from "react";
import { motion } from "motion/react";
import { Star, Heart } from "lucide-react";

export default function ProductCard({ product }) {
  const [rating, setRating] = useState(product.rating);
  const [favorited, setFavorited] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-zinc-100"
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-4 right-4 flex flex-col gap-2">
          <button
            onClick={() => setFavorited((f) => !f)}
            className="p-2 bg-white/90 backdrop-blur rounded-full shadow-sm hover:bg-white transition-colors"
          >
            <Heart
              className={`w-4 h-4 transition-colors ${
                favorited ? "text-red-500 fill-red-500" : "text-zinc-600"
              }`}
            />
          </button>
        </div>
        <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="w-full py-2 bg-white text-zinc-900 rounded-lg font-medium text-sm hover:bg-zinc-100 transition-colors">
            View Specifications
          </button>
        </div>
      </div>
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <div>
            <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-1">
              {product.brand}
            </p>
            <h3 className="font-bold text-zinc-900 group-hover:text-indigo-600 transition-colors">
              {product.name}
            </h3>
          </div>
          <p className="font-bold text-indigo-600">${product.price}</p>
        </div>
        <div className="flex items-center gap-1 mb-3">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              onClick={() => setRating(star)}
              className="focus:outline-none"
            >
              <Star
                className={`w-4 h-4 ${star <= rating ? "fill-yellow-400 text-yellow-400" : "text-zinc-200"}`}
              />
            </button>
          ))}
          <span className="text-xs text-zinc-400 ml-1">
            ({rating.toFixed(1)})
          </span>
        </div>
        <div className="flex flex-wrap gap-2">
          <span className="px-2 py-1 bg-zinc-100 text-zinc-600 text-[10px] font-bold uppercase rounded">
            {product.size}
          </span>
          <span className="px-2 py-1 bg-zinc-100 text-zinc-600 text-[10px] font-bold uppercase rounded">
            {product.category}
          </span>
        </div>
      </div>
    </motion.div>
  );
}
