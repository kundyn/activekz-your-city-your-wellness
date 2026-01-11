import { motion } from "framer-motion";
import { Instagram, Send, Youtube, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links = {
    services: ["Gyms", "Swimming Pools", "Yoga Studios", "Massage & SPA", "Boxing & MMA", "Sauna"],
    cities: ["Almaty", "Astana", "Shymkent", "Karaganda", "Aktobe"],
    company: ["About Us", "Careers", "Blog", "Press", "Partners"],
    support: ["Help Center", "Contact Us", "Privacy Policy", "Terms of Service"],
  };

  return (
    <footer className="bg-card border-t border-border pt-16 pb-24 md:pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center">
                <span className="font-display font-bold text-lg text-primary-foreground">A</span>
              </div>
              <span className="font-display font-bold text-xl">
                Active<span className="text-primary">KZ</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Kazakhstan's leading platform for sports and wellness services.
            </p>
            <div className="flex gap-3">
              {[Instagram, Send, Youtube].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {links.services.map(link => (
                <li key={link}>
                  <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Cities */}
          <div>
            <h4 className="font-display font-semibold mb-4">Cities</h4>
            <ul className="space-y-2">
              {links.cities.map(link => (
                <li key={link}>
                  <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {links.company.map(link => (
                <li key={link}>
                  <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="w-4 h-4 text-primary" />
                +7 (727) 123-45-67
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="w-4 h-4 text-primary" />
                info@activekz.kz
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary mt-0.5" />
                Almaty, Kazakhstan
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} ActiveKZ. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
