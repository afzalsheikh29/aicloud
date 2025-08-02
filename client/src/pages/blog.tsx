import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import GlassCard from "@/components/ui/glass-card";
import { ArrowRight } from "lucide-react";

export default function Blog() {
  const [activeFilter, setActiveFilter] = useState("All Posts");

  const categories = ["All Posts", "AI & ML", "Cloud", "DevOps", "Blockchain"];

  const featuredPost = {
    title: "The Future of AI in Business Operations",
    description: "Discover how artificial intelligence is revolutionizing business processes and creating unprecedented opportunities for growth and efficiency across industries.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop",
    author: "Sarah Chen",
    date: "Dec 15, 2024",
    category: "AI & ML",
  };

  const posts = [
    {
      title: "Cloud Security Best Practices for 2024",
      description: "Essential security measures to protect your cloud infrastructure from emerging threats.",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400&h=250&fit=crop",
      date: "Dec 12, 2024",
      category: "Cloud",
      color: "cyber-violet",
    },
    {
      title: "DevOps Automation: A Complete Guide",
      description: "Streamline your development pipeline with advanced automation strategies.",
      image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=400&h=250&fit=crop",
      date: "Dec 10, 2024",
      category: "DevOps",
      color: "neon-cyan",
    },
    {
      title: "Blockchain Adoption in Enterprise",
      description: "How major corporations are leveraging blockchain for business transformation.",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=250&fit=crop",
      date: "Dec 8, 2024",
      category: "Blockchain",
      color: "electric-blue",
    },
  ];

  const filteredPosts = activeFilter === "All Posts" 
    ? posts 
    : posts.filter(post => post.category === activeFilter);

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
                Latest <span className="gradient-text">Insights</span>
              </h1>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Stay updated with the latest trends in AI, cloud computing, and digital transformation
              </p>
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={activeFilter === category ? "default" : "outline"}
                  className={`px-6 py-3 rounded-full ${
                    activeFilter === category
                      ? "bg-gradient-to-r from-electric-blue to-cyber-violet"
                      : "glass-morphism hover:bg-electric-blue hover:bg-opacity-20"
                  } transition-all duration-300`}
                  onClick={() => setActiveFilter(category)}
                >
                  {category}
                </Button>
              ))}
            </div>

            {/* Featured Article */}
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <GlassCard className="overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <img
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      className="w-full h-64 object-cover rounded-2xl"
                    />
                  </div>
                  <div>
                    <span className="px-3 py-1 bg-electric-blue bg-opacity-20 text-electric-blue rounded-full text-sm">
                      Featured
                    </span>
                    <h3 className="text-3xl font-bold mt-4 mb-4 gradient-text">
                      {featuredPost.title}
                    </h3>
                    <p className="text-gray-400 mb-6">{featuredPost.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <span className="text-gray-400">By {featuredPost.author}</span>
                        <span className="text-gray-400">•</span>
                        <span className="text-gray-400">{featuredPost.date}</span>
                      </div>
                      <Button variant="ghost" className="text-electric-blue hover:text-neon-cyan">
                        Read More <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </motion.div>

            {/* Blog Posts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <motion.div
                  key={post.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <GlassCard className="overflow-hidden group cursor-pointer">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <span className={`px-3 py-1 bg-${post.color} bg-opacity-20 text-${post.color} rounded-full text-sm`}>
                        {post.category}
                      </span>
                      <h4 className="text-xl font-bold mt-4 mb-3 group-hover:text-electric-blue transition-colors duration-300">
                        {post.title}
                      </h4>
                      <p className="text-gray-400 mb-4">{post.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-400 text-sm">{post.date}</span>
                        <ArrowRight className={`text-${post.color} group-hover:translate-x-2 transition-transform duration-300`} />
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </motion.div>
    </div>
  );
}
