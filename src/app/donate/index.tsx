"use client";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle,
  DollarSign,
  FileText,
  Headphones,
  Monitor,
  Shield,
  Users,
} from "lucide-react";

export const GetStartedPage = () => {
  const benefits = [
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "High Commission",
      description:
        "Earn competitive commissions on every transaction processed through your terminal.",
      color: "bg-green-500",
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Easy Onboarding",
      description:
        "Simple registration process with minimal documentation requirements.",
      color: "bg-orange-500",
    },
    {
      icon: <Headphones className="w-6 h-6" />,
      title: "Training & Support",
      description:
        "24/7 customer support and comprehensive training to help you succeed.",
      color: "bg-green-500",
    },
    {
      icon: <Monitor className="w-6 h-6" />,
      title: "Modern Equipment",
      description:
        "State-of-the-art POS terminals with the latest technology and features.",
      color: "bg-orange-500",
    },
  ];

  const steps = [
    {
      number: "1",
      title: "Register Online",
      description: "Complete our simple online registration form.",
      icon: <FileText className="w-5 h-5" />,
    },
    {
      number: "2",
      title: "Submit Documents",
      description:
        "Provide the required identification and business documents.",
      icon: <Shield className="w-5 h-5" />,
    },
    {
      number: "3",
      title: "Verification",
      description:
        "Our team will verify your information and approve your application.",
      icon: <CheckCircle className="w-5 h-5" />,
    },
    {
      number: "4",
      title: "Training",
      description:
        "Receive comprehensive training on our systems and processes.",
      icon: <Users className="w-5 h-5" />,
    },
    {
      number: "5",
      title: "Equipment Setup",
      description: "Get your POS terminal and set up your agent account.",
      icon: <Monitor className="w-5 h-5" />,
    },
    {
      number: "6",
      title: "Start Earning",
      description: "Begin processing transactions and earning commissions.",
      icon: <DollarSign className="w-5 h-5" />,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-12 h-0.5 bg-green-500"></div>
              <span className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                Get Started
              </span>
              <div className="w-12 h-0.5 bg-green-500"></div>
            </div>

            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-light leading-tight text-black">
              Become a GlobalPay
              <br />
              <span className="text-green-600 font-normal">Agent Today</span>
            </h1>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Join thousands of successful agents across Nigeria and start
              earning competitive commissions while providing essential
              financial services to your community.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <button className="bg-orange-500 text-white px-10 py-4 hover:bg-orange-600 transition-colors duration-300 font-medium text-lg">
                <div className="flex items-center space-x-2">
                  <span>Start Application</span>
                  <ArrowRight className="w-5 h-5" />
                </div>
              </button>
              <button className="border border-gray-300 text-black px-10 py-4 hover:bg-gray-50 transition-colors duration-300 font-medium text-lg">
                Download Agent Guide
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Become an Agent Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-light text-black mb-4">
              Why Become an{" "}
              <span className="text-green-600 font-normal">Agent?</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover the benefits of partnering with GlobalPay and building a
              successful financial services business.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300 border border-gray-100"
              >
                <div
                  className={`w-14 h-14 ${benefit.color} rounded-lg flex items-center justify-center text-white mb-6`}
                >
                  {benefit.icon}
                </div>

                <h3 className="text-xl font-medium text-black mb-4">
                  {benefit.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Get Started Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-light text-black mb-4">
              How to{" "}
              <span className="text-orange-500 font-normal">Get Started</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Follow these simple steps to become a GlobalPay agent and start
              your journey to financial success.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
              >
                {/* Step Number */}
                <div className="absolute -top-4 left-8">
                  <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-medium text-sm">
                    {step.number}
                  </div>
                </div>

                {/* Content */}
                <div className="pt-4">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600">
                      {step.icon}
                    </div>
                    <h3 className="text-lg font-medium text-black">
                      {step.title}
                    </h3>
                  </div>

                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Connection Line (for larger screens) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gray-200 transform -translate-y-1/2"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-green-50 to-orange-50 rounded-2xl p-12 text-center border border-gray-100"
          >
            <h2 className="text-3xl lg:text-4xl font-light text-black mb-6">
              Ready to Start Your
              <br />
              <span className="text-green-600 font-normal">Agent Journey?</span>
            </h2>

            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Join the GlobalPay agent network today and unlock unlimited
              earning potential while serving your community with essential
              financial services.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-orange-500 text-white px-10 py-4 hover:bg-orange-600 transition-colors duration-300 font-medium text-lg">
                <div className="flex items-center space-x-2">
                  <span>Begin Registration</span>
                  <ArrowRight className="w-5 h-5" />
                </div>
              </button>

              <button className="border border-gray-300 text-black px-10 py-4 hover:bg-white transition-colors duration-300 font-medium text-lg">
                Contact Sales Team
              </button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-2xl font-light text-green-600 mb-2">
                  2-3 Days
                </div>
                <div className="text-sm text-gray-500 uppercase tracking-wider">
                  Average Approval Time
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-light text-orange-500 mb-2">
                  24/7
                </div>
                <div className="text-sm text-gray-500 uppercase tracking-wider">
                  Support Available
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-light text-green-600 mb-2">
                  5,000+
                </div>
                <div className="text-sm text-gray-500 uppercase tracking-wider">
                  Active Agents
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
