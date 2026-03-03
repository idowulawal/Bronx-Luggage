import React from "react";
import { Link } from "react-router-dom";
import { ShoppingBag, Facebook, Twitter, Instagram } from "lucide-react";

export default function Footer() {
  const quickLinks = [
    { label: "Home", path: "/" },
    { label: "Shop", path: "/shop" },
    { label: "Brands", path: "/brands" },
    { label: "Gallery", path: "/gallery" },
  ];

  const supportLinks = [
    { label: "About Us", path: "/about" },
    { label: "Contact Us", path: "/contact" },
    { label: "Site Map", path: "/" },
    { label: "Privacy Policy", path: "/" },
  ];

  return (
    <footer className="bg-white border-t border-zinc-100 pt-20 pb-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <span className="text-lg font-black tracking-tighter">
                BRONX LUGGAGE
              </span>
            </div>
            <p className="text-zinc-500 leading-relaxed">
              Premium travel gear for the modern explorer. Quality that lasts a
              lifetime.
            </p>
            <div className="flex gap-4">
              <button className="p-2 bg-zinc-100 rounded-lg text-zinc-500 hover:bg-indigo-600 hover:text-white transition-all">
                <Facebook className="w-5 h-5" />
              </button>
              <button className="p-2 bg-zinc-100 rounded-lg text-zinc-500 hover:bg-indigo-600 hover:text-white transition-all">
                <Twitter className="w-5 h-5" />
              </button>
              <button className="p-2 bg-zinc-100 rounded-lg text-zinc-500 hover:bg-indigo-600 hover:text-white transition-all">
                <Instagram className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-zinc-900 mb-6">Quick Links</h4>
            <ul className="space-y-4 text-zinc-500">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="hover:text-indigo-600 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-zinc-900 mb-6">Support</h4>
            <ul className="space-y-4 text-zinc-500">
              {supportLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="hover:text-indigo-600 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-zinc-900 mb-6">Newsletter</h4>
            <p className="text-zinc-500 mb-4">
              Subscribe for travel tips and exclusive offers.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Email address"
                className="w-[70%] px-4 py-2 bg-zinc-100 border-none rounded-lg 
                focus:ring-2 focus:ring-indigo-500"
              />
              <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg 
              font-bold hover:bg-indigo-700 transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-zinc-100 text-center text-zinc-400 text-sm">
          <p>
            © 2026 Bronx Luggage. All rights reserved. Designed with excellence.
          </p>
        </div>
      </div>
    </footer>
  );
}
