import { useState } from "react";
import { Outlet, useNavigate, useLocation } from "react-router";
// @ts-ignore
import profileImg from "../../assets/profile.jpg";
import { motion, AnimatePresence } from "motion/react";
import { SafeImage } from "./SafeImage";
import {
  Home,
  Image as ImageIcon,
  MapPin,
  Users,
  Music,
  Folder,
  BookOpen,
  Settings,
  Plus,
  Menu,
  X
} from "lucide-react";

const navItems = [
  { icon: Home, label: "Home", path: "/app" },
  { icon: ImageIcon, label: "Memories", path: "/app/memories" },
  { icon: MapPin, label: "Places", path: "/app/places" },
  { icon: Users, label: "People", path: "/app/people" },
  { icon: Music, label: "Music", path: "/app/music" },
  { icon: Folder, label: "Collections", path: "/app/collections" },
  { icon: BookOpen, label: "Journal", path: "/app/journal" },
  { icon: Settings, label: "Settings", path: "/app/settings" },
];

const mobilePrimaryNav = navItems.slice(0, 4);
const mobileMoreNav = navItems.slice(4);

export default function AppLayout() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isCreateMenuOpen, setIsCreateMenuOpen] = useState(false);
  const [isMoreMenuOpen, setIsMoreMenuOpen] = useState(false);

  const createOptions = [
    { icon: ImageIcon, label: "New Memory" },
    { icon: Folder, label: "New Collection" },
    { icon: BookOpen, label: "New Journal Entry" },
    { icon: Music, label: "New Soundtrack" },
  ];

  return (
    <div className="flex h-screen overflow-hidden bg-[#f5f5f7] text-black font-sans selection:bg-black/10">
      
      {/* Desktop/Tablet Spatial Sidebar Capsule */}
      <motion.aside
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="hidden md:flex w-[84px] flex-col items-center py-6 gap-6 relative z-50 my-auto ml-6 h-[80vh] min-h-[600px] max-h-[800px]"
      >
        {/* Glassmorphic Background */}
        <div
          className="absolute inset-0 backdrop-blur-3xl rounded-[42px] border bg-white/50 border-white/80 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1),0_0_20px_rgba(255,255,255,0.8)]"
          style={{ WebkitBackdropFilter: "blur(40px)" }}
        />

        <div className="relative z-10 flex flex-col items-center justify-between w-full h-full px-2">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-12 h-12 rounded-full overflow-hidden cursor-pointer mt-2 shadow-[0_10px_20px_rgba(0,0,0,0.1)] border-2 border-white shrink-0"
            onClick={() => navigate("/")}
          >
            <SafeImage src={profileImg} alt="Profile" className="w-full h-full object-cover" />
          </motion.div>

          {/* Navigation Icons */}
          <div className="flex flex-col gap-3 w-full items-center justify-center flex-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive =
                location.pathname === item.path ||
                (item.path !== "/app" && location.pathname.startsWith(item.path));

              return (
                <motion.button
                  key={item.path}
                  onClick={() => navigate(item.path)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative w-14 h-14 flex items-center justify-center rounded-[24px] transition-all group shrink-0"
                >
                  {isActive && (
                    <motion.div
                      layoutId="sidebar-active"
                      className="absolute inset-0 rounded-[24px] bg-black/[0.06] shadow-[inset_0_2px_4px_rgba(0,0,0,0.05)]"
                      transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
                    />
                  )}
                  <Icon
                    className={`w-6 h-6 relative z-10 transition-colors duration-300 ${
                      isActive 
                        ? "text-black drop-shadow-sm" 
                        : "text-black/40 group-hover:text-black/70"
                    }`}
                    strokeWidth={isActive ? 2.5 : 2}
                  />
                  
                  {/* Floating Capsule Tooltip */}
                  <div className="absolute left-full ml-6 px-4 py-2.5 backdrop-blur-2xl border border-white/60 bg-white/80 text-black text-sm rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap shadow-[0_10px_30px_rgba(0,0,0,0.1)] scale-95 group-hover:scale-100 origin-left font-semibold tracking-wide hidden md:block">
                    {item.label}
                  </div>
                </motion.button>
              );
            })}
          </div>
          
          <div className="w-12 h-12 shrink-0" /> {/* Spacer */}
        </div>
      </motion.aside>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto overflow-x-hidden relative my-0 ml-0 md:ml-4 bg-transparent pb-24 md:pb-0">
        <Outlet />
      </main>

      {/* Mobile Bottom Navigation Bar */}
      <div className="md:hidden fixed bottom-4 left-4 right-4 z-40 bg-white/70 backdrop-blur-2xl border border-white/60 rounded-[32px] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.2)]">
        <div className="flex items-center justify-around px-2 py-2.5">
          {mobilePrimaryNav.map((item) => {
            const Icon = item.icon;
            const isActive =
              location.pathname === item.path ||
              (item.path !== "/app" && location.pathname.startsWith(item.path));

            return (
              <button
                key={item.path}
                onClick={() => {
                  setIsMoreMenuOpen(false);
                  navigate(item.path);
                }}
                className="flex flex-col items-center gap-1 p-2 min-w-[64px]"
              >
                <Icon
                  className={`w-6 h-6 transition-colors duration-300 ${
                    isActive ? "text-black" : "text-black/40"
                  }`}
                  strokeWidth={isActive ? 2.5 : 2}
                />
                <span className={`text-[10px] font-medium ${isActive ? "text-black" : "text-black/50"}`}>
                  {item.label}
                </span>
              </button>
            );
          })}
          
          {/* More Menu Toggle */}
          <button
            onClick={() => setIsMoreMenuOpen(!isMoreMenuOpen)}
            className="flex flex-col items-center gap-1 p-2 min-w-[64px]"
          >
            {isMoreMenuOpen ? (
              <X className="w-6 h-6 text-black" strokeWidth={2.5} />
            ) : (
              <Menu className="w-6 h-6 text-black/40" strokeWidth={2} />
            )}
            <span className={`text-[10px] font-medium ${isMoreMenuOpen ? "text-black" : "text-black/50"}`}>
              More
            </span>
          </button>
        </div>
      </div>

      {/* Mobile More Menu Sheet */}
      <AnimatePresence>
        {isMoreMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMoreMenuOpen(false)}
              className="md:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-30"
            />
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="md:hidden fixed bottom-[90px] left-4 right-4 bg-white/90 backdrop-blur-2xl border border-white/60 rounded-[32px] p-4 shadow-[0_20px_50px_rgba(0,0,0,0.2)] z-40 flex flex-col gap-2"
            >
              {mobileMoreNav.map((item) => {
                const Icon = item.icon;
                const isActive =
                  location.pathname === item.path ||
                  (item.path !== "/app" && location.pathname.startsWith(item.path));
                return (
                  <button
                    key={item.path}
                    onClick={() => {
                      setIsMoreMenuOpen(false);
                      navigate(item.path);
                    }}
                    className={`flex items-center gap-4 p-4 rounded-2xl transition-colors ${
                      isActive ? "bg-black/5 text-black" : "text-black/70 hover:bg-black/5"
                    }`}
                  >
                    <Icon className="w-6 h-6" strokeWidth={isActive ? 2.5 : 2} />
                    <span className="font-semibold text-base">{item.label}</span>
                  </button>
                );
              })}
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Global Create Button */}
      <div className="fixed bottom-[100px] right-4 md:bottom-8 md:right-8 z-50 flex flex-col items-end pointer-events-none">
        <AnimatePresence>
          {isCreateMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9, transformOrigin: "bottom right" }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.9 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="mb-4 flex flex-col gap-3 items-end pointer-events-auto"
            >
              {createOptions.map((option, index) => {
                const Icon = option.icon;
                return (
                  <motion.button
                    key={option.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    transition={{ delay: index * 0.05, duration: 0.2 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-3 bg-white/90 backdrop-blur-xl border border-white/80 px-4 py-2 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.1)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.15)] hover:bg-white text-black transition-all group"
                  >
                    <span className="font-semibold text-sm tracking-wide">{option.label}</span>
                    <div className="w-8 h-8 rounded-full bg-[#f5f5f7] flex items-center justify-center group-hover:bg-black/5 transition-colors">
                      <Icon className="w-4 h-4 text-black" />
                    </div>
                  </motion.button>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          onClick={() => setIsCreateMenuOpen(!isCreateMenuOpen)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`w-[56px] h-[56px] md:w-[60px] md:h-[60px] rounded-full flex items-center justify-center shadow-[0_20px_40px_-10px_rgba(0,0,0,0.2)] border transition-all duration-300 pointer-events-auto ${
            isCreateMenuOpen 
              ? "bg-black text-white border-black" 
              : "bg-white/90 backdrop-blur-xl text-black border-white/80 hover:bg-white hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)]"
          }`}
        >
          <motion.div
            animate={{ rotate: isCreateMenuOpen ? 45 : 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <Plus className="w-6 h-6 md:w-7 md:h-7" strokeWidth={2.5} />
          </motion.div>
        </motion.button>
      </div>
    </div>
  );
}
