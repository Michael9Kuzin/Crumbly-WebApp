function toggleTheme() {
    document.body.classList.toggle("dark-mode");
    // document.getElementById('overlayMenu').classList.remove('open');
}

function toggleLanguage() {
    // Заглушка: переключение языка не реализовано
    // alert("Переключение языка пока не работает.");
}

function toggleMain() {
    window.location.href = "index.html";
}

function toggleBasket() {
    window.location.href = "content/basket.html";
}

function toggleOrders() {
    window.location.href = "content/orders.html";
}


const overlay = document.getElementById('overlay');
const supportPopup = document.getElementById('supportPopup');

// Открытие popup по клику на ссылку
document.querySelectorAll('#overlayMenu ul li a').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    showSupportPopup(link.textContent.trim());
    document.getElementById('overlayMenu').classList.remove('open');
  });
});

// Показ popup + белого overlay
function showSupportPopup(linkText) {
  supportPopup.querySelector('.popup-text').textContent = `перейдите по ссылке: ${linkText}`;
  supportPopup.style.display = 'block';
  overlay.classList.add('show');
}

// Скрытие popup + overlay
function hideSupportPopup() {
  supportPopup.style.display = 'none';
  overlay.classList.remove('show');
}

// Обработка кнопок ✔ ✖
function handleSupportConfirm(confirmed) {
  hideSupportPopup();
  if (confirmed) {
    alert('Вы подтвердили переход.');
  } else {
    console.log('Переход отменен.');
  }
}

// Закрытие по клику на overlay (если нужно)
overlay.addEventListener('click', hideSupportPopup);



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
