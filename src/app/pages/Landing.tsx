import { motion, useScroll, useTransform } from "motion/react";
import { useNavigate } from "react-router";
import { Play } from "lucide-react";
import { useRef } from "react";
import { Button } from "../components/ui/button";

const memories = [
  {
    image: "https://images.unsplash.com/photo-1779114757088-5ae10d70a695",
    title: "Goa 2025",
    subtitle: "Golden Hour",
  },
  {
    image: "https://images.unsplash.com/photo-1534067783941-51c9c23ecefd",
    title: "Mountain Escape",
    subtitle: "Adventure",
  },
  {
    image: "https://images.unsplash.com/photo-1511988617509-a57c8a288659",
    title: "Together",
    subtitle: "Friends Forever",
  },
  {
    image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea",
    title: "Music Festival",
    subtitle: "Summer Nights",
  },
  {
    image: "https://images.unsplash.com/photo-1578496780896-7081cc23c111",
    title: "Family Time",
    subtitle: "Home",
  },
  {
    image: "https://images.unsplash.com/photo-1510694853838-e4a8c978f518",
    title: "Into the Wild",
    subtitle: "Nature",
  },
];

const placePins = [
  { lat: 15.2993, lng: 74.124, name: "Goa, India", count: 12 },
  { lat: 40.7128, lng: -74.006, name: "New York, USA", count: 8 },
  { lat: 51.5074, lng: -0.1278, name: "London, UK", count: 6 },
  { lat: 35.6762, lng: 139.6503, name: "Tokyo, Japan", count: 15 },
  { lat: -33.8688, lng: 151.2093, name: "Sydney, Australia", count: 5 },
];

