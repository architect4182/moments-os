import { motion } from "motion/react";
import { useState } from "react";
import { useNavigate } from "react-router";
import { MapPin, Users } from "lucide-react";
import { SafeImage } from "../components/SafeImage";

const years = ["2026", "2025", "2024", "2023", "2022"];
const filters = ["All", "Travel", "People", "Family", "Music", "Places", "Favorites"];

const featuredMemory = {
  id: "featured-1",
  image: "https://images.unsplash.com/photo-1503803548695-c2a7b4a5b875?q=80&w=2000&auto=format&fit=crop",
  title: "Sunset at Goa Beach",
  location: "Goa, India",
  date: "March 15, 2025",
  people: 3,
};

const memoryClusters = [
  {
    title: "MARCH 2025",
    memories: [
      {
        id: 1,
        image: "https://images.unsplash.com/photo-1510694853838-e4a8c978f518?q=80&w=800&auto=format&fit=crop",
        title: "Forest Walk",
        location: "Oregon",
        date: "March 28, 2025",
        people: 2,
        aspect: "aspect-square",
      },
      {
        id: 7,
        image: "https://images.unsplash.com/photo-1572401611152-cf63d874b019?q=80&w=800&auto=format&fit=crop",
        title: "Road Trip",
        location: "Route 66",
        date: "March 15, 2025",
        people: 3,
        aspect: "aspect-[4/5]",
      },
      {
        id: 2,
        image: "https://images.unsplash.com/photo-1534067783941-51c9c23ecefd?q=80&w=800&auto=format&fit=crop",
        title: "Mountain Peak",
        location: "Swiss Alps",
        date: "March 5, 2025",
        people: 2,
        aspect: "aspect-square",
      },
    ]
  },
  {
    title: "FEBRUARY 2025",
    memories: [
      {
        id: 3,
        image: "https://images.unsplash.com/photo-1511988617509-a57c8a288659?q=80&w=800&auto=format&fit=crop",
        title: "Friends Forever",
        location: "New York",
        date: "Feb 22, 2025",
        people: 5,
        aspect: "aspect-[4/3]",
      },
      {
        id: 4,
        image: "https://images.unsplash.com/photo-1578496780896-7081cc23c111?q=80&w=800&auto=format&fit=crop",
        title: "Family Dinner",
        location: "Home",
        date: "Feb 14, 2025",
        people: 8,
        aspect: "aspect-[4/5]",
      },
    ]
  },
  {
    title: "GOA TRIP",
    memories: [
      {
        id: 5,
        image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=800&auto=format&fit=crop",
        title: "Music Festival",
        location: "Coachella",
        date: "Jan 20, 2025",
        people: 4,
        aspect: "aspect-square",
      },
      {
        id: 8,
        image: "https://images.unsplash.com/photo-1664353655151-9d94a9170eb0?q=80&w=800&auto=format&fit=crop",
        title: "City Lights",
        location: "Tokyo",
        date: "Jan 5, 2025",
        people: 1,
        aspect: "aspect-[4/5]",
      },
    ]
  }
];

function MemoryCard({ memory, onClick }: { memory: any, onClick: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ scale: 1.02 }}
      onClick={onClick}
      className={`relative rounded-[32px] overflow-hidden cursor-pointer bg-card/ backdrop-blur-xl border border-white/60 group shadow-[0_10px_30px_-10px_rgba(0,0,0,0.1)] ${memory.aspect}`}
    >
      <SafeImage
        src={memory.image}
        alt={memory.title}
        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
      />
      {/* Persistent subtle overlay */}
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
      
      {/* Metadata container */}
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white flex flex-col justify-end">
        <h3 className="text-2xl mb-1 tracking-tight drop-shadow-md" style={{ fontWeight: 600 }}>
          {memory.title}
        </h3>
        <p className="text-white/90 text-sm font-medium drop-shadow-md">{memory.location}</p>
        
        {/* Reveal on hover section */}
        <div className="overflow-hidden transition-all duration-300 max-h-0 opacity-0 group-hover:max-h-[50px] group-hover:opacity-100 group-hover:mt-2">
          <div className="flex items-center gap-4 text-sm text-white/80 font-medium">
            <span className="flex items-center gap-1">
              <Users className="w-4 h-4" /> {memory.people} People
            </span>
          </div>
        </div>
        
        <p className="text-white/70 text-xs font-medium mt-1 transition-all duration-300 group-hover:text-white/90">{memory.date}</p>
      </div>
    </motion.div>
  );
}

