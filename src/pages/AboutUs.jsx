import React from "react";

export default function AboutUs() {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-5xl font-black text-zinc-900 mb-8">
            BRONX LUGGAGE
          </h2>
          <div className="space-y-6 text-zinc-600 leading-relaxed text-lg">
            <p>
              Located in the heart of the Festival Marketplace, Bronx Luggage
              has been the trusted destination for travelers for over two
              decades. We believe that high-quality luggage is more than just a
              container for your belongings—it's a companion for your life's
              greatest adventures.
            </p>
            <p>
              Our curated selection ranges from affordable sets for the
              occasional traveler to the world's most prestigious brands for the
              global nomad. Every piece in our store is selected for its
              durability, functionality, and style.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-8">
              <div>
                <p className="text-3xl font-black text-indigo-600">25+</p>
                <p className="text-sm font-bold text-zinc-400 uppercase">
                  Years Experience
                </p>
              </div>
              <div>
                <p className="text-3xl font-black text-indigo-600">50k+</p>
                <p className="text-sm font-bold text-zinc-400 uppercase">
                  Happy Travelers
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1473625247510-8ceb1760943f?auto=format&fit=crop&q=80&w=1200"
            alt="About"
            className="rounded-3xl shadow-2xl"
            referrerPolicy="no-referrer"
          />
          <div className="absolute -bottom-8 -left-8 bg-indigo-600 text-white p-8 rounded-3xl hidden md:block">
            <p className="text-xl font-bold italic">
              "Quality that travels with you."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
