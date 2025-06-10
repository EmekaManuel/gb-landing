"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */
import { Facebook, Linkedin, Mail, Phone } from "lucide-react";
import { useState } from "react";

import { Clock, Instagram, MapPin, Twitter } from "lucide-react";

export const ContactSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Section Label */}
            <div className="flex items-center space-x-3">
              <div className="w-12 h-0.5 bg-green-500"></div>
              <span className="text-sm font-medium text-gray-600 uppercase tracking-wider">
                Contact Us
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight">
              Have questions or need assistance?
            </h1>

            {/* Description */}
            <p className="text-lg text-gray-600 leading-relaxed">
              Our team is here to help you with all your financial service
              needs. Reach out to us and experience world-class customer
              support.
            </p>
          </div>

          {/* Right Content */}
          <div className="space-y-8">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                Contact Information
              </h2>

              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start space-x-4">
                  <MapPin className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-gray-900 mb-1">Address</h3>
                    <p className="text-gray-600">
                      5A Sogunle Street, Ikeja,
                      <br />
                      Lagos Nigeria
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-4">
                  <Phone className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-gray-900 mb-1">Phone</h3>
                    <div className="space-y-1">
                      <a
                        href="tel:+2349130000310"
                        className="block text-gray-600 hover:text-green-500 transition-colors"
                      >
                        091-3000-0310
                      </a>
                      <a
                        href="tel:+2349130000320"
                        className="block text-gray-600 hover:text-green-500 transition-colors"
                      >
                        091-3000-0320
                      </a>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4">
                  <Mail className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-gray-900 mb-1">Email</h3>
                    <a
                      href="mailto:helpdesk@globalpayng.com"
                      className="text-gray-600 hover:text-green-500 transition-colors"
                    >
                      helpdesk@globalpayng.com
                    </a>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex items-start space-x-4">
                  <Clock className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-gray-900 mb-2">
                      Business Hours
                    </h3>
                    <div className="space-y-1 text-gray-600">
                      <p>
                        <span className="font-medium">Monday - Friday:</span>{" "}
                        8:00 AM - 6:00 PM
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
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Connect With Us
              </h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-green-500 hover:text-white transition-colors duration-200"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-green-500 hover:text-white transition-colors duration-200"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-green-500 hover:text-white transition-colors duration-200"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-green-500 hover:text-white transition-colors duration-200"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
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
    subject: "",
    message: "",
  });

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
    // Handle form submission logic here
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 py-16 lg:py-24">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
          {/* Form Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Send Us a Message
            </h1>
            <p className="text-gray-600 text-lg">
              We&#39;d love to hear from you. Send us a message and we&#39;ll
              respond as soon as possible.
            </p>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name */}
            <div>
              <label
                htmlFor="fullName"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="Enter your full name"
                required
                className="w-full px-4 py-3 border-b-2 border-gray-300 bg-transparent focus:border-green-500 focus:outline-none transition-colors duration-200 text-gray-900 placeholder-gray-400"
              />
            </div>

            {/* Email Address */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email address"
                required
                className="w-full px-4 py-3 border-b-2 border-gray-300 bg-transparent focus:border-green-500 focus:outline-none transition-colors duration-200 text-gray-900 placeholder-gray-400"
              />
            </div>

            {/* Phone Number */}
            <div>
              <label
                htmlFor="phoneNumber"
                className="block text-sm font-medium text-gray-700 mb-2"
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
                className="w-full px-4 py-3 border-b-2 border-gray-300 bg-transparent focus:border-green-500 focus:outline-none transition-colors duration-200 text-gray-900 placeholder-gray-400"
              />
            </div>

            {/* Subject */}
            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                placeholder="Enter the subject"
                required
                className="w-full px-4 py-3 border-b-2 border-gray-300 bg-transparent focus:border-green-500 focus:outline-none transition-colors duration-200 text-gray-900 placeholder-gray-400"
              />
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Type your message here..."
                required
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg bg-transparent focus:border-green-500 focus:outline-none transition-colors duration-200 text-gray-900 placeholder-gray-400 resize-vertical"
              />
            </div>

            {/* Submit Button */}
            <div className="text-center pt-4">
              <button
                type="submit"
                className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-12 py-3 rounded-lg font-semibold text-lg hover:from-green-600 hover:to-emerald-600 transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg"
              >
                Send Message
              </button>
            </div>
          </form>

          {/* Additional Info */}
          <div className="mt-8 pt-6 border-t border-gray-200 text-center">
            <p className="text-gray-600 mb-4">Or reach us directly:</p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-sm">
              <a
                href="mailto:helpdesk@globalpayng.com"
                className="text-green-500 hover:text-green-600 transition-colors duration-200"
              >
                helpdesk@globalpayng.com
              </a>
              <span className="hidden sm:inline text-gray-400">|</span>
              <div className="flex gap-2">
                <a
                  href="tel:+2349130000310"
                  className="text-green-500 hover:text-green-600 transition-colors duration-200"
                >
                  091-3000-0310
                </a>
                <span className="text-gray-400">/</span>
                <a
                  href="tel:+2349130000320"
                  className="text-green-500 hover:text-green-600 transition-colors duration-200"
                >
                  091-3000-0320
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
