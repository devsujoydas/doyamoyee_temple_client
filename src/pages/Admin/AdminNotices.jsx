import DashboardLayout from "../../Layouts/DashboardLayout";
import SEOHead from "../../components/SEOHead";
import { dummyNotices } from "../../data/dummyData";
import { HiPencil, HiTrash, HiStar } from "react-icons/hi";

const AdminNotices = () => (
  <DashboardLayout>
    <SEOHead title="Notice Management" description="Manage notices." path="/admin/notices" />
    <h1 className="text-2xl font-display font-bold text-foreground mb-6">Notice Management</h1>
    <div className="glass-card rounded-xl overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-muted">
            <tr>
              <th className="text-left px-4 py-3 font-medium text-foreground">Title</th>
              <th className="text-left px-4 py-3 font-medium text-foreground">Date</th>
              <th className="text-left px-4 py-3 font-medium text-foreground">Important</th>
              <th className="text-left px-4 py-3 font-medium text-foreground">Actions</th>
            </tr>
          </thead>
          <tbody>
            {dummyNotices.map(notice => (
              <tr key={notice.id} className="border-t border-border">
                <td className="px-4 py-3 text-foreground">{notice.title}</td>
                <td className="px-4 py-3 text-muted-foreground">{notice.date}</td>
                <td className="px-4 py-3">{notice.important && <HiStar className="text-accent" />}</td>
                <td className="px-4 py-3">
                  <div className="flex gap-2">
                    <button className="text-primary hover:text-primary/80"><HiPencil size={16} /></button>
                    <button className="text-destructive hover:text-destructive/80"><HiTrash size={16} /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </DashboardLayout>
);

export default AdminNotices;
