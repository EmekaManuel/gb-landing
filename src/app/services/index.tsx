"use client";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle,
  Code,
  CreditCard,
  Mail,
  MessageCircle,
  Minus,
  Monitor,
  Phone,
  Plus,
  Search,
  Store,
  Users,
  Wallet,
} from "lucide-react";
import { useState } from "react";

export const GlobalpayServicesSection = () => {
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
      icon: <Store className="w-6 h-6 text-white" />,
      title: "Merchant Services",
      description:
        "Comprehensive business solutions designed to help merchants grow, manage operations, and optimize customer experiences.",
      features: [
        "Business analytics and insights",
        "Customer relationship management",
        "Loyalty program integration",
        "Multi-location management tools",
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
              Join thousands of businesses that trust globalpay for their
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

export const FAQSection = () => {
  const [openItems, setOpenItems] = useState(new Set());
  const [searchTerm, setSearchTerm] = useState("");

  const faqData = [
    {
      id: 1,
      question: "How do I set up a globalpay merchant account?",
      answer:
        "Setting up a globalpay merchant account is simple. Visit our registration page, fill out the application form, submit the required documentation, and our team will review your application. Once approved, you'll receive your login credentials and can start accepting payments immediately.",
      category: "Getting Started",
    },
    {
      id: 2,
      question: "What documents do I need to complete my registration?",
      answer:
        "To complete your registration, you'll need to provide your business registration documents, valid ID of the business owner or authorized signatory, proof of business address, and bank account details. For specific business types, additional documentation may be required.",
      category: "Registration",
    },
    {
      id: 3,
      question: "When I have an issue, who do I talk to?",
      answer:
        "Our dedicated customer support team is available 24/7 to assist you with any issues. You can reach us via email at support@globalpayng.com, through our WhatsApp business line, or by calling our customer service hotline. We also offer live chat support on our website and mobile app.",
      category: "Support",
    },
    {
      id: 4,
      question: "How do I become a Super Agent?",
      answer:
        "To become a Super Agent, you must first register as a regular agent and maintain excellent performance for at least 3 months. Super Agents must meet minimum transaction volumes, maintain high customer satisfaction ratings, and pass our advanced training program. Contact our agent support team for more details.",
      category: "Agent Banking",
    },
    {
      id: 5,
      question: "How long does it take to be approved?",
      answer:
        "Standard merchant applications are typically processed within 2-3 business days. For more complex businesses or those requiring additional verification, the process may take up to 5 business days. You'll receive updates on your application status via email.",
      category: "Registration",
    },
    {
      id: 6,
      question: "How can I contact the helpdesk?",
      answer:
        "You can contact our helpdesk via email at helpdesk@globalpayng.com, through our WhatsApp business line at +234-913-000-0310, or by calling our customer service hotline at +234-913-000-0320. Our support team is available 24/7 to assist you.",
      category: "Support",
    },
    {
      id: 7,
      question: "How much does it cost to become a globalpay agent?",
      answer:
        "The cost to become a globalpay agent varies based on the package you select. Our basic package starts at ₦50,000, which includes your POS terminal, initial training, and account setup. We also offer premium packages with additional features and benefits. Contact our sales team for current pricing and promotions.",
      category: "Agent Banking",
    },
    {
      id: 8,
      question: "How fast can I get paid?",
      answer:
        "globalpay offers same-day settlements for transactions completed before 3 PM on business days. Transactions after this time or on weekends/holidays are settled on the next business day. Super Agents and premium merchants may qualify for instant settlements. Your settlement timeframe is specified in your merchant agreement.",
      category: "Payments",
    },
    {
      id: 9,
      question: "Do you offer a lease or buy now pay in 3 installments?",
      answer:
        'Yes, we offer flexible payment options for our POS terminals, including leasing and installment payment plans. Our "Buy Now, Pay Later" option allows you to pay in 3 monthly installments with no additional interest. Contact our sales team to discuss the payment option that works best for you.',
      category: "Payments",
    },
    {
      id: 10,
      question: "How fast can I get a globalpay POS device?",
      answer:
        "After your application is approved, POS devices are typically delivered within 2-3 business days in major cities, and 3-5 business days in other locations. Express delivery options are available for an additional fee. You can track your device delivery through our agent portal.",
      category: "Equipment",
    },
  ];

  const toggleItem = (id: unknown) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  const filteredFAQs = faqData.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-12 h-0.5 bg-green-500"></div>
            <span className="text-sm font-medium text-gray-500 uppercase tracking-wider">
              Support Center
            </span>
            <div className="w-12 h-0.5 bg-green-500"></div>
          </div>

          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-light text-black leading-tight mb-4">
            Frequently Asked
            <br />
            <span className="text-green-600 font-normal">Questions</span>
          </h2>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find quick answers to common questions about globalpay services,
            account setup, and getting started with our platform.
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="relative mb-12"
        >
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search frequently asked questions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-white border border-gray-200 rounded-lg focus:border-green-500 focus:outline-none transition-colors duration-300 text-gray-900"
            />
          </div>
        </motion.div>

        {/* FAQ Items */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          {filteredFAQs.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-300"
            >
              <button
                onClick={() => toggleItem(faq.id)}
                className="w-full px-6 py-5 text-left focus:outline-none focus:bg-gray-50 hover:bg-gray-50 transition-colors duration-200"
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="text-lg font-medium text-black pr-4">
                      {faq.question}
                    </h3>
                    <span className="inline-block mt-2 px-3 py-1 bg-green-50 text-green-600 text-xs font-medium rounded-full">
                      {faq.category}
                    </span>
                  </div>
                  <div className="flex-shrink-0">
                    <motion.div
                      animate={{ rotate: openItems.has(faq.id) ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center"
                    >
                      {openItems.has(faq.id) ? (
                        <Minus className="w-4 h-4 text-gray-600" />
                      ) : (
                        <Plus className="w-4 h-4 text-gray-600" />
                      )}
                    </motion.div>
                  </div>
                </div>
              </button>

              <AnimatePresence>
                {openItems.has(faq.id) && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 pt-0">
                      <div className="border-t border-gray-100 pt-4">
                        <p className="text-gray-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        {/* No Results */}
        {filteredFAQs.length === 0 && searchTerm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-black mb-2">
              No results found
            </h3>
            <p className="text-gray-600">
              Try searching with different keywords or browse all questions
              above.
            </p>
          </motion.div>
        )}

        {/* Contact Support CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 bg-white rounded-2xl p-8 border border-gray-100"
        >
          <div className="text-center">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="w-6 h-6 text-orange-500" />
            </div>

            <h3 className="text-xl font-medium text-black mb-3">
              Still Have Questions?
            </h3>

            <p className="text-gray-600 mb-6 max-w-md mx-auto">
              Can&#39;t find what you&#39;re looking for? Our support team is
              here to help you 24/7.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-orange-500 text-white px-6 py-3 hover:bg-orange-600 transition-colors duration-300 font-medium flex items-center justify-center space-x-2">
                <MessageCircle className="w-4 h-4" />
                <span>Start Live Chat</span>
              </button>

              <div className="flex gap-2">
                <a
                  href="tel:+2349130000310"
                  className="border border-gray-300 text-black px-4 py-3 hover:bg-gray-50 transition-colors duration-300 font-medium flex items-center space-x-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Us</span>
                </a>

                <a
                  href="mailto:helpdesk@globalpayng.com"
                  className="border border-gray-300 text-black px-4 py-3 hover:bg-gray-50 transition-colors duration-300 font-medium flex items-center space-x-2"
                >
                  <Mail className="w-4 h-4" />
                  <span>Email</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
