import { motion } from "motion/react";
import { Calendar, MapPin, Heart, Smile, Meh, Frown } from "lucide-react";

const entries = [
  {
    id: 1,
    date: "June 6, 2026",
    title: "A Perfect Summer Evening",
    excerpt:
      "Today was one of those magical days that reminds you why summer is the best season. We drove down to the coast...",
    mood: "happy",
    location: "Santa Monica, CA",
    photos: 8,
    image: "https://images.unsplash.com/photo-1503803548695-c2a7b4a5b875",
  },
  {
    id: 2,
    date: "June 3, 2026",
    title: "Mountain Adventure",
    excerpt:
      "Woke up early to catch the sunrise from the peak. The hike was challenging but absolutely worth it...",
    mood: "excited",
    location: "Rocky Mountains",
    photos: 15,
    image: "https://images.unsplash.com/photo-1534067783941-51c9c23ecefd",
  },
  {
    id: 3,
    date: "May 28, 2026",
    title: "Coffee Shop Thoughts",
    excerpt:
      "Spent the afternoon at my favorite corner cafe, watching the world go by. Sometimes the simple moments...",
    mood: "peaceful",
    location: "Local Coffee Shop",
    photos: 3,
    image: "https://images.unsplash.com/photo-1732105140110-813d8b825b9f",
  },
  {
    id: 4,
    date: "May 22, 2026",
    title: "Road Trip Memories",
    excerpt:
      "Hit the open road with no particular destination in mind. The journey itself became the adventure...",
    mood: "happy",
    location: "Route 66",
    photos: 24,
    image: "https://images.unsplash.com/photo-1572401611152-cf63d874b019",
  },
  {
    id: 5,
    date: "May 15, 2026",
    title: "Family Gathering",
    excerpt:
      "Nothing beats the warmth of family dinner. Laughter, stories, and the comfort of being surrounded...",
    mood: "grateful",
    location: "Home",
    photos: 12,
    image: "https://images.unsplash.com/photo-1578496780896-7081cc23c111",
  },
];

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
    <div className="p-12 max-w-4xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12"
      >
        <h1 className="text-5xl mb-2 tracking-tight" style={{ fontWeight: 600 }}>
          Journal
        </h1>
        <p className="text-xl text-black/50">Your story, written through time</p>
      </motion.div>

      {/* Timeline */}
      <div className="space-y-8">
        {entries.map((entry, index) => (
          <motion.article
            key={entry.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className="bg-white/60 backdrop-blur-xl rounded-[32px] overflow-hidden border border-white/60 cursor-pointer"
            style={{
              boxShadow: "0 10px 40px -10px rgba(0, 0, 0, 0.1)",
            }}
          >
            <div className="flex flex-col md:flex-row">
              {/* Image */}
              <div className="md:w-1/3 aspect-[4/3] md:aspect-auto relative overflow-hidden">
                <img
                  src={entry.image}
                  alt={entry.title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
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
              <div className="md:w-2/3 p-8">
                <div className="flex items-center gap-4 text-black/50 mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{entry.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{entry.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm">{entry.photos} photos</span>
                  </div>
                </div>

                <h2 className="text-3xl mb-4 tracking-tight" style={{ fontWeight: 600 }}>
                  {entry.title}
                </h2>

                <p className="text-lg leading-relaxed text-black/70 mb-6">
                  {entry.excerpt}
                </p>

                <div className="inline-flex items-center gap-2 px-4 py-2 bg-black/5 rounded-full text-sm text-black/60">
                  <span className="capitalize">{entry.mood}</span>
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      {/* New Entry CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        whileHover={{ scale: 1.02 }}
        className="mt-12 p-12 rounded-[32px] bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-xl border border-white/60 text-center cursor-pointer"
        style={{
          boxShadow: "0 10px 40px -10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div className="w-20 h-20 rounded-full bg-white/60 backdrop-blur-xl flex items-center justify-center mx-auto mb-6 border border-white/60">
          <Heart className="w-10 h-10 text-black/70" />
        </div>
        <h3 className="text-3xl mb-3 tracking-tight" style={{ fontWeight: 600 }}>
          Write New Entry
        </h3>
        <p className="text-xl text-black/60">
          Capture today's moments and feelings
        </p>
      </motion.div>
    </div>
  );
}
