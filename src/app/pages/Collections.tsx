import { motion } from "motion/react";
import { Calendar, Image } from "lucide-react";
import { SafeImage } from "../components/SafeImage";

const collections = [
  {
    id: 1,
    name: "Summer 2025",
    description: "Golden sunsets and unforgettable adventures.",
    count: 89,
    dateRange: "June - August 2025",
    cover: "https://images.unsplash.com/photo-1503803548695-c2a7b4a5b875?q=80&w=1200&auto=format&fit=crop",
    size: "large",
  },
  {
    id: 2,
    name: "Beach Trips",
    description: "Sand, surf, and endless horizons.",
    count: 45,
    dateRange: "2024 - 2025",
    cover: "https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&w=800&auto=format&fit=crop",
    size: "regular",
  },
  {
    id: 3,
    name: "Family Time",
    description: "The moments that matter most.",
    count: 156,
    dateRange: "All time",
    cover: "https://images.unsplash.com/photo-1578496780896-7081cc23c111?q=80&w=800&auto=format&fit=crop",
    size: "regular",
  },
  {
    id: 4,
    name: "Road Trips",
    description: "Miles traveled and memories made.",
    count: 67,
    dateRange: "2023 - 2025",
    cover: "https://images.unsplash.com/photo-1572401611152-cf63d874b019?q=80&w=1200&auto=format&fit=crop",
    size: "large",
  },
  {
    id: 5,
    name: "Music Festivals",
    description: "Dancing under the open sky.",
    count: 34,
    dateRange: "2024 - 2025",
    cover: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=800&auto=format&fit=crop",
    size: "regular",
  },
  {
    id: 6,
    name: "Late Night Drives",
    description: "City lights and quiet conversations.",
    count: 28,
    dateRange: "2024 - 2025",
    cover: "https://images.unsplash.com/photo-1664353655151-9d94a9170eb0?q=80&w=800&auto=format&fit=crop",
    size: "regular",
  },
  {
    id: 7,
    name: "Nature Escapes",
    description: "Peaceful journeys into the wild.",
    count: 92,
    dateRange: "2022 - 2025",
    cover: "https://images.unsplash.com/photo-1510694853838-e4a8c978f518?q=80&w=1200&auto=format&fit=crop",
    size: "large",
  },
  {
    id: 8,
    name: "Friends Forever",
    description: "Laughter, secrets, and shared history.",
    count: 178,
    dateRange: "All time",
    cover: "https://images.unsplash.com/photo-1511988617509-a57c8a288659?q=80&w=800&auto=format&fit=crop",
    size: "regular",
  },
];

export default function Collections() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans pb-32">
      <div className="p-6 md:p-8 lg:p-16 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-10 md:mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-2 md:mb-4">
            Collections
          </h1>
          <p className="text-xl md:text-2xl text-foreground/ font-medium">Curated albums of your favorite moments.</p>
        </motion.div>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {collections.map((collection, index) => {
            const isLarge = collection.size === "large";
            return (
              <motion.div
                key={collection.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05, duration: 0.6, ease: "easeOut" }}
                whileHover={{ scale: 1.015 }}
                className={`relative rounded-[32px] overflow-hidden cursor-pointer group shadow-[0_15px_35px_-10px_rgba(0,0,0,0.1)] border border-white/60 bg-black ${
                  isLarge ? "md:col-span-2 aspect-[21/9]" : "aspect-[4/3]"
                }`}
              >
                <SafeImage
                  src={collection.cover}
                  alt={collection.name}
                  className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105 group-hover:brightness-110 opacity-90"
                />
                
                {/* Soft Premium Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-500" />

                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-white"
                  >
                    <h2
                      className={`${
                        isLarge ? "text-4xl md:text-5xl" : "text-3xl"
                      } mb-2 tracking-tight font-bold drop-shadow-md`}
                    >
                      {collection.name}
                    </h2>
                    
                    <p className="text-white/90 text-base md:text-lg font-medium mb-4 drop-shadow-sm max-w-lg">
                      {collection.description}
                    </p>

                    {/* Metadata revealed on hover */}
                    <div className="flex items-center gap-6 text-white/70 font-medium opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                      <div className="flex items-center gap-2">
                        <Image className="w-5 h-5" />
                        <span>{collection.count} memories</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-5 h-5" />
                        <span>{collection.dateRange}</span>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Your Story Continues (Replaces Create New Collection) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mt-24 relative rounded-[40px] overflow-hidden aspect-[21/9] flex items-center justify-center text-center shadow-[0_20px_50px_-12px_rgba(0,0,0,0.2)]"
        >
          {/* Background Image */}
          <SafeImage 
            src="https://images.unsplash.com/photo-1476820865390-c52aeebb9891?q=80&w=2000&auto=format&fit=crop" 
            alt="Story Continues" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Light gradient overlay for text legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/80" />
          
          <div className="relative z-10 p-8 md:p-12 text-white max-w-4xl">
            <h3 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-4 md:mb-6 drop-shadow-lg">
              Your Story Continues
            </h3>
            <p className="text-xl md:text-2xl text-white/80 font-medium mb-8 md:mb-12 drop-shadow-md">
              Every memory becomes part of a larger story.
            </p>
            
            {/* Stats Row */}
            <div className="grid grid-cols-2 md:flex md:flex-wrap justify-center gap-6 md:gap-8 lg:gap-16 text-white">
              <div className="flex flex-col items-center">
                <span className="text-4xl lg:text-5xl font-bold mb-2">89</span>
                <span className="text-sm font-bold uppercase tracking-widest text-white/60">Collections</span>
              </div>
              <div className="w-px h-16 bg-card/ hidden md:block" />
              <div className="flex flex-col items-center">
                <span className="text-4xl lg:text-5xl font-bold mb-2">412</span>
                <span className="text-sm font-bold uppercase tracking-widest text-white/60">Memories</span>
              </div>
              <div className="w-px h-16 bg-card/ hidden md:block" />
              <div className="flex flex-col items-center">
                <span className="text-4xl lg:text-5xl font-bold mb-2">53</span>
                <span className="text-sm font-bold uppercase tracking-widest text-white/60">People</span>
              </div>
              <div className="w-px h-16 bg-card/ hidden md:block" />
              <div className="flex flex-col items-center">
                <span className="text-4xl lg:text-5xl font-bold mb-2">7</span>
                <span className="text-sm font-bold uppercase tracking-widest text-white/60">Countries</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
