import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { MapPin, Globe, Map, ChevronRight, Calendar } from "lucide-react";
import { SafeImage } from "../components/SafeImage";

// Mock Data
const places = [
  {
    id: 1,
    name: "Goa",
    country: "India",
    coordinates: { x: 70, y: 48 }, // Relative to 100x100 SVG viewbox
    visits: 12,
    memories: 45,
    firstVisit: "2023",
    lastVisit: "2025",
    image: "https://images.unsplash.com/photo-1503803548695-c2a7b4a5b875?q=80&w=1200&auto=format&fit=crop",
    timeline: [
      { date: "March 2025", title: "Sunset at Goa Beach" },
      { date: "January 2025", title: "Road Trip to Goa" },
      { date: "October 2024", title: "Family Vacation" },
    ]
  },
  {
    id: 2,
    name: "Swiss Alps",
    country: "Switzerland",
    coordinates: { x: 52, y: 32 },
    visits: 3,
    memories: 28,
    firstVisit: "2021",
    lastVisit: "2025",
    image: "https://images.unsplash.com/photo-1534067783941-51c9c23ecefd?q=80&w=1200&auto=format&fit=crop",
    timeline: [
      { date: "May 2025", title: "Mountain Peak Hike" },
      { date: "Winter 2022", title: "Ski Trip" },
    ]
  },
  {
    id: 3,
    name: "New York",
    country: "USA",
    coordinates: { x: 28, y: 38 },
    visits: 8,
    memories: 67,
    firstVisit: "2018",
    lastVisit: "2024",
    image: "https://images.unsplash.com/photo-1664353655151-9d94a9170eb0?q=80&w=1200&auto=format&fit=crop",
    timeline: [
      { date: "December 2024", title: "Times Square NYE" },
      { date: "Summer 2023", title: "Central Park Picnic" },
    ]
  },
  {
    id: 4,
    name: "Tokyo",
    country: "Japan",
    coordinates: { x: 88, y: 35 },
    visits: 5,
    memories: 52,
    firstVisit: "2019",
    lastVisit: "2025",
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=1200&auto=format&fit=crop",
    timeline: [
      { date: "April 2025", title: "Cherry Blossoms" },
      { date: "Autumn 2023", title: "Kyoto Day Trip" },
    ]
  },
  {
    id: 5,
    name: "Varkala",
    country: "India",
    coordinates: { x: 71, y: 53 },
    visits: 4,
    memories: 34,
    firstVisit: "2022",
    lastVisit: "2024",
    image: "https://images.unsplash.com/photo-1590226388414-b1cb0bd9ec3b?q=80&w=1200&auto=format&fit=crop",
    timeline: [
      { date: "December 2024", title: "Cliff Walk" },
      { date: "August 2022", title: "Monsoon Retreat" },
    ]
  },
  {
    id: 6,
    name: "Coorg",
    country: "India",
    coordinates: { x: 69, y: 51 },
    visits: 2,
    memories: 18,
    firstVisit: "2023",
    lastVisit: "2024",
    image: "https://images.unsplash.com/photo-1596422846543-74c6f9660c18?q=80&w=1200&auto=format&fit=crop",
    timeline: [
      { date: "September 2024", title: "Coffee Plantation" },
      { date: "July 2023", title: "Waterfall Trek" },
    ]
  },
  {
    id: 7,
    name: "Bangalore",
    country: "India",
    coordinates: { x: 70, y: 50 },
    visits: 25,
    memories: 120,
    firstVisit: "2015",
    lastVisit: "2026",
    image: "https://images.unsplash.com/photo-1596422846543-74c6f9660c18?q=80&w=1200&auto=format&fit=crop", // placeholder
    timeline: [
      { date: "Current", title: "City Life" },
    ]
  }
];

// Reordered for route animation: Bangalore -> Coorg -> Varkala -> Goa
const travelRoute = [places[6], places[5], places[4], places[0]];

const travelCollections = [
  places[0], // Goa
  places[4], // Varkala
  places[5], // Coorg
  places[6], // Bangalore
];

