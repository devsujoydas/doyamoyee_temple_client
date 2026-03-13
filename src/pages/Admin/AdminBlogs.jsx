

import { HiPencil, HiTrash } from "react-icons/hi";
import SEOHead from "../../components/SEOHead";
import { useEffect, useState } from "react";
import { CloudLightning } from "lucide-react";

const AdminBlogs = () => {
  const [blogsData, setBlogsData] = useState([]);

  useEffect(() => {
    fetch("/json/blogs.json")
      .then((res) => res.json())
      .then(setBlogsData)
      .catch(console.error);
  }, []);
 

  return (
    <div>
      <SEOHead title="Blog Management" description="Manage blog posts." path="/admin/blogs" />
      <h1 className="text-2xl font-display font-bold text-foreground mb-6">Blog Management</h1>
      <div className="glass-card rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-muted">
              <tr>
                <th className="text-left px-4 py-3 font-medium text-foreground">Title</th>
                <th className="text-left px-4 py-3 font-medium text-foreground">Author</th>
                <th className="text-left px-4 py-3 font-medium text-foreground">Date</th>
                <th className="text-left px-4 py-3 font-medium text-foreground">Actions</th>
              </tr>
            </thead>
            <tbody>
              {blogsData.map(post => (
                <tr key={post.slug} className="border-t border-border">
                  <td className="px-4 py-3 text-foreground">{post.title}</td>
                  <td className="px-4 py-3 text-muted-foreground">{post.author.name}</td>
                  <td className="px-4 py-3 text-muted-foreground">{post.date}</td>
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
  )
}

export default AdminBlogs;
