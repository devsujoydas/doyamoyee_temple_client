// pages/DashboardHome.jsx
import React from "react";

const DashboardHome = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {[
        { label: "মোট সদস্য", value: "৮৪" },
        { label: "মোট নোটিশ", value: "১২" },
        { label: "অনুষ্ঠান", value: "৫" },
        { label: "গ্যালারি ছবি", value: "২৪০" },
      ].map((item, idx) => (
        <div
          key={idx}
          className="bg-white p-6 rounded-xl border border-amber-200 shadow-sm"
        >
          <h3 className="text-sm text-gray-500">{item.label}</h3>
          <p className="text-3xl font-bold text-amber-700 mt-2">{item.value}</p>
        </div>
      ))}
    </div>
  );
};

export default DashboardHome;