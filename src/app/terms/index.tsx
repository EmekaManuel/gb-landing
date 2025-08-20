"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FileText,
  Shield,
  Users,
  CreditCard,
  AlertTriangle,
  CheckCircle,
} from "lucide-react";

export const TermsOfServiceSection = () => {
  const termsFeatures = [
    {
      icon: <FileText className="w-6 h-6 text-green-600" />,
      title: "Clear Terms",
      description:
        "Transparent and easy-to-understand terms that protect both you and our platform.",
    },
    {
      icon: <Shield className="w-6 h-6 text-green-600" />,
      title: "Secure Services",
      description:
        "We maintain the highest security standards to protect your transactions and data.",
    },
    {
      icon: <Users className="w-6 h-6 text-green-600" />,
      title: "User Protection",
      description:
        "Comprehensive protection measures to ensure safe and reliable financial services.",
    },
    {
      icon: <CreditCard className="w-6 h-6 text-green-600" />,
      title: "Payment Security",
      description:
        "Advanced encryption and fraud protection for all payment transactions.",
    },
    {
      icon: <AlertTriangle className="w-6 h-6 text-green-600" />,
      title: "Dispute Resolution",
      description:
        "Fair and transparent process for resolving any disputes or issues.",
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-600" />,
      title: "Compliance",
      description:
        "Full compliance with Nigerian financial regulations and international standards.",
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
              Legal & Terms
            </span>
            <div className="w-12 h-0.5 bg-green-500"></div>
          </div>

          <h1 className="text-3xl lg:text-4xl xl:text-5xl font-light text-black leading-tight mb-6">
            Terms of Service
          </h1>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            These terms govern your use of globalpay services. Please read them
            carefully before using our platform.
          </p>
        </motion.div>

        {/* Terms Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {termsFeatures.map((feature, index) => (
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

        {/* Terms of Service Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          {/* Acceptance of Terms */}
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
            <h2 className="text-2xl font-medium text-black mb-6">
              1. Acceptance of Terms
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>
                By accessing and using globalpay services, you accept and agree
                to be bound by the terms and provision of this agreement. If you
                do not agree to abide by the above, please do not use this
                service.
              </p>
              <p>
                These terms apply to all users of the service, including without
                limitation users who are browsers, vendors, customers,
                merchants, and/or contributors of content.
              </p>
            </div>
          </div>

          {/* Description of Service */}
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
            <h2 className="text-2xl font-medium text-black mb-6">
              2. Description of Service
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>
                globalpay provides financial technology services including but
                not limited to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Payment processing and transaction services</li>
                <li>Merchant services and POS terminal solutions</li>
                <li>Agent banking and financial inclusion services</li>
                <li>Digital wallet and virtual card services</li>
                <li>API integration and developer tools</li>
                <li>Financial advisory and support services</li>
              </ul>
            </div>
          </div>

          {/* User Accounts */}
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
            <h2 className="text-2xl font-medium text-black mb-6">
              3. User Accounts and Registration
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>
                To access certain features of our service, you must register for
                an account. You agree to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  Provide accurate, current, and complete information during
                  registration
                </li>
                <li>Maintain and promptly update your account information</li>
                <li>Maintain the security of your password and account</li>
                <li>
                  Accept responsibility for all activities under your account
                </li>
                <li>
                  Notify us immediately of any unauthorized use of your account
                </li>
                <li>
                  Ensure you are at least 18 years old to use our services
                </li>
              </ul>
            </div>
          </div>

          {/* Acceptable Use */}
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
            <h2 className="text-2xl font-medium text-black mb-6">
              4. Acceptable Use Policy
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>You agree not to use our services to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Violate any applicable laws or regulations</li>
                <li>Engage in fraudulent, deceptive, or illegal activities</li>
                <li>Infringe on the rights of others</li>
                <li>Transmit harmful, offensive, or inappropriate content</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Interfere with the proper functioning of our services</li>
                <li>
                  Use our services for money laundering or terrorist financing
                </li>
              </ul>
            </div>
          </div>

          {/* Fees and Payments */}
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
            <h2 className="text-2xl font-medium text-black mb-6">
              5. Fees and Payment Terms
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>Our fee structure is transparent and clearly communicated:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  Transaction fees are clearly displayed before processing
                </li>
                <li>Monthly subscription fees apply to certain services</li>
                <li>Setup and equipment fees may apply for POS terminals</li>
                <li>All fees are charged in Nigerian Naira (₦)</li>
                <li>Fees are non-refundable unless otherwise stated</li>
                <li>We reserve the right to modify fees with 30 days notice</li>
              </ul>
            </div>
          </div>

          {/* Privacy and Data */}
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
            <h2 className="text-2xl font-medium text-black mb-6">
              6. Privacy and Data Protection
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Your privacy is important to us. Our data practices are governed
                by our Privacy Policy, which is incorporated into these terms by
                reference. By using our services, you consent to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Collection and processing of your personal information</li>
                <li>Use of your data to provide and improve our services</li>
                <li>
                  Sharing of data with regulatory authorities when required
                </li>
                <li>Storage of your data in secure, encrypted systems</li>
                <li>
                  Processing of your data in accordance with Nigerian data
                  protection laws
                </li>
              </ul>
            </div>
          </div>

          {/* Intellectual Property */}
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
            <h2 className="text-2xl font-medium text-black mb-6">
              7. Intellectual Property Rights
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>
                All content, features, and functionality of our services are
                owned by globalpay and are protected by:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  Copyright, trademark, and other intellectual property laws
                </li>
                <li>
                  You may not copy, modify, or distribute our content without
                  permission
                </li>
                <li>
                  Our trademarks and service marks remain our exclusive property
                </li>
                <li>
                  You retain ownership of content you submit to our platform
                </li>
                <li>
                  You grant us a license to use your content to provide our
                  services
                </li>
              </ul>
            </div>
          </div>

          {/* Limitation of Liability */}
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
            <h2 className="text-2xl font-medium text-black mb-6">
              8. Limitation of Liability
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>
                To the maximum extent permitted by law, globalpay shall not be
                liable for:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Indirect, incidental, special, or consequential damages</li>
                <li>Loss of profits, revenue, or business opportunities</li>
                <li>Data loss or corruption</li>
                <li>Service interruptions or technical issues</li>
                <li>Third-party actions or content</li>
                <li>Damages exceeding the amount paid for our services</li>
              </ul>
            </div>
          </div>

          {/* Termination */}
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
            <h2 className="text-2xl font-medium text-black mb-6">
              9. Termination
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>Either party may terminate this agreement:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  You may close your account at any time through our platform
                </li>
                <li>
                  We may terminate your account for violation of these terms
                </li>
                <li>We may terminate services with 30 days written notice</li>
                <li>Upon termination, your access to services will cease</li>
                <li>Outstanding fees must be paid before account closure</li>
                <li>
                  Certain provisions survive termination of this agreement
                </li>
              </ul>
            </div>
          </div>

          {/* Governing Law */}
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
            <h2 className="text-2xl font-medium text-black mb-6">
              10. Governing Law and Dispute Resolution
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>
                These terms are governed by the laws of Nigeria. Any disputes
                shall be resolved through:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Good faith negotiations between the parties</li>
                <li>Mediation if negotiations fail</li>
                <li>Arbitration in Lagos, Nigeria if mediation fails</li>
                <li>Court proceedings only as a last resort</li>
                <li>Nigerian courts shall have exclusive jurisdiction</li>
              </ul>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
            <h2 className="text-2xl font-medium text-black mb-6">
              Contact Information
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>
                If you have any questions about these Terms of Service, please
                contact us:
              </p>
              <div className="space-y-2">
                <p>
                  <strong>Email:</strong> legal@globalpayng.com
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
