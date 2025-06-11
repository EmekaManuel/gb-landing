"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  CreditCard,
  Smartphone,
  Users,
  Monitor,
  Code,
  Wallet,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

export const GlobalPayServicesSection = () => {
  const [selectedService, setSelectedService] = useState<number | null>(null);

  const services = [
    {
      icon: <CreditCard className="w-6 h-6 text-white" />,
      title: "Payment Processing",
      description:
        "Secure, fast, and reliable payment processing solutions for businesses of all sizes across Nigeria and Africa.",
      features: [
        "Real-time transaction processing",
        "Multi-currency support",
        "Advanced fraud protection",
        "99.9% uptime guarantee",
      ],
      bgColor: "bg-green-500",
    },
    {
      icon: <Smartphone className="w-6 h-6 text-white" />,
      title: "Mobile Banking",
      description:
        "Complete mobile banking solutions that bring financial services directly to your customers' fingertips.",
      features: [
        "User-friendly mobile apps",
        "Instant money transfers",
        "Bill payment services",
        "Account management tools",
      ],
      bgColor: "bg-orange-500",
    },
    {
      icon: <Users className="w-6 h-6 text-white" />,
      title: "Agent Banking",
      description:
        "Expand your reach through our extensive agent network, bringing banking services to underserved communities.",
      features: [
        "Nationwide agent network",
        "Real-time transaction support",
        "Comprehensive training programs",
        "24/7 technical support",
      ],
      bgColor: "bg-green-500",
    },
    {
      icon: <Monitor className="w-6 h-6 text-white" />,
      title: "POS Terminals",
      description:
        "Modern point-of-sale solutions that enable seamless in-person and remote payment acceptance.",
      features: [
        "Contactless payment support",
        "Real-time reporting",
        "Inventory management",
        "Multi-payment method acceptance",
      ],
      bgColor: "bg-orange-500",
    },
    {
      icon: <Code className="w-6 h-6 text-white" />,
      title: "API Integration",
      description:
        "Powerful APIs that enable seamless integration of payment services into your existing business systems.",
      features: [
        "RESTful API architecture",
        "Comprehensive documentation",
        "Developer-friendly SDKs",
        "Sandbox testing environment",
      ],
      bgColor: "bg-green-500",
    },
    {
      icon: <Wallet className="w-6 h-6 text-white" />,
      title: "Virtual Cards",
      description:
        "Secure virtual payment cards for online transactions, expense management, and digital commerce solutions.",
      features: [
        "Instant card generation",
        "Spending controls and limits",
        "Real-time transaction monitoring",
        "Integration with expense platforms",
      ],
      bgColor: "bg-orange-500",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-12 h-0.5 bg-green-500"></div>
              <span className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                Our Services
              </span>
              <div className="w-12 h-0.5 bg-green-500"></div>
            </div>

            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-light text-black leading-tight max-w-4xl mx-auto">
              Comprehensive Financial Solutions
              <span className="block text-green-600 font-normal">
                for Modern Businesses
              </span>
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Empowering businesses across Africa with innovative fintech
              solutions that drive financial inclusion, enhance customer
              experiences, and accelerate digital transformation.
            </p>
          </motion.div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white rounded-lg p-8 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer border border-gray-100 hover:border-gray-200"
              onClick={() =>
                setSelectedService(selectedService === index ? null : index)
              }
            >
              {/* Service Icon */}
              <div
                className={`w-14 h-14 ${service.bgColor} rounded-lg flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300`}
              >
                {service.icon}
              </div>

              {/* Service Content */}
              <div className="space-y-4">
                <h3 className="text-xl font-medium text-black group-hover:text-green-600 transition-colors">
                  {service.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>

                {/* Features List - Expandable */}
                <motion.div
                  initial={false}
                  animate={{
                    height: selectedService === index ? "auto" : 0,
                    opacity: selectedService === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="pt-4 border-t border-gray-100 space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-start space-x-2"
                      >
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Learn More Button */}
                <div className="flex items-center text-green-600 font-medium text-sm group-hover:text-green-700 transition-colors pt-2">
                  <span>
                    {selectedService === index ? "Show Less" : "Learn More"}
                  </span>
                  <ArrowRight
                    className={`w-4 h-4 ml-2 transition-transform duration-300 ${
                      selectedService === index
                        ? "rotate-90"
                        : "group-hover:translate-x-1"
                    }`}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center bg-white rounded-2xl p-12 border border-gray-100"
        >
          <div className="max-w-3xl mx-auto space-y-8">
            <h3 className="text-2xl lg:text-3xl font-light text-black">
              Ready to Transform Your
              <span className="block text-orange-500 font-normal">
                Financial Operations?
              </span>
            </h3>

            <p className="text-lg text-gray-600 leading-relaxed">
              Join thousands of businesses that trust GlobalPay for their
              financial technology needs. Get started today and experience the
              future of digital payments.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="bg-orange-500 text-white px-8 py-3 hover:bg-orange-600 transition-all duration-300 font-medium"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center space-x-2">
                  <span>Get Started Today</span>
                  <ArrowRight className="w-5 h-5" />
                </div>
              </motion.button>

              <motion.button
                className="border border-gray-300 text-black px-8 py-3 hover:bg-gray-50 transition-all duration-300 font-medium"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Schedule a Demo
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 pt-12 border-t border-gray-200"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-light text-orange-500">200+</div>
              <div className="text-sm text-gray-500 uppercase tracking-wider">
                Active Locations
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-light text-green-500">₦2B+</div>
              <div className="text-sm text-gray-500 uppercase tracking-wider">
                Processed Monthly
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-light text-orange-500">99.9%</div>
              <div className="text-sm text-gray-500 uppercase tracking-wider">
                Uptime Guarantee
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
