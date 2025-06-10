"use client";

import AppLogo from "@/components/appLogo";
import { motion } from "framer-motion";
import { CreditCard, Globe, Zap } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

import { ArrowRight, Download, Smartphone } from "lucide-react";
import React from "react";

export const HeroSection = () => {
  return (
    <section className="min-h-screen bg-white flex flex-col justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center space-y-16">
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
              className="text-md uppercase tracking-[0.3em] text-green-600 font-medium"
            >
              GlobalPay
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-4xl md:text-6xl lg:text-7xl font-light leading-[1.1] tracking-tight text-black"
            >
              Financial Inclusion
              <br />
              <span className="font-normal text-green-600">with Purpose</span>
            </motion.h1>
          </div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="max-w-2xl mx-auto space-y-6"
          >
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-light">
              Transform your financial journey with GlobalPay&#39;s cutting-edge
              payment solutions. We specialize in agency banking, digital
              payments, and fintech services that drive financial inclusion
              across Nigeria and beyond.
            </p>

            <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-light">
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
              className="group flex items-center justify-center border border-gray-200 text-black px-8 py-4 hover:bg-green-500 hover:text-white hover:border-green-500 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center space-x-3">
                <Smartphone className="w-5 h-5" />
                <div className="text-left">
                  <div className="text-xs text-gray-500 group-hover:text-gray-300">
                    Download on the
                  </div>
                  <div className="text-sm font-medium">App Store</div>
                </div>
              </div>
            </motion.button>

            <motion.button
              className="group flex items-center justify-center border border-gray-200 text-black px-8 py-4 hover:bg-green-500 hover:text-white hover:border-green-500 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center space-x-3">
                <Download className="w-5 h-5" />
                <div className="text-left">
                  <div className="text-xs text-gray-500 group-hover:text-gray-300">
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
            className="group bg-orange-500 text-white px-12 py-4 hover:bg-orange-600 transition-all duration-300 border-0"
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
          className="pt-16 border-t border-gray-100"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-3xl mx-auto">
            {[
              { value: "200+", label: "Locations" },
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
                <div className="text-sm text-gray-500 uppercase tracking-wider font-medium">
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
  );
};

export const AboutUsSection = () => {
  return (
    <section className="py-16 lg:py-24 min-h-screen overflow-hidden items-center flex bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Section Label - ANIMATE FROM LEFT */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex items-center space-x-3"
            >
              <div className="w-12 h-0.5 bg-green-500"></div>
              <span className="text-sm font-medium text-gray-600 uppercase tracking-wider">
                Who We Are
              </span>
            </motion.div>

            {/* Main Heading - ANIMATE FROM TOP */}
            <motion.h2
              initial={{ opacity: 0, y: -80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight"
            >
              Making Financial Opportunities{" "}
              <span className="text-green-500">Accessible To Everyone</span>
            </motion.h2>

            {/* First Description Paragraph - ANIMATE FROM LEFT */}
            <motion.p
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-base text-gray-600 leading-relaxed"
            >
              Globalpay is more than a payment company. We believe everyone
              should be able to enjoy financial and social inclusion, without
              regard for physical borders, boundaries, or social status.
            </motion.p>

            {/* Second Description Paragraph - ANIMATE FROM LEFT */}
            <motion.p
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              viewport={{ once: true }}
              className="text-base text-gray-600 leading-relaxed"
            >
              With a passionate team and a fast-growing community of users,
              Globalpay is making financial services more efficient for millions
              of users, and it starts with the ability to pay and have access to
              the right opportunities at the right time.
            </motion.p>

            {/* Third Description Paragraph - ANIMATE FROM LEFT */}
            <motion.p
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
              className="text-base text-gray-600 leading-relaxed"
            >
              Over 60% of people in Africa remain unbanked and can&#39;t access
              the most basic financial services to invest in their education and
              businesses, which limits their full potential. Nobody should be
              denied access to participate in the world economy because of their
              circumstances or background.
            </motion.p>

            {/* CTA Button - ANIMATE FROM BOTTOM */}
            <motion.button
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-600 transition-all duration-200 transform hover:scale-105 shadow-md"
            >
              Learn More
            </motion.button>
          </div>

          {/* Right Image - ANIMATE FROM RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/gb/about-1.jpeg"
                alt="GlobalPay financial inclusion services"
                width={600}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export const TrustedBySection = () => {
  const companies = [
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

  const duplicatedCompanies = [...companies, ...companies, ...companies];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Trusted by <span className="text-green-500">Leading Companies</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join top businesses that rely on GlobalPay for their financial
            operations
          </p>
        </motion.div>

        {/* Scrolling Animation Container */}
        <div className="relative overflow-hidden">
          {/* First Row - Moving Left to Right */}
          <motion.div
            className="flex space-x-8 mb-8"
            animate={{
              x: ["-100%", "0%"],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {duplicatedCompanies.map((company, index) => (
              <motion.div
                key={`row1-${index}`}
                className="flex-shrink-0 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 min-w-[200px]"
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-center space-x-4">
                  <div className="relative w-10 h-10 flex-shrink-0">
                    <Image
                      src={company.image}
                      alt={`${company.name} logo`}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <span className="font-semibold text-gray-800">
                    {company.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Second Row - Moving Right to Left (Opposite Direction) */}
          <motion.div
            className="flex space-x-8"
            animate={{
              x: ["0%", "-100%"],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {duplicatedCompanies.reverse().map((company, index) => (
              <motion.div
                key={`row2-${index}`}
                className="flex-shrink-0 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 min-w-[200px]"
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-center space-x-4">
                  <div className="relative w-10 h-10 flex-shrink-0">
                    <Image
                      src={company.image}
                      alt={`${company.name} logo`}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <span className="font-semibold text-gray-800">
                    {company.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export const WhatWeDoSection = () => {
  const services = [
    {
      icon: <CreditCard className="w-6 h-6" />,
      title: "Digital Payments",
      description:
        "Seamless payment processing with multiple channels including cards, mobile money, and QR codes.",
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Mobile Banking",
      description:
        "Access financial services anytime, anywhere through our secure and intuitive mobile application.",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "International Remittance",
      description:
        "Send money across borders quickly and at competitive rates.",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "API Banking Integration",
      description:
        "Seamlessly integrate our financial services into your business applications.",
    },
  ];

  return (
    <section className="py-16 lg:py-24 min-h-screen overflow-hidden items-center flex bg-gradient-to-br from-green-50 to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Section Label - ANIMATE FROM LEFT */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex items-center space-x-3"
            >
              <div className="w-12 h-0.5 bg-green-500"></div>
              <span className="text-sm font-medium text-gray-600 uppercase tracking-wider">
                What We Do
              </span>
            </motion.div>

            {/* Main Heading - ANIMATE FROM TOP */}
            <motion.h2
              initial={{ opacity: 0, y: -80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight"
            >
              Financial services we provide{" "}
              <span className="text-green-500">for everyone</span>
            </motion.h2>

            {/* Description - ANIMATE FROM LEFT */}
            <motion.p
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-[16px] text-gray-600 leading-relaxed"
            >
              Our comprehensive suite of financial solutions empowers
              individuals and businesses to participate fully in the digital
              economy. From simple payments to complex financial integrations,
              we make banking accessible and inclusive for all.
            </motion.p>

            {/* Services List - STAGGERED ANIMATIONS FROM ALTERNATING SIDES */}
            <div className="space-y-6">
              {services.map((service, index) => {
                // Alternate animation directions for each service
                const isEven = index % 2 === 0;
                return (
                  <motion.div
                    key={index}
                    initial={{
                      opacity: 0,
                      x: isEven ? -100 : 100, // Even indices from left, odd from right
                    }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.7,
                      delay: 0.8 + index * 0.15, // Staggered delays
                    }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4 group"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center text-white group-hover:bg-green-500 transition-colors duration-300">
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right Image - ANIMATE FROM RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 120 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/gb/what-we-do-1.jpg"
                alt="GlobalPay digital financial services in action"
                width={600}
                height={800}
                className="w-full h-full object-cover"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

              {/* Optional decorative element - ANIMATE WITH SCALE */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.6,
                  delay: 1.5,
                  type: "spring",
                  stiffness: 200,
                }}
                viewport={{ once: true }}
                className="absolute top-6 right-6 w-16 h-16 bg-white/90 rounded-full flex items-center justify-center"
              >
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">GP</span>
                </div>
              </motion.div>
            </div>

            {/* Background decorative shapes - ANIMATE WITH DIFFERENT DELAYS */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 1.8 }}
              viewport={{ once: true }}
              className="absolute -top-4 -right-4 w-20 h-20 bg-green-500/20 rounded-full blur-xl"
            ></motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 2.0 }}
              viewport={{ once: true }}
              className="absolute -bottom-6 -left-6 w-32 h-32 bg-emerald-500/20 rounded-full blur-xl"
            ></motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export const ProjectsSection = () => {
  const projects = [
    {
      title: "Stories Between Cultures",
      subtitle: "Cultural Storytelling",
      description:
        "A podcast and video series featuring personal stories of  and Caribbean immigrants, sharing cultural identity and integration experiences.",
      image: "/services/services-1.jpeg",
      buttonText: "Learn more",
    },
    {
      title: "Heritage Exchange",
      subtitle: "Intergenerational Program",
      description:
        "Connecting elders with youth for cultural preservation and leadership development, bridging generational gaps through tradition.",
      image: "/projects-hero-2.jpg",
      buttonText: "Learn more",
    },
    {
      title: "Community Dialogues",
      subtitle: "Cross-Cultural Understanding",
      description:
        "Monthly forums fostering dialogue, education, and celebration to advance cross-cultural understanding and community unity.",
      image: "/services/services-2.jpeg",
      buttonText: "Learn more",
    },
    {
      title: "Cultural Cooking Classes",
      subtitle: "Community Engagement & Cultural Expression",
      description: "Traditional dish workshops for cultural appreciation.",
      image: "/projects-hero-4.jpg",
      buttonText: "Learn more",
    },
    {
      title: "Between Cultures Childcare",
      subtitle: "Child Development Centers",
      description: "Culturally responsive early childhood education.",
      image: "/projects-hero-6.jpg",
      buttonText: "Learn more",
    },
    {
      title: "Family Mentorship Network",
      subtitle: "Family Empowerment & Advocacy",
      description: "Experienced immigrant families mentor newcomers.",
      image: "/project-hero-5.jpg",
      buttonText: "Learn more",
    },
  ];

  return (
    <section className="py-16 lg:py-24 min-h-screen overflow-hidden bg-gradient-to-br from-[#a097d1] to-[#a8c499]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          {/* Section Label - ANIMATE FROM LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex items-center justify-center space-x-3 mb-6"
          >
            <div className="w-12 h-0.5 bg-[#a8c499]"></div>
            <span className="text-sm font-medium text-gray-600 uppercase tracking-wider">
              Projects We Have Done
            </span>
          </motion.div>

          {/* Main Heading - ANIMATE FROM TOP */}
          <motion.h2
            initial={{ opacity: 0, y: -80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight"
          >
            We are creating welcoming, <br />
            inclusive childcare spaces for immigrant children and families
            <br />
            <span className="text-white"> to thrive.</span>
          </motion.h2>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            // Different animation directions based on grid position
            const getAnimationDirection = (index: number) => {
              const patterns = [
                { x: -100, y: 0 },
                { x: 0, y: -100 },
                { x: 100, y: 0 },
                { x: 100, y: 0 },
                { x: 0, y: 100 },
                { x: -100, y: 0 },
              ];
              return patterns[index % 6];
            };

            return (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  ...getAnimationDirection(index),
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  y: 0,
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.6 + index * 0.15, // Staggered delays
                }}
                viewport={{ once: true }}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                {/* Project Image */}
                <div className="relative h-[420px] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300"></div>

                  {/* Content Overlay */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                    {/* Subtitle - ANIMATE WITH DELAY */}
                    <motion.span
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 0.9, y: 0 }}
                      transition={{
                        duration: 0.6,
                        delay: 0.8 + index * 0.15,
                      }}
                      viewport={{ once: true }}
                      className="text-sm font-medium mb-2"
                    >
                      {project.subtitle}
                    </motion.span>

                    {/* Title - ANIMATE WITH DELAY */}
                    <motion.h3
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.6,
                        delay: 0.9 + index * 0.15,
                      }}
                      viewport={{ once: true }}
                      className="text-xl font-bold mb-3"
                    >
                      {project.title}
                    </motion.h3>

                    {/* Description - ANIMATE WITH DELAY */}
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 0.9, y: 0 }}
                      transition={{
                        duration: 0.6,
                        delay: 1.0 + index * 0.15,
                      }}
                      viewport={{ once: true }}
                      className="text-sm leading-relaxed mb-4"
                    >
                      {project.description}
                    </motion.p>

                    {/* CTA Button - ANIMATE WITH SCALE */}
                    <motion.button
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.5,
                        delay: 1.1 + index * 0.15,
                        type: "spring",
                        stiffness: 200,
                      }}
                      viewport={{ once: true }}
                      className="self-start bg-white text-gray-900 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 transform hover:scale-105"
                    >
                      {project.buttonText}
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export const DonationBreakdownSection = () => {
  const donationData = [
    {
      category: "Family Empowerment Programs",
      percentage: 40,
      color: "#a8c499",
      description: "Mentorship, parenting workshops, and advocacy services",
    },
    {
      category: "Cultural Preservation",
      percentage: 25,
      color: "#a097d1",
      description: "Heritage exchange, storytelling, and arts programs",
    },
    {
      category: "Education & Training",
      percentage: 20,
      color: "#f4d03f",
      description: "Adult education, youth leadership development",
    },
    {
      category: "Mental Health Services",
      percentage: 10,
      color: "#f8c471",
      description: "Counseling, wellness sessions, peer support",
    },
    {
      category: "Administrative Costs",
      percentage: 5,
      color: "#f1948a",
      description: "Operations, staff, and organizational management",
    },
  ];

  // Calculate the donut chart segments
  const radius = 120;
  const strokeWidth = 60;
  const normalizedRadius = radius - strokeWidth * 0.5;
  const circumference = normalizedRadius * 2 * Math.PI;

  let cumulativePercentage = 0;

  return (
    <section className="py-16 lg:py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">
              How we spend your donations and where it goes
            </h2>

            <p className="text-gray-300 text-lg leading-relaxed">
              We understand that when you make a donation, you want to know
              exactly where your money is going and we pledge to be transparent.
            </p>

            {/* Legend */}
            <div className="space-y-4">
              {donationData.map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div
                    className="w-4 h-4 rounded-sm mt-1 flex-shrink-0"
                    style={{ backgroundColor: item.color }}
                  ></div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-medium text-white">
                        {item.percentage}% {item.category}
                      </span>
                    </div>
                    <p className="text-sm text-gray-400">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Chart */}
          <div className="flex justify-center">
            <div className="relative">
              <svg
                height={radius * 2}
                width={radius * 2}
                className="transform -rotate-90"
              >
                {/* Background circle */}
                <circle
                  stroke="#374151"
                  fill="transparent"
                  strokeWidth={strokeWidth}
                  r={normalizedRadius}
                  cx={radius}
                  cy={radius}
                />

                {/* Chart segments */}
                {donationData.map((item, index) => {
                  const strokeDasharray = `${
                    (item.percentage / 100) * circumference
                  } ${circumference}`;
                  const strokeDashoffset =
                    (-cumulativePercentage * circumference) / 100;

                  cumulativePercentage += item.percentage;

                  return (
                    <circle
                      key={index}
                      stroke={item.color}
                      fill="transparent"
                      strokeWidth={strokeWidth}
                      strokeDasharray={strokeDasharray}
                      strokeDashoffset={strokeDashoffset}
                      r={normalizedRadius}
                      cx={radius}
                      cy={radius}
                      className="transition-all duration-500 hover:opacity-80"
                      style={{
                        strokeLinecap: "round",
                      }}
                    />
                  );
                })}
              </svg>

              {/* Center content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">100%</div>
                  <div className="text-sm text-gray-400">Transparency</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <button className="bg-gradient-to-r from-green-400 to-purple-400 text-white px-8 py-3 rounded-lg font-semibold hover:from-[#96b085] hover:to-[#8e83bd] transition-all duration-200 transform hover:scale-105 shadow-lg">
              Make a Donation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export const EventsNewsletterSection = () => {
  const [email, setEmail] = useState("");

  const events = [
    {
      date: "13",
      month: "Feb",
      label: "NEXT EVENTS",
      title: "Cultural Heritage Festival",
      description:
        "Celebrating African traditions with music, dance, and storytelling from our community elders and youth.",
      link: "#",
    },
    {
      date: "25",
      month: "Feb",
      label: "NEXT EVENTS",
      title: "Parent Empowerment Workshop",
      description:
        "Culturally responsive parenting strategies and educational advocacy for immigrant families.",
      link: "#",
    },
  ];

  const footerLinks = {
    Home: [
      { name: "About us", href: "/about" },
      { name: "Vision", href: "/vision" },
      { name: "What we do", href: "/services" },
      { name: "Volunteer", href: "/volunteer" },
    ],
    More: [
      { name: "Programs", href: "/programs" },
      { name: "Events", href: "/events" },
      { name: "Testimonials", href: "/testimonials" },
      { name: "Blog", href: "/blog" },
    ],
    Connect: [
      { name: "Facebook", href: "#" },
      { name: "Instagram", href: "#" },
      { name: "Whatsapp", href: "#" },
      { name: "LinkedIn", href: "#" },
    ],
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Subscribing email:", email);
    setEmail("");
  };
  return (
    <div className="bg-white">
      {/* CTA Banner */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/footer.jpg"
              alt="Families engaging in cultural activities"
              width={1200}
              height={400}
              className="w-full h-64 md:h-80 object-cover"
            />
            <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
              <div className="text-center text-white px-6">
                <h2 className="text-2xl md:text-4xl font-bold mb-6">
                  You can contribute to support
                  <br />
                  <span className="text-[#a8c499]">
                    immigrant children in childcare!
                  </span>
                </h2>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-gradient-to-r from-[#96b085] to-[#8e83bd] text-white px-8 py-3 rounded-lg font-semibold hover:from-[#96b085] hover:to-[#8e83bd] transition-all duration-200 transform hover:scale-105 shadow-lg">
                    Join as a volunteer
                  </button>
                  <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-200">
                    Donate
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Events</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {events.map((event, index) => (
              <div
                key={index}
                className="bg-[#96b085] rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-gray-100">
                        {event.date}
                      </div>
                      <div className="text-sm text-gray-100 uppercase">
                        {event.month}
                      </div>
                    </div>
                    <div className="flex-1">
                      <span className="text-xs text-gray-100 uppercase tracking-wide font-medium">
                        {event.label}
                      </span>
                      <h3 className="text-xl font-semibold text-gray-100 mt-1 mb-2">
                        {event.title}
                      </h3>
                      <p className="text-gray-100 text-sm leading-relaxed">
                        {event.description}
                      </p>
                    </div>
                  </div>
                  <a
                    href={event.link}
                    className="flex-shrink-0 w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors duration-200"
                  >
                    <svg
                      className="w-4 h-4 text-gray-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-amber-50 to-orange-50 text-gray-900 py-16 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Links Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
              {/* Logo */}
              <div className="col-span-2 md:col-span-1">
                <div className="text-md font-bold mb-6">
                  <AppLogo />
                </div>
              </div>

              {/* Footer Links */}
              {Object.entries(footerLinks).map(([category, links]) => (
                <div key={category}>
                  <h4 className="font-semibold mb-4 text-gray-900">
                    {category}
                  </h4>
                  <ul className="space-y-2">
                    {links.map((link, index) => (
                      <li key={index}>
                        <a
                          href={link.href}
                          className="text-gray-600 hover:text-[#a8c499] transition-colors duration-200 text-sm"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Newsletter Section */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                Subscribe to get our latest updates
              </h3>
              <div className="flex gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg bg-gray-50 text-gray-900 placeholder-gray-500 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#a8c499] focus:border-transparent"
                />
                <button
                  onClick={handleSubscribe}
                  className="bg-[#a8c499] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#96b085] transition-colors duration-200"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Border */}
          <div className="border-t border-gray-200 mt-12 pt-8 text-center">
            <p className="text-gray-600 text-sm">
              © 2025 Between Cultures Foundation. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};
