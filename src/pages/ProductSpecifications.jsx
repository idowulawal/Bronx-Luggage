import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { ChevronLeft, Heart, Star } from "lucide-react";
import data from "../data.json";

const { PRODUCTS } = data;

export default function ProductSpecifications({ onAddToCart }) {
  const { productId } = useParams();
  const navigate = useNavigate();
  const product = PRODUCTS.find((p) => p.id === productId);
  const [rating, setRating] = useState(product?.rating || 0);
  const [favorited, setFavorited] = useState(false);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="text-center">
          <h1 className="text-3xl font-black mb-4">Product Not Found</h1>
          <button
            onClick={() => navigate("/shop")}
            className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-bold hover:bg-indigo-700 transition-colors"
          >
            Back to Shop
          </button>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto px-4 py-8"
    >
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-indigo-600 font-bold mb-8 hover:text-indigo-700 transition-colors"
      >
        <ChevronLeft className="w-5 h-5" />
        Back
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="flex flex-col gap-4"
        >
          <div className="relative aspect-square overflow-hidden rounded-2xl bg-zinc-100">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <button
              onClick={() => setFavorited((f) => !f)}
              className="absolute top-4 right-4 p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all"
            >
              <Heart
                className={`w-6 h-6 transition-colors ${
                  favorited ? "text-red-500 fill-red-500" : "text-zinc-400"
                }`}
              />
            </button>
          </div>
        </motion.div>

        {/* Details Section */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="flex flex-col gap-6"
        >
          {/* Header */}
          <div>
            <p className="text-sm font-bold text-zinc-400 uppercase tracking-wider mb-2">
              {product.brand}
            </p>
            <h1 className="text-4xl font-black text-zinc-900 mb-4">
              {product.name}
            </h1>
            <p className="text-3xl font-black text-indigo-600">
              ${product.price}
            </p>
          </div>

          {/* Description */}
          <div className="bg-zinc-50 p-6 rounded-2xl">
            <h2 className="text-lg font-bold text-zinc-900 mb-3">
              Description
            </h2>
            <p className="text-zinc-600 leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Product Info */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-zinc-50 p-4 rounded-lg">
              <p className="text-xs font-bold text-zinc-400 uppercase mb-1">
                Category
              </p>
              <p className="text-lg font-bold text-zinc-900">
                {product.category}
              </p>
            </div>
            <div className="bg-zinc-50 p-4 rounded-lg">
              <p className="text-xs font-bold text-zinc-400 uppercase mb-1">
                Size
              </p>
              <p className="text-lg font-bold text-zinc-900">{product.size}</p>
            </div>
            <div className="bg-zinc-50 p-4 rounded-lg">
              <p className="text-xs font-bold text-zinc-400 uppercase mb-1">
                Color
              </p>
              <p className="text-lg font-bold text-zinc-900">
                {product.color}
              </p>
            </div>
            <div className="bg-zinc-50 p-4 rounded-lg">
              <p className="text-xs font-bold text-zinc-400 uppercase mb-1">
                Gender
              </p>
              <p className="text-lg font-bold text-zinc-900">
                {product.gender}
              </p>
            </div>
          </div>

          {/* Rating */}
          <div className="bg-zinc-50 p-6 rounded-2xl">
            <p className="text-sm font-bold text-zinc-400 uppercase mb-3">
              Rating
            </p>
            <div className="flex items-center gap-3">
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    onClick={() => setRating(star)}
                    className="focus:outline-none"
                  >
                    <Star
                      className={`w-6 h-6 transition-colors ${
                        star <= rating
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-zinc-200"
                      }`}
                    />
                  </button>
                ))}
              </div>
              <span className="text-lg font-bold text-zinc-900">
                {rating.toFixed(1)}
              </span>
            </div>
          </div>

          {/* Specifications */}
          <div className="bg-zinc-50 p-6 rounded-2xl">
            <h2 className="text-lg font-bold text-zinc-900 mb-4">
              Specifications
            </h2>
            <ul className="space-y-3">
              {product.specifications.map((spec, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-zinc-700 font-medium">{spec}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4">
            <button
              onClick={() => {
                if (onAddToCart) {
                  onAddToCart(product);
                }
              }}
              className="flex-1 py-3 px-6 bg-indigo-600 text-white rounded-lg font-bold hover:bg-indigo-700 transition-colors"
            >
              Add to Cart
            </button>
            <button
              onClick={() => navigate("/shop")}
              className="flex-1 py-3 px-6 bg-white text-zinc-900 border-2 border-zinc-200 rounded-lg font-bold hover:bg-zinc-50 transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
