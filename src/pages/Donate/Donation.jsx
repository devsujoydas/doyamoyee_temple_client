import { useState } from "react";
import { motion } from "framer-motion";
import PageHeading from "../../shared/PageHeading";
import toast from "react-hot-toast";

const bankAccounts = [
  {
    bank: "DBBL",
    accountName: "Maa Doyamoyee Mandir",
    number: "112233445566778899",
    branch: "Jamalpur Branch",
    logo: "https://images.seeklogo.com/logo-png/31/1/dutch-bangla-bank-ltd-logo-png_seeklogo-310356.png",
  },
  {
    bank: "Sonali Bank",
    accountName: "Maa Doyamoyee Mandir",
    number: "112233445566778899",
    branch: "Jamalpur Branch",
    logo: "https://images.seeklogo.com/logo-png/31/1/sonali-bank-limited-logo-png_seeklogo-318183.png",
  },
  {
    bank: "Islami Bank",
    accountName: "Maa Doyamoyee Mandir",
    number: "112233445566778899",
    branch: "Jamalpur Branch",
    logo: "https://images.seeklogo.com/logo-png/55/1/islami-bank-bangladesh-plc-logo-png_seeklogo-550096.png",
  },
];

const mobileBanking = [
  {
    name: "bKash",
    accountName: "Maa Doyamoyee Mandir",
    number: "0123456789",
    logo: "https://images.seeklogo.com/logo-png/27/1/bkash-logo-png_seeklogo-273684.png",
  },
  {
    name: "Nagad",
    accountName: "Maa Doyamoyee Mandir",
    number: "0123456789",
    logo: "https://images.seeklogo.com/logo-png/41/1/nagad-logo-png_seeklogo-411803.png",
  },
  {
    name: "Rocket",
    accountName: "Maa Doyamoyee Mandir",
    number: "0123456789",
    logo: "https://images.seeklogo.com/logo-png/31/1/dutch-bangla-rocket-logo-png_seeklogo-317692.png",
  },
];

