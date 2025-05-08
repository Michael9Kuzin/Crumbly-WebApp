document.querySelector('.filter-btn').addEventListener('click', () => {
    alert('Фильтры пока не реализованы');
});


const translations = {
    ru: {
        theme: "Тема",
        lang: "Язык",
        categories: "Категории:",
        sale: "Акции",
        cakes: "Торты",
        cupcakes: "Кексы",
        pies: "Пироги",
        sweets: "Пирожные",
        bakery: "Выпечка",
        preserves: "Закрутки",
        stores: "Магазины кондитеров:",
        free_delivery: "🚚 Бесплатная доставка"
    },
    en: {
        theme: "Theme",
        lang: "Language",
        categories: "Categories:",
        sale: "Sale",
        cakes: "Cakes",
        cupcakes: "Cupcakes",
        pies: "Pies",
        sweets: "Pastries",
        bakery: "Bakery",
        preserves: "Jars",
        stores: "Confectioner Shops:",
        free_delivery: "🚚 Free delivery"
    }
};

function applyLanguage(lang) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });
}

function toggleLanguage() {
    const current = localStorage.getItem('lang') || 'ru';
    const newLang = current === 'ru' ? 'en' : 'ru';
    localStorage.setItem('lang', newLang);
    applyLanguage(newLang);
}


function toggleTheme() {
    document.body.classList.toggle('dark-theme');
    localStorage.setItem('theme', document.body.classList.contains('dark-theme') ? 'dark' : 'light');
}

window.onload = () => {
    const savedLang = localStorage.getItem('lang') || 'ru';
    const savedTheme = localStorage.getItem('theme') || 'light';
    applyLanguage(savedLang);
    if (savedTheme === 'dark') document.body.classList.add('dark-theme');
};
