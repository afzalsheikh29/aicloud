import { motion } from "framer-motion";
import { Star } from "lucide-react";
import GlassCard from "@/components/ui/glass-card";

export default function Testimonials() {
  const testimonials = [
    {
      rating: 5.0,
      content:
        "AiCloud Mania transformed our business with their innovative AI solutions. The team's expertise and dedication resulted in a 300% increase in operational efficiency.",
      author: "David Johnson",
      position: "CEO, TechCorp Industries",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face",
      color: "electric-blue",
    },
    {
      rating: 5.0,
      content:
        "Outstanding cloud infrastructure solutions that scaled with our rapid growth. Their DevOps expertise saved us countless hours and resources.",
      author: "Maria Rodriguez",
      position: "CTO, InnovateNow",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop&crop=face",
      color: "cyber-violet",
    },
    {
      rating: 4.8,
      content:
        "The blockchain solution they developed revolutionized our supply chain management. Highly recommend their innovative approach.",
      author: "James Wilson",
      position: "Operations Director, GlobalSupply",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop&crop=face",
      color: "neon-cyan",
    },
  ];

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
            Client <span className="gradient-text">Testimonials</span>
          </h2>
          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="text-3xl font-bold gradient-text">4.9</div>
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <div className="text-gray-400">Based on 500+ reviews</div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <GlassCard>
                <div className="flex items-center mb-4">
                  <div className="flex space-x-1 mr-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < Math.floor(testimonial.rating)
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-gray-400"
                        }`}
                      />
                    ))}
                  </div>
                  <span className={`text-${testimonial.color} font-bold`}>
                    {testimonial.rating}
                  </span>
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <div className="font-bold">{testimonial.author}</div>
                    <div className="text-gray-400 text-sm">{testimonial.position}</div>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