const Donation = () => {
  const [formData, setFormData] = useState({
    donorName: "",
    email: "",
    phone: "",
    paymentMethod: "bank",
    bankName: "",
    accountNumber: "",
    branchName: "",
    mobileBankName: "",
    transactionID: "",
    amount: "",
    screenshot: null,
    message: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) setFormData({ ...formData, [name]: files[0] });
    else setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    for (let key in formData) data.append(key, formData[key]);
    console.log("Send to backend:", data);
    toast.success("Donation proof submitted successfully!");
    setFormData({
      donorName: "",
      email: "",
      phone: "",
      paymentMethod: "bank",
      bankName: "",
      accountNumber: "",
      branchName: "",
      mobileBankName: "",
      transactionID: "",
      amount: "",
      screenshot: null,
      message: "",
    });
  };

  const copyNumber = (num) => {
    navigator.clipboard.writeText(num);
    toast.success("Number Copied!");
  };

  return (
    <section className="relative py-16 px-4 sm:py-20 sm:px-6 ">
      {/* Background Glow */}
      <div className="absolute top-10 left-4 w-32 h-32 sm:w-40 sm:h-40 bg-yellow-400 blur-3xl opacity-20 rounded-full animate-pulse"></div>
      <div className="absolute bottom-10 right-4 w-40 h-40 sm:w-52 sm:h-52 bg-red-600 blur-3xl opacity-20 rounded-full animate-pulse"></div>

      <div className="relative max-w-6xl mx-auto">
        <PageHeading section="donation" />


        {/* Payment Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10 md:mt-12">
          {/* Bank Accounts */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/80 backdrop-blur border border-yellow-500/40 rounded-2xl p-6 sm:p-8 shadow-lg"
          >
            <h2 className="text-lg sm:text-xl font-bold text-red-700 mb-4 sm:mb-6 text-center">Bank Accounts</h2>
            <div className="space-y-3 sm:space-y-4">
              {bankAccounts.map((acc, i) => (
                <div
                  key={i}
                  className="flex justify-between items-center bg-amber-50 border border-amber-200 rounded-lg px-3 py-2 sm:px-4 sm:py-3 hover:shadow-lg transition"
                >
                  <div className="flex items-center gap-2 sm:gap-3">
                    <img src={acc.logo} alt={acc.bank} className="w-8 h-8 sm:w-10 sm:h-10 object-contain" />
                    <div className="text-xs sm:text-sm">
                      <p className="text-gray-600">{acc.bank}</p>
                      <p className="font-semibold">{acc.accountName}</p>
                      <p className="text-gray-700">{acc.number}</p>
                      <p className="text-gray-500">{acc.branch}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => copyNumber(acc.number)}
                    className="text-xs sm:text-sm bg-red-600 text-white px-2 sm:px-3 py-1 rounded hover:bg-red-700 cursor-pointer"
                  >
                    Copy
                  </button>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Mobile Banking */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/80 backdrop-blur border border-yellow-500/40 rounded-2xl p-6 sm:p-8 shadow-lg"
          >
            <h2 className="text-lg sm:text-xl font-bold text-red-700 mb-4 sm:mb-6 text-center">Mobile Banking</h2>
            <div className="space-y-3 sm:space-y-4">
              {mobileBanking.map((acc, i) => (
                <div
                  key={i}
                  className="flex justify-between items-center bg-amber-50 border border-amber-200 rounded-lg px-3 py-2 sm:px-4 sm:py-3 hover:shadow-lg transition"
                >
                  <div className="flex items-center gap-2 sm:gap-3">
                    <img src={acc.logo} alt={acc.name} className="w-8 h-8 sm:w-10 sm:h-10 object-contain" />
                    <div className="text-xs sm:text-sm">
                      <p className="text-gray-600">{acc.name}</p>
                      <p className="font-semibold">{acc.accountName}</p>
                      <p className="text-gray-700">{acc.number}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => copyNumber(acc.number)}
                    className="text-xs sm:text-sm bg-red-600 text-white px-2 sm:px-3 py-1 rounded hover:bg-red-700 cursor-pointer"
                  >
                    Copy
                  </button>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Donation Proof Form */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/80 backdrop-blur border border-zinc-200 rounded-2xl p-6 sm:p-8 shadow-lg mt-10 sm:mt-16"
        >
          <h2 className="text-xl sm:text-2xl font-bold text-red-700 mb-6 sm:mb-8 text-center">
            Submit Donation Proof
          </h2>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {/* Name, Email, Phone */}
            <div className="flex flex-col">
              <label className="font-medium text-gray-700 mb-1 text-sm sm:text-base">Full Name</label>
              <input
                type="text"
                name="donorName"
                placeholder="Enter your full name"
                onChange={handleChange}
                required
                className="border border-zinc-200 focus:border-zinc-300 p-2 sm:p-3 rounded-md mt-1 bg-white outline-none text-sm sm:text-base"
              />
            </div>

            <div className="flex flex-col">
              <label className="font-medium text-gray-700 mb-1 text-sm sm:text-base">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                onChange={handleChange}
                required
                className="border border-zinc-200 focus:border-zinc-300 p-2 sm:p-3 rounded-md mt-1 bg-white outline-none text-sm sm:text-base"
              />
            </div>

            <div className="flex flex-col">
              <label className="font-medium text-gray-700 mb-1 text-sm sm:text-base">Phone Number</label>
              <input
                type="text"
                name="phone"
                placeholder="Enter your phone number"
                onChange={handleChange}
                required
                className="border border-zinc-200 focus:border-zinc-300 p-2 sm:p-3 rounded-md mt-1 bg-white outline-none text-sm sm:text-base"
              />
            </div>

            <div className="flex flex-col">
              <label className="font-medium text-gray-700 mb-1 text-sm sm:text-base">Payment Method</label>
              <select
                name="paymentMethod"
                value={formData.paymentMethod}
                onChange={handleChange}
                className="border border-zinc-200 focus:border-zinc-300 p-2 sm:p-3 rounded-md mt-1 bg-white outline-none cursor-pointer text-sm sm:text-base"
              >
                <option value="bank">Bank Transfer</option>
                <option value="mobile">Mobile Banking</option>
              </select>
            </div>

            {/* Conditional Fields */}
            {formData.paymentMethod === "bank" ? (
              <>
                <div className="flex flex-col">
                  <label className="font-medium text-gray-700 mb-1 text-sm sm:text-base">Bank Name</label>
                  <input
                    type="text"
                    name="bankName"
                    placeholder="Bank Name"
                    onChange={handleChange}
                    required
                    className="border border-zinc-200 focus:border-zinc-300 p-2 sm:p-3 rounded-md mt-1 bg-white outline-none text-sm sm:text-base"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="font-medium text-gray-700 mb-1 text-sm sm:text-base">Account Number</label>
                  <input
                    type="text"
                    name="accountNumber"
                    placeholder="Account Number"
                    onChange={handleChange}
                    required
                    className="border border-zinc-200 focus:border-zinc-300 p-2 sm:p-3 rounded-md mt-1 bg-white outline-none text-sm sm:text-base"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="font-medium text-gray-700 mb-1 text-sm sm:text-base">Branch Name</label>
                  <input
                    type="text"
                    name="branchName"
                    placeholder="Branch Name"
                    onChange={handleChange}
                    required
                    className="border border-zinc-200 focus:border-zinc-300 p-2 sm:p-3 rounded-md mt-1 bg-white outline-none text-sm sm:text-base"
                  />
                </div>
              </>
            ) : (
              <div className="flex flex-col sm:col-span-2 relative">
                <label className="font-medium text-gray-700 mb-1 text-sm sm:text-base">Mobile Banking Name</label>
                <select
                  name="mobileBankName"
                  value={formData.mobileBankName}
                  onChange={handleChange}
                  required
                  className="appearance-none w-full border border-zinc-200 focus:border-zinc-300 rounded-md p-2 sm:p-3 mt-1 bg-white outline-none cursor-pointer text-sm sm:text-base"
                >
                  <option value="">Select Mobile Banking</option>
                  <option value="bKash">bKash</option>
                  <option value="Nagad">Nagad</option>
                  <option value="Rocket">Rocket</option>
                </select>
              </div>
            )}

            {/* Amount */}
            <div className="flex flex-col">
              <label className="font-medium text-gray-700 mb-1 text-sm sm:text-base">Donation Amount</label>
              <input
                type="number"
                name="amount"
                placeholder="Enter amount"
                onChange={handleChange}
                required
                className="border border-zinc-200 focus:border-zinc-300 p-2 sm:p-3 rounded-md mt-1 bg-white outline-none text-sm sm:text-base"
              />
            </div>

            {/* Transaction ID */}
            <div className="flex flex-col sm:col-span-2">
              <label className="font-medium text-gray-700 mb-1 text-sm sm:text-base">Transaction ID / Reference</label>
              <input
                type="text"
                name="transactionID"
                placeholder="Transaction ID / Reference"
                onChange={handleChange}
                required
                className="border border-zinc-200 focus:border-zinc-300 p-2 sm:p-3 rounded-md mt-1 bg-white outline-none text-sm sm:text-base"
              />
            </div>

            {/* Screenshot Upload */}
            <div className="flex flex-col sm:col-span-2">
              <label className="font-medium text-gray-700 mb-1 text-sm sm:text-base">Upload Screenshot</label>
              <label
                htmlFor="dropzone-file"
                className="flex flex-col items-center justify-center w-full h-48 sm:h-64 bg-neutral-secondary-medium border border-dashed border-zinc-400 rounded-lg cursor-pointer hover:bg-neutral-tertiary-medium"
              >
                {formData.screenshot ? (
                  <img
                    src={URL.createObjectURL(formData.screenshot)}
                    alt="Preview"
                    className="h-48 sm:h-64 object-contain rounded-md"
                  />
                ) : (
                  <p className="text-center text-sm sm:text-base">Click to upload or drag and drop</p>
                )}
                <input
                  id="dropzone-file"
                  type="file"
                  name="screenshot"
                  onChange={handleChange}
                  accept="image/*"
                  className="hidden"
                />
              </label>
              {formData.screenshot && (
                <button
                  type="button"
                  className="mt-2 sm:mt-3 bg-red-600 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded hover:bg-red-700"
                  onClick={() => setFormData({ ...formData, screenshot: null })}
                >
                  Remove / Change
                </button>
              )}
            </div>

            {/* Message */}
            <div className="flex flex-col sm:col-span-2">
              <label className="font-medium text-gray-700 mb-1 text-sm sm:text-base">Optional Message</label>
              <textarea
                name="message"
                placeholder="Message"
                onChange={handleChange}
                className="border p-2 sm:p-3 rounded mt-1 bg-white outline-none border-zinc-200 text-sm sm:text-base"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-red-700 text-white py-2.5 sm:py-3 rounded font-semibold hover:bg-red-800 sm:col-span-2 mt-2"
            >
              Submit Donation Proof
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Donation;