import React, { useState } from "react"; 
import PageHeading from "../../components/PageHeading";
import DashboardGrid from "../../components/DashboardGrid";
import ModalForm from "../../components/ModalForm";

const NoticesPage = () => {
  const [notices, setNotices] = useState([
    { id: 1, title: "শ্রী শ্রী দয়াময়ী পূজা", date: "2026-03-10" },
    { id: 2, title: "নববর্ষ অনুষ্ঠান", date: "2026-04-14" },
  ]);

  const [modalOpen, setModalOpen] = useState(false);
  const [editingNotice, setEditingNotice] = useState(null);
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");

  const openAddModal = () => {
    setEditingNotice(null);
    setTitle("");
    setDate("");
    setModalOpen(true);
  };

  const openEditModal = (notice) => {
    setEditingNotice(notice);
    setTitle(notice.title);
    setDate(notice.date);
    setModalOpen(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingNotice) {
      setNotices(
        notices.map((n) =>
          n.id === editingNotice.id ? { ...n, title, date } : n
        )
      );
    } else {
      setNotices([...notices, { id: Date.now(), title, date }]);
    }
    setModalOpen(false);
  };

  const handleDelete = (id) => {
    setNotices(notices.filter((n) => n.id !== id));
  };

  return (
    <div>
      <PageHeading title="Notices" desc={`Total Notices: ${notices.length}`} />

      <button
        onClick={openAddModal}
        className="mb-6 px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition"
      >
        Add Notice
      </button>

      <DashboardGrid cols="grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {notices.map((n) => (
          <div
            key={n.id}
            className="bg-white p-6 rounded-xl border border-amber-200 shadow-sm hover:shadow-md text-center relative"
          >
            <h3 className="text-lg font-semibold text-gray-900">{n.title}</h3>
            <p className="text-sm text-gray-500 mt-1">{n.date}</p>

            <div className="absolute top-2 right-2 flex gap-2">
              <button
                onClick={() => openEditModal(n)}
                className="text-blue-600 hover:underline text-sm"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(n.id)}
                className="text-red-600 hover:underline text-sm"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </DashboardGrid>

      <ModalForm
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title={editingNotice ? "Edit Notice" : "Add Notice"}
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Notice Title"
          className="w-full border border-gray-300 rounded-lg p-2"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="date"
          className="w-full border border-gray-300 rounded-lg p-2 mt-2"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </ModalForm>
    </div>
  );
};

export default NoticesPage;