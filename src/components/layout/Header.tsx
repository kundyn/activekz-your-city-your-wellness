import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Search, Heart, User, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const cities = ["Almaty", "Astana", "Shymkent"];

const Header = () => {
  const [selectedCity, setSelectedCity] = useState("Almaty");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <motion.div 
            className="flex items-center gap-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center">
              <span className="font-display font-bold text-lg text-primary-foreground">A</span>
            </div>
            <span className="font-display font-bold text-xl hidden sm:block">
              Active<span className="text-primary">KZ</span>
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {/* City Selector */}
            <div className="flex items-center gap-2 bg-secondary/50 rounded-lg px-3 py-2">
              <MapPin className="w-4 h-4 text-primary" />
              <select 
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="bg-transparent text-sm font-medium focus:outline-none cursor-pointer"
              >
                {cities.map(city => (
                  <option key={city} value={city} className="bg-card text-foreground">
                    {city}
                  </option>
                ))}
              </select>
            </div>

            {/* Search */}
            <Button variant="ghost" size="icon">
              <Search className="w-5 h-5" />
            </Button>

            {/* Favorites */}
            <Button variant="ghost" size="icon">
              <Heart className="w-5 h-5" />
            </Button>

            {/* Profile */}
            <Button variant="hero" size="sm" className="gap-2">
              <User className="w-4 h-4" />
              Sign In
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div 
            className="md:hidden py-4 border-t border-border/50"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
          >
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 bg-secondary/50 rounded-lg px-3 py-2">
                <MapPin className="w-4 h-4 text-primary" />
                <select 
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                  className="bg-transparent text-sm font-medium focus:outline-none cursor-pointer flex-1"
                >
                  {cities.map(city => (
                    <option key={city} value={city} className="bg-card text-foreground">
                      {city}
                    </option>
                  ))}
                </select>
              </div>
              <Button variant="hero" className="w-full gap-2">
                <User className="w-4 h-4" />
                Sign In
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Header;
