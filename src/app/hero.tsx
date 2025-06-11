"use client";

import { motion } from "framer-motion";
import { CreditCard, Globe, Zap, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

import { ArrowRight, Download, Smartphone } from "lucide-react";

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
              className="text-4xl md:text-6xl lg:text-6xl font-light leading-[1.1] tracking-tight text-black"
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
          <h2 className="text-4xl md:text-6xl lg:text-6xl font-light leading-[1.1] tracking-tight text-black">
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
              className="text-4xl md:text-6xl lg:text-6xl font-light leading-[1.1] tracking-tight text-black"
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

// export const ProjectsSection = () => {
//   const projects = [
//     {
//       title: "Stories Between Cultures",
//       subtitle: "Cultural Storytelling",
//       description:
//         "A podcast and video series featuring personal stories of  and Caribbean immigrants, sharing cultural identity and integration experiences.",
//       image: "/services/services-1.jpeg",
//       buttonText: "Learn more",
//     },
//     {
//       title: "Heritage Exchange",
//       subtitle: "Intergenerational Program",
//       description:
//         "Connecting elders with youth for cultural preservation and leadership development, bridging generational gaps through tradition.",
//       image: "/projects-hero-2.jpg",
//       buttonText: "Learn more",
//     },
//     {
//       title: "Community Dialogues",
//       subtitle: "Cross-Cultural Understanding",
//       description:
//         "Monthly forums fostering dialogue, education, and celebration to advance cross-cultural understanding and community unity.",
//       image: "/services/services-2.jpeg",
//       buttonText: "Learn more",
//     },
//     {
//       title: "Cultural Cooking Classes",
//       subtitle: "Community Engagement & Cultural Expression",
//       description: "Traditional dish workshops for cultural appreciation.",
//       image: "/projects-hero-4.jpg",
//       buttonText: "Learn more",
//     },
//     {
//       title: "Between Cultures Childcare",
//       subtitle: "Child Development Centers",
//       description: "Culturally responsive early childhood education.",
//       image: "/projects-hero-6.jpg",
//       buttonText: "Learn more",
//     },
//     {
//       title: "Family Mentorship Network",
//       subtitle: "Family Empowerment & Advocacy",
//       description: "Experienced immigrant families mentor newcomers.",
//       image: "/project-hero-5.jpg",
//       buttonText: "Learn more",
//     },
//   ];

//   return (
//     <section className="py-16 lg:py-24 min-h-screen overflow-hidden bg-gradient-to-br from-[#a097d1] to-[#a8c499]">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header */}
//         <div className="text-center max-w-3xl mx-auto mb-16">
//           {/* Section Label - ANIMATE FROM LEFT */}
//           <motion.div
//             initial={{ opacity: 0, x: -100 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             viewport={{ once: true }}
//             className="flex items-center justify-center space-x-3 mb-6"
//           >
//             <div className="w-12 h-0.5 bg-[#a8c499]"></div>
//             <span className="text-sm font-medium text-gray-600 uppercase tracking-wider">
//               Projects We Have Done
//             </span>
//           </motion.div>

//           {/* Main Heading - ANIMATE FROM TOP */}
//           <motion.h2
//             initial={{ opacity: 0, y: -80 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.4 }}
//             viewport={{ once: true }}
//             className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight"
//           >
//             We are creating welcoming, <br />
//             inclusive childcare spaces for immigrant children and families
//             <br />
//             <span className="text-white"> to thrive.</span>
//           </motion.h2>
//         </div>

//         {/* Projects Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {projects.map((project, index) => {
//             // Different animation directions based on grid position
//             const getAnimationDirection = (index: number) => {
//               const patterns = [
//                 { x: -100, y: 0 },
//                 { x: 0, y: -100 },
//                 { x: 100, y: 0 },
//                 { x: 100, y: 0 },
//                 { x: 0, y: 100 },
//                 { x: -100, y: 0 },
//               ];
//               return patterns[index % 6];
//             };

//             return (
//               <motion.div
//                 key={index}
//                 initial={{
//                   opacity: 0,
//                   ...getAnimationDirection(index),
//                 }}
//                 whileInView={{
//                   opacity: 1,
//                   x: 0,
//                   y: 0,
//                 }}
//                 transition={{
//                   duration: 0.8,
//                   delay: 0.6 + index * 0.15, // Staggered delays
//                 }}
//                 viewport={{ once: true }}
//                 className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
//               >
//                 {/* Project Image */}
//                 <div className="relative h-[420px] overflow-hidden">
//                   <Image
//                     src={project.image}
//                     alt={project.title}
//                     fill
//                     className="object-cover group-hover:scale-110 transition-transform duration-500"
//                   />
//                   <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300"></div>

//                   {/* Content Overlay */}
//                   <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
//                     {/* Subtitle - ANIMATE WITH DELAY */}
//                     <motion.span
//                       initial={{ opacity: 0, y: 20 }}
//                       whileInView={{ opacity: 0.9, y: 0 }}
//                       transition={{
//                         duration: 0.6,
//                         delay: 0.8 + index * 0.15,
//                       }}
//                       viewport={{ once: true }}
//                       className="text-sm font-medium mb-2"
//                     >
//                       {project.subtitle}
//                     </motion.span>

//                     {/* Title - ANIMATE WITH DELAY */}
//                     <motion.h3
//                       initial={{ opacity: 0, y: 20 }}
//                       whileInView={{ opacity: 1, y: 0 }}
//                       transition={{
//                         duration: 0.6,
//                         delay: 0.9 + index * 0.15,
//                       }}
//                       viewport={{ once: true }}
//                       className="text-xl font-bold mb-3"
//                     >
//                       {project.title}
//                     </motion.h3>

//                     {/* Description - ANIMATE WITH DELAY */}
//                     <motion.p
//                       initial={{ opacity: 0, y: 20 }}
//                       whileInView={{ opacity: 0.9, y: 0 }}
//                       transition={{
//                         duration: 0.6,
//                         delay: 1.0 + index * 0.15,
//                       }}
//                       viewport={{ once: true }}
//                       className="text-sm leading-relaxed mb-4"
//                     >
//                       {project.description}
//                     </motion.p>

//                     {/* CTA Button - ANIMATE WITH SCALE */}
//                     <motion.button
//                       initial={{ opacity: 0, scale: 0.8 }}
//                       whileInView={{ opacity: 1, scale: 1 }}
//                       transition={{
//                         duration: 0.5,
//                         delay: 1.1 + index * 0.15,
//                         type: "spring",
//                         stiffness: 200,
//                       }}
//                       viewport={{ once: true }}
//                       className="self-start bg-white text-gray-900 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 transform hover:scale-105"
//                     >
//                       {project.buttonText}
//                     </motion.button>
//                   </div>
//                 </div>
//               </motion.div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

export const EventsNewsletterSection = () => {
  const [email, setEmail] = useState("");

  const footerLinks = {
    "Quick Links": [
      { name: "Home", href: "/" },
      { name: "About Us", href: "/about" },
      { name: "Services", href: "/services" },
      { name: "Solutions", href: "/solutions" },
      { name: "Become an Agent", href: "/agent" },
      { name: "Contact Us", href: "/contact" },
    ],
    Services: [
      { name: "Payment Processing", href: "/services/payment-processing" },
      { name: "Mobile Banking", href: "/services/mobile-banking" },
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
                <Image
                  className="w-8 ltr:-ml-1 rtl:-mr-1 inline"
                  src="/gb/logo.png"
                  width={8}
                  height={8}
                  alt="logo"
                />
                <span className="text-white-500">globalpay</span>
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
