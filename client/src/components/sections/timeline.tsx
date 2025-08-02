import { motion } from "framer-motion";
import GlassCard from "@/components/ui/glass-card";

export default function Timeline() {
  const milestones = [
    {
      year: "2020",
      title: "Company Founded",
      description:
        "Started with a vision to democratize AI and cloud technologies for businesses of all sizes.",
      color: "electric-blue",
    },
    {
      year: "2021",
      title: "First 100 Clients",
      description:
        "Achieved our first major milestone by serving over 100 satisfied clients across various industries.",
      color: "cyber-violet",
    },
    {
      year: "2022",
      title: "Global Expansion",
      description:
        "Expanded operations internationally and formed strategic partnerships with major cloud providers.",
      color: "neon-cyan",
    },
    {
      year: "2023",
      title: "AI Innovation Center",
      description:
        "Launched our dedicated AI research and development center focusing on next-gen solutions.",
      color: "electric-blue",
    },
    {
      year: "2024",
      title: "Market Leader",
      description:
        "Recognized as a leading provider of AI and cloud solutions with 1000+ successful projects.",
      color: "cyber-violet",
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
            About <span className="gradient-text">AiCloud Mania</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-4xl mx-auto">
            Leading the digital transformation revolution with cutting-edge AI and cloud
            technologies, empowering businesses to achieve unprecedented growth and innovation.
          </p>
        </motion.div>

        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12 gradient-text">Our Journey</h3>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-electric-blue via-cyber-violet to-neon-cyan"></div>

            <div className="space-y-16">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  className="flex items-center justify-between"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {index % 2 === 0 ? (
                    <>
                      <div className="w-5/12 text-right pr-8">
                        <GlassCard>
                          <h4 className="text-xl font-bold gradient-text">{milestone.year}</h4>
                          <h5 className="text-lg font-semibold mb-2">{milestone.title}</h5>
                          <p className="text-gray-400">{milestone.description}</p>
                        </GlassCard>
                      </div>
                      <div
                        className={`w-8 h-8 bg-${milestone.color} rounded-full border-4 border-black flex items-center justify-center relative z-10`}
                      >
                        <div className="w-3 h-3 bg-white rounded-full"></div>
                      </div>
                      <div className="w-5/12"></div>
                    </>
                  ) : (
                    <>
                      <div className="w-5/12"></div>
                      <div
                        className={`w-8 h-8 bg-${milestone.color} rounded-full border-4 border-black flex items-center justify-center relative z-10`}
                      >
                        <div className="w-3 h-3 bg-white rounded-full"></div>
                      </div>
                      <div className="w-5/12 pl-8">
                        <GlassCard>
                          <h4 className="text-xl font-bold gradient-text">{milestone.year}</h4>
                          <h5 className="text-lg font-semibold mb-2">{milestone.title}</h5>
                          <p className="text-gray-400">{milestone.description}</p>
                        </GlassCard>
                      </div>
                    </>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
