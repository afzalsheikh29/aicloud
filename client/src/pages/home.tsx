import HeroSection from "@/components/sections/hero-section";
import ServicesGrid from "@/components/sections/services-grid";
import Timeline from "@/components/sections/timeline";
import TeamCarousel from "@/components/sections/team-carousel";
import Testimonials from "@/components/sections/testimonials";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ServicesGrid />
      <Timeline />
      <TeamCarousel />
      <Testimonials />
    </div>
  );
}