export default function Memories() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [activeYear, setActiveYear] = useState("2025");
  const navigate = useNavigate();

  return (
    <div className="py-12 px-6 lg:px-12 max-w-[1600px] mx-auto min-h-screen">
      {/* Timeline Navigation */}
      <div className="flex gap-8 mb-10 overflow-x-auto pb-4 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {years.map((year) => (
          <motion.button
            key={year}
            onClick={() => setActiveYear(year)}
            className={`text-3xl lg:text-5xl font-bold tracking-tight transition-colors snap-start ${
              activeYear === year ? "text-foreground" : "text-foreground/ hover:text-foreground/"
            }`}
          >
            {year}
          </motion.button>
        ))}
      </div>

      {/* Premium Filters */}
      <div className="flex gap-2 mb-16 overflow-x-auto pb-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {filters.map((filter) => (
          <motion.button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-5 py-2 rounded-full whitespace-nowrap transition-all text-sm font-semibold border ${
              activeFilter === filter
                ? "bg-black text-white border-black shadow-lg"
                : "bg-card/ backdrop-blur-2xl text-foreground/ hover:text-foreground border-white/80 shadow-sm hover:shadow-md"
            }`}
          >
            {filter}
          </motion.button>
        ))}
      </div>

      {/* Featured This Week */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-24"
      >
        <h2 className="text-sm font-bold tracking-widest text-foreground/ uppercase mb-4 pl-2">Featured This Week</h2>
        <motion.div 
          whileHover={{ scale: 1.01 }}
          onClick={() => navigate(`/app/memories/${featuredMemory.id}`)}
          className="relative w-full lg:w-[75%] h-[400px] lg:h-[500px] rounded-[40px] overflow-hidden cursor-pointer group shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] border border-white/60"
        >
          <SafeImage 
            src={featuredMemory.image} 
            alt={featuredMemory.title} 
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
          />
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
          
          <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12 text-white">
            <h3 className="text-4xl lg:text-5xl font-bold mb-2 tracking-tight drop-shadow-md">
              {featuredMemory.title}
            </h3>
            <p className="text-xl text-white/90 font-medium mb-1 drop-shadow-md">{featuredMemory.location}</p>
            
            <div className="overflow-hidden transition-all duration-300 max-h-0 opacity-0 group-hover:max-h-[50px] group-hover:opacity-100 group-hover:mt-4">
              <div className="flex items-center gap-4 text-lg text-white/90 font-medium">
                <span className="flex items-center gap-2"><Users className="w-5 h-5" /> {featuredMemory.people} People</span>
              </div>
            </div>

            <p className="text-white/80 font-medium mt-2 transition-all duration-300 group-hover:text-white">{featuredMemory.date}</p>
          </div>
        </motion.div>
      </motion.div>

      {/* Memory Clusters */}
      <div className="flex flex-col gap-20 pb-32">
        {memoryClusters.map((cluster, clusterIdx) => (
          <motion.div 
            key={clusterIdx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="flex items-center justify-between mb-6 pl-2">
              <h2 className="text-xl font-bold tracking-tight text-foreground">{cluster.title}</h2>
              <button className="text-sm font-semibold text-blue-500 hover:text-blue-600 transition-colors">Select</button>
            </div>
            
            {/* Staggered Grid for each cluster */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cluster.memories.map((memory) => (
                <MemoryCard 
                  key={memory.id} 
                  memory={memory} 
                  onClick={() => navigate(`/app/memories/${memory.id}`)} 
                />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
