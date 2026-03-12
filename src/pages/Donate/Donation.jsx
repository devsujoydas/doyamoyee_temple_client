import { useState } from "react";
import { motion } from "framer-motion";
import { HiHeart } from "react-icons/hi";
import PageHeading from "../../components/PageHeading";

const presetAmounts = [500, 1000, 2000, 5000, 10000, 20000];

const Donation = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    amount: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!form.name.trim()) newErrors.name = "Name is required";

    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email))
      newErrors.email = "Invalid email";

    if (!form.phone.trim()) newErrors.phone = "Phone number is required";
    else if (form.phone.length < 10)
      newErrors.phone = "Enter valid phone number";

    if (!form.amount || form.amount <= 0)
      newErrors.amount = "Enter donation amount";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setSubmitted(true);

    setForm({
      name: "",
      email: "",
      phone: "",
      amount: "",
      message: "",
    });
  };

  return (
    <div className="bg-orange-50">




      {/* Donation Form */}
      <section className="py-16">
        {/* Animated Page Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <PageHeading
            title="অনুদান"
            desc="মা দয়াময়ী মন্দিরের সেবা, পূজা-অর্চনা ও বিভিন্ন ধর্মীয় কার্যক্রম পরিচালনার জন্য আপনার অনুদান আমাদের জন্য অত্যন্ত মূল্যবান।"
            shortdesc="আপনার সামান্য অনুদানও মন্দিরের উন্নয়ন, উৎসব আয়োজন এবং ধর্মীয় ঐতিহ্য সংরক্ষণে গুরুত্বপূর্ণ ভূমিকা রাখে।"
          />
        </motion.div>
        <div className="max-w-xl mx-auto px-4">

          {submitted ? (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-center py-16"
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 0.6 }}
              >
                <HiHeart size={70} className="text-red-500 mx-auto mb-4" />
              </motion.div>

              <h2 className="text-2xl font-bold text-red-700 mb-2">
                Thank You!
              </h2>

              <p className="text-gray-600 mb-6">
                Your donation has been received. Maa Doyamoyee bless you.
              </p>

              <button
                onClick={() => setSubmitted(false)}
                className="px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition"
              >
                Donate Again
              </button>
            </motion.div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="border border-orange-200 bg-white shadow-lg rounded-xl p-6 space-y-5"
            >
              {/* Name */}
              <div>
                <label className="text-sm font-medium text-gray-700">
                  Full Name
                </label>

                <input
                  type="text"
                  value={form.name}
                  onChange={(e) =>
                    setForm({ ...form, name: e.target.value })
                  }
                  className="w-full mt-1 bg-orange-50 border border-orange-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                />

                {errors.name && (
                  <p className="text-red-500 text-sm">{errors.name}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="text-sm font-medium text-gray-700">
                  Email
                </label>

                <input
                  type="email"
                  value={form.email}
                  onChange={(e) =>
                    setForm({ ...form, email: e.target.value })
                  }
                  className="w-full mt-1 bg-orange-50 border border-orange-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                />

                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email}</p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label className="text-sm font-medium text-gray-700">
                  Phone
                </label>

                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) =>
                    setForm({ ...form, phone: e.target.value })
                  }
                  className="w-full mt-1 bg-orange-50 border border-orange-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                />

                {errors.phone && (
                  <p className="text-red-500 text-sm">{errors.phone}</p>
                )}
              </div>

              {/* Amount */}
              <div>
                <label className="text-sm font-medium text-gray-700">
                  Donation Amount (৳)
                </label>

                <div className="flex flex-wrap gap-2 my-3">
                  {presetAmounts.map((amt) => (
                    <button
                      key={amt}
                      type="button"
                      onClick={() =>
                        setForm({ ...form, amount: amt })
                      }
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition ${form.amount === amt
                        ? "bg-orange-600 text-white"
                        : "bg-orange-100 text-orange-700 hover:bg-orange-200"
                        }`}
                    >
                      ৳{amt}
                    </button>
                  ))}
                </div>

                <input
                  type="number"
                  placeholder="Custom amount"
                  value={form.amount}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      amount: Number(e.target.value),
                    })
                  }
                  className="w-full bg-orange-50 border border-orange-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                />

                {errors.amount && (
                  <p className="text-red-500 text-sm">
                    {errors.amount}
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <label className="text-sm font-medium text-gray-700">
                  Message (Optional)
                </label>

                <textarea
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  className="w-full bg-orange-50 border border-orange-200 rounded-lg px-4 py-2 h-20 focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
              </div>

              {/* Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 rounded-lg font-semibold hover:scale-105 transition"
              >
                Donate ৳{form.amount || ""}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Why Donate */}
      <section className="py-16 bg-orange-100">
        <div className="max-w-2xl mx-auto text-center px-4">
          <h2 className="text-2xl font-bold text-red-700 mb-4">
            Why Donate?
          </h2>

          <p className="text-gray-700 leading-relaxed">
            Your donations help maintain the temple premises,
            organize religious festivals, support community
            programs, and preserve our spiritual heritage for
            future generations.
          </p>
        </div>
      </section>

    </div>
  );
};

export default Donation;