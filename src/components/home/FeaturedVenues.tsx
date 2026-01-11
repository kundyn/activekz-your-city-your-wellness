import { motion } from "framer-motion";
import { Star, MapPin, Heart, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Venue {
  id: number;
  name: string;
  category: string;
  image: string;
  rating: number;
  reviews: number;
  location: string;
  priceFrom: string;
  isOpen: boolean;
  discount?: string;
}

const venues: Venue[] = [
  {
    id: 1,
    name: "World Class Almaty",
    category: "Premium Gym",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=300&fit=crop",
    rating: 4.9,
    reviews: 324,
    location: "Medeu District",
    priceFrom: "15,000₸/mo",
    isOpen: true,
    discount: "20% OFF",
  },
  {
    id: 2,
    name: "Aqua Swim Center",
    category: "Swimming Pool",
    image: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=400&h=300&fit=crop",
    rating: 4.7,
    reviews: 189,
    location: "Almaly District",
    priceFrom: "3,000₸/visit",
    isOpen: true,
  },
  {
    id: 3,
    name: "Zen Wellness Spa",
    category: "Massage & SPA",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400&h=300&fit=crop",
    rating: 4.8,
    reviews: 256,
    location: "Bostandyk District",
    priceFrom: "8,000₸",
    isOpen: true,
    discount: "First Visit Free",
  },
  {
    id: 4,
    name: "Fight Club KZ",
    category: "Boxing & MMA",
    image: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=400&h=300&fit=crop",
    rating: 4.6,
    reviews: 142,
    location: "Auezov District",
    priceFrom: "5,000₸/mo",
    isOpen: false,
  },
  {
    id: 5,
    name: "Harmony Yoga Studio",
    category: "Yoga & Fitness",
    image: "https://images.unsplash.com/photo-1588286840104-8957b019727f?w=400&h=300&fit=crop",
    rating: 4.9,
    reviews: 198,
    location: "Medeu District",
    priceFrom: "2,500₸/class",
    isOpen: true,
  },
  {
    id: 6,
    name: "Royal Banya",
    category: "Sauna & Banya",
    image: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=400&h=300&fit=crop",
    rating: 4.5,
    reviews: 87,
    location: "Turksib District",
    priceFrom: "6,000₸/2hrs",
    isOpen: true,
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const FeaturedVenues = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background via-card/30 to-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-12"
        >
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-2">
              Featured Venues
            </h2>
            <p className="text-muted-foreground">
              Top-rated places picked for you
            </p>
          </div>
          <Button variant="outline" className="hidden sm:flex">
            View All
          </Button>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {venues.map((venue) => (
            <motion.div
              key={venue.id}
              variants={item}
              whileHover={{ y: -8 }}
              className="group bg-card rounded-2xl overflow-hidden border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-xl"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={venue.image}
                  alt={venue.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                
                {/* Discount Badge */}
                {venue.discount && (
                  <div className="absolute top-3 left-3 bg-accent text-accent-foreground text-xs font-semibold px-2 py-1 rounded-lg">
                    {venue.discount}
                  </div>
                )}

                {/* Favorite Button */}
                <button className="absolute top-3 right-3 p-2 rounded-full bg-background/50 backdrop-blur-sm hover:bg-background/80 transition-colors">
                  <Heart className="w-4 h-4" />
                </button>

                {/* Category */}
                <div className="absolute bottom-3 left-3">
                  <span className="text-xs font-medium px-2 py-1 rounded-lg bg-primary/20 text-primary">
                    {venue.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-display font-semibold text-lg group-hover:text-primary transition-colors">
                    {venue.name}
                  </h3>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-accent text-accent" />
                    <span className="font-semibold text-sm">{venue.rating}</span>
                    <span className="text-xs text-muted-foreground">({venue.reviews})</span>
                  </div>
                </div>

                <div className="flex items-center gap-1 text-muted-foreground text-sm mb-3">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{venue.location}</span>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs text-muted-foreground">From </span>
                    <span className="font-display font-bold text-primary">{venue.priceFrom}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span className={`text-xs font-medium ${venue.isOpen ? "text-primary" : "text-muted-foreground"}`}>
                      {venue.isOpen ? "Open Now" : "Closed"}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mt-8 sm:hidden"
        >
          <Button variant="outline" className="w-full max-w-xs">
            View All Venues
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedVenues;
