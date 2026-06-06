import { motion, useScroll, useTransform } from "motion/react";
import { useParams, useNavigate } from "react-router";
import { SafeImage } from "../components/SafeImage";
import { ChevronLeft, Heart, Calendar, MapPin, Plane, Image as ImageIcon } from "lucide-react";
import { useRef } from "react";

// Mock Data
const personData = {
  id: "1",
  name: "Sarah Johnson",
  relation: "Sister",
  image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2000&auto=format&fit=crop",
  stats: {
    years: 28,
    trips: 12,
    memories: 145,
    places: 24,
  },
  favoriteMoments: [
    { title: "Graduation Trip", location: "Paris, France", image: "https://images.unsplash.com/photo-1502602881462-83451f2ca808?q=80&w=800&auto=format&fit=crop" },
    { title: "Childhood Home", location: "Seattle, WA", image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop" },
    { title: "Road Trip", location: "Pacific Coast", image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=800&auto=format&fit=crop" },
  ],
  timeline: [
    { year: "2025", title: "New Year's Eve in NYC", description: "Watching the ball drop in Times Square.", image: "https://images.unsplash.com/photo-1664353655151-9d94a9170eb0?q=80&w=800&auto=format&fit=crop" },
    { year: "2023", title: "Summer in Greece", description: "Island hopping and incredible food.", image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=800&auto=format&fit=crop" },
    { year: "2020", title: "Lockdown Baking", description: "Making sourdough bread every weekend.", image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=800&auto=format&fit=crop" },
  ],
  sharedMemories: [
    "https://images.unsplash.com/photo-1503803548695-c2a7b4a5b875?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1534067783941-51c9c23ecefd?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1511988617509-a57c8a288659?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1510694853838-e4a8c978f518?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1572401611152-cf63d874b019?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=600&auto=format&fit=crop",
  ]
};

export default function PersonDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const containerRef = useRef(null);
  
  // Parallax scroll effect for hero
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // In a real app, you would fetch person data based on `id`.
  const person = personData;

  return (
    <div ref={containerRef} className="min-h-screen bg-background text-foreground font-sans pb-32">
      
      {/* Back Button Overlay */}
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        onClick={() => navigate(-1)}
        className="fixed top-8 left-8 z-50 bg-card/ backdrop-blur-xl p-3 rounded-full shadow-lg border border-white/60 hover:bg-card text-foreground transition-colors"
      >
        <ChevronLeft className="w-6 h-6" />
      </motion.button>

      {/* Cinematic Hero */}
      <div className="relative h-[60vh] md:h-[80vh] w-full overflow-hidden">
        <motion.div style={{ y, opacity }} className="absolute inset-0">
          <SafeImage src={person.image} alt={person.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#f5f5f7] via-black/20 to-transparent" />
        </motion.div>
        
        <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 lg:p-24 pb-8 md:pb-12 z-10 text-foreground">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="max-w-4xl"
          >
            <h4 className="text-foreground/ text-base md:text-lg lg:text-xl font-bold tracking-widest uppercase mb-2 md:mb-4">
              {person.relation}
            </h4>
            <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold tracking-tight mb-6 md:mb-8 leading-none">
              {person.name}
            </h1>
            
            {/* Relationship Metrics */}
            <div className="flex flex-wrap gap-4">
              <div className="bg-card/ backdrop-blur-xl border border-white px-6 py-4 rounded-3xl shadow-sm flex items-center gap-3">
                <Calendar className="w-6 h-6 text-blue-500" />
                <div>
                  <div className="text-2xl font-bold">{person.stats.years}</div>
                  <div className="text-xs font-bold uppercase tracking-wider text-foreground/">Years</div>
                </div>
              </div>
              <div className="bg-card/ backdrop-blur-xl border border-white px-6 py-4 rounded-3xl shadow-sm flex items-center gap-3">
                <Plane className="w-6 h-6 text-indigo-500" />
                <div>
                  <div className="text-2xl font-bold">{person.stats.trips}</div>
                  <div className="text-xs font-bold uppercase tracking-wider text-foreground/">Trips</div>
                </div>
              </div>
              <div className="bg-card/ backdrop-blur-xl border border-white px-6 py-4 rounded-3xl shadow-sm flex items-center gap-3">
                <ImageIcon className="w-6 h-6 text-purple-500" />
                <div>
                  <div className="text-2xl font-bold">{person.stats.memories}</div>
                  <div className="text-xs font-bold uppercase tracking-wider text-foreground/">Memories</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 lg:px-12 mt-8 md:mt-20 flex flex-col gap-20 md:gap-32">
        
        {/* Favorite Moments Carousel */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="flex items-center gap-3 mb-6 md:mb-8">
            <Heart className="w-6 h-6 md:w-8 md:h-8 text-red-500 fill-red-500" />
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Favorite Moments</h2>
          </div>
          <div className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {person.favoriteMoments.map((moment, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.02 }}
                className="relative min-w-[300px] lg:min-w-[400px] aspect-[4/5] rounded-[32px] overflow-hidden snap-start cursor-pointer group shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] border border-white"
              >
                <SafeImage src={moment.image} alt={moment.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <h3 className="text-2xl font-bold mb-1 drop-shadow-md">{moment.title}</h3>
                  <p className="text-white/80 font-medium flex items-center gap-1 drop-shadow-md">
                    <MapPin className="w-4 h-4" /> {moment.location}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Story Timeline */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8 md:mb-12">Our Story</h2>
          <div className="relative border-l-2 border-foreground/ ml-4 lg:ml-8 space-y-12 md:space-y-16 pb-8">
            {person.timeline.map((item, idx) => (
              <div key={idx} className="relative pl-10 lg:pl-16">
                {/* Timeline Dot */}
                <div className="absolute left-[-9px] top-1 w-4 h-4 rounded-full bg-black border-4 border-[#f5f5f7]" />
                
                <div className="text-xl font-bold text-foreground/ mb-2">{item.year}</div>
                <h3 className="text-3xl font-bold mb-4">{item.title}</h3>
                <p className="text-xl text-foreground/ mb-6 max-w-2xl">{item.description}</p>
                
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="relative h-[250px] md:h-[300px] lg:h-[400px] max-w-3xl rounded-[24px] md:rounded-[32px] overflow-hidden shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-white"
                >
                  <SafeImage src={item.image} alt={item.title} className="w-full h-full object-cover" />
                </motion.div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Shared Memories Grid */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 md:mb-8">All Shared Memories</h2>
          <div className="columns-2 md:columns-3 gap-4 space-y-4">
            {person.sharedMemories.map((imgUrl, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.02 }}
                className="relative rounded-[24px] overflow-hidden break-inside-avoid cursor-pointer shadow-sm border border-foreground/"
              >
                <SafeImage src={imgUrl} alt={`Shared Memory ${idx}`} className="w-full h-auto object-cover" />
              </motion.div>
            ))}
          </div>
        </motion.section>

      </div>
    </div>
  );
}
