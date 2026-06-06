import { motion, useScroll, useTransform } from "motion/react";
import { ChevronRight, Play, MapPin, Calendar, Clock } from "lucide-react";
import { useRef } from "react";
import { SafeImage } from "../components/SafeImage";

const heroMemory = {
  image: "https://images.unsplash.com/photo-1503803548695-c2a7b4a5b875?q=80&w=2000&auto=format&fit=crop",
  title: "Sunset at Goa Beach",
  subtitle: "GOA 2025",
  description: "Relive the evening that started it all.",
};

const todayMemory = {
  image: "https://images.unsplash.com/photo-1534067783941-51c9c23ecefd?q=80&w=1000&auto=format&fit=crop",
  date: "June 6, 2024",
  title: "Goa Trip",
  timeAgo: "2 Years Ago",
};

const snapshotCards = [
  { label: "Countries Explored", value: "7", color: "text-blue-500" },
  { label: "Cities Visited", value: "24", color: "text-purple-500" },
  { label: "Memories Preserved", value: "412", color: "text-orange-500" },
  { label: "Years Captured", value: "5", color: "text-emerald-500" },
];

const recentMemories = [
  { image: "https://images.unsplash.com/photo-1511988617509-a57c8a288659?q=80&w=800&auto=format&fit=crop", title: "Friends Reunion", date: "April 22, 2025", location: "New York" },
  { image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=800&auto=format&fit=crop", title: "Music Festival", date: "April 10, 2025", location: "Coachella" },
  { image: "https://images.unsplash.com/photo-1510694853838-e4a8c978f518?q=80&w=800&auto=format&fit=crop", title: "Forest Escape", date: "March 28, 2025", location: "Oregon" },
  { image: "https://images.unsplash.com/photo-1572401611152-cf63d874b019?q=80&w=800&auto=format&fit=crop", title: "Road Trip", date: "March 15, 2025", location: "Route 66" },
  { image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=800&auto=format&fit=crop", title: "Desert Drive", date: "Feb 10, 2025", location: "Nevada" },
];

const collections = [
  { name: "Summer 2025", count: 45, cover: "https://images.unsplash.com/photo-1503803548695-c2a7b4a5b875?q=80&w=1200&auto=format&fit=crop" },
  { name: "Family", count: 67, cover: "https://images.unsplash.com/photo-1578496780896-7081cc23c111?q=80&w=1200&auto=format&fit=crop" },
  { name: "Road Trips", count: 34, cover: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1200&auto=format&fit=crop" },
  { name: "Beach Escapes", count: 28, cover: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop" },
];

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div ref={containerRef} className="pb-32 md:pb-32 bg-transparent min-h-screen text-foreground font-sans selection:bg-foreground/">
      {/* Cinematic Hero */}
      <div className="relative h-[75vh] lg:h-[85vh] w-full overflow-hidden md:rounded-[40px] mb-12 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] mx-0 md:mx-4 lg:mx-8 mt-0 md:mt-4 w-full md:w-[calc(100%-2rem)] lg:w-[calc(100%-4rem)] border-0 md:border border-white/60">
        <motion.div style={{ y, opacity }} className="absolute inset-0">
          <SafeImage src={heroMemory.image} alt={heroMemory.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </motion.div>
        
        <div className="absolute inset-0 flex flex-col justify-end p-8 lg:p-24 pb-16 lg:pb-24 z-10 text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          >
            <h4 className="text-white/80 text-lg lg:text-xl font-medium tracking-widest uppercase mb-4 drop-shadow-md">
              {heroMemory.subtitle}
            </h4>
            <h1 className="text-5xl lg:text-8xl font-bold tracking-tight mb-6 leading-tight drop-shadow-lg">
              {heroMemory.title}
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 max-w-2xl mb-10 font-light drop-shadow-md">
              {heroMemory.description}
            </p>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-card/ backdrop-blur-xl text-foreground px-8 py-4 rounded-full font-semibold text-lg flex items-center gap-3 hover:bg-card transition-colors w-max shadow-xl"
            >
              <Play className="w-5 h-5 fill-black" />
              Open Memory
            </motion.button>
          </motion.div>
        </div>
      </div>

      <div className="max-w-[1600px] mx-auto px-6 lg:px-16 flex flex-col gap-24">
        {/* Today in Memories */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-3xl font-semibold mb-8 tracking-tight text-foreground">Today in Memories</h2>
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="relative h-[400px] lg:h-[500px] rounded-[40px] overflow-hidden cursor-pointer group shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] border border-white/60"
          >
            <SafeImage src={todayMemory.image} alt="Today" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            <div className="absolute inset-0 p-8 lg:p-12 flex flex-col justify-between text-white">
              <div className="bg-card/ backdrop-blur-md self-start px-5 py-2 rounded-full border border-white/30 text-white font-medium flex items-center gap-2 shadow-sm">
                <Calendar className="w-4 h-4" />
                {todayMemory.date}
              </div>
              <div>
                <h3 className="text-4xl lg:text-5xl font-bold mb-4 drop-shadow-lg">{todayMemory.title}</h3>
                <div className="flex items-center gap-4 text-lg text-white/90 drop-shadow-md">
                  <span className="flex items-center gap-2"><Clock className="w-5 h-5" /> {todayMemory.timeAgo}</span>
                  <button className="flex items-center gap-1 text-white hover:underline ml-4 font-medium">
                    View Memory <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* Moments Snapshot */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 md:mb-8 tracking-tight text-foreground">Moments Snapshot</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {snapshotCards.map((card, idx) => (
              <motion.div
                key={card.label}
                whileHover={{ scale: 1.03, y: -5 }}
                className="relative h-[200px] md:h-[250px] rounded-[24px] md:rounded-[32px] overflow-hidden group bg-card/ backdrop-blur-2xl border border-white/80 shadow-[0_15px_35px_-10px_rgba(0,0,0,0.05)] cursor-default flex flex-col justify-end p-6 md:p-8"
              >
                <span className={`text-6xl font-bold mb-2 tracking-tight ${card.color}`}>{card.value}</span>
                <span className="text-foreground/ font-medium text-lg">{card.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Recent Memories (Horizontal Scroll) */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full overflow-hidden"
        >
          <div className="flex justify-between items-end mb-6 md:mb-8 pr-4">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground">Recent Memories</h2>
            <button className="text-foreground/ hover:text-foreground flex items-center gap-1 transition-colors font-medium text-sm md:text-base">
              View All <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
            </button>
          </div>
          
          <div className="flex gap-4 md:gap-6 overflow-x-auto pb-8 md:pb-12 pt-4 -mt-4 px-0 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {recentMemories.map((memory, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.02, y: -5 }}
                className="relative min-w-[280px] lg:min-w-[400px] aspect-[4/5] rounded-[24px] md:rounded-[32px] overflow-hidden snap-start cursor-pointer group shadow-[0_15px_35px_-10px_rgba(0,0,0,0.1)] border border-white/60"
              >
                <SafeImage src={memory.image} alt={memory.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                  <h3 className="text-2xl font-semibold mb-3 drop-shadow-md">{memory.title}</h3>
                  <div className="flex flex-col gap-2 text-white/90 text-sm font-medium drop-shadow-md">
                    <span className="flex items-center gap-2"><Calendar className="w-4 h-4"/> {memory.date}</span>
                    <span className="flex items-center gap-2"><MapPin className="w-4 h-4"/> {memory.location}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Collections */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-12"
        >
          <h2 className="text-3xl font-semibold mb-8 tracking-tight text-foreground">Collections</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {collections.map((collection, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.02 }}
                className="relative aspect-[16/9] lg:aspect-[21/9] rounded-[32px] overflow-hidden cursor-pointer group shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] border border-white/60"
              >
                <SafeImage src={collection.cover} alt={collection.name} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                  <h3 className="text-3xl font-bold mb-2 drop-shadow-md">{collection.name}</h3>
                  <span className="text-white/90 font-medium drop-shadow-md">{collection.count} Memories</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
}
