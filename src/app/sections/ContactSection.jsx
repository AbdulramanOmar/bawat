"use client";
import React from "react";
import { FiPhone, FiMail, FiMapPin, FiSend } from "react-icons/fi";
import { motion } from "framer-motion";

// Animation variants
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.5,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden ">
      {/* background blur elements */}
      <div className="absolute inset-0">
        <div className="absolute left-0 bottom-0 w-1/3 h-1/3 bg-[#9e0d22]/10 rounded-full blur-3xl"></div>
        <div className="absolute right-0 top-0 w-1/3 h-1/3 bg-[#394854]/10 rounded-full blur-3xl"></div>
      </div>

      <motion.div
        className="container mx-auto px-4 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        <motion.div className=" mb-16" variants={itemVariants}>
          <h2 className="text-5xl md:text-9xl font-bold mb-4 text-white">
            Contact Us
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            className="bg-white rounded-2xl shadow-xl p-8"
            variants={itemVariants}
          >
            <h3 className="text-2xl font-bold mb-6 text-[#9e0d22]">
              Contact Information
            </h3>

            <div className="space-y-8">
              <motion.div className="flex items-start" variants={itemVariants}>
                <div className="p-3 bg-[#9e0d22]/10 rounded-full mr-4">
                  <FiPhone className="w-6 h-6 text-[#9e0d22]" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Call Us</h4>
                  <a
                    href="tel:+9647803709593"
                    className="text-gray-600 block hover:underline mb-1"
                  >
                    +964 780 370 9593
                  </a>
                  <a
                    href="tel:+9647716733176"
                    className="text-gray-600 hover:underline"
                  >
                    +964 771 673 3176
                  </a>
                </div>
              </motion.div>

              <motion.div className="flex items-start" variants={itemVariants}>
                <div className="p-3 bg-[#9e0d22]/10 rounded-full mr-4">
                  <FiMail className="w-6 h-6 text-[#9e0d22]" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Email</h4>
                  <a
                    href="mailto:info@bawabt-albargsiyah.com"
                    className="hover:underline text-gray-600 "
                  >
                    info@bawabt-albargsiyah.com
                  </a>
                </div>
              </motion.div>

              <motion.div className="flex items-start" variants={itemVariants}>
                <div className="p-3 bg-[#9e0d22]/10 rounded-full mr-4">
                  <FiMapPin className="w-6 h-6 text-[#9e0d22]" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Head Office</h4>
                  <p className="text-gray-600">BASRA – HQ</p>
                  <p className="text-gray-600">DUBAI – CITY BAY</p>
                  <p className="text-gray-600">Baghdad – Inner Karada</p>
                </div>
              </motion.div>
            </div>

            <div className="mt-12 pt-8 border-t">
              <h4 className="font-bold mb-4">Working Hours</h4>
              <div className="grid grid-cols-2 gap-4 text-gray-600">
                <div>
                  <p className="font-medium">Weekdays:</p>
                  <p>8:00 AM – 6:00 PM</p>
                </div>
                <div>
                  <p className="font-medium">Saturday:</p>
                  <p>9:00 AM – 3:00 PM</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="bg-white rounded-2xl shadow-xl p-8"
            variants={itemVariants}
          >
            <h3 className="text-2xl font-bold mb-6 text-[#9e0d22]">
              Send a Message
            </h3>

            <motion.form variants={containerVariants}>
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6"
                variants={itemVariants}
              >
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your name"
                    required
                    className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#9e0d22]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    required
                    className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#9e0d22]"
                  />
                </div>
              </motion.div>

              <motion.div className="mb-6" variants={itemVariants}>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="Subject of your message"
                  required
                  className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#9e0d22]"
                />
              </motion.div>

              <motion.div className="mb-6" variants={itemVariants}>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  placeholder="Write your message here..."
                  rows={5}
                  required
                  className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#9e0d22]"
                ></textarea>
              </motion.div>

              <motion.button
                type="submit"
                className="w-full py-4 flex items-center justify-center bg-gradient-to-l from-[#394854] to-[#9e0d22] hover:from-[#2e3a45] hover:to-[#7e0a1b] text-white font-semibold rounded-xl transition-all duration-300 group"
                variants={itemVariants}
              >
                Send Message
                <FiSend className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </motion.button>
            </motion.form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;
