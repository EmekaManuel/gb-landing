/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

declare global {
  interface Window {
    VANTA: any;
  }
}

import { motion } from "framer-motion";
import {
  CreditCard,
  Mail,
  MapPin,
  Phone,
  Quote,
  Star,
  Store,
} from "lucide-react";

import Image from "next/image";
import { useState } from "react";

import {
  ArrowRight,
  Code,
  Download,
  Globe,
  Smartphone,
  Target,
  TrendingUp,
  Users,
  Wallet,
} from "lucide-react";
import AppLogo from "@/components/appLogo";

export const HeroSection = () => {
  return (
    <>
      <section className="min-h-screen pt-6 bg-black flex flex-col justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/hero/lagos-1.jpg')",
          }}
        />

        <Image
          src="/hero/lagos-4.jpg"
          alt="Background"
          fill
          className="object-cover"
          priority
          quality={85}
        />

        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/60 z-10"></div>

        <div className="max-w-4xl mx-auto text-center space-y-16 relative z-20">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            {/* Brand */}
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-[18px]  tracking-[0.3em] text-green-400 font-bold"
              >
                globalpay
              </motion.div>

              {/* Main Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-4xl md:text-6xl lg:text-7xl font-light leading-[1.1] tracking-tight text-white"
              >
                Financial Inclusion
                <br />
                <span className="font-normal text-green-400">with Purpose</span>
              </motion.h1>
            </div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="max-w-2xl mx-auto space-y-6"
            >
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light">
                Transform your financial journey with GlobalPay&#39;s
                cutting-edge payment solutions. We specialize in agency banking,
                digital payments, and fintech services that drive financial
                inclusion across Nigeria and beyond.
              </p>

              <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light">
                Join thousands of satisfied customers who trust GlobalPay to
                achieve their financial goals without barriers or boundaries.
              </p>
            </motion.div>
          </motion.div>

          {/* App Download Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="space-y-8"
          >
            <div className="text-sm uppercase tracking-[0.2em] text-gray-400 font-medium">
              Download Our App
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
              <motion.button
                className="group flex items-center justify-center border border-gray-600 text-white px-8 py-4 hover:bg-green-500 hover:text-white hover:border-green-500 transition-all duration-300 backdrop-blur-sm bg-white/10"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center space-x-3">
                  <Image
                    src="/logos/app-store-logo.png"
                    alt="Download on the App Store"
                    height={25}
                    width={25}
                  />
                  <div className="text-left">
                    <div className="text-xs text-gray-400 group-hover:text-gray-200">
                      Download on the
                    </div>
                    <div className="text-sm font-medium">App Store</div>
                  </div>
                </div>
              </motion.button>

              <motion.button
                className="group flex items-center justify-center border border-gray-600 text-white px-8 py-4 hover:bg-green-500 hover:text-white hover:border-green-500 transition-all duration-300 backdrop-blur-sm bg-white/10"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center space-x-3">
                  <Image
                    src="/logos/google-play-logo.png"
                    alt="Download on the App Store"
                    height={25}
                    width={25}
                  />{" "}
                  <div className="text-left">
                    <div className="text-xs text-gray-400 group-hover:text-gray-200">
                      Get it on
                    </div>
                    <div className="text-sm font-medium">Google Play</div>
                  </div>
                </div>
              </motion.button>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="space-y-8"
          >
            <motion.button
              className="group bg-orange-500 text-white px-12 py-4 hover:bg-orange-600 transition-all duration-300 border-0 shadow-lg"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center space-x-3">
                <span className="text-lg font-normal">Become an Agent</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </motion.button>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="pt-16 border-t border-gray-700"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-3xl mx-auto">
              {[
                { value: "200+", label: "Locations Nationwide" },
                { value: "₦2B+", label: "Transactions Processed" },
                { value: "99%", label: "Customer Support" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center space-y-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.4 + index * 0.1, duration: 0.6 }}
                >
                  <div className="text-3xl md:text-4xl font-light text-orange-500">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400 uppercase tracking-wider font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100px" }}
            transition={{ delay: 1.8, duration: 1, ease: "easeOut" }}
            className="h-px bg-green-400 mx-auto"
          />
        </div>
      </section>
    </>
  );
};

export const AboutUsSection = () => {
  const stats = [
    {
      number: "60%",
      label: "Of Africans Remain Unbanked",
      icon: <Users className="w-5 h-5" />,
    },
    {
      number: "200M+",
      label: "People Lack Basic Financial Access",
      icon: <Globe className="w-5 h-5" />,
    },
    {
      number: "5M+",
      label: "Businesses Need Digital Solutions",
      icon: <TrendingUp className="w-5 h-5" />,
    },
  ];

  const values = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Financial Inclusion",
      description: "Breaking down barriers to financial services across Africa",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Accessibility",
      description: "Making fintech solutions available to everyone, everywhere",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Innovation",
      description: "Building the future of digital financial services",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center space-x-3"
            >
              <div className="w-12 h-0.5 bg-green-500"></div>
              <span className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                About GlobalPay
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-3xl lg:text-4xl xl:text-5xl font-light leading-tight text-black"
            >
              Democratizing Financial
              <br />
              <span className="text-green-600 font-normal">
                Access Across Africa
              </span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-lg text-gray-600 leading-relaxed">
                GlobalPay is more than a payment company. We&#39;re building the
                infrastructure that enables financial inclusion across Africa,
                ensuring everyone can participate in the digital economy
                regardless of their location or background.
              </p>

              <p className="text-gray-600 leading-relaxed">
                With over 60% of Africans remaining unbanked, we&#39;re
                committed to bridging this gap through innovative fintech
                solutions that make financial services accessible, affordable,
                and secure for millions of users.
              </p>
            </motion.div>

            {/* Values */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              {values.map((value, index) => (
                <div key={index} className="flex items-start space-x-4 group">
                  <div className="flex-shrink-0 w-10 h-10 bg-gray-50 border border-gray-200 rounded-lg flex items-center justify-center text-green-600 group-hover:bg-green-50 group-hover:border-green-200 transition-all duration-300">
                    {value.icon}
                  </div>
                  <div>
                    <h4 className="font-medium text-black mb-1">
                      {value.title}
                    </h4>
                    <p className="text-sm text-gray-600">{value.description}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button className="bg-orange-500 text-white px-8 py-3 hover:bg-orange-600 transition-colors duration-300 font-medium">
                Our Mission
              </button>
              <button className="border border-gray-300 text-black px-8 py-3 hover:bg-gray-50 transition-colors duration-300 font-medium">
                Join Our Team
              </button>
            </motion.div>
          </div>

          {/* Right Content - Stats & Visual */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Challenge Stats */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-xl font-medium text-black mb-6">
                The Challenge We&#39;re Solving
              </h3>
              <div className="space-y-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-4"
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-white rounded-lg flex items-center justify-center text-orange-500">
                      {stat.icon}
                    </div>
                    <div>
                      <div className="text-2xl font-light text-black">
                        {stat.number}
                      </div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Mission Statement Card */}
            <div className="bg-green-50 border border-green-100 rounded-2xl p-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-medium text-black mb-3">Our Mission</h4>
                  <p className="text-gray-700 leading-relaxed">
                    To democratize financial access across Africa by providing
                    innovative, secure, and inclusive fintech solutions that
                    empower individuals and businesses to thrive in the digital
                    economy.
                  </p>
                </div>
              </div>
            </div>

            {/* Impact Metrics */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
                <div className="text-2xl font-light text-green-600 mb-2">
                  2019
                </div>
                <div className="text-sm text-gray-500 uppercase tracking-wider">
                  Founded
                </div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
                <div className="text-2xl font-light text-orange-500 mb-2">
                  36
                </div>
                <div className="text-sm text-gray-500 uppercase tracking-wider">
                  States Covered
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section - Vision */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 text-center bg-gradient-to-r from-gray-50 to-green-50 rounded-2xl p-12"
        >
          <h3 className="text-2xl lg:text-3xl font-light text-black mb-6">
            Building Africa&#39;s
            <span className="block text-green-600 font-normal">
              Financial Future
            </span>
          </h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We envision an Africa where financial services are accessible to
            everyone, where small businesses can scale globally, and where
            innovation drives economic growth across the continent.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export const TrustedBySection = () => {
  const industries = [
    { name: "ColdStone", image: "/gb/partners/coldstone.png" },
    { name: "Chicken Republic", image: "/gb/partners/cr-logo.jpeg" },
    { name: "Dominos", image: "/gb/partners/dominos-logo.png" },
    { name: "FCMB", image: "/gb/partners/fcmb-logo.png" },
    { name: "Unity", image: "/gb/partners/unity-logo.png" },
    { name: "Union", image: "/gb/partners/union-logo.png" },
    { name: "Mobil", image: "/gb/partners/mobil-logo.png" },
    { name: "Movenpick", image: "/gb/partners/movenpick-logo.png" },
    { name: "ParkInn", image: "/gb/partners/parkinn-logo.png" },
  ];

  const duplicatedIndustries = [...industries, ...industries];

  const testimonials = [
    {
      name: "Sarah Adebayo",
      position: "Operations Manager",
      company: "Chicken Republic",
      image: "/gb/testimonials/sarah.jpg",
      rating: 5,
      quote:
        "GlobalPay has revolutionized our payment processing across all locations. The seamless integration and reliable settlements have significantly improved our cash flow management.",
      industry: "Food & Beverage",
    },

    {
      name: "Aisha Mahmoud",
      position: "Branch Manager",
      company: "Unity Bank",
      image: "/gb/testimonials/aisha.jpg",
      rating: 5,
      quote:
        "As a financial institution, we needed a reliable partner for our agent banking network. GlobalPay's infrastructure and support have exceeded our expectations.",
      industry: "Banking",
    },

    {
      name: "Emeka Nnaji",
      position: "Regional Director",
      company: "Mobil Nigeria",
      image: "/gb/testimonials/emeka.jpg",
      rating: 5,
      quote:
        "Handling high-volume transactions across our network requires reliability. GlobalPay delivers consistent performance and exceptional uptime for our fuel stations.",
      industry: "Energy",
    },
  ];

  return (
    <section className="py-16 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-light text-black mb-4">
            Trusted Across <span className="text-green-600">Industries</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Powering payments for businesses of all sizes across Nigeria and
            beyond
          </p>
        </motion.div>

        <div className="relative overflow-hidden">
          <motion.div
            className="flex space-x-6"
            animate={{
              x: [0, -1600],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {duplicatedIndustries.map((industry, index) => (
              <motion.div
                key={`row1-${index}`}
                className="flex-shrink-0 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 min-w-[200px] border border-gray-100"
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-center space-x-4">
                  <div className="relative w-10 h-10 flex-shrink-0">
                    <Image
                      src={industry.image}
                      alt={`${industry.name} logo`}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <span className="font-semibold text-gray-800">
                    {industry.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Customer Testimonials Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <div className="text-center mb-16">
            <h3 className="text-3xl lg:text-4xl font-light text-black mb-4">
              What Our{" "}
              <span className="text-orange-500 font-normal">Clients Say</span>
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hear from business leaders who trust GlobalPay to power their
              payment infrastructure
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-all duration-300 relative"
              >
                {/* Quote Icon */}
                <div className="absolute top-6 right-6">
                  <Quote className="w-6 h-6 text-green-500 opacity-30" />
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-orange-500 text-orange-500"
                    />
                  ))}
                </div>

                {/* Testimonial Quote */}
                <blockquote className="text-gray-700 leading-relaxed mb-6 italic">
                  &#34;{testimonial.quote}&#34;
                </blockquote>

                {/* Author Info */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-medium">
                    {testimonial.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <h4 className="font-medium text-black">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {testimonial.position}
                    </p>
                    <p className="text-xs text-green-600 font-medium">
                      {testimonial.company}
                    </p>
                  </div>
                </div>

                {/* Industry Tag */}
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <span className="inline-block px-3 py-1 bg-white text-gray-600 text-xs font-medium rounded-full border border-gray-200">
                    {testimonial.industry}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Customer Success Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16 bg-gradient-to-r from-green-50 to-orange-50 rounded-2xl p-12 border border-gray-100"
          >
            <div className="text-center mb-8">
              <h4 className="text-2xl font-light text-black mb-2">
                Customer{" "}
                <span className="text-green-600 font-normal">Success</span>
              </h4>
              <p className="text-gray-600">
                Our clients&#39; success is our success
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-2xl font-light text-green-600 mb-2">
                  99.9%
                </div>
                <div className="text-sm text-gray-500 uppercase tracking-wider">
                  Uptime Reliability
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-light text-orange-500 mb-2">
                  4.9/5
                </div>
                <div className="text-sm text-gray-500 uppercase tracking-wider">
                  Customer Rating
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-light text-green-600 mb-2">
                  2 Mins
                </div>
                <div className="text-sm text-gray-500 uppercase tracking-wider">
                  Avg Support Response
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-light text-orange-500 mb-2">
                  98%
                </div>
                <div className="text-sm text-gray-500 uppercase tracking-wider">
                  Client Retention Rate
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export const WhatWeDoSection = () => {
  const services = [
    {
      icon: <CreditCard className="w-6 h-6" />,
      title: "Payment Processing",
      description:
        "Secure, reliable payment processing for businesses of all sizes with real-time transaction support.",
    },
    {
      icon: <Store className="w-6 h-6" />,
      title: "Merchant Services",
      description:
        "Comprehensive merchant solutions including POS systems, merchant management, and business analytics for retail success.",
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Mobile Banking",
      description:
        "Complete mobile banking solutions bringing financial services directly to your customers.",
    },

    {
      icon: <Code className="w-6 h-6" />,
      title: "API Integration",
      description:
        "Powerful APIs for seamless integration of payment services into existing business systems.",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Agent Banking",
      description:
        "Expand your reach through our extensive agent network across Nigeria and Africa.",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center space-x-3"
            >
              <div className="w-12 h-0.5 bg-green-500"></div>
              <span className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                What We Do
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-3xl lg:text-4xl xl:text-5xl font-light leading-tight text-black"
            >
              Financial Solutions
              <br />
              <span className="text-green-600 font-normal">Made Simple</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg text-gray-600 leading-relaxed"
            >
              We provide comprehensive fintech solutions that enable businesses
              and individuals to participate fully in the digital economy. From
              payments to banking, we make financial services accessible to
              everyone.
            </motion.p>

            {/* Services List */}
            <div className="space-y-6">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4 group"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-white border border-gray-200 rounded-lg flex items-center justify-center text-gray-600 group-hover:bg-green-500 group-hover:text-white group-hover:border-green-500 transition-all duration-300">
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-medium text-black mb-2 group-hover:text-green-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
              className="pt-4"
            >
              <button className="bg-orange-500 text-white px-8 py-3 hover:bg-orange-600 transition-colors duration-300 font-medium">
                Explore All Services
              </button>
            </motion.div>
          </div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Main Card */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="space-y-6">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-medium text-black">
                      Payment Dashboard
                    </h3>
                    <p className="text-sm text-gray-500">Real-time analytics</p>
                  </div>
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="text-2xl font-light text-black mb-1">
                      ₦16.4M
                    </div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider">
                      Today&#39;s Volume
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="text-2xl font-light text-green-600 mb-1">
                      2,860
                    </div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider">
                      Transactions
                    </div>
                  </div>
                </div>

                {/* Progress Bars */}
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-600">Card Transactions</span>
                      <span className="text-green-600">85%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-green-500 h-2 rounded-full"
                        style={{ width: "85%" }}
                      ></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-600">
                        Pay By Transfer Transactions
                      </span>
                      <span className="text-orange-500">65%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-orange-500 h-2 rounded-full"
                        style={{ width: "65%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              viewport={{ once: true }}
              className="absolute -top-4 -right-4 w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-white shadow-lg"
            >
              <Wallet className="w-8 h-8" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              viewport={{ once: true }}
              className="absolute -bottom-6 -left-6 w-20 h-20 bg-green-500/20 rounded-full"
            ></motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export const EventsNewsletterSection = () => {
  const [email, setEmail] = useState("");

  const footerLinks = {
    "Quick Links": [
      { name: "Home", href: "/" },
      { name: "About Us", href: "/about" },
      { name: "Become an Agent", href: "/agent" },
      { name: "Contact Us", href: "/contact" },
    ],
    Services: [
      { name: "Payment Processing", href: "/services/payment-processing" },
      { name: "Merchant Services", href: "/services/mobile-banking" },
      { name: "Agent Banking", href: "/services/agent-banking" },
      { name: "POS Terminals", href: "/services/pos-terminals" },
      { name: "API Integration", href: "/services/api" },
      { name: "Virtual Cards", href: "/services/virtual-cards" },
    ],
  };

  const handleSubscribe = () => {
    console.log("Subscribing email:", email);
    setEmail("");
  };

  return (
    <footer className="bg-black border-t border-gray-800 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-4 space-y-6">
            <div>
              <div className="text-2xl font-light flex gap-2 text-white mb-4">
                <AppLogo />
              </div>
              <p className="text-gray-300 leading-relaxed max-w-sm">
                Making financial services accessible to everyone across Africa
                through innovative fintech solutions.
              </p>
            </div>

            {/* App Download */}
            <div className="space-y-4">
              <h4 className="text-sm font-medium text-gray-100 uppercase tracking-wider">
                Download Our App
              </h4>
              <div className="flex flex-col sm:flex-row gap-3">
                <button className="flex items-center justify-center border border-gray-700 px-4 py-2 hover:border-green-500 hover:bg-green-500/10 transition-all duration-300 group">
                  <div className="flex items-center space-x-2">
                    <Smartphone className="w-4 h-4 text-gray-400 group-hover:text-green-500" />
                    <div className="text-left">
                      <div className="text-xs text-gray-400">
                        Download on the
                      </div>
                      <div className="text-sm font-medium text-gray-100">
                        App Store
                      </div>
                    </div>
                  </div>
                </button>

                <button className="flex items-center justify-center border border-gray-700 px-4 py-2 hover:border-green-500 hover:bg-green-500/10 transition-all duration-300 group">
                  <div className="flex items-center space-x-2">
                    <Download className="w-4 h-4 text-gray-400 group-hover:text-green-500" />
                    <div className="text-left">
                      <div className="text-xs text-gray-400">Get it on</div>
                      <div className="text-sm font-medium text-gray-100">
                        Google Play
                      </div>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Links Sections */}
          <div className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="text-sm font-medium text-gray-100 uppercase tracking-wider mb-4">
                  {category}
                </h4>
                <ul className="space-y-3">
                  {links.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="text-gray-400 hover:text-green-500 transition-colors duration-200 text-sm"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Contact & Newsletter */}
          <div className="lg:col-span-4 space-y-8">
            {/* Contact Information */}
            <div>
              <h4 className="text-sm font-medium text-gray-100 uppercase tracking-wider mb-4">
                Contact Us
              </h4>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-4 h-4 text-gray-400 mt-1 flex-shrink-0" />
                  <span className="text-sm text-gray-300">
                    5A Sogunle Street, Ikeja, Lagos Nigeria
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-gray-400 flex-shrink-0" />
                  <div className="text-sm text-gray-300">
                    <div>091-3000-0310</div>
                    <div>091-3000-0320</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-gray-400 flex-shrink-0" />
                  <a
                    href="mailto:helpdesk@globalpayng.com"
                    className="text-sm text-gray-300 hover:text-green-500 transition-colors"
                  >
                    helpdesk@globalpayng.com
                  </a>
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-sm font-medium text-gray-100 uppercase tracking-wider mb-4">
                Stay Updated
              </h4>
              <p className="text-sm text-gray-300 mb-4">
                Get the latest fintech updates and product announcements.
              </p>
              <div className="space-y-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 border border-gray-700 bg-gray-800 text-gray-100 placeholder-gray-400 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 text-sm"
                />
                <button
                  onClick={handleSubscribe}
                  className="w-full bg-orange-500 text-white px-4 py-3 hover:bg-orange-600 transition-colors duration-300 text-sm font-medium"
                >
                  Subscribe to Updates
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-sm text-gray-400">
              © 2025 Globalpay. All rights reserved.
            </div>

            {/* Legal Links */}
            <div className="flex space-x-6">
              <a
                href="/privacy"
                className="text-sm text-gray-400 hover:text-green-500 transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="/terms"
                className="text-sm text-gray-400 hover:text-green-500 transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="/cookies"
                className="text-sm text-gray-400 hover:text-green-500 transition-colors"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
