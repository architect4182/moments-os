import { motion } from "motion/react";
import {
  User,
  Palette,
  HardDrive,
  Lock,
  Bell,
  Link,
  ChevronRight,
} from "lucide-react";

const settingsCategories = [
  {
    icon: User,
    title: "Profile",
    description: "Manage your account and preferences",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Palette,
    title: "Appearance",
    description: "Customize how Moments OS looks",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: HardDrive,
    title: "Storage",
    description: "Manage your storage and backups",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Lock,
    title: "Privacy",
    description: "Control your privacy settings",
    color: "from-red-500 to-orange-500",
  },
  {
    icon: Bell,
    title: "Notifications",
    description: "Configure notification preferences",
    color: "from-yellow-500 to-amber-500",
  },
  {
    icon: Link,
    title: "Connected Services",
    description: "Manage connected apps and services",
    color: "from-indigo-500 to-purple-500",
  },
];

export default function Settings() {
  return (
    <div className="p-12 max-w-4xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12"
      >
        <h1 className="text-5xl mb-2 tracking-tight" style={{ fontWeight: 600 }}>
          Settings
        </h1>
        <p className="text-xl text-black/50">Customize your Moments OS experience</p>
      </motion.div>

      {/* Settings Grid */}
      <div className="space-y-4">
        {settingsCategories.map((category, index) => {
          const Icon = category.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.02, x: 8 }}
              className="flex items-center gap-6 bg-white/60 backdrop-blur-xl rounded-[32px] p-8 border border-white/60 cursor-pointer group"
              style={{
                boxShadow: "0 10px 40px -10px rgba(0, 0, 0, 0.1)",
              }}
            >
              {/* Icon */}
              <div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center flex-shrink-0`}
              >
                <Icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-2xl mb-1 tracking-tight" style={{ fontWeight: 600 }}>
                  {category.title}
                </h3>
                <p className="text-black/60">{category.description}</p>
              </div>

              {/* Arrow */}
              <ChevronRight className="w-6 h-6 text-black/30 group-hover:text-black/60 transition-colors" />
            </motion.div>
          );
        })}
      </div>

      {/* About Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mt-12 p-8 rounded-[32px] bg-white/40 backdrop-blur-xl border border-white/60 text-center"
        style={{
          boxShadow: "0 10px 40px -10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div className="text-6xl mb-4">📸</div>
        <h3 className="text-2xl mb-2 tracking-tight" style={{ fontWeight: 600 }}>
          Moments OS
        </h3>
        <p className="text-black/60 mb-4">Version 1.0.0</p>
        <p className="text-sm text-black/50">
          Designed with love · © 2026
        </p>
      </motion.div>

      {/* Storage Info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-6 grid grid-cols-3 gap-4"
      >
        <div className="bg-white/40 backdrop-blur-xl rounded-3xl p-6 border border-white/60 text-center">
          <div className="text-3xl mb-1" style={{ fontWeight: 600 }}>
            2,345
          </div>
          <div className="text-sm text-black/60">Photos</div>
        </div>
        <div className="bg-white/40 backdrop-blur-xl rounded-3xl p-6 border border-white/60 text-center">
          <div className="text-3xl mb-1" style={{ fontWeight: 600 }}>
            412
          </div>
          <div className="text-sm text-black/60">Memories</div>
        </div>
        <div className="bg-white/40 backdrop-blur-xl rounded-3xl p-6 border border-white/60 text-center">
          <div className="text-3xl mb-1" style={{ fontWeight: 600 }}>
            12.4 GB
          </div>
          <div className="text-sm text-black/60">Storage</div>
        </div>
      </motion.div>
    </div>
  );
}
