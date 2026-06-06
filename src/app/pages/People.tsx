import { motion } from "motion/react";
import { useState } from "react";
import { useNavigate } from "react-router";
import { Heart, Plane, Calendar } from "lucide-react";
import { SafeImage } from "../components/SafeImage";

const people = [
  {
    id: 1,
    name: "Sarah Johnson",
    category: "Family",
    memories: 145,
    years: 28,
    trips: 12,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop",
    relation: "Sister",
  },
  {
    id: 2,
    name: "Alex Chen",
    category: "Travel Partners",
    memories: 89,
    years: 5,
    trips: 8,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1200&auto=format&fit=crop",
    relation: "Best Friend",
  },
  {
    id: 3,
    name: "Maya Patel",
    category: "Friends",
    memories: 67,
    years: 4,
    trips: 3,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1200&auto=format&fit=crop",
    relation: "Close Friend",
  },
  {
    id: 4,
    name: "Jordan Williams",
    category: "Family",
    memories: 123,
    years: 25,
    trips: 10,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop",
    relation: "Brother",
  },
  {
    id: 5,
    name: "Emma Davis",
    category: "Colleagues",
    memories: 54,
    years: 3,
    trips: 2,
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200&auto=format&fit=crop",
    relation: "Colleague",
  },
  {
    id: 6,
    name: "Michael Brown",
    category: "Favorites",
    memories: 178,
    years: 12,
    trips: 15,
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1200&auto=format&fit=crop",
    relation: "Partner",
  },
];

const categories = ["All", "Favorites", "Family", "Friends", "Travel Partners", "Colleagues"];

export default function People() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const navigate = useNavigate();

  const filteredPeople =
    activeCategory === "All"
      ? people
      : people.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans pb-32">
      {/* Editorial Hero Section */}
      <div className="pt-20 pb-8 md:pb-12 px-6 md:px-8 lg:px-16 max-w-[1600px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 text-foreground">People</h1>
          <p className="text-lg md:text-xl lg:text-2xl text-foreground/ font-medium mb-8 md:mb-12 leading-relaxed">
            The people who shaped your story.<br/> Relive the moments you've shared.
          </p>
        </motion.div>

        {/* Premium Glass Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8, ease: "easeOut" }}
          className="flex gap-2 mb-10 md:mb-16 overflow-x-auto pb-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-full whitespace-nowrap transition-all text-[15px] font-semibold border ${
                activeCategory === category
                  ? "bg-black text-white border-black shadow-lg"
                  : "bg-card/ backdrop-blur-2xl text-foreground/ hover:text-foreground border-white/80 shadow-sm hover:shadow-md"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Immersive Portrait Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8"
        >
          {filteredPeople.map((person, index) => (
            <motion.div
              layout
              key={person.id}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.1 + index * 0.05, duration: 0.5, ease: "easeOut" }}
              whileHover={{ scale: 1.02, y: -5 }}
              onClick={() => navigate(`/app/people/${person.id}`)}
              className="relative aspect-[3/4] rounded-[32px] overflow-hidden cursor-pointer group shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] border border-white/60 bg-card"
            >
              <SafeImage
                src={person.image}
                alt={person.name}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="absolute inset-x-0 bottom-0 p-8 flex flex-col justify-end text-white">
                <div className="flex items-center gap-2 mb-2 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                  <span className="bg-card/ backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border border-white/20">
                    {person.relation}
                  </span>
                </div>
                
                <h3 className="text-3xl font-bold mb-3 tracking-tight drop-shadow-md">
                  {person.name}
                </h3>
                
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-white/90 text-sm font-medium drop-shadow-md">
                  <span className="flex items-center gap-1.5"><Heart className="w-4 h-4 text-red-400" /> {person.memories} Memories</span>
                  <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> {person.years} Years</span>
                  <span className="flex items-center gap-1.5"><Plane className="w-4 h-4" /> {person.trips} Trips</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
