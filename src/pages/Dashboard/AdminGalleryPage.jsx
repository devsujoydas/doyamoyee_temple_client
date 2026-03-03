import React, { useState } from "react"; 
import PageHeading from "../../components/PageHeading";
import DashboardGrid from "../../components/DashboardGrid";
import ModalForm from "../../components/ModalForm";

const AdminGalleryPage = () => {
  const [images, setImages] = useState([
    { id: 1, src: "/images/temple1.jpg", alt: "Temple 1" },
    { id: 2, src: "/images/temple2.jpg", alt: "Temple 2" },
    { id: 3, src: "/images/temple3.jpg", alt: "Temple 3" },
  ]);

  const [modalOpen, setModalOpen] = useState(false);
  const [file, setFile] = useState(null);
  const [alt, setAlt] = useState("");

  const openAddModal = () => {
    setFile(null);
    setAlt("");
    setModalOpen(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newImage = { id: Date.now(), src: URL.createObjectURL(file), alt };
    setImages([...images, newImage]);
    setModalOpen(false);
  };

  const handleDelete = (id) => {
    setImages(images.filter((img) => img.id !== id));
  };

  return (
    <div>
      <PageHeading title="Gallery" desc={`Total Images: ${images.length}`} />

      <button
        onClick={openAddModal}
        className="mb-6 px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition"
      >
        Add Image
      </button>

      <DashboardGrid>
        {images.map((img) => (
          <div
            key={img.id}
            className="rounded-xl overflow-hidden border border-amber-200 shadow-sm hover:shadow-md relative"
          >
            <img src={img.src} alt={img.alt} className="w-full h-48 object-cover" />
            <div className="absolute top-2 right-2">
              <button
                onClick={() => handleDelete(img.id)}
                className="text-red-600 hover:underline text-sm bg-white/80 px-2 rounded"
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
        title="Add Image"
        onSubmit={handleSubmit}
      >
        <input
          type="file"
          accept="image/*"
          className="w-full border border-gray-300 rounded-lg p-2"
          onChange={(e) => setFile(e.target.files[0])}
          required
        />
        <input
          type="text"
          placeholder="Image Alt Text"
          className="w-full border border-gray-300 rounded-lg p-2 mt-2"
          value={alt}
          onChange={(e) => setAlt(e.target.value)}
          required
        />
      </ModalForm>
    </div>
  );
};
 
export default AdminGalleryPage;