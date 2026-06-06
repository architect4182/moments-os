import { motion } from "motion/react";
import { Calendar, MapPin, Heart, Smile, Meh } from "lucide-react";

const entries = [
  {
    id: 1,
    year: "2026",
    date: "June 6",
    title: "A Perfect Summer Evening",
    excerpt:
      "Today was one of those magical days that reminds you why summer is the best season. We drove down to the coast...",
    mood: "happy",
    location: "Santa Monica, CA",
    photos: 8,
    image: "https://images.unsplash.com/photo-1503803548695-c2a7b4a5b875?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    year: "2026",
    date: "June 3",
    title: "Mountain Adventure",
    excerpt:
      "Woke up early to catch the sunrise from the peak. The hike was challenging but absolutely worth it...",
    mood: "excited",
    location: "Rocky Mountains",
    photos: 15,
    image: "https://images.unsplash.com/photo-1534067783941-51c9c23ecefd?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    year: "2026",
    date: "May 28",
    title: "Road Trip Memories",
    excerpt:
      "Hit the open road with no particular destination in mind. The journey itself became the adventure...",
    mood: "happy",
    location: "Route 66",
    photos: 24,
    image: "https://images.unsplash.com/photo-1572401611152-cf63d874b019?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 4,
    year: "2025",
    date: "December 24",
    title: "Family Gathering",
    excerpt:
      "Nothing beats the warmth of family dinner. Laughter, stories, and the comfort of being surrounded...",
    mood: "grateful",
    location: "Home",
    photos: 12,
    image: "https://images.unsplash.com/photo-1578496780896-7081cc23c111?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 5,
    year: "2025",
    date: "October 12",
    title: "Coffee Shop Thoughts",
    excerpt:
      "Spent the afternoon at my favorite corner cafe, watching the world go by. Sometimes the simple moments...",
    mood: "peaceful",
    location: "Local Coffee Shop",
    photos: 3,
    image: "https://images.unsplash.com/photo-1732105140110-813d8b825b9f?q=80&w=1200&auto=format&fit=crop",
  },
];

const groupedEntries = entries.reduce((acc, entry) => {
  if (!acc[entry.year]) acc[entry.year] = [];
  acc[entry.year].push(entry);
  return acc;
}, {} as Record<string, typeof entries>);

const getMoodIcon = (mood: string) => {
  switch (mood) {
    case "happy":
    case "excited":
    case "grateful":
      return <Smile className="w-5 h-5" />;
    case "peaceful":
    case "calm":
      return <Meh className="w-5 h-5" />;
    default:
      return <Heart className="w-5 h-5" />;
  }
};

const getMoodColor = (mood: string) => {
  switch (mood) {
    case "happy":
    case "excited":
      return "from-yellow-400 to-orange-400";
    case "grateful":
      return "from-pink-400 to-rose-400";
    case "peaceful":
    case "calm":
      return "from-blue-400 to-cyan-400";
    default:
      return "from-purple-400 to-pink-400";
  }
};

export default function Journal() {
  return (
    <div className="min-h-screen bg-[#f5f5f7] text-black font-sans pb-32">
      <div className="p-8 lg:p-16 max-w-5xl mx-auto">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16"
        >
          <h1 className="text-6xl font-bold tracking-tight mb-4">
            Journal
          </h1>
          <p className="text-2xl text-black/60 font-medium">Your story, written through time.</p>
        </motion.div>

        {/* Timeline by Year */}
        <div className="space-y-16">
          {Object.entries(groupedEntries)
            .sort(([yearA], [yearB]) => Number(yearB) - Number(yearA))
            .map(([year, yearEntries], yearIndex) => (
              <div key={year}>
                <motion.h2 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="text-4xl font-bold tracking-tight text-black/30 mb-8 ml-2"
                >
                  {year}
                </motion.h2>
                
                <div className="space-y-8 pl-2 lg:pl-6 border-l-2 border-black/5">
                  {yearEntries.map((entry, index) => (
                    <motion.article
                      key={entry.id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ delay: index * 0.1, duration: 0.6 }}
                      whileHover={{ scale: 1.01, y: -5 }}
                      className="bg-white rounded-[32px] overflow-hidden border border-black/5 cursor-pointer shadow-[0_15px_35px_-10px_rgba(0,0,0,0.05)] relative before:absolute before:left-[-27px] lg:before:left-[-31px] before:top-12 before:w-4 before:h-4 before:bg-white before:border-4 before:border-[#f5f5f7] before:rounded-full before:z-10"
                    >
                      <div className="flex flex-col md:flex-row">
                        {/* Image */}
                        <div className="md:w-2/5 aspect-[4/3] md:aspect-auto relative overflow-hidden bg-black/5">
                          <img
                            src={entry.image}
                            alt={entry.title}
                            className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
                          />
                          <div className="absolute top-4 right-4">
                            <div
                              className={`w-12 h-12 rounded-full bg-gradient-to-br ${getMoodColor(
                                entry.mood
                              )} flex items-center justify-center text-white shadow-lg`}
                            >
                              {getMoodIcon(entry.mood)}
                            </div>
                          </div>
                        </div>

                        {/* Content */}
                        <div className="md:w-3/5 p-8 flex flex-col justify-center">
                          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-black/50 font-medium mb-4">
                            <div className="flex items-center gap-1.5">
                              <Calendar className="w-4 h-4" />
                              <span className="text-sm">{entry.date}</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                              <MapPin className="w-4 h-4" />
                              <span className="text-sm">{entry.location}</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                              <span className="text-sm">{entry.photos} photos</span>
                            </div>
                          </div>

                          <h2 className="text-3xl mb-4 tracking-tight font-bold text-black">
                            {entry.title}
                          </h2>

                          <p className="text-lg leading-relaxed text-black/60 mb-6 font-medium">
                            {entry.excerpt}
                          </p>

                          <div className="inline-flex items-center self-start px-4 py-1.5 bg-[#f5f5f7] rounded-full text-sm font-semibold text-black/60">
                            <span className="capitalize">{entry.mood}</span>
                          </div>
                        </div>
                      </div>
                    </motion.article>
                  ))}
                </div>

                {yearIndex !== Object.keys(groupedEntries).length - 1 && (
                  <div className="mt-16 border-t border-black/5 mx-8" />
                )}
              </div>
          ))}
        </div>

        {/* Every Memory Has A Story (Replaces Write New Entry) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mt-24 relative rounded-[40px] overflow-hidden aspect-[21/9] flex items-center justify-center text-center shadow-[0_20px_50px_-12px_rgba(0,0,0,0.2)]"
        >
          {/* Background Image */}
          <img 
            src="https://images.unsplash.com/photo-1476820865390-c52aeebb9891?q=80&w=2000&auto=format&fit=crop" 
            alt="Story Continues" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Light gradient overlay for text legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/80" />
          
          <div className="relative z-10 p-12 text-white max-w-4xl">
            <h3 className="text-5xl lg:text-7xl font-bold tracking-tight mb-6 drop-shadow-lg">
              Every Memory Has A Story
            </h3>
            <p className="text-2xl text-white/90 font-medium drop-shadow-md">
              The moments we capture become the stories we remember.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
