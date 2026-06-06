import { motion } from "motion/react";
import { useState } from "react";
import { Heart } from "lucide-react";

const people = [
  {
    id: 1,
    name: "Sarah Johnson",
    category: "Family",
    memories: 145,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    relation: "Sister",
  },
  {
    id: 2,
    name: "Alex Chen",
    category: "Friends",
    memories: 89,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    relation: "Best Friend",
  },
  {
    id: 3,
    name: "Maya Patel",
    category: "Friends",
    memories: 67,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    relation: "Friend",
  },
  {
    id: 4,
    name: "Jordan Williams",
    category: "Family",
    memories: 123,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    relation: "Brother",
  },
  {
    id: 5,
    name: "Emma Davis",
    category: "Friends",
    memories: 54,
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    relation: "Friend",
  },
  {
    id: 6,
    name: "Michael Brown",
    category: "Family",
    memories: 178,
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
    relation: "Father",
  },
];

const sharedMemories = [
  { image: "https://images.unsplash.com/photo-1503803548695-c2a7b4a5b875", title: "Beach Sunset" },
  { image: "https://images.unsplash.com/photo-1534067783941-51c9c23ecefd", title: "Mountain Trip" },
  { image: "https://images.unsplash.com/photo-1511988617509-a57c8a288659", title: "Celebration" },
  { image: "https://images.unsplash.com/photo-1510694853838-e4a8c978f518", title: "Nature Walk" },
  { image: "https://images.unsplash.com/photo-1572401611152-cf63d874b019", title: "Road Trip" },
  { image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea", title: "Festival" },
];

export default function People() {
  const [selectedPerson, setSelectedPerson] = useState(people[0]);
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", "Family", "Friends"];
  const filteredPeople =
    activeCategory === "All"
      ? people
      : people.filter((p) => p.category === activeCategory);

  return (
    <div className="h-screen flex">
      {/* People List */}
      <div className="flex-1 p-12 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-5xl mb-2 tracking-tight" style={{ fontWeight: 600 }}>
            People
          </h1>
          <p className="text-xl text-black/50">The ones who matter most</p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex gap-3 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-full transition-all ${
                activeCategory === category
                  ? "bg-black text-white"
                  : "bg-white/60 backdrop-blur-xl text-black/70 hover:bg-white/80 border border-white/60"
              }`}
              style={{ fontWeight: 500 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* People Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPeople.map((person, index) => (
            <motion.div
              key={person.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 + index * 0.05 }}
              whileHover={{ scale: 1.05, y: -5 }}
              onClick={() => setSelectedPerson(person)}
              className={`relative aspect-[3/4] rounded-[32px] overflow-hidden cursor-pointer bg-white/60 backdrop-blur-xl border-2 transition-all ${
                selectedPerson.id === person.id
                  ? "border-black shadow-2xl"
                  : "border-white/60"
              }`}
              style={{
                boxShadow:
                  selectedPerson.id === person.id
                    ? "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                    : "0 10px 40px -10px rgba(0, 0, 0, 0.1)",
              }}
            >
              <img
                src={person.image}
                alt={person.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h3 className="text-2xl mb-1 tracking-tight" style={{ fontWeight: 600 }}>
                  {person.name}
                </h3>
                <p className="text-white/70">{person.memories} memories</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Side Panel */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className="w-96 bg-white/60 backdrop-blur-xl border-l border-white/60 p-8 overflow-y-auto"
      >
        {selectedPerson && (
          <motion.div
            key={selectedPerson.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {/* Person Image */}
            <div className="w-40 h-40 rounded-full overflow-hidden mx-auto mb-6 border-4 border-white">
              <img
                src={selectedPerson.image}
                alt={selectedPerson.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Person Info */}
            <div className="text-center mb-8">
              <h2 className="text-3xl mb-2 tracking-tight" style={{ fontWeight: 600 }}>
                {selectedPerson.name}
              </h2>
              <p className="text-lg text-black/60 mb-1">{selectedPerson.relation}</p>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 rounded-full border border-white/60 text-sm">
                <Heart className="w-4 h-4 text-red-500" />
                <span>{selectedPerson.memories} shared memories</span>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-white/60 rounded-3xl p-6 border border-white/60 text-center">
                <div className="text-3xl mb-1" style={{ fontWeight: 600 }}>
                  12
                </div>
                <div className="text-black/60">Trips</div>
              </div>
              <div className="bg-white/60 rounded-3xl p-6 border border-white/60 text-center">
                <div className="text-3xl mb-1" style={{ fontWeight: 600 }}>
                  8
                </div>
                <div className="text-black/60">Years</div>
              </div>
            </div>

            {/* Shared Memories */}
            <h3 className="text-xl mb-4 tracking-tight" style={{ fontWeight: 600 }}>
              Memories Together
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {sharedMemories.map((memory, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="aspect-square rounded-2xl overflow-hidden bg-white/60 border border-white/60 cursor-pointer group"
                >
                  <img
                    src={memory.image}
                    alt={memory.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </motion.div>
              ))}
            </div>

            {/* Favorite Moments */}
            <h3 className="text-xl mb-4 mt-8 tracking-tight" style={{ fontWeight: 600 }}>
              Favorite Moments
            </h3>
            <div className="space-y-3">
              {["Beach sunset in Goa", "Mountain hike adventure", "Road trip memories"].map(
                (moment, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="flex items-center gap-3 p-4 bg-white/60 rounded-2xl border border-white/60"
                  >
                    <Heart className="w-5 h-5 text-red-500 flex-shrink-0" />
                    <span className="text-black/70">{moment}</span>
                  </motion.div>
                )
              )}
            </div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
