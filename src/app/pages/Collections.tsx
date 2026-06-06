import { motion } from "motion/react";
import { Calendar, Image } from "lucide-react";

const collections = [
  {
    id: 1,
    name: "Summer 2025",
    count: 89,
    dateRange: "June - August 2025",
    cover: "https://images.unsplash.com/photo-1503803548695-c2a7b4a5b875",
    size: "large",
  },
  {
    id: 2,
    name: "Beach Trips",
    count: 45,
    dateRange: "2024 - 2025",
    cover: "https://images.unsplash.com/photo-1519046904884-53103b34b206",
    size: "regular",
  },
  {
    id: 3,
    name: "Family Time",
    count: 156,
    dateRange: "All time",
    cover: "https://images.unsplash.com/photo-1578496780896-7081cc23c111",
    size: "regular",
  },
  {
    id: 4,
    name: "Road Trips",
    count: 67,
    dateRange: "2023 - 2025",
    cover: "https://images.unsplash.com/photo-1572401611152-cf63d874b019",
    size: "large",
  },
  {
    id: 5,
    name: "Music Festivals",
    count: 34,
    dateRange: "2024 - 2025",
    cover: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea",
    size: "regular",
  },
  {
    id: 6,
    name: "Late Night Drives",
    count: 28,
    dateRange: "2024 - 2025",
    cover: "https://images.unsplash.com/photo-1664353655151-9d94a9170eb0",
    size: "regular",
  },
  {
    id: 7,
    name: "Nature Escapes",
    count: 92,
    dateRange: "2022 - 2025",
    cover: "https://images.unsplash.com/photo-1510694853838-e4a8c978f518",
    size: "large",
  },
  {
    id: 8,
    name: "Friends Forever",
    count: 178,
    dateRange: "All time",
    cover: "https://images.unsplash.com/photo-1511988617509-a57c8a288659",
    size: "regular",
  },
];

export default function Collections() {
  return (
    <div className="p-12 max-w-7xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12"
      >
        <h1 className="text-5xl mb-2 tracking-tight" style={{ fontWeight: 600 }}>
          Collections
        </h1>
        <p className="text-xl text-black/50">Curated albums of your favorite moments</p>
      </motion.div>

      {/* Collections Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {collections.map((collection, index) => {
          const isLarge = collection.size === "large";
          return (
            <motion.div
              key={collection.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.03, y: -8 }}
              className={`relative rounded-[32px] overflow-hidden cursor-pointer bg-white/60 backdrop-blur-xl border border-white/60 group ${
                isLarge ? "md:col-span-2 aspect-[21/9]" : "aspect-[4/3]"
              }`}
              style={{
                boxShadow: "0 10px 40px -10px rgba(0, 0, 0, 0.1)",
              }}
            >
              <img
                src={collection.cover}
                alt={collection.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-white"
                >
                  <h2
                    className={`${
                      isLarge ? "text-5xl" : "text-3xl"
                    } mb-3 tracking-tight`}
                    style={{ fontWeight: 600 }}
                  >
                    {collection.name}
                  </h2>
                  <div className="flex items-center gap-6 text-white/80">
                    <div className="flex items-center gap-2">
                      <Image className="w-5 h-5" />
                      <span className="text-lg">{collection.count} memories</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-5 h-5" />
                      <span className="text-lg">{collection.dateRange}</span>
                    </div>
                  </div>
                </motion.div>

                {/* Preview Grid */}
                <div className="absolute top-8 right-8 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-xl border border-white/40"
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Create New Collection CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        whileHover={{ scale: 1.02 }}
        className="mt-12 p-12 rounded-[32px] bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-xl border border-white/60 text-center cursor-pointer"
        style={{
          boxShadow: "0 10px 40px -10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div className="w-20 h-20 rounded-full bg-white/60 backdrop-blur-xl flex items-center justify-center mx-auto mb-6 border border-white/60">
          <Image className="w-10 h-10 text-black/70" />
        </div>
        <h3 className="text-3xl mb-3 tracking-tight" style={{ fontWeight: 600 }}>
          Create New Collection
        </h3>
        <p className="text-xl text-black/60">
          Curate your memories into beautiful albums
        </p>
      </motion.div>
    </div>
  );
}
