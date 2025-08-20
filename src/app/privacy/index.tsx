"use client";

import React from "react";
import { motion } from "framer-motion";
import { Shield, Lock, Eye, FileText, Users, Database } from "lucide-react";

export const PrivacyPolicySection = () => {
  const privacyFeatures = [
    {
      icon: <Shield className="w-6 h-6 text-green-600" />,
      title: "Data Protection",
      description:
        "We implement industry-standard security measures to protect your personal and financial information.",
    },
    {
      icon: <Lock className="w-6 h-6 text-green-600" />,
      title: "Secure Transactions",
      description:
        "All transactions are encrypted using SSL technology to ensure your data remains secure.",
    },
    {
      icon: <Eye className="w-6 h-6 text-green-600" />,
      title: "Transparency",
      description:
        "We are transparent about how we collect, use, and protect your information.",
    },
    {
      icon: <FileText className="w-6 h-6 text-green-600" />,
      title: "Your Rights",
      description:
        "You have the right to access, modify, or delete your personal information at any time.",
    },
    {
      icon: <Users className="w-6 h-6 text-green-600" />,
      title: "No Third-Party Sharing",
      description:
        "We do not sell, trade, or share your personal information with third parties without your consent.",
    },
    {
      icon: <Database className="w-6 h-6 text-green-600" />,
      title: "Data Retention",
      description:
        "We retain your information only for as long as necessary to provide our services.",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-12 h-0.5 bg-green-500"></div>
            <span className="text-sm font-medium text-gray-500 uppercase tracking-wider">
              Privacy & Security
            </span>
            <div className="w-12 h-0.5 bg-green-500"></div>
          </div>

          <h1 className="text-3xl lg:text-4xl xl:text-5xl font-light text-black leading-tight mb-6">
            Privacy Policy
          </h1>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Your privacy is important to us. This policy explains how we
            collect, use, and protect your information.
          </p>
        </motion.div>

        {/* Privacy Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {privacyFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300 border border-gray-100"
            >
              <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-medium text-black mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Privacy Policy Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          {/* Information We Collect */}
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
            <h2 className="text-2xl font-medium text-black mb-6">
              Information We Collect
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>
                We collect information you provide directly to us, such as when
                you create an account, make a transaction, or contact our
                support team. This may include:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  Personal identification information (name, email address,
                  phone number)
                </li>
                <li>
                  Financial information (bank account details, transaction
                  history)
                </li>
                <li>
                  Business information (company name, registration details)
                </li>
                <li>
                  Device and usage information (IP address, browser type,
                  operating system)
                </li>
                <li>
                  Location information (when you use location-based services)
                </li>
              </ul>
            </div>
          </div>

          {/* How We Use Your Information */}
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
            <h2 className="text-2xl font-medium text-black mb-6">
              How We Use Your Information
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>
                We use the information we collect to provide, maintain, and
                improve our services:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Process transactions and provide payment services</li>
                <li>Verify your identity and prevent fraud</li>
                <li>Provide customer support and respond to inquiries</li>
                <li>Send important updates about our services</li>
                <li>Improve our products and develop new features</li>
                <li>Comply with legal and regulatory requirements</li>
              </ul>
            </div>
          </div>

          {/* Information Sharing */}
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
            <h2 className="text-2xl font-medium text-black mb-6">
              Information Sharing and Disclosure
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>
                We do not sell, trade, or rent your personal information to
                third parties. We may share your information only in the
                following circumstances:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>With your explicit consent</li>
                <li>To comply with legal obligations or court orders</li>
                <li>To protect our rights, property, or safety</li>
                <li>
                  With service providers who assist in our operations (under
                  strict confidentiality agreements)
                </li>
                <li>In connection with a business transfer or merger</li>
              </ul>
            </div>
          </div>

          {/* Data Security */}
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
            <h2 className="text-2xl font-medium text-black mb-6">
              Data Security
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>
                We implement appropriate technical and organizational security
                measures to protect your personal information:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Encryption of data in transit and at rest</li>
                <li>Regular security assessments and updates</li>
                <li>Access controls and authentication measures</li>
                <li>Employee training on data protection</li>
                <li>Incident response procedures</li>
              </ul>
            </div>
          </div>

          {/* Your Rights */}
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
            <h2 className="text-2xl font-medium text-black mb-6">
              Your Rights and Choices
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>
                You have certain rights regarding your personal information:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Access:</strong> Request a copy of your personal
                  information
                </li>
                <li>
                  <strong>Correction:</strong> Update or correct inaccurate
                  information
                </li>
                <li>
                  <strong>Deletion:</strong> Request deletion of your personal
                  information
                </li>
                <li>
                  <strong>Portability:</strong> Receive your data in a portable
                  format
                </li>
                <li>
                  <strong>Objection:</strong> Object to certain processing
                  activities
                </li>
                <li>
                  <strong>Withdrawal:</strong> Withdraw consent where applicable
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
            <h2 className="text-2xl font-medium text-black mb-6">Contact Us</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                If you have any questions about this Privacy Policy or our data
                practices, please contact us:
              </p>
              <div className="space-y-2">
                <p>
                  <strong>Email:</strong> privacy@globalpayng.com
                </p>
                <p>
                  <strong>Phone:</strong> +234 913 000 0310
                </p>
                <p>
                  <strong>Address:</strong> 5A Sogunle Street, Ikeja, Lagos
                  State, Nigeria
                </p>
              </div>
            </div>
          </div>

          {/* Last Updated */}
          <div className="text-center text-gray-500 text-sm">
            <p>Last updated: January 2025</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
