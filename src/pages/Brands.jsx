import React from "react";
import { motion } from "motion/react";
import data from "../data.json";

const { BRANDS } = data;

export default function Brands() {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-5xl font-black tracking-tight text-zinc-900 mb-4">
          OUR BRANDS
        </h2>
        <p className="text-zinc-500">
          We partner with the world's leading luggage manufacturers to bring you
          quality you can trust.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {BRANDS.map((brand) => (
          <motion.div
            key={brand.name}
            whileHover={{ y: -5 }}
            className="bg-white p-8 rounded-3xl border border-zinc-100 shadow-sm text-center"
          >
            <div className="w-24 h-24 mx-auto mb-6 rounded-2xl overflow-hidden bg-zinc-50 flex items-center justify-center">
              <img
                src={brand.logo}
                alt={brand.name}
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all"
                referrerPolicy="no-referrer"
              />
            </div>
            <h3 className="text-xl font-bold text-zinc-900 mb-3">
              {brand.name}
            </h3>
            <p className="text-zinc-500 text-sm leading-relaxed">
              {brand.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
