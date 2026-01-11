import Header from "@/components/layout/Header";
import MobileNav from "@/components/layout/MobileNav";
import HeroSection from "@/components/home/HeroSection";
import CategorySection from "@/components/home/CategorySection";
import FeaturedVenues from "@/components/home/FeaturedVenues";
import PromoSection from "@/components/home/PromoSection";
import DownloadApp from "@/components/home/DownloadApp";
import Footer from "@/components/layout/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <CategorySection />
        <FeaturedVenues />
        <PromoSection />
        <DownloadApp />
      </main>
      <Footer />
      <MobileNav />
    </div>
  );
};

export default Index;
