import React, { useState } from "react"; 
import PageHeading from "../../components/PageHeading";
import DashboardGrid from "../../components/DashboardGrid";
import ModalForm from "../../components/ModalForm";

const DashboardEventsPage = () => {
  const [events, setEvents] = useState([
    { id: 1, title: "শ্রী শ্রী দয়াময়ী পূজা", date: "2026-03-10" },
    { id: 2, title: "নববর্ষ অনুষ্ঠান", date: "2026-04-14" },
  ]);

  const [modalOpen, setModalOpen] = useState(false);
  const [editingEvent, setEditingEvent] = useState(null);
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");

  const openAddModal = () => {
    setEditingEvent(null);
    setTitle("");
    setDate("");
    setModalOpen(true);
  };

  const openEditModal = (event) => {
    setEditingEvent(event);
    setTitle(event.title);
    setDate(event.date);
    setModalOpen(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingEvent) {
      setEvents(
        events.map((ev) =>
          ev.id === editingEvent.id ? { ...ev, title, date } : ev
        )
      );
    } else {
      setEvents([...events, { id: Date.now(), title, date }]);
    }
    setModalOpen(false);
  };

  const handleDelete = (id) => {
    setEvents(events.filter((ev) => ev.id !== id));
  };

  return (
    <div>
      <PageHeading title="Events" desc={`Total Events: ${events.length}`} />

      <button
        onClick={openAddModal}
        className="mb-6 px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition"
      >
        Add Event
      </button>

      <DashboardGrid>
        {events.map((ev) => (
          <div
            key={ev.id}
            className="bg-white p-6 rounded-xl border border-amber-200 shadow-sm hover:shadow-md text-center relative"
          >
            <h3 className="text-lg font-semibold text-gray-900">{ev.title}</h3>
            <p className="text-sm text-gray-500 mt-1">{ev.date}</p>
            <div className="absolute top-2 right-2 flex gap-2">
              <button
                onClick={() => openEditModal(ev)}
                className="text-blue-600 hover:underline text-sm"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(ev.id)}
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
        title={editingEvent ? "Edit Event" : "Add Event"}
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Event Title"
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

export default DashboardEventsPage;