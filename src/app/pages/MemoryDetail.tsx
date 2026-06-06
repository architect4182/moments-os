import { motion } from "motion/react";
import { useNavigate, useParams } from "react-router";
import { ArrowLeft, MapPin, Calendar, Users, Music, Heart } from "lucide-react";
import { Button } from "../components/ui/button";

const memoryData = {
  image: "https://images.unsplash.com/photo-1503803548695-c2a7b4a5b875",
  title: "Goa Sunset",
  date: "March 15, 2025",
  location: "Anjuna Beach, Goa, India",
  description:
    "An unforgettable evening watching the sun dip below the Arabian Sea. The golden hour painted everything in warm hues, and the sound of waves created the perfect soundtrack. We sat on the beach, feet in the sand, sharing stories and laughter as the day slowly gave way to night. This moment reminded me why I love traveling with the people who matter most.",
  people: [
    { name: "Sarah", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330" },
    { name: "Alex", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d" },
    { name: "Maya", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80" },
  ],
  music: {
    title: "Golden Hour",
    artist: "JVKE",
    cover: "https://images.unsplash.com/photo-1580656449278-e8381933522c",
  },
  relatedMemories: [
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1534067783941-51c9c23ecefd",
      title: "Mountain Hike",
      date: "May 2025",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1511988617509-a57c8a288659",
      title: "Beach Party",
      date: "March 2025",
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1510694853838-e4a8c978f518",
      title: "Forest Walk",
      date: "March 2025",
    },
  ],
};

export default function MemoryDetail() {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <div className="min-h-screen">
      {/* Back Button */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="absolute top-8 left-8 z-50"
      >
        <Button
          onClick={() => navigate("/app/memories")}
          className="bg-white/60 backdrop-blur-xl border border-white/60 text-black hover:bg-white/80 rounded-full px-6"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back
        </Button>
      </motion.div>

      {/* Hero Image */}
      <motion.div
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative h-[70vh] overflow-hidden"
      >
        <img
          src={memoryData.image}
          alt={memoryData.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#f5f5f7] via-transparent to-transparent" />

        {/* Hero Content */}
        <div className="absolute bottom-12 left-12 right-12 text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h1 className="text-6xl mb-4 tracking-tight" style={{ fontWeight: 600 }}>
              {memoryData.title}
            </h1>
            <div className="flex gap-8 text-lg text-white/90">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>{memoryData.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span>{memoryData.location}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-12 py-12">
        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-12"
        >
          <h2 className="text-3xl mb-6 tracking-tight" style={{ fontWeight: 600 }}>
            Journal Entry
          </h2>
          <p className="text-xl leading-relaxed text-black/70">
            {memoryData.description}
          </p>
        </motion.div>

        {/* People */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl mb-6 tracking-tight" style={{ fontWeight: 600 }}>
            People
          </h2>
          <div className="flex gap-6">
            {memoryData.people.map((person, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                className="flex flex-col items-center cursor-pointer"
              >
                <div className="w-24 h-24 rounded-full overflow-hidden mb-3 border-4 border-white/60">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-lg" style={{ fontWeight: 500 }}>
                  {person.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Music */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl mb-6 tracking-tight" style={{ fontWeight: 600 }}>
            Music
          </h2>
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="flex items-center gap-6 bg-white/60 backdrop-blur-xl border border-white/60 rounded-[32px] p-6 cursor-pointer"
            style={{
              boxShadow: "0 10px 40px -10px rgba(0, 0, 0, 0.1)",
            }}
          >
            <div className="w-24 h-24 rounded-2xl overflow-hidden flex-shrink-0">
              <img
                src={memoryData.music.cover}
                alt={memoryData.music.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <div className="text-2xl mb-1" style={{ fontWeight: 600 }}>
                {memoryData.music.title}
              </div>
              <div className="text-lg text-black/60">{memoryData.music.artist}</div>
            </div>
            <Music className="w-8 h-8 text-black/40" />
          </motion.div>
        </motion.div>

        {/* Related Memories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <h2 className="text-3xl mb-6 tracking-tight" style={{ fontWeight: 600 }}>
            Related Memories
          </h2>
          <div className="grid grid-cols-3 gap-6">
            {memoryData.relatedMemories.map((memory, index) => (
              <motion.div
                key={memory.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                onClick={() => navigate(`/app/memories/${memory.id}`)}
                className="relative aspect-square rounded-[32px] overflow-hidden cursor-pointer bg-white/60 backdrop-blur-xl border border-white/60 group"
                style={{
                  boxShadow: "0 10px 40px -10px rgba(0, 0, 0, 0.1)",
                }}
              >
                <img
                  src={memory.image}
                  alt={memory.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="text-lg mb-1" style={{ fontWeight: 600 }}>
                    {memory.title}
                  </div>
                  <div className="text-white/70 text-sm">{memory.date}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
