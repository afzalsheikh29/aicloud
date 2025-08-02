import { motion } from "framer-motion";
import { Brain, Cloud, Code, ShoppingCart, Link, Megaphone } from "lucide-react";
import GlassCard from "@/components/ui/glass-card";
import { Button } from "@/components/ui/button";

export default function ServicesGrid() {
  const services = [
    {
      icon: Brain,
      title: "AI Solutions",
      description: "Machine learning, neural networks, and intelligent automation solutions",
      features: [
        "Google Cloud AI & Vertex AI",
        "OpenAI & Custom ML Models",
        "NVIDIA AI Infrastructure",
        "PyTorch & MLflow",
      ],
      color: "electric-blue",
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      description: "Scalable cloud infrastructure and automated deployment pipelines",
      features: [
        "AWS, Azure, Google Cloud",
        "Docker & Kubernetes",
        "Terraform & Ansible",
        "CI/CD Pipeline Automation",
      ],
      color: "cyber-violet",
    },
    {
      icon: Code,
      title: "SaaS Development",
      description: "Custom software-as-a-service applications and platforms",
      features: [
        "Full-Stack Development",
        "Multi-tenant Architecture",
        "API Development & Integration",
        "Scalable Database Design",
      ],
      color: "neon-cyan",
    },
    {
      icon: ShoppingCart,
      title: "E-commerce",
      description: "Complete online store solutions with payment integration",
      features: [
        "Shopify & BigCommerce",
        "Stripe & PayPal Integration",
        "Custom Shopping Platforms",
        "Mobile Commerce Apps",
      ],
      color: "electric-blue",
    },
    {
      icon: Link,
      title: "Blockchain",
      description: "Decentralized applications and smart contract development",
      features: [
        "Ethereum & Polygon",
        "Solana & Binance Smart Chain",
        "NFT Marketplaces",
        "DeFi Applications",
      ],
      color: "cyber-violet",
    },
    {
      icon: Megaphone,
      title: "Digital Marketing",
      description: "AI-powered marketing automation and analytics",
      features: [
        "SEO & Content Marketing",
        "Social Media Automation",
        "Email Marketing Campaigns",
        "Analytics & Reporting",
      ],
      color: "neon-cyan",
    },
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

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold mb-6">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive AI and cloud solutions designed to transform your business and accelerate
            digital innovation
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div key={service.title} variants={item}>
              <GlassCard
                className={`text-center group cursor-pointer transition-all duration-300 hover:border-${service.color}`}
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-r from-${service.color} to-${
                    index % 2 === 0 ? "cyber-violet" : "neon-cyan"
                  } rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <service.icon className="text-2xl text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 gradient-text">{service.title}</h3>
                <p className="text-gray-400 mb-6">{service.description}</p>
                <ul className="text-sm text-gray-300 space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature}>✓ {feature}</li>
                  ))}
                </ul>
                <Button
                  variant="outline"
                  className={`w-full border-${service.color} hover:bg-${service.color} hover:text-black transition-all duration-300`}
                >
                  Learn More
                </Button>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
