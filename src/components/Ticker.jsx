import React, { useState, useEffect } from "react";
import { Clock, Calendar, MapPin } from "lucide-react";

export default function Ticker() {
  const [dateTime, setDateTime] = useState(new Date());
  const [location, setLocation] = useState("Detecting location...");

  useEffect(() => {
    const timer = setInterval(() => setDateTime(new Date()), 1000);

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation(
            `${position.coords.latitude.toFixed(2)}°N, ${position.coords.longitude.toFixed(2)}°E`,
          );
        },
        () => setLocation("Location access denied"),
      );
    }

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed bottom-0 left-0 w-full bg-zinc-900 text-white py-2 overflow-hidden z-50 border-t border-white/10">
      <div className="flex whitespace-nowrap animate-marquee">
        <span className="mx-8 flex items-center gap-2">
          <Clock className="w-4 h-4" /> {dateTime.toLocaleTimeString()}
        </span>
        <span className="mx-8 flex items-center gap-2">
          <Calendar className="w-4 h-4" /> {dateTime.toLocaleDateString()}
        </span>
        <span className="mx-8 flex items-center gap-2">
          <MapPin className="w-4 h-4" /> {location}
        </span>
        <span className="mx-8 uppercase tracking-widest text-xs opacity-50">
          Bronx Luggage - Excellence in Travel Since 1995
        </span>
        <span className="mx-8 flex items-center gap-2">
          <Clock className="w-4 h-4" /> {dateTime.toLocaleTimeString()}
        </span>
        <span className="mx-8 flex items-center gap-2">
          <Calendar className="w-4 h-4" /> {dateTime.toLocaleDateString()}
        </span>
        <span className="mx-8 flex items-center gap-2">
          <MapPin className="w-4 h-4" /> {location}
        </span>
      </div>
    </div>
  );
}
