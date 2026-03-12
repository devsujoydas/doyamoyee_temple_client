 
import SEOHead from "../../components/SEOHead"; 
import { dummyDonations } from "../../data/dummyData";
import DashboardLayout from "../../Layouts/DashboardLayout";

const AdminDonations = () => (
  <DashboardLayout>
    <SEOHead title="Donation Overview" description="View donation records." path="/admin/donations" />
    <h1 className="text-2xl font-display font-bold text-foreground mb-6">Donation Overview</h1>
    <div className="glass-card rounded-xl overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-muted">
            <tr>
              <th className="text-left px-4 py-3 font-medium text-foreground">Donor</th>
              <th className="text-left px-4 py-3 font-medium text-foreground">Amount</th>
              <th className="text-left px-4 py-3 font-medium text-foreground">Date</th>
              <th className="text-left px-4 py-3 font-medium text-foreground">Message</th>
            </tr>
          </thead>
          <tbody>
            {dummyDonations.map(d => (
              <tr key={d.id} className="border-t border-border">
                <td className="px-4 py-3 text-foreground">{d.name}</td>
                <td className="px-4 py-3 font-semibold text-foreground">₹{d.amount.toLocaleString()}</td>
                <td className="px-4 py-3 text-muted-foreground">{d.date}</td>
                <td className="px-4 py-3 text-muted-foreground">{d.message}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </DashboardLayout>
);

export default AdminDonations;
