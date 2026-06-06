import { motion } from "motion/react";
import { useState } from "react";
import { MapPin, Image } from "lucide-react";

const places = [
  {
    id: 1,
    name: "Goa, India",
    coordinates: { x: 65, y: 45 },
    visits: 12,
    memories: 45,
    image: "https://images.unsplash.com/photo-1503803548695-c2a7b4a5b875",
    country: "India",
  },
  {
    id: 2,
    name: "Swiss Alps",
    coordinates: { x: 35, y: 30 },
    visits: 3,
    memories: 28,
    image: "https://images.unsplash.com/photo-1534067783941-51c9c23ecefd",
    country: "Switzerland",
  },
  {
    id: 3,
    name: "New York, USA",
    coordinates: { x: 20, y: 35 },
    visits: 8,
    memories: 67,
    image: "https://images.unsplash.com/photo-1664353655151-9d94a9170eb0",
    country: "USA",
  },
  {
    id: 4,
    name: "Tokyo, Japan",
    coordinates: { x: 80, y: 32 },
    visits: 5,
    memories: 52,
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf",
    country: "Japan",
  },
  {
    id: 5,
    name: "Coachella, USA",
    coordinates: { x: 15, y: 42 },
    visits: 2,
    memories: 34,
    image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea",
    country: "USA",
  },
];

export default function Places() {
  const [selectedPlace, setSelectedPlace] = useState(places[0]);

  return (
    <div className="h-screen flex">
      {/* Map */}
      <div className="flex-1 relative bg-gradient-to-br from-blue-50 to-purple-50 p-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-8"
        >
          <h1 className="text-5xl mb-2 tracking-tight" style={{ fontWeight: 600 }}>
            Places
          </h1>
          <p className="text-xl text-black/50">Explore your memories around the world</p>
        </motion.div>

        {/* Map Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative aspect-[16/10] rounded-[32px] bg-white/40 backdrop-blur-xl border border-white/60 overflow-hidden"
          style={{
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
          }}
        >
          {/* Map Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-100/50 to-purple-100/50" />
          <div className="absolute inset-0 opacity-20">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                  <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100" height="100" fill="url(#grid)" />
            </svg>
          </div>

          {/* Travel Routes */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            {places.map((place, index) => {
              const nextPlace = places[(index + 1) % places.length];
              return (
                <motion.path
                  key={index}
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, delay: index * 0.3 }}
                  d={`M ${place.coordinates.x} ${place.coordinates.y} Q ${
                    (place.coordinates.x + nextPlace.coordinates.x) / 2
                  } ${
                    Math.min(place.coordinates.y, nextPlace.coordinates.y) - 10
                  } ${nextPlace.coordinates.x} ${nextPlace.coordinates.y}`}
                  fill="none"
                  stroke="rgba(59, 130, 246, 0.3)"
                  strokeWidth="0.3"
                  strokeDasharray="2,2"
                />
              );
            })}
          </svg>

          {/* Place Pins */}
          {places.map((place, index) => (
            <motion.div
              key={place.id}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: index * 0.15, type: "spring" }}
              whileHover={{ scale: 1.3 }}
              className="absolute cursor-pointer"
              style={{
                left: `${place.coordinates.x}%`,
                top: `${place.coordinates.y}%`,
                transform: "translate(-50%, -50%)",
              }}
              onClick={() => setSelectedPlace(place)}
            >
              <div className="relative">
                {selectedPlace.id === place.id && (
                  <motion.div
                    layoutId="selected-place"
                    className="absolute -inset-3 bg-blue-500/30 rounded-full"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                )}
                <div
                  className={`relative w-6 h-6 rounded-full border-3 transition-all ${
                    selectedPlace.id === place.id
                      ? "bg-blue-500 border-white scale-125"
                      : "bg-white border-blue-500"
                  }`}
                  style={{
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
                  }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Side Panel */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className="w-96 bg-white/60 backdrop-blur-xl border-l border-white/60 p-8 overflow-y-auto"
      >
        {selectedPlace && (
          <motion.div
            key={selectedPlace.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {/* Place Image */}
            <div className="aspect-[4/3] rounded-[32px] overflow-hidden mb-6">
              <img
                src={selectedPlace.image}
                alt={selectedPlace.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Place Info */}
            <h2 className="text-3xl mb-2 tracking-tight" style={{ fontWeight: 600 }}>
              {selectedPlace.name}
            </h2>
            <p className="text-lg text-black/60 mb-6">{selectedPlace.country}</p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-white/60 rounded-3xl p-6 border border-white/60">
                <div className="text-3xl mb-1" style={{ fontWeight: 600 }}>
                  {selectedPlace.visits}
                </div>
                <div className="text-black/60">Visits</div>
              </div>
              <div className="bg-white/60 rounded-3xl p-6 border border-white/60">
                <div className="text-3xl mb-1" style={{ fontWeight: 600 }}>
                  {selectedPlace.memories}
                </div>
                <div className="text-black/60">Memories</div>
              </div>
            </div>

            {/* Memories Preview */}
            <h3 className="text-xl mb-4 tracking-tight" style={{ fontWeight: 600 }}>
              Memories from {selectedPlace.name}
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="aspect-square rounded-2xl overflow-hidden bg-white/60 border border-white/60 cursor-pointer"
                >
                  <img
                    src={selectedPlace.image}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
