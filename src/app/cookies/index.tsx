"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Cookie,
  Shield,
  Settings,
  Eye,
  Database,
  CheckCircle,
} from "lucide-react";

export const CookiePolicySection = () => {
  const cookieFeatures = [
    {
      icon: <Cookie className="w-6 h-6 text-green-600" />,
      title: "Essential Cookies",
      description:
        "Necessary cookies that enable basic website functionality and security features.",
    },
    {
      icon: <Shield className="w-6 h-6 text-green-600" />,
      title: "Security Cookies",
      description:
        "Cookies that help protect your account and prevent fraudulent activities.",
    },
    {
      icon: <Settings className="w-6 h-6 text-green-600" />,
      title: "Preference Cookies",
      description:
        "Cookies that remember your settings and preferences for a better experience.",
    },
    {
      icon: <Eye className="w-6 h-6 text-green-600" />,
      title: "Analytics Cookies",
      description:
        "Cookies that help us understand how visitors use our website to improve services.",
    },
    {
      icon: <Database className="w-6 h-6 text-green-600" />,
      title: "Performance Cookies",
      description:
        "Cookies that help optimize website performance and loading speeds.",
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-600" />,
      title: "Your Control",
      description:
        "You have full control over which cookies you accept and can manage them anytime.",
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
              Cookie Policy
            </span>
            <div className="w-12 h-0.5 bg-green-500"></div>
          </div>

          <h1 className="text-3xl lg:text-4xl xl:text-5xl font-light text-black leading-tight mb-6">
            Cookie Policy
          </h1>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Learn how we use cookies to enhance your experience and improve our
            services.
          </p>
        </motion.div>

        {/* Cookie Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {cookieFeatures.map((feature, index) => (
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

        {/* Cookie Policy Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          {/* What Are Cookies */}
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
            <h2 className="text-2xl font-medium text-black mb-6">
              What Are Cookies?
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Cookies are small text files that are stored on your device when
                you visit our website. They help us provide you with a better
                experience by:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Remembering your preferences and settings</li>
                <li>Analyzing how you use our website</li>
                <li>Providing personalized content and features</li>
                <li>Ensuring security and preventing fraud</li>
                <li>Improving website performance and functionality</li>
              </ul>
            </div>
          </div>

          {/* Types of Cookies We Use */}
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
            <h2 className="text-2xl font-medium text-black mb-6">
              Types of Cookies We Use
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-black mb-3">
                  Essential Cookies
                </h3>
                <p className="text-gray-600 mb-2">
                  These cookies are necessary for the website to function
                  properly. They enable basic functions like:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4 text-gray-600">
                  <li>User authentication and login sessions</li>
                  <li>Security features and fraud prevention</li>
                  <li>Basic website functionality</li>
                  <li>Remembering your cookie preferences</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-medium text-black mb-3">
                  Analytics Cookies
                </h3>
                <p className="text-gray-600 mb-2">
                  These cookies help us understand how visitors interact with
                  our website by:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4 text-gray-600">
                  <li>Collecting information about which pages you visit</li>
                  <li>Understanding how you navigate through our site</li>
                  <li>Identifying which features are most popular</li>
                  <li>Helping us improve our website and services</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-medium text-black mb-3">
                  Preference Cookies
                </h3>
                <p className="text-gray-600 mb-2">
                  These cookies remember your choices and preferences to provide
                  a personalized experience:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4 text-gray-600">
                  <li>Language and regional preferences</li>
                  <li>Theme and display settings</li>
                  <li>Notification preferences</li>
                  <li>Customized content and recommendations</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-medium text-black mb-3">
                  Performance Cookies
                </h3>
                <p className="text-gray-600 mb-2">
                  These cookies help us optimize website performance and user
                  experience:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4 text-gray-600">
                  <li>Monitoring page load times</li>
                  <li>Identifying and fixing technical issues</li>
                  <li>Optimizing content delivery</li>
                  <li>Improving overall website speed</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Third-Party Cookies */}
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
            <h2 className="text-2xl font-medium text-black mb-6">
              Third-Party Cookies
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>
                We may use third-party services that place cookies on your
                device. These services help us:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Google Analytics:</strong> Analyze website traffic and
                  user behavior
                </li>
                <li>
                  <strong>Payment Processors:</strong> Process secure
                  transactions
                </li>
                <li>
                  <strong>Security Services:</strong> Protect against fraud and
                  security threats
                </li>
                <li>
                  <strong>Customer Support:</strong> Provide live chat and
                  support services
                </li>
                <li>
                  <strong>Social Media:</strong> Enable social media integration
                  and sharing
                </li>
              </ul>
              <p className="mt-4">
                These third-party services have their own privacy policies and
                cookie practices. We recommend reviewing their policies for more
                information.
              </p>
            </div>
          </div>

          {/* Managing Cookies */}
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
            <h2 className="text-2xl font-medium text-black mb-6">
              Managing Your Cookie Preferences
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>
                You have control over which cookies you accept. Here&apos;s how
                you can manage them:
              </p>

              <div>
                <h3 className="text-lg font-medium text-black mb-3">
                  Browser Settings
                </h3>
                <p className="mb-2">
                  You can control cookies through your browser settings:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>
                    <strong>Chrome:</strong> Settings → Privacy and security →
                    Cookies and other site data
                  </li>
                  <li>
                    <strong>Firefox:</strong> Options → Privacy & Security →
                    Cookies and Site Data
                  </li>
                  <li>
                    <strong>Safari:</strong> Preferences → Privacy → Manage
                    Website Data
                  </li>
                  <li>
                    <strong>Edge:</strong> Settings → Cookies and site
                    permissions → Cookies and site data
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-medium text-black mb-3">
                  Cookie Consent
                </h3>
                <p>
                  When you first visit our website, you&apos;ll see a cookie
                  consent banner that allows you to:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Accept all cookies</li>
                  <li>Reject non-essential cookies</li>
                  <li>Customize your cookie preferences</li>
                  <li>Learn more about our cookie policy</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-medium text-black mb-3">
                  Cookie Preferences Center
                </h3>
                <p>
                  You can change your cookie preferences at any time through our
                  Cookie Preferences Center, accessible from the footer of our
                  website.
                </p>
              </div>
            </div>
          </div>

          {/* Impact of Disabling Cookies */}
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
            <h2 className="text-2xl font-medium text-black mb-6">
              Impact of Disabling Cookies
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>
                While you can disable cookies, please note that this may affect
                your experience:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Some website features may not work properly</li>
                <li>You may need to re-enter information repeatedly</li>
                <li>
                  Personalized content and recommendations may not be available
                </li>
                <li>Security features may be limited</li>
                <li>Website performance may be affected</li>
              </ul>
              <p className="mt-4">
                Essential cookies cannot be disabled as they are necessary for
                basic website functionality.
              </p>
            </div>
          </div>

          {/* Updates to Cookie Policy */}
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
            <h2 className="text-2xl font-medium text-black mb-6">
              Updates to This Cookie Policy
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>
                We may update this Cookie Policy from time to time to reflect
                changes in our practices or for other operational, legal, or
                regulatory reasons. When we make changes, we will:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  Update the &quot;Last Updated&quot; date at the bottom of this
                  policy
                </li>
                <li>
                  Notify you through our website or email if significant changes
                  are made
                </li>
                <li>
                  Provide you with an opportunity to review and accept the
                  updated policy
                </li>
                <li>Maintain transparency about how we use cookies</li>
              </ul>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
            <h2 className="text-2xl font-medium text-black mb-6">Contact Us</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                If you have any questions about our use of cookies or this
                Cookie Policy, please contact us:
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
