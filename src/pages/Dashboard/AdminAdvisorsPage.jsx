import React, { useState } from "react"; 
import PageHeading from "../../components/PageHeading";
import DashboardGrid from "../../components/DashboardGrid";
import ModalForm from "../../components/ModalForm";

const AdminAdvisorsPage = () => {
  const [advisors, setAdvisors] = useState([
    { id: 1, name: "শ্রী রফিকুল ইসলাম", address: "জামালপুর" },
    { id: 2, name: "শ্রী মনিরুল ইসলাম", address: "জামালপুর" },
  ]);

  const [modalOpen, setModalOpen] = useState(false);
  const [editingAdvisor, setEditingAdvisor] = useState(null);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");

  const openAddModal = () => {
    setEditingAdvisor(null);
    setName("");
    setAddress("");
    setModalOpen(true);
  };

  const openEditModal = (adv) => {
    setEditingAdvisor(adv);
    setName(adv.name);
    setAddress(adv.address);
    setModalOpen(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingAdvisor) {
      setAdvisors(
        advisors.map((a) =>
          a.id === editingAdvisor.id ? { ...a, name, address } : a
        )
      );
    } else {
      setAdvisors([...advisors, { id: Date.now(), name, address }]);
    }
    setModalOpen(false);
  };

  const handleDelete = (id) => {
    setAdvisors(advisors.filter((a) => a.id !== id));
  };

  return (
    <div>
      <PageHeading title="Advisors" desc={`Total Advisors: ${advisors.length}`} />

      <button
        onClick={openAddModal}
        className="mb-6 px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition"
      >
        Add Advisor
      </button>

      <DashboardGrid>
        {advisors.map((a) => (
          <div
            key={a.id}
            className="bg-white p-6 rounded-xl border border-amber-200 shadow-sm hover:shadow-md text-center relative"
          >
            <h3 className="text-lg font-semibold text-gray-900">{a.name}</h3>
            <p className="text-sm text-gray-500 mt-1">{a.address}</p>
            <div className="absolute top-2 right-2 flex gap-2">
              <button
                onClick={() => openEditModal(a)}
                className="text-blue-600 hover:underline text-sm"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(a.id)}
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
        title={editingAdvisor ? "Edit Advisor" : "Add Advisor"}
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Advisor Name"
          className="w-full border border-gray-300 rounded-lg p-2"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Address"
          className="w-full border border-gray-300 rounded-lg p-2 mt-2"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />
      </ModalForm>
    </div>
  );
};
 
export default AdminAdvisorsPage;