import { motion } from "framer-motion";
import { Dumbbell, Waves, Flame, Heart, Sparkles, Users } from "lucide-react";

interface Category {
  icon: React.ReactNode;
  name: string;
  count: number;
  color: string;
}

const categories: Category[] = [
  { icon: <Dumbbell className="w-7 h-7" />, name: "Gym", count: 156, color: "from-primary/30 to-primary/10" },
  { icon: <Users className="w-7 h-7" />, name: "Boxing & MMA", count: 48, color: "from-red-500/30 to-red-500/10" },
  { icon: <Waves className="w-7 h-7" />, name: "Swimming", count: 32, color: "from-blue-500/30 to-blue-500/10" },
  { icon: <Flame className="w-7 h-7" />, name: "Sauna & Banya", count: 67, color: "from-orange-500/30 to-orange-500/10" },
  { icon: <Sparkles className="w-7 h-7" />, name: "Massage & SPA", count: 89, color: "from-purple-500/30 to-purple-500/10" },
  { icon: <Heart className="w-7 h-7" />, name: "Yoga & Fitness", count: 124, color: "from-pink-500/30 to-pink-500/10" },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const CategorySection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Explore Categories
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Find exactly what you need from our wide range of sports and wellness services
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
        >
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              variants={item}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.98 }}
              className={`relative group cursor-pointer rounded-2xl p-6 bg-gradient-to-br ${category.color} border border-border/50 hover:border-primary/50 transition-all duration-300 hover-lift`}
            >
              <div className="flex flex-col items-center text-center gap-3">
                <div className="p-3 rounded-xl bg-background/50 group-hover:bg-primary/20 transition-colors">
                  {category.icon}
                </div>
                <div>
                  <h3 className="font-display font-semibold text-sm md:text-base">{category.name}</h3>
                  <p className="text-xs text-muted-foreground mt-1">{category.count} places</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CategorySection;
