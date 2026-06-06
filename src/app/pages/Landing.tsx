import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { useNavigate } from "react-router";
import { Play } from "lucide-react";
import { useRef } from "react";
import { Button } from "../components/ui/button";
import { SafeImage } from "../components/SafeImage";

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
  { name: "Sarah", relationship: "Sister", image: "https://images.unsplash.com/photo-1562337404-3044c84ac061", memories: 45 },
  { name: "Alex", relationship: "Best Friend", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d", memories: 32 },
  { name: "Maya", relationship: "Partner", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330", memories: 28 },
  { name: "Jordan", relationship: "Brother", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e", memories: 21 },
];

const soundtracks = [
  { title: "Golden Hour", tracks: 12, memories: 34, image: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=800&auto=format&fit=crop" },
  { title: "Summer Roadtrip", tracks: 24, memories: 89, image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=800&auto=format&fit=crop" },
  { title: "Goa Sunset Vibes", tracks: 18, memories: 56, image: "https://images.unsplash.com/photo-1540155945626-66eacf57ddcf?q=80&w=800&auto=format&fit=crop" },
  { title: "College Days", tracks: 45, memories: 120, image: "https://images.unsplash.com/photo-1523580494112-071d384e238c?q=80&w=800&auto=format&fit=crop" }
];

const timelineYears = [
  { year: 2026, images: ["https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?q=80&w=600&auto=format&fit=crop", "https://images.unsplash.com/photo-1682687982501-1e58f8142228?q=80&w=600&auto=format&fit=crop", "https://images.unsplash.com/photo-1682687220063-4742bd7fd538?q=80&w=600&auto=format&fit=crop", "https://images.unsplash.com/photo-1682687221038-404670f05144?q=80&w=600&auto=format&fit=crop", "https://images.unsplash.com/photo-1682687982143-4ce499cb63d7?q=80&w=600&auto=format&fit=crop"], count: 124 },
  { year: 2025, images: ["https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=600&auto=format&fit=crop", "https://images.unsplash.com/photo-1504280390267-31b3ab3d09a0?q=80&w=600&auto=format&fit=crop", "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?q=80&w=600&auto=format&fit=crop", "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=600&auto=format&fit=crop", "https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=600&auto=format&fit=crop"], count: 342 },
  { year: 2024, images: ["https://images.unsplash.com/photo-1516483638261-f40af5a58c73?q=80&w=600&auto=format&fit=crop", "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=600&auto=format&fit=crop", "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=600&auto=format&fit=crop", "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=600&auto=format&fit=crop", "https://images.unsplash.com/photo-1534067783941-51c9c23ecefd?q=80&w=600&auto=format&fit=crop"], count: 256 }
];

const ctaCollageImages = [
  "https://images.unsplash.com/photo-1503803548695-c2a7b4a5b875",
  "https://images.unsplash.com/photo-1534067783941-51c9c23ecefd",
  "https://images.unsplash.com/photo-1511988617509-a57c8a288659",
  "https://images.unsplash.com/photo-1459749411175-04bf5292ceea",
  "https://images.unsplash.com/photo-1578496780896-7081cc23c111",
  "https://images.unsplash.com/photo-1510694853838-e4a8c978f518",
  "https://images.unsplash.com/photo-1562337404-3044c84ac061",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
  "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17",
  "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800",
];

export default function Landing() {
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
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
        <motion.div style={{ y, opacity: heroOpacity }} className="absolute inset-0">
          <SafeImage
            src="https://images.unsplash.com/photo-1503803548695-c2a7b4a5b875"
            alt="Beach sunset"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black" />
        </motion.div>

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

        {/* Floating Live Stats */}
        <div className="absolute bottom-16 md:bottom-20 left-0 right-0 overflow-hidden pointer-events-none px-4">
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-wrap gap-3 md:gap-6 justify-center"
          >
            {[
              { label: "Places Visited", value: "12" },
              { label: "Memories", value: "145" },
              { label: "Years Captured", value: "8" },
              { label: "Soundtracks", value: "24" },
            ].map((stat, i) => (
              <div
                key={i}
                className="px-5 py-3 md:px-8 md:py-4 rounded-full bg-white/10 backdrop-blur-2xl border border-white/20 flex items-center gap-3 shadow-2xl"
              >
                <div className="text-xl md:text-3xl font-bold text-white">{stat.value}</div>
                <div className="text-xs md:text-sm font-medium text-white/70 uppercase tracking-wider">{stat.label}</div>
              </div>
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
                className="relative w-full md:w-[45%] h-[400px] md:h-[600px] rounded-[32px] md:rounded-[40px] overflow-hidden shadow-[0_20px_50px_-12px_rgba(0,0,0,0.2)] border border-white/20"
              >
                <SafeImage
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
            className="relative w-full md:w-[60%] lg:w-[50%] h-[400px] md:h-[600px] lg:h-[700px] rounded-[32px] md:rounded-[40px] overflow-hidden shadow-[0_20px_50px_-12px_rgba(0,0,0,0.2)] border border-white/20 z-10 shrink-0 mx-auto"
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

          <div className="flex justify-center items-stretch gap-6 md:gap-8 flex-wrap">
            {people.map((person, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="relative cursor-pointer group w-64 pt-24"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-48 rounded-full overflow-hidden border-4 border-white/10 z-10 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)] group-hover:border-white/30 transition-all duration-500">
                  <SafeImage src={person.image} alt={person.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[32px] p-6 pt-28 text-center h-full relative z-0 transition-colors duration-500 group-hover:bg-white/10">
                  <div className="text-3xl font-semibold mb-1 tracking-tight">{person.name}</div>
                  <div className="text-blue-400 font-medium mb-4">{person.relationship}</div>
                  <div className="text-sm text-white/50 inline-flex items-center justify-center gap-2 bg-black/40 rounded-full px-4 py-1.5 border border-white/5">
                    {person.memories} memories
                  </div>
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {soundtracks.map((soundtrack, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
              >
                <div className="aspect-square rounded-[32px] relative overflow-hidden mb-6 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.3)] border border-white/10">
                  <SafeImage
                    src={soundtrack.image}
                    alt={soundtrack.title}
                    className="w-full h-full object-cover opacity-90 transition-all duration-700 group-hover:scale-110 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                  <div className="absolute bottom-4 right-4 w-14 h-14 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 border border-white/10">
                    <Play className="w-6 h-6 text-white ml-1" />
                  </div>
                </div>
                <div className="px-2 text-center">
                  <h3 className="text-xl font-semibold mb-2 tracking-tight">{soundtrack.title}</h3>
                  <div className="flex items-center justify-center text-sm font-medium text-white/50 gap-2">
                    <span>{soundtrack.tracks} songs</span>
                    <span>•</span>
                    <span>{soundtrack.memories} memories</span>
                  </div>
                </div>
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

          <div className="flex gap-6 md:gap-12 overflow-x-auto pb-12 pt-4 px-4 scrollbar-hide snap-x snap-mandatory">
            {timelineYears.map((yearData, index) => (
              <motion.div
                key={yearData.year}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex-shrink-0 w-[85vw] md:w-[650px] snap-center cursor-pointer group"
              >
                <div className="flex items-end justify-between mb-6 px-2">
                  <div className="text-5xl md:text-7xl font-bold tracking-tighter">
                    {yearData.year}
                  </div>
                  <div className="bg-white/10 text-white px-5 py-2 rounded-full text-sm font-medium border border-white/10 backdrop-blur-md">
                    {yearData.count} Memories
                  </div>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 h-[400px] md:h-[500px]">
                  {yearData.images.map((img, i) => (
                    <div
                      key={i}
                      className={`relative rounded-3xl overflow-hidden shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)] group-hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)] transition-all duration-500 border border-white/10 ${
                        i === 0 ? "col-span-2 row-span-2" : "col-span-1 row-span-1"
                      }`}
                    >
                      <SafeImage
                        src={img}
                        alt=""
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                      />
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="h-screen relative flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 md:gap-4 p-4 opacity-40">
            {ctaCollageImages.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 1 }}
                className="aspect-square md:aspect-[3/4] rounded-2xl overflow-hidden"
              >
                <SafeImage
                  src={`${img}?q=80&w=400&auto=format&fit=crop`}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative z-10 text-center max-w-4xl mx-auto px-4"
        >
          <h2 className="text-6xl md:text-8xl mb-8 tracking-tighter" style={{ fontWeight: 700 }}>
            Your Entire Life.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              Beautifully Organized.
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-white/70 mb-12 max-w-2xl mx-auto font-medium">
            Relive moments, people, places, and stories in one premium timeline.
          </p>
          <Button
            onClick={() => navigate("/app")}
            className="bg-white text-black hover:bg-white/90 rounded-full px-12 py-8 text-xl shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:shadow-[0_0_60px_rgba(255,255,255,0.4)] transition-shadow duration-500"
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
