import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import GlassCard from "@/components/ui/glass-card";
import { ArrowRight } from "lucide-react";

export default function Products() {
  const products = [
    {
      name: "CloudMind AI Platform",
      description: "Comprehensive AI-powered business intelligence platform with predictive analytics, automated reporting, and real-time insights.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
      tags: ["Machine Learning", "Cloud Native", "Real-time Analytics"],
      color: "electric-blue",
    },
    {
      name: "DevOps Automation Suite",
      description: "Complete CI/CD pipeline automation platform with container orchestration, monitoring, and deployment management capabilities.",
      image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=800&h=400&fit=crop",
      tags: ["Kubernetes", "CI/CD", "Monitoring"],
      color: "cyber-violet",
    },
  ];

  const caseStudies = [
    {
      title: "Global Fashion Retailer",
      description: "Increased online sales by 300% with our AI-powered e-commerce platform",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop",
      metric: "+300% Sales",
      color: "electric-blue",
    },
    {
      title: "Healthcare Network",
      description: "Streamlined patient data management across 50+ facilities",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=250&fit=crop",
      metric: "50+ Facilities",
      color: "cyber-violet",
    },
    {
      title: "FinTech Startup",
      description: "Built scalable trading platform handling 1M+ transactions daily",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=250&fit=crop",
      metric: "1M+ Daily",
      color: "neon-cyan",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold mb-6">
                Our <span className="gradient-text">Products</span>
              </h1>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Cutting-edge SaaS products and custom solutions that have transformed businesses across industries
              </p>
            </div>

            {/* Featured Products */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
              {products.map((product, index) => (
                <motion.div
                  key={product.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <GlassCard>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-64 object-cover rounded-2xl mb-6"
                    />
                    <h3 className="text-2xl font-bold mb-4 gradient-text">{product.name}</h3>
                    <p className="text-gray-400 mb-6">{product.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {product.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`px-3 py-1 bg-${product.color} bg-opacity-20 text-${product.color} rounded-full text-sm`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Button className={`w-full bg-gradient-to-r from-${product.color} to-cyber-violet`}>
                      Request Demo
                    </Button>
                  </GlassCard>
                </motion.div>
              ))}
            </div>

            {/* Case Studies */}
            <div>
              <h3 className="text-3xl font-bold text-center mb-12 gradient-text">Success Stories</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {caseStudies.map((study, index) => (
                  <motion.div
                    key={study.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <GlassCard className="group cursor-pointer">
                      <img
                        src={study.image}
                        alt={study.title}
                        className="w-full h-48 object-cover rounded-xl mb-4"
                      />
                      <h4 className="text-xl font-bold mb-2">{study.title}</h4>
                      <p className="text-gray-400 mb-4">{study.description}</p>
                      <div className="flex justify-between items-center">
                        <span className={`text-${study.color} font-semibold`}>{study.metric}</span>
                        <ArrowRight className={`text-${study.color} group-hover:translate-x-2 transition-transform duration-300`} />
                      </div>
                    </GlassCard>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </motion.div>
    </div>
  );
}
