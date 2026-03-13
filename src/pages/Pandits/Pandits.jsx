import React from "react";
import { motion } from "framer-motion";
import PageHeading from "../../shared/PageHeading";

const Pandits = () => {
  const pandits = [
    {
      id: 1,
      name: "শ্রী সজল চক্রবর্তী",
      designation: "প্রধান পুরোহিত",
      experience: "১৫ বছর",
      phone: "017XXXXXXXX",
      email: "sajal@gmail.com",
      speciality: "দুর্গাপূজা ও কালীপূজা",
      availableDays: "প্রতিদিন সকাল ৮টা - দুপুর ১টা",
      image: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png?_=20170328184010"
    },
    {
      id: 2,
      name: "শ্রী নিরঞ্জন ভাদুড়ি",
      designation: "প্রধান পুরোহিত",
      experience: "১৫ বছর",
      phone: "018XXXXXXXX",
      email: "niranjan@gmail.com",
      speciality: "দুর্গাপূজা ও কালীপূজা",
      availableDays: "শুক্র ও শনিবার",
      image: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png?_=20170328184010"
    },
    {
      id: 3,
      name: "শ্রী অমিতাভ বন্দ্যোপাধ্যায়",
      designation: "বৈদিক পুরোহিত",
      experience: "১২ বছর",
      phone: "019XXXXXXXX",
      email: "amitabh.pandit@example.com",
      speciality: "বিবাহ ও উপনয়ন অনুষ্ঠান",
      availableDays: "সোম - বৃহস্পতি",
      image: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png?_=20170328184010"
    },
    {
      id: 4,
      name: "শ্রী দেবাশিস ভট্টাচার্য",
      designation: "যজ্ঞ ও হোম বিশেষজ্ঞ",
      experience: "১৮ বছর",
      phone: "016XXXXXXXX",
      email: "",
      speciality: "যজ্ঞ, গৃহশান্তি ও বিশেষ পূজা",
      availableDays: "শনিবার ও রবিবার",
      image: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png?_=20170328184010"
    }
  ];

  return (
    <section className="relative min-h-screen py-24 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        <PageHeading
          title={"পুরোহিত"}
          desc={"আমাদের মন্দিরে নিয়মিত পূজা ও ধর্মীয় আচার অনুষ্ঠান সম্পাদন করেন অভিজ্ঞ পুরোহিতবৃন্দ।"}
          shortdesc={"তারা প্রতিদিনের পূজা, বিশেষ উৎসব এবং ভক্তদের ধর্মীয় নির্দেশনা প্রদান করেন।"}
        />

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-12 mt-10">
          {pandits.map((pandit, index) => (
            <motion.div
              key={pandit.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="relative rounded-3xl shadow-md hover:shadow-xl hover:-translate-y-1 hover:scale-105 transition-all duration-300 bg-white/30 backdrop-blur-sm"
            >

              {/* Image halo */}
              <div className="pt-10 pb-3 flex flex-col items-center relative">
                <div className="absolute -top-4 w-32 h-32 bg-yellow-100/40 rounded-full blur-2xl"></div>
                <div className="relative w-28 h-28 rounded-full bg-yellow-50 flex items-center justify-center shadow-inner z-10">
                  <img
                    src={pandit.image}
                    alt={pandit.name}
                    className="w-24 h-24 rounded-full object-cover border-4 border-white shadow"
                  />
                </div>

                <h3 className="mt-4 text-xl font-bold text-gray-900 z-10 relative text-center">
                  {pandit.name}
                </h3>

                <p className="text-yellow-700 font-medium z-10 relative text-center">
                  {pandit.designation}
                </p>
              </div>

              {/* Info */}
              <div className="p-8 text-sm text-gray-700 space-y-3">

                <div className="flex justify-between">
                  <span className="font-medium">অভিজ্ঞতা</span>
                  <span>{pandit.experience}</span>
                </div>

                <div className="flex justify-between">
                  <span className="font-medium">বিশেষ দক্ষতা</span>
                  <span className="text-right">{pandit.speciality}</span>
                </div>

                <div className="flex justify-between">
                  <span className="font-medium">উপস্থিতি</span>
                  <span className="text-right">{pandit.availableDays}</span>
                </div>

                {/* নতুন info rows: ফোন ও ইমেইল */}
                <div className="flex justify-between">
                  <span className="font-medium">ফোন</span>
                  <span>
                    <a href={`tel:${pandit.phone}`} className="text-blue-600 hover:underline">
                      {pandit.phone}
                    </a>
                  </span>
                </div>

                {pandit.email && (
                  <div className="flex justify-between">
                    <span className="font-medium">ইমেইল</span>
                    <span>
                      <a href={`mailto:${pandit.email}`} className="text-blue-600 hover:underline">
                        {pandit.email}
                      </a>
                    </span>
                  </div>
                )}

                {/* CTA Buttons */}
                <div className="pt-4 flex gap-3 justify-center">
                  <a
                    href={`tel:${pandit.phone}`}
                    className="px-4 py-2 bg-yellow-600 text-white rounded-full hover:bg-yellow-700 transition text-xs"
                  >
                    কল করুন
                  </a>

                  {pandit.email && (
                    <a
                      href={`mailto:${pandit.email}`}
                      className="px-4 py-2 border border-yellow-600 text-yellow-700 rounded-full hover:bg-yellow-50 transition text-xs"
                    >
                      ইমেইল
                    </a>
                  )}
                </div>

              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Pandits;