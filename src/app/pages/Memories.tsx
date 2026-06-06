import { motion } from "motion/react";
import { useState } from "react";
import { useNavigate } from "react-router";
import { MapPin, Users } from "lucide-react";

const filters = ["All", "Travel", "Family", "Friends", "Work", "Favorites", "Recent"];

const memories = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1503803548695-c2a7b4a5b875",
    title: "Goa Sunset",
    location: "Goa, India",
    date: "March 2025",
    people: 3,
    size: "large",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1534067783941-51c9c23ecefd",
    title: "Mountain Peak",
    location: "Swiss Alps",
    date: "May 2025",
    people: 2,
    size: "regular",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1511988617509-a57c8a288659",
    title: "Friends Forever",
    location: "New York",
    date: "April 2025",
    people: 5,
    size: "regular",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1578496780896-7081cc23c111",
    title: "Family Dinner",
    location: "Home",
    date: "April 2025",
    people: 8,
    size: "large",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea",
    title: "Music Festival",
    location: "Coachella",
    date: "April 2025",
    people: 4,
    size: "regular",
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1510694853838-e4a8c978f518",
    title: "Forest Walk",
    location: "Oregon",
    date: "March 2025",
    people: 2,
    size: "regular",
  },
  {
    id: 7,
    image: "https://images.unsplash.com/photo-1572401611152-cf63d874b019",
    title: "Road Trip",
    location: "Route 66",
    date: "May 2025",
    people: 3,
    size: "large",
  },
  {
    id: 8,
    image: "https://images.unsplash.com/photo-1664353655151-9d94a9170eb0",
    title: "City Lights",
    location: "Tokyo",
    date: "June 2025",
    people: 1,
    size: "regular",
  },
];

export default function Memories() {
  const [activeFilter, setActiveFilter] = useState("All");
  const navigate = useNavigate();

  return (
    <div className="p-12 max-w-7xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-5xl mb-2 tracking-tight" style={{ fontWeight: 600 }}>
          Memories
        </h1>
        <p className="text-xl text-black/50">All your captured moments</p>
      </motion.div>

      {/* Filters */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="flex gap-3 mb-12 overflow-x-auto pb-2"
      >
        {filters.map((filter) => (
          <motion.button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-6 py-3 rounded-full whitespace-nowrap transition-all ${
              activeFilter === filter
                ? "bg-black text-white"
                : "bg-white/60 backdrop-blur-xl text-black/70 hover:bg-white/80 border border-white/60"
            }`}
            style={{ fontWeight: 500 }}
          >
            {filter}
          </motion.button>
        ))}
      </motion.div>

      {/* Masonry Grid */}
      <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
        {memories.map((memory, index) => (
          <motion.div
            key={memory.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 + index * 0.05 }}
            whileHover={{ scale: 1.03, y: -8 }}
            onClick={() => navigate(`/app/memories/${memory.id}`)}
            className={`relative rounded-[32px] overflow-hidden cursor-pointer bg-white/60 backdrop-blur-xl border border-white/60 break-inside-avoid group ${
              memory.size === "large" ? "aspect-[4/5]" : "aspect-square"
            }`}
            style={{
              boxShadow: "0 10px 40px -10px rgba(0, 0, 0, 0.1)",
            }}
          >
            <img
              src={memory.image}
              alt={memory.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
              <h3 className="text-2xl mb-2 tracking-tight" style={{ fontWeight: 600 }}>
                {memory.title}
              </h3>
              <div className="flex items-center gap-4 text-sm text-white/80">
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  <span>{memory.location}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="w-4 h-4" />
                  <span>{memory.people}</span>
                </div>
              </div>
              <div className="text-white/60 text-sm mt-1">{memory.date}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
