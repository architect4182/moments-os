import { Outlet, useNavigate, useLocation } from "react-router";
import { motion } from "motion/react";
import {
  Home,
  Image,
  MapPin,
  Users,
  Music,
  Folder,
  BookOpen,
  Settings,
} from "lucide-react";

const navItems = [
  { icon: Home, label: "Home", path: "/app" },
  { icon: Image, label: "Memories", path: "/app/memories" },
  { icon: MapPin, label: "Places", path: "/app/places" },
  { icon: Users, label: "People", path: "/app/people" },
  { icon: Music, label: "Music", path: "/app/music" },
  { icon: Folder, label: "Collections", path: "/app/collections" },
  { icon: BookOpen, label: "Journal", path: "/app/journal" },
  { icon: Settings, label: "Settings", path: "/app/settings" },
];

export default function AppLayout() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="flex h-screen bg-[#f5f5f7] overflow-hidden">
      {/* VisionOS-inspired Sidebar */}
      <motion.aside
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className="w-24 flex flex-col items-center py-8 gap-6 relative z-50"
      >
        <div
          className="absolute inset-2 bg-white/40 backdrop-blur-3xl rounded-[32px] border border-white/60 shadow-2xl"
          style={{
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
          }}
        />

        <div className="relative z-10 flex flex-col items-center gap-6 w-full px-4">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center cursor-pointer mb-4"
            onClick={() => navigate("/")}
          >
            <span className="text-white text-xl" style={{ fontWeight: 600 }}>
              M
            </span>
          </motion.div>

          {/* Navigation Icons */}
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive =
              location.pathname === item.path ||
              (item.path !== "/app" && location.pathname.startsWith(item.path));

            return (
              <motion.button
                key={item.path}
                onClick={() => navigate(item.path)}
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
                className="relative w-12 h-12 flex items-center justify-center rounded-2xl transition-all group"
              >
                {isActive && (
                  <motion.div
                    layoutId="sidebar-active"
                    className="absolute inset-0 bg-black/10 rounded-2xl"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <Icon
                  className={`w-6 h-6 relative z-10 transition-colors ${
                    isActive ? "text-black" : "text-black/50 group-hover:text-black/70"
                  }`}
                />
                
                {/* Tooltip */}
                <div className="absolute left-full ml-4 px-3 py-2 bg-black/80 text-white text-sm rounded-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap backdrop-blur-xl">
                  {item.label}
                </div>
              </motion.button>
            );
          })}
        </div>
      </motion.aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
}
