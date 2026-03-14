export const formatDateDynamic = (dateStr) => {
    const currentLang = document.documentElement.lang;
    const d = new Date(dateStr);
    return d.toLocaleDateString(currentLang, {
        day: "numeric",
        month: "long",
        year: "numeric",
    });
};

