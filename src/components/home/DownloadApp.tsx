import { motion } from "framer-motion";
import { Smartphone, Apple, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const DownloadApp = () => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 flex justify-center"
          >
            <div className="relative">
              {/* Phone frame */}
              <div className="w-64 h-[500px] md:w-72 md:h-[560px] bg-gradient-to-br from-card to-card-elevated rounded-[3rem] p-3 shadow-2xl border border-border">
                <div className="w-full h-full bg-background rounded-[2.5rem] overflow-hidden relative">
                  {/* Status bar */}
                  <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-background to-transparent z-10 flex items-center justify-center">
                    <div className="w-24 h-6 bg-card rounded-full" />
                  </div>
                  
                  {/* App content preview */}
                  <div className="p-4 pt-14 h-full flex flex-col gap-4">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                        <span className="font-display font-bold text-xs text-primary-foreground">A</span>
                      </div>
                      <span className="font-display font-semibold text-sm">ActiveKZ</span>
                    </div>
                    
                    <div className="bg-secondary/50 rounded-xl p-3 flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-muted" />
                      <div className="flex-1 h-3 bg-muted rounded-full" />
                    </div>
                    
                    <div className="grid grid-cols-3 gap-2">
                      {[1, 2, 3].map(i => (
                        <div key={i} className="aspect-square rounded-xl bg-gradient-to-br from-primary/20 to-accent/10" />
                      ))}
                    </div>
                    
                    <div className="flex-1 space-y-3">
                      {[1, 2, 3].map(i => (
                        <div key={i} className="h-20 rounded-xl bg-card border border-border/50 p-3">
                          <div className="flex gap-3">
                            <div className="w-14 h-14 rounded-lg bg-muted" />
                            <div className="flex-1 space-y-2">
                              <div className="h-3 w-3/4 bg-muted rounded-full" />
                              <div className="h-2 w-1/2 bg-muted/50 rounded-full" />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    {/* Bottom nav */}
                    <div className="flex justify-around py-2">
                      {[1, 2, 3, 4, 5].map(i => (
                        <div key={i} className={`w-6 h-6 rounded-lg ${i === 1 ? 'bg-primary' : 'bg-muted/50'}`} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Glow effect */}
              <div className="absolute -inset-10 bg-primary/10 rounded-full blur-3xl -z-10" />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 bg-secondary/50 rounded-full px-4 py-2 mb-6">
              <Smartphone className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Mobile App</span>
            </div>

            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Your Wellness Journey,{" "}
              <span className="gradient-text">In Your Pocket</span>
            </h2>

            <p className="text-muted-foreground text-lg mb-8 max-w-lg mx-auto lg:mx-0">
              Download the ActiveKZ app to book sessions on the go, track your progress, and unlock exclusive mobile-only deals.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="lg" className="gap-2">
                <Apple className="w-5 h-5" />
                App Store
              </Button>
              <Button variant="outline" size="lg" className="gap-2">
                <Play className="w-5 h-5" />
                Google Play
              </Button>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-8 mt-8">
              <div className="text-center">
                <div className="font-display text-2xl font-bold">4.8</div>
                <div className="text-xs text-muted-foreground">App Rating</div>
              </div>
              <div className="w-px h-10 bg-border" />
              <div className="text-center">
                <div className="font-display text-2xl font-bold">50K+</div>
                <div className="text-xs text-muted-foreground">Downloads</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DownloadApp;
