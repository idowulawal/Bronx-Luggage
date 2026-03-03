import React from "react";
import { motion } from "motion/react";

export default function Gallery() {
  const images = [
    "https://images.unsplash.com/photo-1565026057447-bc90a3dceb87",
    "https://images.unsplash.com/photo-1548036328-c9fa89d128fa",
    "https://images.pexels.com/photos/27793087/pexels-photo-27793087.jpeg",
    "https://images.unsplash.com/photo-1584917865442-de89df76afd3",
    "https://images.pexels.com/photos/7159408/pexels-photo-7159408.jpeg",
    "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3",
    "https://images.pexels.com/photos/4452513/pexels-photo-4452513.jpeg",
    "https://images.pexels.com/photos/842959/pexels-photo-842959.jpeg",
    "https://images.pexels.com/photos/2646521/pexels-photo-2646521.jpeg",
  ];

  return (
    <div className="container mx-auto px-4 py-20">
      <h2 className="text-4xl font-black text-zinc-900 mb-12 text-center">
        GALLERY
      </h2>
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
        {images.map((img, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="overflow-hidden rounded-2xl"
          >
            <img
              src={`${img}?auto=format&fit=crop&q=80&w=800`}
              alt={`Gallery ${idx}`}
              className="w-full hover:scale-105 transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