export default function Places() {
  const [selectedPlace, setSelectedPlace] = useState(places[0]);
  const [isGlobeView, setIsGlobeView] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans pb-32">
      
      {/* Places Hero Section */}
      <div className="pt-20 pb-12 px-8 lg:px-16 max-w-[1600px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center flex flex-col items-center"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 text-foreground">Places</h1>
          <p className="text-xl md:text-2xl text-foreground/ font-medium mb-6">Explore your memories around the world.</p>
          <div className="inline-flex flex-wrap justify-center items-center gap-2 md:gap-4 bg-card/ backdrop-blur-xl px-6 py-3 rounded-[24px] md:rounded-full border border-foreground/ shadow-sm text-base md:text-lg font-medium text-foreground/">
            <span>7 Countries</span>
            <span className="w-1.5 h-1.5 rounded-full bg-foreground/" />
            <span>53 Cities</span>
            <span className="w-1.5 h-1.5 rounded-full bg-foreground/" />
            <span>412 Memories</span>
          </div>
        </motion.div>
      </div>

      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 flex flex-col gap-12">
        
        {/* Interactive Map & Details Panel Container */}
        <div className="relative min-h-[500px] lg:h-[700px] w-full flex flex-col lg:flex-row gap-6">
          
          {/* Main Map Area */}
          <motion.div 
            layout
            className={`relative flex-1 min-h-[400px] lg:min-h-0 bg-[#e8eaed] rounded-[32px] lg:rounded-[40px] overflow-hidden border border-white shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] transition-all duration-1000 ${
              isGlobeView ? "rounded-full aspect-square max-w-[700px] mx-auto shadow-[inset_-20px_-20px_60px_rgba(0,0,0,0.1),0_30px_60px_rgba(0,0,0,0.2)]" : ""
            }`}
          >
            {/* View Toggle */}
            <div className="absolute top-6 left-6 z-20 flex gap-2 bg-card/ backdrop-blur-xl p-1.5 rounded-full border border-white shadow-sm">
              <button 
                onClick={() => setIsGlobeView(false)}
                className={`p-2.5 rounded-full transition-all ${!isGlobeView ? 'bg-black text-white shadow-md' : 'text-foreground/ hover:text-foreground hover:bg-foreground/'}`}
              >
                <Map className="w-5 h-5" />
              </button>
              <button 
                onClick={() => setIsGlobeView(true)}
                className={`p-2.5 rounded-full transition-all ${isGlobeView ? 'bg-black text-white shadow-md' : 'text-foreground/ hover:text-foreground hover:bg-foreground/'}`}
              >
                <Globe className="w-5 h-5" />
              </button>
            </div>

            {/* Simulated Apple Maps Light Background */}
            <div className="absolute inset-0 bg-[#e8eaed]">
              {/* Abstract minimalist continents using SVG */}
              <svg className="absolute inset-0 w-full h-full opacity-[0.8] mix-blend-multiply" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
                 <path d="M 10,20 Q 20,15 30,25 T 45,20 T 50,40 T 35,50 T 25,60 T 15,50 Z" fill="#d0d5db" />
                 <path d="M 60,15 Q 70,10 85,15 T 95,30 T 90,50 T 75,60 T 65,40 Z" fill="#d0d5db" />
                 <path d="M 45,55 Q 55,50 65,65 T 60,85 T 45,90 T 35,75 Z" fill="#d0d5db" />
                 <path d="M 15,65 Q 25,60 30,75 T 25,90 T 10,85 Z" fill="#d0d5db" />
                 <path d="M 75,65 Q 85,60 95,70 T 90,90 T 70,85 Z" fill="#d0d5db" />
              </svg>
            </div>

            {/* Travel Routes Layer */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
              {travelRoute.map((place, index) => {
                if (index === travelRoute.length - 1) return null;
                const nextPlace = travelRoute[index + 1];
                return (
                  <motion.path
                    key={`route-${index}`}
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1.5, delay: 0.5 + index * 0.8, ease: "easeInOut" }}
                    d={`M ${place.coordinates.x} ${place.coordinates.y} Q ${
                      (place.coordinates.x + nextPlace.coordinates.x) / 2 - 5
                    } ${
                      Math.min(place.coordinates.y, nextPlace.coordinates.y) - 15
                    } ${nextPlace.coordinates.x} ${nextPlace.coordinates.y}`}
                    fill="none"
                    stroke="#3b82f6"
                    strokeWidth="0.4"
                    strokeDasharray="1, 1"
                    strokeLinecap="round"
                    className="drop-shadow-sm"
                  />
                );
              })}
            </svg>

            {/* Map Pins */}
            <div className="absolute inset-0 z-10">
              {places.map((place, index) => (
                <motion.div
                  key={place.id}
                  initial={{ scale: 0, opacity: 0, y: 20 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1, type: "spring", stiffness: 200, damping: 15 }}
                  className="absolute cursor-pointer group"
                  style={{
                    left: `${place.coordinates.x}%`,
                    top: `${place.coordinates.y}%`,
                    transform: "translate(-50%, -100%)",
                  }}
                  onClick={() => setSelectedPlace(place)}
                >
                  <div className="relative flex flex-col items-center">
                    {/* Tooltip on hover */}
                    <div className="absolute bottom-full mb-2 bg-card/ backdrop-blur-md px-3 py-1.5 rounded-xl shadow-lg border border-foreground/ opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-30 font-medium text-sm pointer-events-none transform translate-y-2 group-hover:translate-y-0">
                      {place.name}
                    </div>

                    <div className="relative">
                      {selectedPlace.id === place.id && (
                        <motion.div
                          layoutId="selected-pin-ring"
                          className="absolute -inset-4 bg-blue-500/20 rounded-full z-0"
                          animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        />
                      )}
                      
                      <div
                        className={`relative z-10 flex items-center justify-center w-8 h-8 rounded-full border-2 transition-all duration-300 ${
                          selectedPlace.id === place.id
                            ? "bg-blue-500 border-white text-white shadow-[0_10px_20px_rgba(59,130,246,0.4)] scale-110"
                            : "bg-card border-transparent text-foreground/ shadow-[0_5px_15px_rgba(0,0,0,0.1)] group-hover:scale-110 group-hover:text-foreground"
                        }`}
                      >
                        <MapPin className="w-4 h-4 fill-current opacity-20" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Fake 3D overlay for Globe View */}
            <AnimatePresence>
              {isGlobeView && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 pointer-events-none rounded-full shadow-[inset_-40px_-20px_80px_rgba(0,0,0,0.1),inset_10px_10px_40px_rgba(255,255,255,0.8)] z-20"
                />
              )}
            </AnimatePresence>
          </motion.div>

          {/* Location Details Panel */}
          <AnimatePresence mode="wait">
            {!isGlobeView && selectedPlace && (
              <motion.div
                key={selectedPlace.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="w-full lg:w-[400px] shrink-0 bg-card rounded-[32px] lg:rounded-[40px] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.05)] border border-foreground/ overflow-hidden flex flex-col lg:h-full max-h-[600px] lg:max-h-none"
              >
                {/* Cover Image */}
                <div className="relative h-64 shrink-0">
                  <SafeImage src={selectedPlace.image} alt={selectedPlace.name} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 text-white">
                    <h2 className="text-4xl font-bold tracking-tight mb-1 drop-shadow-md">{selectedPlace.name}</h2>
                    <p className="text-white/90 font-medium drop-shadow-md flex items-center gap-1">
                      <MapPin className="w-4 h-4" /> {selectedPlace.country}
                    </p>
                  </div>
                </div>

                {/* Details Content */}
                <div className="p-6 flex-1 overflow-y-auto [&::-webkit-scrollbar]:hidden">
                  {/* Stats Row */}
                  <div className="flex gap-4 mb-8">
                    <div className="flex-1 bg-background rounded-3xl p-5 flex flex-col items-center justify-center text-center">
                      <span className="text-3xl font-bold text-foreground mb-1">{selectedPlace.visits}</span>
                      <span className="text-foreground/ font-medium text-sm">Visits</span>
                    </div>
                    <div className="flex-1 bg-background rounded-3xl p-5 flex flex-col items-center justify-center text-center">
                      <span className="text-3xl font-bold text-foreground mb-1">{selectedPlace.memories}</span>
                      <span className="text-foreground/ font-medium text-sm">Memories</span>
                    </div>
                  </div>

                  {/* Visit Dates */}
                  <div className="bg-card border border-foreground/ shadow-sm rounded-3xl p-5 mb-8 flex justify-between items-center">
                    <div>
                      <div className="text-foreground/ text-xs font-bold uppercase tracking-wider mb-1">First Visit</div>
                      <div className="font-semibold text-lg text-foreground">{selectedPlace.firstVisit}</div>
                    </div>
                    <div className="w-px h-8 bg-foreground/" />
                    <div className="text-right">
                      <div className="text-foreground/ text-xs font-bold uppercase tracking-wider mb-1">Last Visit</div>
                      <div className="font-semibold text-lg text-foreground">{selectedPlace.lastVisit}</div>
                    </div>
                  </div>

                  {/* Memory Timeline */}
                  <div>
                    <h3 className="text-lg font-bold mb-4 text-foreground">Memory Timeline</h3>
                    <div className="flex flex-col gap-5 relative before:absolute before:inset-y-2 before:left-[11px] before:w-px before:bg-foreground/">
                      {selectedPlace.timeline.map((item, idx) => (
                        <div key={idx} className="flex gap-4 relative z-10">
                          <div className="w-6 h-6 rounded-full bg-card border-4 border-[#f5f5f7] flex items-center justify-center mt-0.5 shrink-0 shadow-sm">
                            <div className="w-2 h-2 rounded-full bg-blue-500" />
                          </div>
                          <div>
                            <div className="text-sm font-bold text-foreground/ mb-0.5">{item.date}</div>
                            <div className="font-semibold text-foreground">{item.title}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Travel Collections */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mt-12"
        >
          <div className="flex justify-between items-end mb-6 md:mb-8 pr-2">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground">Travel Collections</h2>
            <button className="text-foreground/ hover:text-foreground flex items-center gap-1 transition-colors font-medium text-sm md:text-base">
              View All <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {travelCollections.map((collection, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.02 }}
                className="relative aspect-[3/4] lg:aspect-[4/5] rounded-[32px] overflow-hidden cursor-pointer group shadow-[0_15px_35px_-10px_rgba(0,0,0,0.1)] border border-white/60"
              >
                <SafeImage src={collection.image} alt={collection.name} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                  <h3 className="text-3xl font-bold mb-3 drop-shadow-md">{collection.name}</h3>
                  <div className="flex flex-col gap-1 text-white/90 text-sm font-medium drop-shadow-md">
                    <span>{collection.memories} Memories</span>
                    <span className="text-white/60">Last visited {collection.lastVisit}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Recently Visited Places */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mt-12 overflow-hidden"
        >
          <div className="flex justify-between items-end mb-6 md:mb-8 pr-2">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground">Recently Visited</h2>
          </div>
          
          <div className="flex gap-4 md:gap-6 overflow-x-auto pb-8 md:pb-12 pt-4 -mt-4 px-0 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {places.slice().reverse().map((place, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.02, y: -5 }}
                onClick={() => {
                  setIsGlobeView(false);
                  setSelectedPlace(place);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="relative min-w-[280px] lg:min-w-[320px] bg-card rounded-[32px] p-4 snap-start cursor-pointer group shadow-[0_15px_35px_-10px_rgba(0,0,0,0.05)] border border-foreground/"
              >
                <div className="aspect-[16/10] rounded-[24px] overflow-hidden mb-4">
                  <SafeImage src={place.image} alt={place.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="px-2 pb-2">
                  <h3 className="text-xl font-bold text-foreground mb-1">{place.name}</h3>
                  <div className="flex justify-between items-center text-sm font-medium text-foreground/">
                    <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> {place.lastVisit}</span>
                    <span>{place.memories} Memories</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

      </div>
    </div>
  );
}
