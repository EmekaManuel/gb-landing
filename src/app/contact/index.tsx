"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Facebook,
  Linkedin,
  Mail,
  Phone,
  Clock,
  Instagram,
  MapPin,
  CheckCircle,
  Send,
  Twitter,
} from "lucide-react";
import { useState } from "react";

import { motion } from "framer-motion";

export const ContactSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-center space-x-3">
              <div className="w-12 h-0.5 bg-green-500"></div>
              <span className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                Get In Touch
              </span>
            </div>

            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-light text-black leading-tight">
              Let&#39;s Discuss Your
              <br />
              <span className="text-green-600 font-normal">
                Financial Solutions
              </span>
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed">
              Our dedicated team is ready to help you discover how globalpay can
              transform your financial operations and drive business growth.
            </p>

            {/* Quick Contact CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-orange-500 text-white px-8 py-3 hover:bg-orange-600 transition-colors duration-300 font-medium">
                Schedule a Demo
              </button>
              <button className="border border-gray-300 text-black px-8 py-3 hover:bg-gray-50 transition-colors duration-300 font-medium">
                Download Brochure
              </button>
            </div>
          </motion.div>

          {/* Right Content - Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
          >
            <h2 className="text-xl font-medium text-black mb-8">
              Contact Information
            </h2>

            <div className="space-y-8">
              {/* Address */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h3 className="font-medium text-black mb-2">Head Office</h3>
                  <p className="text-gray-600 leading-relaxed">
                    5A Sogunle Street, Ikeja,
                    <br />
                    Lagos State, Nigeria
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center">
                  <Phone className="w-5 h-5 text-orange-500" />
                </div>
                <div>
                  <h3 className="font-medium text-black mb-2">Phone Support</h3>
                  <div className="space-y-1">
                    <a
                      href="tel:+2349130000310"
                      className="block text-gray-600 hover:text-green-600 transition-colors"
                    >
                      +234 913 000 0310
                    </a>
                    <a
                      href="tel:+2349130000320"
                      className="block text-gray-600 hover:text-green-600 transition-colors"
                    >
                      +234 913 000 0320
                    </a>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h3 className="font-medium text-black mb-2">Email Support</h3>
                  <a
                    href="mailto:helpdesk@globalpayng.com"
                    className="text-gray-600 hover:text-green-600 transition-colors"
                  >
                    helpdesk@globalpayng.com
                  </a>
                </div>
              </div>

              {/* Business Hours */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center">
                  <Clock className="w-5 h-5 text-orange-500" />
                </div>
                <div>
                  <h3 className="font-medium text-black mb-2">
                    Business Hours
                  </h3>
                  <div className="space-y-1 text-gray-600 text-sm">
                    <p>
                      <span className="font-medium">Mon - Fri:</span> 8:00 AM -
                      6:00 PM
                    </p>
                    <p>
                      <span className="font-medium">Saturday:</span> 9:00 AM -
                      3:00 PM
                    </p>
                    <p>
                      <span className="font-medium">Sunday:</span> Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-8 pt-8 border-t border-gray-100">
              <h3 className="font-medium text-black mb-4">Follow Us</h3>
              <div className="flex space-x-3">
                {[
                  { icon: <Facebook className="w-4 h-4" />, href: "#" },
                  { icon: <Linkedin className="w-4 h-4" />, href: "#" },
                  { icon: <Twitter className="w-4 h-4" />, href: "#" },
                  { icon: <Instagram className="w-4 h-4" />, href: "#" },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-green-500 hover:text-white transition-colors duration-300"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    company: "",
    subject: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    // Handle form submission logic here
  };

  if (isSubmitted) {
    return (
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-green-50 rounded-2xl p-12 border border-green-100"
          >
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl font-medium text-black mb-4">
              Message Sent Successfully!
            </h2>
            <p className="text-gray-600 mb-8">
              Thank you for contacting globalpay. Our team will review your
              message and respond within 24 hours.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="bg-green-500 text-white px-8 py-3 hover:bg-green-600 transition-colors duration-300 font-medium"
            >
              Send Another Message
            </button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl lg:text-4xl font-light text-black mb-4">
            Send Us a{" "}
            <span className="text-green-600 font-normal">Message</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions about our services? Ready to get started? Fill out
            the form below and we&#39;ll get back to you promptly.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-gray-50 rounded-2xl p-8 lg:p-12"
        >
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Name and Email Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-sm font-medium text-gray-700 mb-3"
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="Enter your full name"
                  required
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:border-green-500 focus:outline-none transition-colors duration-300 text-gray-900"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-3"
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                  required
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:border-green-500 focus:outline-none transition-colors duration-300 text-gray-900"
                />
              </div>
            </div>

            {/* Phone and Company Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="phoneNumber"
                  className="block text-sm font-medium text-gray-700 mb-3"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  placeholder="Enter your phone number"
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:border-green-500 focus:outline-none transition-colors duration-300 text-gray-900"
                />
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-medium text-gray-700 mb-3"
                >
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  placeholder="Enter your company name"
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:border-green-500 focus:outline-none transition-colors duration-300 text-gray-900"
                />
              </div>
            </div>

            {/* Subject */}
            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-700 mb-3"
              >
                Subject *
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                placeholder="What can we help you with?"
                required
                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:border-green-500 focus:outline-none transition-colors duration-300 text-gray-900"
              />
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-3"
              >
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Tell us more about your requirements..."
                required
                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:border-green-500 focus:outline-none transition-colors duration-300 text-gray-900 resize-vertical"
              />
            </div>

            {/* Submit Button */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                type="submit"
                className="bg-orange-500 text-white px-12 py-3 hover:bg-orange-600 transition-colors duration-300 font-medium flex items-center justify-center space-x-2"
              >
                <Send className="w-4 h-4" />
                <span>Send Message</span>
              </button>
            </div>
          </form>

          {/* Quick Contact Footer */}
          <div className="mt-12 pt-8 border-t border-gray-200 text-center">
            <p className="text-gray-600 mb-4">Prefer to contact us directly?</p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-sm">
              <a
                href="mailto:helpdesk@globalpayng.com"
                className="text-green-600 hover:text-green-700 transition-colors font-medium"
              >
                helpdesk@globalpayng.com
              </a>
              <div className="flex gap-3">
                <a
                  href="tel:+2349130000310"
                  className="text-green-600 hover:text-green-700 transition-colors font-medium"
                >
                  +234 913 000 0310
                </a>
                <span className="text-gray-400">•</span>
                <a
                  href="tel:+2349130000320"
                  className="text-green-600 hover:text-green-700 transition-colors font-medium"
                >
                  +234 913 000 0320
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
