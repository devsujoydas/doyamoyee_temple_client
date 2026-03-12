import DashboardLayout from "../../Layouts/DashboardLayout";
import SEOHead from "../../components/SEOHead";
import { dummyEvents } from "../../data/dummyData";
import { HiPencil, HiTrash } from "react-icons/hi";

const AdminEvents = () => (
  <DashboardLayout>
    <SEOHead title="Event Management" description="Manage events." path="/admin/events" />
    <h1 className="text-2xl font-display font-bold text-foreground mb-6">Event Management</h1>
    <div className="glass-card rounded-xl overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-muted">
            <tr>
              <th className="text-left px-4 py-3 font-medium text-foreground">Event</th>
              <th className="text-left px-4 py-3 font-medium text-foreground">Date</th>
              <th className="text-left px-4 py-3 font-medium text-foreground">Status</th>
              <th className="text-left px-4 py-3 font-medium text-foreground">Actions</th>
            </tr>
          </thead>
          <tbody>
            {dummyEvents.map(event => (
              <tr key={event.id} className="border-t border-border">
                <td className="px-4 py-3 text-foreground">{event.title}</td>
                <td className="px-4 py-3 text-muted-foreground">{event.date}</td>
                <td className="px-4 py-3">
                  <span className={`text-xs font-medium px-2 py-1 rounded ${event.upcoming ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground"}`}>
                    {event.upcoming ? "Upcoming" : "Past"}
                  </span>
                </td>
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

export default AdminEvents;
