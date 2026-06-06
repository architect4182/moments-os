import { motion } from "motion/react";
import {
  User,
  Palette,
  HardDrive,
  Lock,
  Bell,
  Link,
  ChevronRight,
  ShieldCheck,
  Cloud,
} from "lucide-react";
// @ts-ignore
import profileImg from "../../assets/profile.jpg";

const userProfile = {
  name: "Chaithanya",
  email: "chaithanya.pedhagali@gmail.com",
  avatar: profileImg,
  stats: {
    photos: "2,345",
    memories: "412",
    storage: "12.4 GB",
  }
};

const settingsCategories = [
  {
    icon: User,
    title: "Account",
    description: "Manage your personal information",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Palette,
    title: "Appearance",
    description: "Customize how Moments OS looks",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Cloud,
    title: "iCloud Sync",
    description: "Manage backups and synced devices",
    color: "from-sky-400 to-blue-500",
  },
  {
    icon: HardDrive,
    title: "Storage",
    description: "Manage your local storage",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Lock,
    title: "Privacy & Security",
    description: "Control your data and access",
    color: "from-slate-500 to-gray-500",
  },
  {
    icon: Bell,
    title: "Notifications",
    description: "Configure alerts and summaries",
    color: "from-red-500 to-orange-500",
  },
  {
    icon: Link,
    title: "Connected Services",
    description: "Manage integrated apps",
    color: "from-indigo-500 to-purple-500",
  },
];

export default function Settings() {
  return (
    <div className="min-h-screen bg-[#f5f5f7] text-black font-sans pb-32">
      <div className="p-8 lg:p-16 max-w-4xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-12"
        >
          <h1 className="text-5xl lg:text-6xl font-bold tracking-tight mb-4">
            Settings
          </h1>
          <p className="text-2xl text-black/60 font-medium">Customize your Moments OS experience.</p>
        </motion.div>

        {/* Profile Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="bg-white rounded-[32px] p-8 lg:p-10 mb-12 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] border border-black/5 flex flex-col md:flex-row items-center md:items-start gap-8"
        >
          {/* Avatar */}
          <div className="relative">
            <img
              src={userProfile.avatar}
              alt={userProfile.name}
              className="w-32 h-32 rounded-full object-cover shadow-lg border-4 border-white"
            />
            <div className="absolute bottom-0 right-0 w-8 h-8 bg-blue-500 rounded-full border-4 border-white flex items-center justify-center shadow-sm">
              <ShieldCheck className="w-4 h-4 text-white" />
            </div>
          </div>

          {/* User Info & Stats */}
          <div className="flex-1 text-center md:text-left w-full">
            <h2 className="text-3xl font-bold tracking-tight mb-1">{userProfile.name}</h2>
            <p className="text-black/50 font-medium mb-8">{userProfile.email}</p>

            <div className="grid grid-cols-3 gap-4 md:gap-8 pt-6 border-t border-black/5">
              <div className="flex flex-col items-center md:items-start">
                <span className="text-2xl font-bold text-black mb-1">{userProfile.stats.photos}</span>
                <span className="text-xs font-bold uppercase tracking-wider text-black/40">Photos</span>
              </div>
              <div className="flex flex-col items-center md:items-start">
                <span className="text-2xl font-bold text-black mb-1">{userProfile.stats.memories}</span>
                <span className="text-xs font-bold uppercase tracking-wider text-black/40">Memories</span>
              </div>
              <div className="flex flex-col items-center md:items-start">
                <span className="text-2xl font-bold text-black mb-1">{userProfile.stats.storage}</span>
                <span className="text-xs font-bold uppercase tracking-wider text-black/40">iCloud Storage</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Settings List */}
        <div className="space-y-4 mb-16">
          <h3 className="text-xl font-bold text-black/40 tracking-tight ml-2 mb-6">Preferences</h3>
          {settingsCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.05 }}
                whileHover={{ scale: 1.01, backgroundColor: "rgba(255,255,255,1)" }}
                whileTap={{ scale: 0.99 }}
                className="flex items-center gap-6 bg-white/60 backdrop-blur-xl rounded-[28px] p-5 border border-white/80 cursor-pointer group shadow-sm hover:shadow-[0_10px_30px_rgba(0,0,0,0.06)] transition-all duration-300"
              >
                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center flex-shrink-0 shadow-inner`}
                >
                  <Icon className="w-7 h-7 text-white" strokeWidth={2} />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-xl font-bold tracking-tight text-black mb-0.5">
                    {category.title}
                  </h3>
                  <p className="text-black/50 font-medium text-sm">{category.description}</p>
                </div>

                {/* Arrow */}
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-transparent group-hover:bg-[#f5f5f7] transition-colors duration-300">
                  <ChevronRight className="w-5 h-5 text-black/30 group-hover:text-black/80 transition-colors" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* About Section - Moments OS Version */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="relative rounded-[40px] p-10 bg-gradient-to-b from-white to-white/40 backdrop-blur-2xl border border-white shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] text-center overflow-hidden flex flex-col items-center justify-center"
        >
          {/* Subtle background glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-[80px] pointer-events-none" />

          <div className="relative z-10">
            <div className="w-20 h-20 mx-auto rounded-[32px] bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center shadow-lg mb-6">
              <span className="text-white text-4xl font-bold tracking-tighter">M</span>
            </div>
            <h3 className="text-3xl font-bold tracking-tight text-black mb-2">
              Moments OS
            </h3>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-black/5 rounded-full mb-6">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <p className="text-sm font-semibold text-black/60">Version 1.0.0 (Up to date)</p>
            </div>
            <p className="text-xs font-bold uppercase tracking-wider text-black/40">
              Designed with love · © 2026
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
