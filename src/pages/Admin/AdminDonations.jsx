import { useEffect, useState } from "react";
import SEOHead from "../../components/SEOHead";

const AdminDonations = () => {
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    fetch("/json/donation.json")
      .then((res) => res.json())
      .then(setDonations)
      .catch(console.error);
  }, []);

  const handleStatusChange = (id, newStatus) => {
    const updated = donations.map((d) =>
      d.id === id ? { ...d, status: newStatus } : d
    );

    setDonations(updated);
  };

  const totalDonation = donations.reduce((sum, d) => sum + d.amount, 0);

  const verifiedDonation = donations
    .filter((d) => d.status === "verified")
    .reduce((sum, d) => sum + d.amount, 0);

  const pendingDonation = donations
    .filter((d) => d.status === "pending")
    .reduce((sum, d) => sum + d.amount, 0);
  const rejectedDonation = donations
    .filter((d) => d.status === "rejected")
    .reduce((sum, d) => sum + d.amount, 0);

  return (
    <div className="space-y-6">

      <SEOHead
        title="Donation Overview"
        description="Temple donation records."
        path="/admin/donations"
      />

      <h1 className="text-2xl font-bold">Donation Dashboard</h1>



      <div className="grid md:grid-cols-4 gap-4">

        <div className="bg-white border border-zinc-300 shadow-md rounded-xl p-4">
          <p className="text-sm text-muted-foreground">Total Donation</p>
          <h3 className="text-xl font-bold text-green-600">
            ৳{totalDonation.toLocaleString()}
          </h3>
        </div>

        <div className="bg-white border border-zinc-300 shadow-md rounded-xl p-4">
          <p className="text-sm text-muted-foreground">Verified</p>
          <h3 className="text-xl font-bold text-blue-600">
            ৳{verifiedDonation.toLocaleString()}
          </h3>
        </div>

        <div className="bg-white border border-zinc-300 shadow-md rounded-xl p-4">
          <p className="text-sm text-muted-foreground">Pending</p>
          <h3 className="text-xl font-bold text-yellow-600">
            ৳{pendingDonation.toLocaleString()}
          </h3>
        </div>

        <div className="bg-white border border-zinc-300 shadow-md rounded-xl p-4">
          <p className="text-sm text-muted-foreground">Rejected</p>
          <h3 className="text-xl font-bold text-yellow-600">
            ৳{rejectedDonation.toLocaleString()}
          </h3>
        </div>
      </div>

      {/* Donation Table */}

      <div className="bg-white border border-zinc-300 shadow-md rounded-xl overflow-hidden">

        <div className="overflow-x-auto">
          <table className="w-full text-sm">

            <thead className="bg-[#F0EDEA]">
              <tr>
                <th className="px-4 py-3 text-left">Donor</th>
                <th className="px-4 py-3 text-left">Amount</th>
                <th className="px-4 py-3 text-left">Payment</th>
                <th className="px-4 py-3 text-left">Transaction</th>
                <th className="px-4 py-3 text-left">Status</th>
                <th className="px-4 py-3 text-left">Message</th>
              </tr>
            </thead>

            <tbody>

              {donations.map((d) => (

                <tr key={d.id} className="border-t border-zinc-300">

                  {/* Donor */}
                  <td className="px-4 py-3">
                    <div className="font-medium">{d.donorName}</div>
                    <div className="text-xs text-muted-foreground">
                      {d.email}
                    </div>
                  </td>

                  {/* Amount */}
                  <td className="px-4 py-3 font-semibold text-green-600">
                    ৳{d.amount.toLocaleString()}
                  </td>

                  {/* Payment */}
                  <td className="px-4 py-3 text-xs">
                    {d.paymentMethod === "bank"
                      ? d.bankName
                      : d.mobileBankName}
                  </td>

                  {/* Transaction */}
                  <td className="px-4 py-3 text-xs text-muted-foreground">
                    {d.transactionID}
                  </td>

                  {/* Status Dropdown */}
                  <td className="px-4 py-3">

                    <select
                      value={d.status}
                      onChange={(e) =>
                        handleStatusChange(d.id, e.target.value)
                      }
                      className="border border-zinc-300 rounded px-2 py-1 text-xs outline-none"
                    >
                      <option value="pending">Pending</option>
                      <option value="verified">Verified</option>
                      <option value="rejected">Rejected</option>
                    </select>

                  </td>

                  {/* Message */}
                  <td className="px-4 py-3 text-xs text-muted-foreground max-w-[200px] truncate">
                    {d.message}
                  </td>

                </tr>

              ))}

            </tbody>

          </table>
        </div>

      </div>

    </div>
  );
};

export default AdminDonations;