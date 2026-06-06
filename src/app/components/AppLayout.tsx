import { useState } from "react";
import { Outlet, useNavigate, useLocation } from "react-router";
// @ts-ignore
import profileImg from "../../assets/profile.jpg";
import { motion, AnimatePresence } from "motion/react";
import { SafeImage } from "./SafeImage";
import { useTheme } from "./ThemeProvider";
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
  X,
  Moon,
  Sun,
  LogOut
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
  const { theme, setTheme, isDark } = useTheme();
  const [isCreateMenuOpen, setIsCreateMenuOpen] = useState(false);
  const [isMoreMenuOpen, setIsMoreMenuOpen] = useState(false);

  const createOptions = [
    { icon: ImageIcon, label: "New Memory" },
    { icon: Folder, label: "New Collection" },
    { icon: BookOpen, label: "New Journal Entry" },
    { icon: Music, label: "New Soundtrack" },
  ];

  return (
    <div className="flex h-screen overflow-hidden bg-background text-foreground font-sans selection:bg-black/10 dark:selection:bg-white/10 transition-colors duration-300">
      
      {/* Desktop/Tablet Spatial Sidebar Capsule */}
      <motion.aside
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="hidden md:flex w-[84px] flex-col items-center py-6 gap-6 relative z-50 my-auto ml-6 h-[80vh] min-h-[600px] max-h-[800px]"
      >
        {/* Glassmorphic Background */}
        <div
          className="absolute inset-0 backdrop-blur-3xl rounded-[42px] border bg-white/50 dark:bg-black/40 border-white/80 dark:border-white/10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1),0_0_20px_rgba(255,255,255,0.8)] dark:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] transition-colors duration-300"
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
                      className="absolute inset-0 rounded-[24px] bg-black/[0.06] dark:bg-white/[0.08] shadow-[inset_0_2px_4px_rgba(0,0,0,0.05)] dark:shadow-[inset_0_2px_4px_rgba(255,255,255,0.05)]"
                      transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
                    />
                  )}
                  <Icon
                    className={`w-6 h-6 relative z-10 transition-colors duration-300 ${
                      isActive 
                        ? "text-black dark:text-white drop-shadow-sm" 
                        : "text-black/40 dark:text-white/40 group-hover:text-black/70 dark:group-hover:text-white/70"
                    }`}
                    strokeWidth={isActive ? 2.5 : 2}
                  />
                  
                  {/* Floating Capsule Tooltip */}
                  <div className="absolute left-full ml-6 px-4 py-2.5 backdrop-blur-2xl border border-white/60 dark:border-white/10 bg-white/80 dark:bg-black/80 text-black dark:text-white text-sm rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap shadow-[0_10px_30px_rgba(0,0,0,0.1)] scale-95 group-hover:scale-100 origin-left font-semibold tracking-wide hidden md:block">
                    {item.label}
                  </div>
                </motion.button>
              );
            })}
          </div>
          
          {/* Vertical Dark Mode Toggle */}
          <div className="mb-4">
            <div
              className={`relative w-12 h-[96px] rounded-full border shadow-[inset_0_2px_4px_rgba(0,0,0,0.05)] flex flex-col items-center justify-between p-1 cursor-pointer transition-colors duration-300 ${
                isDark ? "bg-black/20 border-white/10" : "bg-white/40 border-white/60 backdrop-blur-md"
              }`}
              onClick={() => setTheme(isDark ? "light" : "dark")}
            >
              <motion.div
                className={`absolute left-1 w-10 h-[42px] rounded-full shadow-md ${
                  isDark ? "bg-white/20 border border-white/10 backdrop-blur-md" : "bg-white border border-black/5"
                }`}
                animate={{ y: isDark ? 46 : 0 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              />
              
              <div className="relative z-10 w-10 h-[42px] flex items-center justify-center pointer-events-none">
                <Sun 
                  className={`w-5 h-5 transition-all duration-300 ${
                    !isDark 
                      ? "text-black drop-shadow-[0_0_10px_rgba(0,0,0,0.15)] scale-110" 
                      : "text-black/40 scale-90"
                  }`} 
                  strokeWidth={!isDark ? 2.5 : 2}
                />
              </div>

              <div className="relative z-10 w-10 h-[42px] flex items-center justify-center pointer-events-none">
                <Moon 
                  className={`w-5 h-5 transition-all duration-300 ${
                    isDark 
                      ? "text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.4)] scale-110" 
                      : "text-black/40 scale-90"
                  }`}
                  strokeWidth={isDark ? 2.5 : 2}
                />
              </div>
            </div>
          </div>
        </div>
      </motion.aside>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto overflow-x-hidden relative my-0 ml-0 md:ml-4 bg-transparent pb-24 md:pb-0">
        <Outlet />
      </main>

      {/* Mobile Bottom Navigation Bar */}
      <div className="md:hidden fixed bottom-4 left-4 right-4 z-40 bg-white/70 dark:bg-black/70 backdrop-blur-2xl border border-white/60 dark:border-white/10 rounded-[32px] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.2)] transition-colors duration-300">
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
                    isActive ? "text-black dark:text-white" : "text-black/40 dark:text-white/40"
                  }`}
                  strokeWidth={isActive ? 2.5 : 2}
                />
                <span className={`text-[10px] font-medium transition-colors duration-300 ${isActive ? "text-black dark:text-white" : "text-black/50 dark:text-white/50"}`}>
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
              <X className="w-6 h-6 text-black dark:text-white transition-colors duration-300" strokeWidth={2.5} />
            ) : (
              <Menu className="w-6 h-6 text-black/40 dark:text-white/40 transition-colors duration-300" strokeWidth={2} />
            )}
            <span className={`text-[10px] font-medium transition-colors duration-300 ${isMoreMenuOpen ? "text-black dark:text-white" : "text-black/50 dark:text-white/50"}`}>
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
              className="md:hidden fixed inset-0 bg-black/20 dark:bg-black/60 backdrop-blur-sm z-30 transition-colors duration-300"
            />
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="md:hidden fixed bottom-[90px] left-4 right-4 bg-white/90 dark:bg-black/90 backdrop-blur-2xl border border-white/60 dark:border-white/10 rounded-[32px] p-4 shadow-[0_20px_50px_rgba(0,0,0,0.2)] z-40 flex flex-col gap-2 transition-colors duration-300"
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
                      isActive ? "bg-black/5 dark:bg-white/10 text-black dark:text-white" : "text-black/70 dark:text-white/70 hover:bg-black/5 dark:hover:bg-white/5"
                    }`}
                  >
                    <Icon className="w-6 h-6" strokeWidth={isActive ? 2.5 : 2} />
                    <span className="font-semibold text-base">{item.label}</span>
                  </button>
                );
              })}
              
              <div className="h-px w-full bg-black/5 dark:bg-white/10 my-1 transition-colors duration-300" />
              
              <button
                onClick={() => setTheme(isDark ? "light" : "dark")}
                className="flex items-center justify-between p-4 rounded-2xl text-black/70 dark:text-white/70 hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
              >
                <div className="flex items-center gap-4">
                  {isDark ? <Moon className="w-6 h-6" strokeWidth={2} /> : <Sun className="w-6 h-6" strokeWidth={2} />}
                  <span className="font-semibold text-base">Dark Mode</span>
                </div>
                <div className={`w-12 h-7 rounded-full p-1 transition-colors ${isDark ? 'bg-white/20' : 'bg-black/20'}`}>
                  <div className={`w-5 h-5 rounded-full bg-white transition-transform ${isDark ? 'translate-x-5' : 'translate-x-0'}`} />
                </div>
              </button>
              
              <button
                onClick={() => { setIsMoreMenuOpen(false); navigate("/"); }}
                className="flex items-center gap-4 p-4 rounded-2xl text-red-600 dark:text-red-400 hover:bg-red-500/10 dark:hover:bg-red-500/20 transition-colors"
              >
                <LogOut className="w-6 h-6" strokeWidth={2} />
                <span className="font-semibold text-base">Log Out</span>
              </button>
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
                    className="flex items-center gap-3 bg-white/90 dark:bg-black/90 backdrop-blur-xl border border-white/80 dark:border-white/10 px-4 py-2 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.1)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.15)] hover:bg-white dark:hover:bg-black text-black dark:text-white transition-all group"
                  >
                    <span className="font-semibold text-sm tracking-wide">{option.label}</span>
                    <div className="w-8 h-8 rounded-full bg-[#f5f5f7] dark:bg-white/10 flex items-center justify-center group-hover:bg-black/5 dark:group-hover:bg-white/20 transition-colors">
                      <Icon className="w-4 h-4 text-black dark:text-white" />
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
          className={`w-[56px] h-[56px] md:w-[60px] md:h-[60px] rounded-full flex items-center justify-center shadow-[0_20px_40px_-10px_rgba(0,0,0,0.2)] dark:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)] border transition-all duration-300 pointer-events-auto ${
            isCreateMenuOpen 
              ? "bg-black dark:bg-white text-white dark:text-black border-black dark:border-white" 
              : "bg-white/90 dark:bg-black/90 backdrop-blur-xl text-black dark:text-white border-white/80 dark:border-white/20 hover:bg-white dark:hover:bg-black hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)]"
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
