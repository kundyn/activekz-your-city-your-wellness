import { motion } from "framer-motion";
import { Home, Search, MapPin, Heart, User } from "lucide-react";

interface NavItem {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}

const navItems: NavItem[] = [
  { icon: <Home className="w-5 h-5" />, label: "Home", active: true },
  { icon: <Search className="w-5 h-5" />, label: "Search" },
  { icon: <MapPin className="w-5 h-5" />, label: "Map" },
  { icon: <Heart className="w-5 h-5" />, label: "Favorites" },
  { icon: <User className="w-5 h-5" />, label: "Profile" },
];

const MobileNav = () => {
  return (
    <motion.nav 
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden glass-card border-t border-border/50 pb-safe"
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ delay: 0.3 }}
    >
      <div className="flex items-center justify-around py-2">
        {navItems.map((item, index) => (
          <motion.button
            key={item.label}
            className={`flex flex-col items-center gap-1 px-4 py-2 rounded-xl transition-colors ${
              item.active 
                ? "text-primary" 
                : "text-muted-foreground hover:text-foreground"
            }`}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index }}
          >
            <div className={`${item.active ? "glow-primary rounded-lg p-1 bg-primary/10" : ""}`}>
              {item.icon}
            </div>
            <span className="text-xs font-medium">{item.label}</span>
          </motion.button>
        ))}
      </div>
    </motion.nav>
  );
};

export default MobileNav;
