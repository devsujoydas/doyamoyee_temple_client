export const formatDateDynamic = (dateStr) => {
    const currentLang = document.documentElement.lang;
    console.log(currentLang)

    const d = new Date(dateStr);
    return d.toLocaleDateString(currentLang, {
        day: "numeric",
        month: "long",
        year: "numeric",
    });
};

