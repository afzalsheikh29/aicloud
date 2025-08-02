import { motion } from "framer-motion";
import { Link } from "wouter";
import { Cloud, Linkedin, Twitter, Github, Youtube } from "lucide-react";

export default function Footer() {
  const footerSections = [
    {
      title: "Services",
      links: [
        { label: "AI Solutions", href: "/services" },
        { label: "Cloud & DevOps", href: "/services" },
        { label: "SaaS Development", href: "/services" },
        { label: "E-commerce", href: "/services" },
        { label: "Blockchain", href: "/services" },
        { label: "Digital Marketing", href: "/services" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About Us", href: "/about" },
        { label: "Careers", href: "#" },
        { label: "Press", href: "#" },
        { label: "Partners", href: "#" },
        { label: "Investors", href: "#" },
        { label: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Blog", href: "/blog" },
        { label: "Documentation", href: "#" },
        { label: "Case Studies", href: "/products" },
        { label: "Whitepapers", href: "#" },
        { label: "API Reference", href: "#" },
        { label: "Support", href: "#" },
      ],
    },
  ];

  const socialLinks = [
    { icon: Linkedin, href: "#", color: "bg-electric-blue" },
    { icon: Twitter, href: "#", color: "bg-cyber-violet" },
    { icon: Github, href: "#", color: "bg-neon-cyan" },
    { icon: Youtube, href: "#", color: "bg-electric-blue" },
  ];

  return (
    <footer className="py-16 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-black to-gray-900"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-electric-blue to-cyber-violet rounded-lg flex items-center justify-center">
                <Cloud className="text-white text-xl" />
              </div>
              <span className="text-2xl font-bold gradient-text">AiCloud Mania</span>
            </div>
            <p className="text-gray-400 mb-6">
              Empowering businesses with next-generation AI and cloud solutions that drive
              innovation and accelerate growth.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className={`w-10 h-10 ${social.color} rounded-full flex items-center justify-center`}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <social.icon className="w-5 h-5 text-white" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Footer Sections */}
          {footerSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: (index + 1) * 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-bold mb-6 gradient-text">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href}>
                      <span className="text-gray-400 hover:text-electric-blue transition-colors duration-300 cursor-pointer">
                        {link.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 mb-4 md:mb-0">
              © 2024 AiCloud Mania. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-electric-blue transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-electric-blue transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-electric-blue transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
