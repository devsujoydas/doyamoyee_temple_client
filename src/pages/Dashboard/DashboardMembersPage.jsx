import React, { useState } from "react"; 
import PageHeading from "../../components/PageHeading";
import DashboardGrid from "../../components/DashboardGrid";
import ModalForm from "../../components/ModalForm";

const DashboardMembersPage = () => {
  const [members, setMembers] = useState([
    { id: 1, name: "শ্রী রাম চন্দ্র কানু" },
    { id: 2, name: "শ্রী সিতাংশু কুমার সোম" },
    { id: 3, name: "শ্রী বাসুদেব চক্রবর্তী" },
  ]);

  const [modalOpen, setModalOpen] = useState(false);
  const [editingMember, setEditingMember] = useState(null);
  const [name, setName] = useState("");

  const openAddModal = () => {
    setEditingMember(null);
    setName("");
    setModalOpen(true);
  };

  const openEditModal = (member) => {
    setEditingMember(member);
    setName(member.name);
    setModalOpen(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingMember) {
      setMembers(
        members.map((m) => (m.id === editingMember.id ? { ...m, name } : m))
      );
    } else {
      setMembers([...members, { id: Date.now(), name }]);
    }
    setModalOpen(false);
    setName("");
  };

  const handleDelete = (id) => {
    setMembers(members.filter((m) => m.id !== id));
  };

  return (
    <div>
      <PageHeading title="Members" desc={`Total Members: ${members.length}`} />

      <button
        onClick={openAddModal}
        className="mb-6 px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition"
      >
        Add Member
      </button>

      <DashboardGrid>
        {members.map((m) => (
          <div
            key={m.id}
            className="bg-white p-6 rounded-xl border border-amber-200 shadow-sm hover:shadow-md text-center relative"
          >
            <h3 className="text-lg font-semibold text-gray-900">{m.name}</h3>
            <div className="absolute top-2 right-2 flex gap-2">
              <button
                onClick={() => openEditModal(m)}
                className="text-blue-600 hover:underline text-sm"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(m.id)}
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
        title={editingMember ? "Edit Member" : "Add Member"}
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Member Name"
          className="w-full border border-gray-300 rounded-lg p-2"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </ModalForm>
    </div>
  );
};

export default DashboardMembersPage;