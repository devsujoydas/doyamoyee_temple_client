import React from "react";
import { motion } from "framer-motion";
import { MapPin, PhoneCall, Mail, Facebook, Instagram, Twitter } from "lucide-react";
import PageHeading from "../../shared/PageHeading";

const Contact = () => {
  return (
    <section className="min-h-screen py-16 px-4 sm:py-24">
      <div className="max-w-7xl mx-auto">

        {/* Animated Page Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <PageHeading section="contact" />
        </motion.div>

        {/* Grid: Contact Info + Map */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-12">

          {/* 🔹 Contact Info Card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/20 backdrop-blur-md p-8 rounded-3xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1"
          >
            {/* Address */}
            <div className="flex items-start gap-4 mb-6">
              <MapPin className="w-7 h-7 text-yellow-600 mt-1" />
              <div>
                <h4 className="font-semibold text-gray-900 mb-1 text-lg">ঠিকানা</h4>
                <p className="text-gray-700 text-sm sm:text-base">
                  দয়াময়ী মন্দির, জামালপুর সদর, জামালপুর, ময়মনসিংহ, বাংলাদেশ
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-4 mb-6">
              <PhoneCall className="w-7 h-7 text-yellow-600"/>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1 text-lg">ফোন</h4>
                <a href="tel:017XXXXXXXX" className="text-blue-600 hover:underline text-sm sm:text-base">017XXXXXXXX</a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-4 mb-6">
              <Mail className="w-7 h-7 text-yellow-600"/>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1 text-lg">ইমেইল</h4>
                <a href="mailto:temple@example.com" className="text-blue-600 hover:underline text-sm sm:text-base">temple@example.com</a>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-3 text-lg">সোশ্যাল মিডিয়া</h4>
              <div className="flex gap-4">
                <a href="#" className="bg-white/40 backdrop-blur-md p-3 rounded-full hover:scale-110 hover:bg-blue-600 transition text-blue-600 hover:text-white">
                  <Facebook className="w-5 h-5"/>
                </a>
                <a href="#" className="bg-white/40 backdrop-blur-md p-3 rounded-full hover:scale-110 hover:bg-pink-500 transition text-pink-500 hover:text-white">
                  <Instagram className="w-5 h-5"/>
                </a>
                <a href="#" className="bg-white/40 backdrop-blur-md p-3 rounded-full hover:scale-110 hover:bg-blue-500 transition text-blue-500 hover:text-white">
                  <Twitter className="w-5 h-5"/>
                </a>
              </div>
            </div>
          </motion.div>

          {/* 🔹 Google Map Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="overflow-hidden rounded-3xl border border-gray-200 shadow-lg hover:shadow-2xl transition transform hover:scale-[1.02]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d443.1118780753955!2d89.94966128738012!3d24.92327856258347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fd7f6c3dfab4c3%3A0xb69912834310fba9!2sDoyamoyee%20Temple!5e1!3m2!1sbn!2sbd!4v1772283605228!5m2!1sbn!2sbd"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Doyamoyee Temple Location"
            ></iframe>
          </motion.div>
        </div>

        {/* 🔹 Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 bg-white/20 backdrop-blur-md p-6 sm:p-8 rounded-3xl shadow-lg max-w-3xl mx-auto hover:shadow-2xl transition transform hover:-translate-y-1"
        >
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 text-center">মেসেজ পাঠান</h3>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium mb-1">নাম</label>
              <input
                type="text"
                placeholder="আপনার নাম লিখুন"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">ইমেইল</label>
              <input
                type="email"
                placeholder="আপনার ইমেইল"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">মেসেজ</label>
              <textarea
                placeholder="আপনার বার্তা লিখুন"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
                rows={4}
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full md:w-auto px-6 py-2 bg-yellow-600 text-white rounded-full hover:bg-yellow-700 transition transform hover:scale-105"
            >
              পাঠান
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;