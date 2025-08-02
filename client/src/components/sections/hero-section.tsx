import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Rocket, Play } from "lucide-react";
import GlassCard from "@/components/ui/glass-card";

export default function HeroSection() {
  const stats = [
    { value: "10+", label: "Years Experience" },
    { value: "1000+", label: "Projects Delivered" },
    { value: "500+", label: "Happy Clients" },
    { value: "98%", label: "Success Rate" },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl lg:text-8xl font-black mb-6 leading-tight">
            <span className="gradient-text">Next-Gen</span>
            <br />
            <span className="text-white">AI & Cloud</span>
            <br />
            <span className="gradient-text">Solutions</span>
          </h1>

          <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Empowering businesses with cutting-edge artificial intelligence, cloud infrastructure,
            and digital transformation solutions that drive innovation and accelerate growth.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button
              size="lg"
              className="bg-gradient-to-r from-electric-blue to-neon-cyan hover:scale-105 transform transition-all duration-300 animate-pulse-glow text-lg px-8 py-4"
            >
              <Rocket className="mr-2 h-5 w-5" />
              Start Your Journey
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="glass-morphism border-electric-blue hover:scale-105 transform transition-all duration-300 text-lg px-8 py-4"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <GlassCard className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                >
                  <div className="text-3xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}
