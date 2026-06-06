import { motion } from "motion/react";
import { Play, Music as MusicIcon } from "lucide-react";
import { SafeImage } from "../components/SafeImage";

const definingSongs = [
  {
    title: "Golden Hour",
    artist: "JVKE",
    memories: 12,
    cover: "https://images.unsplash.com/photo-1580656449278-e8381933522c",
    associatedMemory: "Goa Sunset, March 2025"
  },
  {
    title: "Sunflower",
    artist: "Post Malone",
    memories: 8,
    cover: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17",
    associatedMemory: "Summer Drive, June 2024"
  },
  {
    title: "Blinding Lights",
    artist: "The Weeknd",
    memories: 15,
    cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f",
    associatedMemory: "City Lights, Dec 2023"
  },
  {
    title: "Levitating",
    artist: "Dua Lipa",
    memories: 10,
    cover: "https://images.unsplash.com/photo-1619983081563-430f63602796",
    associatedMemory: "Beach Party, Aug 2024"
  },
];

const playlists = [
  {
    name: "Road Trip Playlist",
    memories: 34,
    songs: 28,
    cover: "https://images.unsplash.com/photo-1572401611152-cf63d874b019",
  },
  {
    name: "Goa Sunset Vibes",
    memories: 12,
    songs: 15,
    cover: "https://images.unsplash.com/photo-1503803548695-c2a7b4a5b875",
  },
  {
    name: "College Days",
    memories: 45,
    songs: 42,
    cover: "https://images.unsplash.com/photo-1511988617509-a57c8a288659",
  },
  {
    name: "Summer 2025",
    memories: 28,
    songs: 24,
    cover: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea",
  },
];

const albums = [
  { name: "Album 1", artist: "Artist", cover: "https://images.unsplash.com/photo-1611339555312-e607c8352fd7" },
  { name: "Album 2", artist: "Artist", cover: "https://images.unsplash.com/photo-1571330735066-03aaa9429d89" },
  { name: "Album 3", artist: "Artist", cover: "https://images.unsplash.com/photo-1619983081563-430f63602796" },
  { name: "Album 4", artist: "Artist", cover: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17" },
  { name: "Album 5", artist: "Artist", cover: "https://images.unsplash.com/photo-1487180144351-b8472da7d491" },
  { name: "Album 6", artist: "Artist", cover: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745" },
];

export default function Music() {
  return (
    <div className="p-6 md:p-12 max-w-7xl mx-auto mb-24 md:mb-0">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12"
      >
        <h1 className="text-5xl mb-2 tracking-tight" style={{ fontWeight: 600 }}>
          Music
        </h1>
        <p className="text-xl text-black/50">The soundtrack of your memories</p>
      </motion.div>

      {/* Songs That Defined Your Memories */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mb-16"
      >
        <h2 className="text-2xl md:text-3xl mb-4 md:mb-6 tracking-tight" style={{ fontWeight: 600 }}>
          Songs That Defined Your Memories
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {definingSongs.map((song, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 + index * 0.05 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white/60 backdrop-blur-xl rounded-[32px] p-6 border border-white/60 cursor-pointer group flex flex-col"
              style={{
                boxShadow: "0 10px 40px -10px rgba(0, 0, 0, 0.1)",
              }}
            >
              <div className="aspect-square rounded-2xl overflow-hidden mb-5 relative shrink-0">
                <SafeImage
                  src={song.cover}
                  alt={song.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                    className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-lg"
                  >
                    <Play className="w-6 h-6 text-black ml-1" />
                  </motion.div>
                </div>
              </div>
              <div className="flex-1 flex flex-col">
                <h3 className="text-xl mb-1 tracking-tight" style={{ fontWeight: 600 }}>
                  {song.title}
                </h3>
                <p className="text-black/60 font-medium mb-3">{song.artist}</p>
                <div className="mt-auto">
                  <p className="text-sm font-semibold text-black/80 mb-1">{song.memories} memories</p>
                  <p className="text-xs text-black/50 leading-tight">
                    Most remembered with:<br/>
                    <span className="font-medium text-black/70">{song.associatedMemory}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Albums */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-16"
      >
        <h2 className="text-2xl md:text-3xl mb-4 md:mb-6 tracking-tight" style={{ fontWeight: 600 }}>
          Albums
        </h2>
        <div className="flex md:grid md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 overflow-x-auto pb-4 md:pb-0 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {albums.map((album, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 + index * 0.05 }}
              whileHover={{ scale: 1.1, rotate: 2 }}
              className="cursor-pointer group min-w-[120px] md:min-w-0 snap-start"
            >
              <div className="aspect-square rounded-2xl overflow-hidden mb-3 shadow-lg">
                <SafeImage
                  src={album.cover}
                  alt={album.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <h3 className="text-sm tracking-tight truncate" style={{ fontWeight: 600 }}>
                {album.name}
              </h3>
              <p className="text-xs text-black/60 truncate">{album.artist}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Memory Soundtracks */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <h2 className="text-2xl md:text-3xl mb-4 md:mb-6 tracking-tight" style={{ fontWeight: 600 }}>
          Memory Soundtracks
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
          {playlists.map((playlist, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4 md:gap-6 bg-white/60 backdrop-blur-xl rounded-[24px] md:rounded-[32px] p-5 md:p-6 border border-white/60 cursor-pointer group"
              style={{
                boxShadow: "0 10px 40px -10px rgba(0, 0, 0, 0.1)",
              }}
            >
              <div className="w-full sm:w-32 h-48 sm:h-32 rounded-2xl overflow-hidden flex-shrink-0 relative">
                <SafeImage
                  src={playlist.cover}
                  alt={playlist.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                    className="w-12 h-12 rounded-full bg-white flex items-center justify-center"
                  >
                    <Play className="w-6 h-6 text-black ml-1" />
                  </motion.div>
                </div>
              </div>
              <div className="flex-1 w-full sm:w-auto">
                <h3 className="text-xl md:text-2xl mb-1 md:mb-2 tracking-tight" style={{ fontWeight: 600 }}>
                  {playlist.name}
                </h3>
                <div className="flex flex-wrap gap-4 md:gap-6 text-black/60 text-sm md:text-base">
                  <div className="flex items-center gap-2">
                    <MusicIcon className="w-4 h-4" />
                    <span>{playlist.songs} songs</span>
                  </div>
                  <div>
                    <span>{playlist.memories} memories</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
