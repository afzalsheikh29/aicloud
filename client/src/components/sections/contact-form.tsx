import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import GlassCard from "@/components/ui/glass-card";
import { MapPin, Phone, Mail, Clock, Linkedin, Twitter, Github, Youtube, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function ContactForm() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. We'll get back to you soon.",
    });

    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      company: "",
      service: "",
      message: "",
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const offices = [
    {
      city: "San Francisco HQ",
      address: "123 Innovation Drive\nSan Francisco, CA 94105\nUnited States",
      color: "electric-blue",
    },
    {
      city: "New York Office",
      address: "456 Tech Avenue\nNew York, NY 10001\nUnited States",
      color: "cyber-violet",
    },
    {
      city: "London Branch",
      address: "789 Digital Street\nLondon EC2A 4DP\nUnited Kingdom",
      color: "neon-cyan",
    },
  ];

  const contactMethods = [
    { icon: Phone, label: "Phone", value: "+1 (555) 123-4567", color: "electric-blue" },
    { icon: Mail, label: "Email", value: "hello@aicloudmania.com", color: "cyber-violet" },
    { icon: Clock, label: "Business Hours", value: "Mon-Fri: 9:00 AM - 6:00 PM PST", color: "neon-cyan" },
  ];

  const socialLinks = [
    { icon: Linkedin, href: "#", color: "bg-electric-blue" },
    { icon: Twitter, href: "#", color: "bg-cyber-violet" },
    { icon: Github, href: "#", color: "bg-neon-cyan" },
    { icon: Youtube, href: "#", color: "bg-electric-blue" },
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-bold mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Ready to transform your business with cutting-edge AI and cloud solutions? Let's discuss your project.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <GlassCard>
              <h3 className="text-2xl font-bold mb-6 gradient-text">Send us a message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="firstName" className="text-gray-300">First Name *</Label>
                    <Input
                      id="firstName"
                      type="text"
                      placeholder="John"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange("firstName", e.target.value)}
                      className="bg-black bg-opacity-50 border-gray-700 focus:border-electric-blue text-white"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="text-gray-300">Last Name *</Label>
                    <Input
                      id="lastName"
                      type="text"
                      placeholder="Doe"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange("lastName", e.target.value)}
                      className="bg-black bg-opacity-50 border-gray-700 focus:border-electric-blue text-white"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email" className="text-gray-300">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="bg-black bg-opacity-50 border-gray-700 focus:border-electric-blue text-white"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="company" className="text-gray-300">Company</Label>
                  <Input
                    id="company"
                    type="text"
                    placeholder="Your Company"
                    value={formData.company}
                    onChange={(e) => handleInputChange("company", e.target.value)}
                    className="bg-black bg-opacity-50 border-gray-700 focus:border-electric-blue text-white"
                  />
                </div>

                <div>
                  <Label htmlFor="service" className="text-gray-300">Service Interest</Label>
                  <Select onValueChange={(value) => handleInputChange("service", value)}>
                    <SelectTrigger className="bg-black bg-opacity-50 border-gray-700 focus:border-electric-blue text-white">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ai">AI Solutions</SelectItem>
                      <SelectItem value="cloud">Cloud & DevOps</SelectItem>
                      <SelectItem value="saas">SaaS Development</SelectItem>
                      <SelectItem value="ecommerce">E-commerce</SelectItem>
                      <SelectItem value="blockchain">Blockchain</SelectItem>
                      <SelectItem value="marketing">Digital Marketing</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="message" className="text-gray-300">Project Details *</Label>
                  <Textarea
                    id="message"
                    rows={4}
                    placeholder="Tell us about your project requirements..."
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    className="bg-black bg-opacity-50 border-gray-700 focus:border-electric-blue text-white resize-none"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-electric-blue to-cyber-violet hover:from-cyber-violet hover:to-neon-cyan animate-pulse-glow text-lg"
                >
                  Send Message
                  <Send className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </GlassCard>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Office Locations */}
            <GlassCard>
              <h3 className="text-2xl font-bold mb-6 gradient-text">Our Offices</h3>
              <div className="space-y-6">
                {offices.map((office, index) => (
                  <div key={office.city} className="flex items-start space-x-4">
                    <div className={`w-12 h-12 bg-${office.color} rounded-full flex items-center justify-center flex-shrink-0`}>
                      <MapPin className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-2">{office.city}</h4>
                      <p className="text-gray-400 whitespace-pre-line">{office.address}</p>
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>

            {/* Contact Methods */}
            <GlassCard>
              <h3 className="text-2xl font-bold mb-6 gradient-text">Get in Touch</h3>
              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <div key={method.label} className="flex items-center space-x-4">
                    <div className={`w-10 h-10 bg-${method.color} rounded-full flex items-center justify-center`}>
                      <method.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold">{method.label}</div>
                      <div className="text-gray-400">{method.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>

            {/* Social Media */}
            <GlassCard>
              <h3 className="text-2xl font-bold mb-6 gradient-text">Follow Us</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    className={`w-12 h-12 ${social.color} rounded-full flex items-center justify-center`}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <social.icon className="w-6 h-6 text-white" />
                  </motion.a>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
