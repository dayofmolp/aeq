import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { ChevronUp, ShoppingBag, Globe, Laptop, Zap, Code, Users, Phone, Mail, MapPin, Clock, Menu, X } from 'lucide-react';

const projectData = [
  { month: "Jan", completedProjects: 12 },
  { month: "Feb", completedProjects: 15 },
  { month: "Mar", completedProjects: 18 },
  { month: "Apr", completedProjects: 22 },
  { month: "May", completedProjects: 25 },
  { month: "Jun", completedProjects: 30 },
];

const solutionCards = [
  {
    icon: ShoppingBag,
    title: "E-commerce Solutions",
    description: "Build and scale your online store",
    items: ["Custom E-commerce Platforms", "Payment Integration", "Inventory Management"]
  },
  {
    icon: Globe,
    title: "Web Development",
    description: "Professional websites that drive growth",
    items: ["Responsive Design", "CMS Development", "SEO Optimization"]
  },
  {
    icon: Laptop,
    title: "Digital Services",
    description: "Comprehensive online solutions",
    items: ["Digital Marketing", "Cloud Solutions", "API Integration"]
  },
];

const App = () => {
  const [activeTab, setActiveTab] = useState("solutions");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-slate-900/95 shadow-lg" : "bg-transparent"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold">Paral</span>
              <span className="text-blue-400 ml-1">CT</span>
            </div>
            <div className="hidden md:flex space-x-8">
              {["solutions", "portfolio", "contact"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`transition-colors duration-200 ${activeTab === tab ? "text-blue-400" : "text-gray-300 hover:text-white"}`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-300 hover:text-white">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden bg-slate-900/95">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {["solutions", "portfolio", "contact"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => {
                    setActiveTab(tab);
                    setIsMenuOpen(false);
                  }}
                  className="block w-full text-left px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 rounded-md"
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main sections go here (Solutions, Portfolio, Contact) */}
      <section className="pt-32 pb-20 px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
          Your Digital Success Partner
        </h1>
        <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
          Transforming Cape Town businesses with cutting-edge web development, e-commerce solutions, and digital services.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
          Start Your Project
        </button>
      </section>

      {/* Solution Cards */}
      <section className="py-20 px-4" id="solutions">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutionCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <div key={index} className="bg-gray-800/50 p-6 rounded-lg shadow-lg">
                <Icon className="h-8 w-8 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold">{card.title}</h3>
                <p className="text-gray-400 mb-4">{card.description}</p>
                <ul className="space-y-2 text-gray-300">
                  {card.items.map((item, i) => (
                    <li key={i} className="flex items-center">
                      <ChevronUp className="h-4 w-4 text-emerald-400 mr-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 px-4 bg-gray-800/30" id="portfolio">
        <h2 className="text-3xl font-bold mb-12 text-center">Our Growing Impact</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Placeholder for Project Delivery Success */}
          <div className="bg-gray-800/50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Project Delivery Success</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={projectData}>
                  <XAxis dataKey="month" stroke="#9CA3AF" />
                  <YAxis stroke="#9CA3AF" />
                  <Tooltip />
                  <Line type="monotone" dataKey="completedProjects" stroke="#60A5FA" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Placeholder for Why Choose Us */}
          <div className="bg-gray-800/50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Why Choose Us</h3>
            {/* More content */}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 px-4" id="contact">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">Contact Our Cape Town Office</h2>
            <p className="text-gray-300 mb-8">Ready to transform your online presence? Get in touch for a free consultation.</p>
            {/* Contact Info */}
          </div>
          <form className="space-y-6">
            {/* Form Fields */}
          </form>
        </div>
      </section>
    </div>
  );
};

export default App;
