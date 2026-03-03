import React from "react";

const DashboardCard = ({ label, value, icon }) => {
  return (
    <div className="bg-white p-6 rounded-xl border border-amber-200 shadow-sm hover:shadow-md transition text-center">
      {icon && <div className="mb-2">{icon}</div>}
      <h3 className="text-sm text-gray-500">{label}</h3>
      <p className="text-3xl font-bold text-amber-700 mt-2">{value}</p>
    </div>
  );
};

export default DashboardCard;