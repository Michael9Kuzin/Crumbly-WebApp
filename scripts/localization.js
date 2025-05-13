let currentLang = localStorage.getItem("lang") || "ru" || "en";

async function loadLang(lang) {
    const res = await fetch(`../locales/${lang}.json`);
    const data = await res.json();
    applyTranslations(data);
}

function applyTranslations(dict) {
    // Перевод placeholder для полей ввода
    document.querySelector('[placeholder="Адрес..."]').placeholder = dict.address;
    document.querySelector('[placeholder="Поиск..."]').placeholder = dict.search;

    // Перевод пунктов меню
    document.querySelectorAll('.overlay-menu ul li').forEach((li, index) => {
        const keys = [
            "support", "languages", "privacy_policy", "terms_of_use", "theme_toggle", "profile"
        ];
        li.querySelector('a').textContent = dict[keys[index]];
    });

    // Перевод заголовков всплывающих окон
    document.querySelector('.popup-title').textContent = dict.support_title;
    document.querySelector('.popup-text').textContent = dict.support_text;

    // Перевод заголовка для категорий
    document.querySelector('.section-title').textContent = dict.categories;

    // Перевод названий категорий
    document.querySelectorAll('.categories .category span').forEach((el, idx) => {
        const keys = [
            "promo", "new", "cakes", "cupcakes", "pies", "macarons", "bakery", "jams"
        ];
        el.textContent = dict[keys[idx]]; // Подставить категории, если есть
    });

    // Перевод заголовка для магазинов
    document.querySelectorAll('.section-title')[1].textContent = dict.stores;

    // Перевод нижних вкладок
    const bottomTabs = document.querySelectorAll('.bottom-nav .tab small');
    bottomTabs[0].textContent = dict.main;
    bottomTabs[1].textContent = dict.basket;
    bottomTabs[2].textContent = dict.orders;
}

function toggleLanguage() {
    currentLang = currentLang === "ru" ? "en" : "ru";
    localStorage.setItem("lang", currentLang);
    loadLang(currentLang);
    document.getElementById('overlayMenu').classList.remove('open');
}

// Инициализация при загрузке
document.addEventListener("DOMContentLoaded", () => {
    loadLang(currentLang);

    const langToggle = document.querySelector('[data-lang-toggle]');
    if (langToggle) {
        langToggle.addEventListener("click", (e) => {
            e.preventDefault();
            toggleLanguage();
        });
    }

    // Добавляем обработчик на пункт меню "Языки"
    document.querySelectorAll('.overlay-menu ul li a').forEach(link => {
        link.addEventListener('click', (e) => {
            const text = e.target.textContent.trim();
            if (text === 'Языки' || text === 'Languages') {
                toggleLanguage();
            }
        });
    });
});


//const translations = {
//    ru: {
//        theme: "Тема",
//        lang: "Язык",
//        categories: "Категории:",
//        sale: "Акции",
//        cakes: "Торты",
//        cupcakes: "Кексы",
//        pies: "Пироги",
//        sweets: "Пирожные",
//        bakery: "Выпечка",
//        preserves: "Закрутки",
//        stores: "Магазины кондитеров:",
//        free_delivery: "🚚 Бесплатная доставка"
//    },
//    en: {
//        theme: "Theme",
//        lang: "Language",
//        categories: "Categories:",
//        sale: "Sale",
//        cakes: "Cakes",
//        cupcakes: "Cupcakes",
//        pies: "Pies",
//        sweets: "Pastries",
//        bakery: "Bakery",
//        preserves: "Jars",
//        stores: "Confectioner Shops:",
//        free_delivery: "🚚 Free delivery"
//    }
//};
//
//function applyLanguage(lang) {
//    document.querySelectorAll('[data-i18n]').forEach(el => {
//        const key = el.getAttribute('data-i18n');
//        if (translations[lang] && translations[lang][key]) {
//            el.textContent = translations[lang][key];
//        }
//    });
//}
//
//function toggleLanguage() {
//    const current = localStorage.getItem('lang') || 'ru';
//    const newLang = current === 'ru' ? 'en' : 'ru';
//    localStorage.setItem('lang', newLang);
//    applyLanguage(newLang);
//}
//
//window.onload = () => {
//    const savedLang = localStorage.getItem('lang') || 'ru';
//    const savedTheme = localStorage.getItem('theme') || 'light';
//    applyLanguage(savedLang);
//    if (savedTheme === 'dark') document.body.classList.add('dark-theme');
//};
