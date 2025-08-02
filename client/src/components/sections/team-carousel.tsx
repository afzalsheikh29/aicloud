import { motion } from "framer-motion";
import GlassCard from "@/components/ui/glass-card";

export default function TeamCarousel() {
  const team = [
    {
      name: "Alex Thompson",
      role: "CEO & Founder",
      description: "Visionary leader with 15+ years in AI and cloud technologies",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      color: "electric-blue",
    },
    {
      name: "Sarah Chen",
      role: "CTO",
      description: "Technology architect specializing in scalable cloud infrastructures",
      image: "https://images.unsplash.com/photo-1494790108755-2616b25d5e7c?w=300&h=300&fit=crop&crop=face",
      color: "cyber-violet",
    },
    {
      name: "Marcus Rodriguez",
      role: "Head of AI",
      description: "Machine learning expert with expertise in neural networks",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      color: "neon-cyan",
    },
    {
      name: "Emily Watson",
      role: "Head of Operations",
      description: "Operations strategist ensuring seamless project delivery",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      color: "electric-blue",
    },
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold gradient-text">Leadership Team</h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <GlassCard className="text-center group">
                <img
                  src={member.image}
                  alt={`${member.name} portrait`}
                  className={`w-24 h-24 rounded-full mx-auto mb-4 object-cover border-2 border-${member.color}`}
                />
                <h4 className="text-xl font-bold mb-2">{member.name}</h4>
                <p className={`text-${member.color} mb-2`}>{member.role}</p>
                <p className="text-sm text-gray-400">{member.description}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