const people = [
  { name: "Sarah", image: "https://images.unsplash.com/photo-1562337404-3044c84ac061", memories: 45 },
  { name: "Alex", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d", memories: 32 },
  { name: "Maya", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330", memories: 28 },
  { name: "Jordan", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e", memories: 21 },
];

export default function Landing() {
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  return (
    <div ref={containerRef} className="relative bg-black text-white overflow-x-hidden">
      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 px-8 py-6"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="text-xl tracking-tight">Moments OS</div>
          <div className="flex gap-8 items-center">
            <a href="#features" className="text-sm text-white/70 hover:text-white transition-colors">
              Features
            </a>
            <a href="#timeline" className="text-sm text-white/70 hover:text-white transition-colors">
              Timeline
            </a>
            <Button
              onClick={() => navigate("/app")}
              className="bg-white text-black hover:bg-white/90 rounded-full px-6"
            >
              Open
            </Button>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <motion.section
        style={{ opacity: heroOpacity, scale: heroScale }}
        className="h-screen relative flex items-center justify-center"
      >
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1503803548695-c2a7b4a5b875"
            alt="Beach sunset"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-7xl md:text-8xl mb-6 tracking-tight"
            style={{ fontWeight: 600 }}
          >
            Every Memory
            <br />
            Has a Place.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Moments OS transforms your photos, places, people, and experiences
            <br />
            into a living story.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex gap-4 justify-center"
          >
            <Button
              onClick={() => navigate("/app")}
              className="bg-white text-black hover:bg-white/90 rounded-full px-8 py-6 text-lg"
            >
              Open Moments OS
            </Button>
            <Button
              variant="outline"
              className="border-2 border-white/30 bg-white/10 backdrop-blur-xl text-white hover:bg-white/20 rounded-full px-8 py-6 text-lg"
            >
              <Play className="w-5 h-5 mr-2" />
              Watch Experience
            </Button>
          </motion.div>
        </div>

        {/* Floating memory cards */}
        <div className="absolute bottom-20 left-0 right-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              x: [0, -20, 0],
              y: [0, -10, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="flex gap-4 justify-center opacity-30"
          >
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="w-40 h-56 rounded-3xl bg-white/10 backdrop-blur-lg border border-white/20"
              />
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Memory Storytelling Section */}
      <section className="py-32 px-8" id="features">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-6xl mb-16 text-center tracking-tight"
            style={{ fontWeight: 600 }}
          >
            Your Story, Beautifully Told.
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {memories.map((memory, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="relative aspect-[3/4] rounded-[32px] overflow-hidden cursor-pointer group"
              >
                <img
                  src={memory.image}
                  alt={memory.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8">
                  <h3 className="text-3xl mb-2" style={{ fontWeight: 600 }}>
                    {memory.title}
                  </h3>
                  <p className="text-white/70 text-lg">{memory.subtitle}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Places Section */}
      <section className="py-32 px-8 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-6xl mb-6 tracking-tight" style={{ fontWeight: 600 }}>
              Every Place Tells a Story.
            </h2>
            <p className="text-xl text-white/60">
              Explore your memories across the globe
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative aspect-video rounded-[32px] bg-gradient-to-br from-blue-900/30 to-purple-900/30 backdrop-blur-xl border border-white/10 p-12 overflow-hidden"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)]" />
            <div className="relative h-full flex items-center justify-center">
              <div className="relative w-full max-w-2xl aspect-square">
                {placePins.map((pin, index) => (
                  <motion.div
                    key={index}
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 }}
                    whileHover={{ scale: 1.2 }}
                    className="absolute cursor-pointer"
                    style={{
                      left: `${(index * 20 + 10) % 80}%`,
                      top: `${(index * 25 + 15) % 70}%`,
                    }}
                  >
                    <div className="relative">
                      <div className="w-4 h-4 rounded-full bg-blue-400 animate-ping absolute" />
                      <div className="w-4 h-4 rounded-full bg-blue-500 border-2 border-white relative" />
                      <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-black/80 backdrop-blur-xl px-4 py-2 rounded-full whitespace-nowrap border border-white/20">
                        <div className="text-sm">{pin.name}</div>
                        <div className="text-xs text-white/60">{pin.count} memories</div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* People Section */}
      <section className="py-32 px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-6xl mb-6 tracking-tight" style={{ fontWeight: 600 }}>
              The People Who Shaped Your Story.
            </h2>
            <p className="text-xl text-white/60">
              Connections that matter most
            </p>
          </motion.div>

          <div className="flex justify-center items-center gap-8 flex-wrap">
            {people.map((person, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                className="relative cursor-pointer"
                style={{
                  width: index === 0 ? 180 : index === 1 ? 140 : 120,
                  height: index === 0 ? 180 : index === 1 ? 140 : 120,
                }}
              >
                <img
                  src={person.image}
                  alt={person.name}
                  className="w-full h-full rounded-full object-cover border-4 border-white/20"
                />
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-center whitespace-nowrap">
                  <div className="text-lg" style={{ fontWeight: 500 }}>
                    {person.name}
                  </div>
                  <div className="text-sm text-white/60">{person.memories} memories</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Music Section */}
      <section className="py-32 px-8 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-6xl mb-6 tracking-tight" style={{ fontWeight: 600 }}>
              Soundtracks of Your Life.
            </h2>
            <p className="text-xl text-white/60">
              Every moment has its melody
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="aspect-square rounded-[32px] bg-gradient-to-br from-purple-600 to-pink-600 cursor-pointer relative overflow-hidden group"
              >
                <img
                  src="https://images.unsplash.com/photo-1580656449278-e8381933522c"
                  alt="Album artwork"
                  className="w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-110"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-32 px-8" id="timeline">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-6xl mb-6 tracking-tight" style={{ fontWeight: 600 }}>
              Organized Through Time.
            </h2>
            <p className="text-xl text-white/60">
              Your journey, year by year
            </p>
          </motion.div>

          <div className="flex gap-8 overflow-x-auto pb-8 scrollbar-hide">
            {[2020, 2021, 2022, 2023, 2024, 2025, 2026].map((year, index) => (
              <motion.div
                key={year}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="flex-shrink-0 w-64 cursor-pointer"
              >
                <div className="text-4xl mb-4" style={{ fontWeight: 600 }}>
                  {year}
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="aspect-square rounded-2xl bg-white/10 backdrop-blur-lg border border-white/10"
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-8 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black" />
          {memories.slice(0, 4).map((memory, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.3 }}
              transition={{ delay: index * 0.2, duration: 1 }}
              className="absolute"
              style={{
                left: `${index * 25}%`,
                top: `${index % 2 === 0 ? "0" : "50%"}`,
                width: "30%",
                height: "50%",
              }}
            >
              <img
                src={memory.image}
                alt=""
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative z-10 text-center max-w-3xl mx-auto"
        >
          <h2 className="text-7xl mb-12 tracking-tight" style={{ fontWeight: 600 }}>
            Your Memories
            <br />
            Reimagined.
          </h2>
          <Button
            onClick={() => navigate("/app")}
            className="bg-white text-black hover:bg-white/90 rounded-full px-12 py-8 text-xl"
          >
            OPEN MOMENTS OS
          </Button>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 px-8">
        <div className="max-w-7xl mx-auto text-center text-white/40 text-sm">
          Moments OS · Designed with love · © 2026
        </div>
      </footer>
    </div>
  );
}
