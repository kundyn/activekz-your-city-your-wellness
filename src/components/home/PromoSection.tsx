import { motion } from "framer-motion";
import { Zap, Gift, Percent } from "lucide-react";
import { Button } from "@/components/ui/button";

const promos = [
  {
    icon: <Percent className="w-6 h-6" />,
    title: "First Visit Discount",
    description: "Get 30% off your first booking at any venue",
    cta: "Claim Offer",
    gradient: "from-primary/20 via-primary/10 to-transparent",
    iconBg: "bg-primary/20",
    iconColor: "text-primary",
  },
  {
    icon: <Gift className="w-6 h-6" />,
    title: "Refer a Friend",
    description: "Earn 5,000₸ credit for every friend who joins",
    cta: "Share Now",
    gradient: "from-accent/20 via-accent/10 to-transparent",
    iconBg: "bg-accent/20",
    iconColor: "text-accent",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Premium Membership",
    description: "Unlimited access to 100+ premium venues",
    cta: "Learn More",
    gradient: "from-purple-500/20 via-purple-500/10 to-transparent",
    iconBg: "bg-purple-500/20",
    iconColor: "text-purple-400",
  },
];

const PromoSection = () => {
  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Special Offers
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Exclusive deals and promotions just for you
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {promos.map((promo, index) => (
            <motion.div
              key={promo.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className={`relative overflow-hidden rounded-2xl p-6 bg-gradient-to-br ${promo.gradient} border border-border/50 hover:border-primary/30 transition-all duration-300`}
            >
              <div className={`inline-flex p-3 rounded-xl ${promo.iconBg} ${promo.iconColor} mb-4`}>
                {promo.icon}
              </div>
              <h3 className="font-display font-bold text-xl mb-2">{promo.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{promo.description}</p>
              <Button variant="secondary" size="sm">
                {promo.cta}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PromoSection;
