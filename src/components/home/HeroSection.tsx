import { motion } from "framer-motion";
import { Search, MapPin, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-background" />
      
      {/* Animated orbs */}
      <motion.div 
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
        animate={{ 
          x: [0, 50, 0],
          y: [0, 30, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div 
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/15 rounded-full blur-3xl"
        animate={{ 
          x: [0, -30, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 bg-secondary/50 rounded-full px-4 py-2 mb-6"
          >
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium">Kazakhstan's #1 Sports & Wellness Platform</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            Your Body Deserves{" "}
            <span className="gradient-text">The Best</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto"
          >
            Discover and book the best gyms, pools, spas, and fitness classes across Kazakhstan. All in one place.
          </motion.p>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-3 max-w-2xl mx-auto mb-8"
          >
            <div className="flex-1 flex items-center gap-3 bg-card border border-border rounded-xl px-4 py-3">
              <Search className="w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search gyms, pools, yoga studios..."
                className="flex-1 bg-transparent outline-none text-foreground placeholder:text-muted-foreground"
              />
            </div>
            <div className="flex items-center gap-3 bg-card border border-border rounded-xl px-4 py-3 sm:w-44">
              <MapPin className="w-5 h-5 text-primary" />
              <select className="flex-1 bg-transparent outline-none text-foreground cursor-pointer">
                <option value="almaty">Almaty</option>
                <option value="astana">Astana</option>
                <option value="shymkent">Shymkent</option>
              </select>
            </div>
            <Button variant="hero" size="lg" className="sm:w-auto">
              <Search className="w-5 h-5" />
              Search
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap justify-center gap-8 md:gap-12"
          >
            {[
              { value: "500+", label: "Venues" },
              { value: "3", label: "Cities" },
              { value: "50K+", label: "Happy Users" },
              { value: "4.8", label: "Avg Rating" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="font-display text-2xl md:text-3xl font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
