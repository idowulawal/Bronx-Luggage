import React, { useState } from "react";
import { MapPin, Mail, Phone, Star } from "lucide-react";

export default function ContactUs() {
  const [feedback, setFeedback] = useState({
    name: "",
    email: "",
    message: "",
    rating: 5,
  });

  return (
    <div className="container mx-auto px-4 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <h2 className="text-4xl font-black text-zinc-900 mb-8">
            GET IN TOUCH
          </h2>
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-indigo-50 text-indigo-600 rounded-xl">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <p className="font-bold text-zinc-900">Our Location</p>
                <p className="text-zinc-500">
                  Festival Marketplace, Suite 104
                  <br />
                  Bronx, NY 10451
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-3 bg-indigo-50 text-indigo-600 rounded-xl">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <p className="font-bold text-zinc-900">Email Us</p>
                <p className="text-zinc-500">
                  hello@bronxluggage.com
                  <br />
                  support@bronxluggage.com
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-3 bg-indigo-50 text-indigo-600 rounded-xl">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <p className="font-bold text-zinc-900">Call Us</p>
                <p className="text-zinc-500">
                  +234 806 263 5835
                  <br />
                  Mon-Sat: 10am - 8pm
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 p-8 bg-zinc-900 rounded-3xl text-white">
            <h3 className="text-xl font-bold mb-4">Developed By</h3>
            <p className="opacity-70 mb-2">CPISM 5 students </p>
            <p className="opacity-70 mb-2">Aptech Agodi , Ibadan</p>
            <p className="opacity-70">Ibadan, Nigeria</p>
          </div>
        </div>

        <div className="bg-white p-10 rounded-3xl border border-zinc-100 shadow-xl">
          <h3 className="text-2xl font-bold text-zinc-900 mb-6">
            Send Feedback
          </h3>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-xs font-bold text-zinc-400 uppercase">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-zinc-50 border-none rounded-xl focus:ring-2 focus:ring-indigo-500"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-zinc-400 uppercase">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-zinc-50 border-none rounded-xl focus:ring-2 focus:ring-indigo-500"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-zinc-400 uppercase">
                Rating
              </label>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setFeedback({ ...feedback, rating: star })}
                    className={`p-2 rounded-lg transition-colors ${feedback.rating >= star ? "bg-yellow-100 text-yellow-600" : "bg-zinc-50 text-zinc-300"}`}
                  >
                    <Star
                      className={`w-5 h-5 ${feedback.rating >= star ? "fill-current" : ""}`}
                    />
                  </button>
                ))}
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-zinc-400 uppercase">
                Message
              </label>
              <textarea
                rows={4}
                className="w-full px-4 py-3 bg-zinc-50 border-none rounded-xl focus:ring-2 focus:ring-indigo-500"
                placeholder="Tell us about your experience..."
              />
            </div>
            <button className="w-full py-4 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200">
              Submit Feedback
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
