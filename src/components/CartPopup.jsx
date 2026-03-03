import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Trash2, Plus, Minus } from "lucide-react";

export default function CartPopup({ isOpen, onClose, cartItems, onUpdateQuantity, onRemoveItem }) {
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/30 z-40"
          />

          {/* Cart Popup */}
          <motion.div
            initial={{ opacity: 0, x: 400 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 400 }}
            transition={{ duration: 0.3 }}
            className="fixed right-0 top-20 h-[calc(100vh-80px)] w-full max-w-md bg-white shadow-2xl z-50 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-zinc-100">
              <h2 className="text-2xl font-black text-zinc-900">Your Cart</h2>
              <button
                onClick={onClose}
                className="p-2 hover:bg-zinc-100 rounded-lg transition-colors"
              >
                <X className="w-6 h-6 text-zinc-600" />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {cartItems.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <div className="w-16 h-16 bg-zinc-100 rounded-full flex items-center justify-center mb-4">
                    <X className="w-8 h-8 text-zinc-400" />
                  </div>
                  <p className="text-zinc-500 font-medium">Your cart is empty</p>
                  <p className="text-zinc-400 text-sm mt-1">Start shopping to add items</p>
                </div>
              ) : (
                cartItems.map((item) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex gap-4 p-4 bg-zinc-50 rounded-lg hover:bg-zinc-100 transition-colors"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="font-bold text-zinc-900 text-sm line-clamp-2">
                        {item.name}
                      </h3>
                      <p className="text-indigo-600 font-bold text-sm mt-1">
                        ${item.price.toFixed(2)}
                      </p>
                      <div className="flex items-center gap-2 mt-2">
                        <button
                          onClick={() => onUpdateQuantity(item.id, Math.max(1, item.quantity - 1))}
                          className="p-1 hover:bg-zinc-200 rounded transition-colors"
                        >
                          <Minus className="w-4 h-4 text-zinc-600" />
                        </button>
                        <span className="w-6 text-center text-sm font-bold text-zinc-900">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                          className="p-1 hover:bg-zinc-200 rounded transition-colors"
                        >
                          <Plus className="w-4 h-4 text-zinc-600" />
                        </button>
                      </div>
                    </div>
                    <button
                      onClick={() => onRemoveItem(item.id)}
                      className="p-2 hover:bg-red-50 rounded transition-colors"
                    >
                      <Trash2 className="w-5 h-5 text-red-500" />
                    </button>
                  </motion.div>
                ))
              )}
            </div>

            {/* Footer */}
            {cartItems.length > 0 && (
              <div className="border-t border-zinc-100 p-6 space-y-4 bg-zinc-50">
                <div className="flex justify-between items-center">
                  <span className="text-zinc-600 font-medium">Subtotal:</span>
                  <span className="text-xl font-black text-zinc-900">
                    ${totalPrice.toFixed(2)}
                  </span>
                </div>
                <button className="w-full py-3 bg-indigo-600 text-white rounded-lg font-bold hover:bg-indigo-700 transition-colors">
                  Proceed to Checkout
                </button>
                <button
                  onClick={onClose}
                  className="w-full py-3 bg-white text-zinc-900 rounded-lg font-bold border border-zinc-200 hover:bg-zinc-50 transition-colors"
                >
                  Continue Shopping
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
