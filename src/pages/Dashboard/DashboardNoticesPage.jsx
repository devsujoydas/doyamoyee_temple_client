import React, { useEffect, useState } from "react";
import PageHeading from "../../shared/PageHeading";
import DashboardGrid from "../../components/DashboardGrid";
import ModalForm from "../../components/ModalForm";
import DashboardNoticeCard from "./DashboardNoticeCard";

const DashboardNoticesPage = () => {
    const [notices, setNotices] = useState([]);

    useEffect(() => {
        fetch("/notice.json")
            .then((res) => res.json())
            .then(setNotices)
            .catch(console.error);
    }, []);

    const [modalOpen, setModalOpen] = useState(false);
    const [editingNotice, setEditingNotice] = useState(null);

    // Form Fields
    const [title, setTitle] = useState("");
    const [shortDesc, setShortDesc] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("meeting");
    const [publishDate, setPublishDate] = useState("");
    const [eventDate, setEventDate] = useState("");
    const [eventTime, setEventTime] = useState("");
    const [venue, setVenue] = useState("");
    const [issuedBy, setIssuedBy] = useState("");
    const [contactPerson, setContactPerson] = useState("");
    const [contactPhone, setContactPhone] = useState("");
    const [thumbnail, setThumbnail] = useState("");
    const [isImportant, setIsImportant] = useState(false);
    const [isPinned, setIsPinned] = useState(false);
    const [status, setStatus] = useState("active");
    const [tags, setTags] = useState("");

    const openAddModal = () => {
        setEditingNotice(null);
        setTitle("");
        setShortDesc("");
        setDescription("");
        setCategory("meeting");
        setPublishDate("");
        setEventDate("");
        setEventTime("");
        setVenue("");
        setIssuedBy("");
        setContactPerson("");
        setContactPhone("");
        setThumbnail("");
        setIsImportant(false);
        setIsPinned(false);
        setStatus("active");
        setTags("");
        setModalOpen(true);
    };

    const openEditModal = (notice) => {
        setEditingNotice(notice);
        setTitle(notice.title);
        setShortDesc(notice.shortDescription);
        setDescription(notice.description);
        setCategory(notice.category);
        setPublishDate(notice.publishDate);
        setEventDate(notice.eventDate);
        setEventTime(notice.eventTime);
        setVenue(notice.venue);
        setIssuedBy(notice.issuedBy);
        setContactPerson(notice.contactPerson);
        setContactPhone(notice.contactPhone);
        setThumbnail(notice.thumbnail);
        setIsImportant(notice.isImportant);
        setIsPinned(notice.isPinned);
        setStatus(notice.status);
        setTags(notice.tags.join(", "));
        setModalOpen(true);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const noticeData = {
            id: editingNotice ? editingNotice.id : `notice-${Date.now()}`,
            title,
            slug: title.toLowerCase().replace(/\s+/g, "-"),
            shortDescription: shortDesc,
            description,
            category,
            publishDate,
            eventDate,
            eventTime,
            venue,
            issuedBy,
            contactPerson,
            contactPhone,
            thumbnail,
            isImportant,
            isPinned,
            status,
            tags: tags.split(",").map((t) => t.trim()),
        };

        if (editingNotice) {
            setNotices(
                notices.map((n) => (n.id === editingNotice.id ? noticeData : n))
            );
        } else {
            setNotices([...notices, noticeData]);
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

            <DashboardGrid cols="grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {notices.map((n) => (
                    <DashboardNoticeCard
                        key={n.id}
                        notice={n}
                        onEdit={openEditModal}
                        onDelete={handleDelete}
                    />
                ))}
            </DashboardGrid>

            {/* Modal Form */}
            <ModalForm
                isOpen={modalOpen}
                onClose={() => setModalOpen(false)}
                title={editingNotice ? "Edit Notice" : "Add Notice"}
                onSubmit={handleSubmit}
            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                    {/* Title */}
                    <div>
                        <label className="block font-medium mb-1">Title</label>
                        <input
                            type="text"
                            placeholder="Title"
                            className="w-full border border-gray-300 rounded-lg p-2"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                        />
                    </div>

                    {/* Short Description */}
                    <div>
                        <label className="block font-medium mb-1">Short Description</label>
                        <input
                            type="text"
                            placeholder="Short Description"
                            className="w-full border border-gray-300 rounded-lg p-2"
                            value={shortDesc}
                            onChange={(e) => setShortDesc(e.target.value)}
                            required
                        />
                    </div>

                    {/* Full Description */}
                    <div className="md:col-span-2">
                        <label className="block font-medium mb-1">Full Description</label>
                        <textarea
                            placeholder="Full Description"
                            className="w-full border border-gray-300 rounded-lg p-2"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            rows={3}
                            required
                        />
                    </div>

                    {/* Dates */}
                    <div>
                        <label className="block font-medium mb-1">Publish Date</label>
                        <input
                            type="date"
                            className="w-full border border-gray-300 rounded-lg p-2"
                            value={publishDate}
                            onChange={(e) => setPublishDate(e.target.value)}
                        />
                    </div>

                    <div>
                        <label className="block font-medium mb-1">Event Date</label>
                        <input
                            type="date"
                            className="w-full border border-gray-300 rounded-lg p-2"
                            value={eventDate}
                            onChange={(e) => setEventDate(e.target.value)}
                        />
                    </div>

                    <div>
                        <label className="block font-medium mb-1">Event Time</label>
                        <input
                            type="text"
                            placeholder="04:00 PM"
                            className="w-full border border-gray-300 rounded-lg p-2"
                            value={eventTime}
                            onChange={(e) => setEventTime(e.target.value)}
                        />
                    </div>

                    <div>
                        <label className="block font-medium mb-1">Venue</label>
                        <input
                            type="text"
                            placeholder="Venue"
                            className="w-full border border-gray-300 rounded-lg p-2"
                            value={venue}
                            onChange={(e) => setVenue(e.target.value)}
                        />
                    </div>

                    {/* Media / Thumbnail */}
                    <div className="md:col-span-2">
                        <label className="block font-medium mb-1">Thumbnail URL</label>
                        <input
                            type="text"
                            placeholder="Image URL"
                            className="w-full border border-gray-300 rounded-lg p-2"
                            value={thumbnail}
                            onChange={(e) => setThumbnail(e.target.value)}
                        />
                    </div>

                    {/* Flags */}
                    <div className="flex gap-4 items-center">
                        <label className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                checked={isImportant}
                                onChange={(e) => setIsImportant(e.target.checked)}
                            />
                            Important
                        </label>
                        <label className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                checked={isPinned}
                                onChange={(e) => setIsPinned(e.target.checked)}
                            />
                            Pinned
                        </label>
                    </div>

                    {/* Status */}
                    <div>
                        <label className="block font-medium mb-1">Status</label>
                        <select
                            className="w-full border border-gray-300 rounded-lg p-2"
                            value={status}
                            onChange={(e) => setStatus(e.target.value)}
                        >
                            <option value="active">Active</option>
                            <option value="inactive">Inactive</option>
                        </select>
                    </div>

                    {/* Tags */}
                    <div className="md:col-span-2">
                        <label className="block font-medium mb-1">Tags (comma separated)</label>
                        <input
                            type="text"
                            className="w-full border border-gray-300 rounded-lg p-2"
                            value={tags}
                            onChange={(e) => setTags(e.target.value)}
                        />
                    </div>

                </div>
            </ModalForm>
        </div>
    );
};

export default DashboardNoticesPage;