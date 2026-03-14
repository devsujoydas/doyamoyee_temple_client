import { useEffect, useState } from "react";
import SEOHead from "../../components/SEOHead";
import { HiPencil, HiTrash, HiStar } from "react-icons/hi";

const AdminNotices = () => {

  const [notices, setNotices] = useState([]);

  useEffect(() => {
    fetch("/json/notice.json")
      .then((res) => res.json())
      .then(setNotices)
      .catch(console.error);
  }, []); 

  return (
    <div>
      <SEOHead title="Notice Management" description="Manage notices." path="/admin/notices" />
      <h1 className="text-2xl font-display font-bold text-foreground mb-6">Notice Management</h1>
      <div className="shadow-md bg-[#FCFBFB]  rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-[#F0EDEA]">
              <tr>
                <th className="text-left px-4 py-3 font-medium text-foreground">Title</th>
                <th className="text-left px-4 py-3 font-medium text-foreground">Date</th>
                <th className="text-left px-4 py-3 font-medium text-foreground">Important</th>
                <th className="text-left px-4 py-3 font-medium text-foreground">Actions</th>
              </tr>
            </thead>
            <tbody>
              {notices.map(notice => (
                <tr key={notice.id} className="border-t border-zinc-300">
                  <td className="px-4 py-3 text-foreground">{notice.title}</td>
                  <td className="px-4 py-3 text-muted-foreground">{notice.eventDate}</td>
                  <td className="px-4 py-3">{notice.isImportant && <HiStar className="text-accent" />}</td>
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
    </div>
  );
}

export default AdminNotices;
