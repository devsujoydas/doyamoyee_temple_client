export const formatDateBN = (dateStr) => {
    const d = new Date(dateStr);
    return d.toLocaleDateString("bn-BD", {
        day: "numeric",
        month: "long",
        year: "numeric",
    });
};