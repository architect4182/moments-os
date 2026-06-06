import { motion } from "motion/react";
import { MapPin, Users, Calendar, Heart } from "lucide-react";

const featuredMemory = {
  image: "https://images.unsplash.com/photo-1503803548695-c2a7b4a5b875",
  title: "Sunset at Goa Beach",
  date: "March 15, 2025",
  location: "Goa, India",
  people: ["Sarah", "Alex", "Maya"],
  music: "Golden Hour — JVKE",
};

const recentMemories = [
  {
    image: "https://images.unsplash.com/photo-1534067783941-51c9c23ecefd",
    title: "Mountain Adventure",
    date: "May 3, 2025",
  },
  {
    image: "https://images.unsplash.com/photo-1511988617509-a57c8a288659",
    title: "Friends Reunion",
    date: "April 22, 2025",
  },
  {
    image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea",
    title: "Music Festival",
    date: "April 10, 2025",
  },
  {
    image: "https://images.unsplash.com/photo-1510694853838-e4a8c978f518",
    title: "Forest Escape",
    date: "March 28, 2025",
  },
];

const stats = [
  { icon: MapPin, label: "Countries", value: "7", color: "from-blue-500 to-cyan-500" },
  { icon: Users, label: "People", value: "53", color: "from-purple-500 to-pink-500" },
  { icon: Calendar, label: "Memories", value: "412", color: "from-orange-500 to-red-500" },
  { icon: Heart, label: "Favorites", value: "89", color: "from-green-500 to-emerald-500" },
];

const collections = [
  { name: "Summer 2025", count: 45, cover: "https://images.unsplash.com/photo-1503803548695-c2a7b4a5b875" },
  { name: "Family", count: 67, cover: "https://images.unsplash.com/photo-1578496780896-7081cc23c111" },
  { name: "Adventures", count: 34, cover: "https://images.unsplash.com/photo-1534067783941-51c9c23ecefd" },
];

export default function Home() {
  return (
    <div className="p-12 max-w-7xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12"
      >
        <h1 className="text-5xl mb-2 tracking-tight" style={{ fontWeight: 600 }}>
          For You
        </h1>
        <p className="text-xl text-black/50">Your memories, beautifully organized</p>
      </motion.div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
      >
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.label}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white/60 backdrop-blur-xl rounded-[32px] p-8 border border-white/60"
              style={{
                boxShadow: "0 10px 40px -10px rgba(0, 0, 0, 0.1)",
              }}
            >
              <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-4`}>
                <Icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-4xl mb-1" style={{ fontWeight: 600 }}>
                {stat.value}
              </div>
              <div className="text-black/50">{stat.label}</div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Featured Memory */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-12"
      >
        <h2 className="text-3xl mb-6 tracking-tight" style={{ fontWeight: 600 }}>
          Featured Memory
        </h2>
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="relative aspect-[21/9] rounded-[32px] overflow-hidden cursor-pointer bg-white/60 backdrop-blur-xl border border-white/60"
          style={{
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
          }}
        >
          <img
            src={featuredMemory.image}
            alt={featuredMemory.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute bottom-8 left-8 right-8 text-white">
            <h3 className="text-4xl mb-3 tracking-tight" style={{ fontWeight: 600 }}>
              {featuredMemory.title}
            </h3>
            <div className="flex gap-8 text-white/80">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>{featuredMemory.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span>{featuredMemory.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                <span>{featuredMemory.people.join(", ")}</span>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Recent Memories */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mb-12"
      >
        <h2 className="text-3xl mb-6 tracking-tight" style={{ fontWeight: 600 }}>
          Recent Memories
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {recentMemories.map((memory, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="relative aspect-[3/4] rounded-[32px] overflow-hidden cursor-pointer bg-white/60 backdrop-blur-xl border border-white/60"
              style={{
                boxShadow: "0 10px 40px -10px rgba(0, 0, 0, 0.1)",
              }}
            >
              <img
                src={memory.image}
                alt={memory.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h3 className="text-xl mb-1 tracking-tight" style={{ fontWeight: 600 }}>
                  {memory.title}
                </h3>
                <p className="text-white/70 text-sm">{memory.date}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Collections Preview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <h2 className="text-3xl mb-6 tracking-tight" style={{ fontWeight: 600 }}>
          Collections
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {collections.map((collection, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="relative aspect-[4/3] rounded-[32px] overflow-hidden cursor-pointer bg-white/60 backdrop-blur-xl border border-white/60"
              style={{
                boxShadow: "0 10px 40px -10px rgba(0, 0, 0, 0.1)",
              }}
            >
              <img
                src={collection.cover}
                alt={collection.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h3 className="text-2xl mb-1 tracking-tight" style={{ fontWeight: 600 }}>
                  {collection.name}
                </h3>
                <p className="text-white/70">{collection.count} memories</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
