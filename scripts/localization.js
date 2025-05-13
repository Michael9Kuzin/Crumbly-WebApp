let currentLang = localStorage.getItem("lang") || "ru";

async function loadLang(lang) {
  const res = await fetch(`../locales/${lang}.json`);
  const data = await res.json();
  applyTranslations(data);
}

function applyTranslations(dict) {
  // Перевод placeholder для полей ввода
  const addressInput = document.querySelector('[data-i18n="address"]');
  const searchInput = document.querySelector('[data-i18n="search"]');
  if (addressInput) addressInput.placeholder = dict.address;
  if (searchInput) searchInput.placeholder = dict.search;

  // Перевод пункта для загрузки фото
  document.querySelectorAll('[data-i18n="photo_placeholder"]').forEach((el) => {
    if (dict.photo_placeholder) {
      el.textContent = dict.photo_placeholder;
    }
  });

  // Перевод пунктов меню
  const menuKeys = [
    "support",
    "languages",
    "privacy_policy",
    "terms_of_use",
    "theme_toggle",
    "profile",
  ];
  document.querySelectorAll(".overlay-menu ul li").forEach((li, index) => {
    const key = menuKeys[index];
    const link = li.querySelector("a");
    if (link && dict[key]) link.textContent = dict[key];
  });

  // Перевод заголовков всплывающих окон
  const popupTitle = document.querySelector(".popup-title");
  const popupText = document.querySelector(".popup-text");
  if (popupTitle) popupTitle.textContent = dict.support_title;
  if (popupText) popupText.textContent = dict.support_text;

  // Перевод заголовков секций
  const sectionTitles = document.querySelectorAll(".section-title");
  if (sectionTitles[0]) sectionTitles[0].textContent = dict.categories;
  if (sectionTitles[1]) sectionTitles[1].textContent = dict.stores;

  // Перевод названий категорий
  const categoryKeys = [
    "promo",
    "new",
    "cakes",
    "cupcakes",
    "pies",
    "macarons",
    "bakery",
    "jams",
  ];
  document.querySelectorAll(".categories .category span").forEach((el, idx) => {
    const key = categoryKeys[idx];
    if (el && dict[key]) el.textContent = dict[key];
  });

  // Перевод карточек магазинов
  const storeNames = document.querySelectorAll(".store-card .name");
  const storeDeliveries = document.querySelectorAll(
    ".store-card .delivery-time"
  );
  storeNames.forEach((el) => {
    const key = el.dataset.i18n;
    if (dict[key]) el.textContent = dict[key];
  });
  storeDeliveries.forEach((el) => {
    const key = el.dataset.i18n;
    if (dict[key]) el.textContent = dict[key];
  });

  // Перевод нижней навигации
  const bottomTabs = document.querySelectorAll(".bottom-nav .tab small");
  if (bottomTabs[0]) bottomTabs[0].textContent = dict.main;
  if (bottomTabs[1]) bottomTabs[1].textContent = dict.basket;
  if (bottomTabs[2]) bottomTabs[2].textContent = dict.orders;
}

function toggleLanguage() {
  currentLang = currentLang === "ru" ? "en" : "ru";
  localStorage.setItem("lang", currentLang);
  loadLang(currentLang);
  document.getElementById("overlayMenu").classList.remove("open");
}

document.addEventListener("DOMContentLoaded", () => {
  loadLang(currentLang);

  document.querySelectorAll("[data-lang-toggle]").forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      toggleLanguage();
    });
  });

  document.querySelectorAll(".overlay-menu ul li a").forEach((link) => {
    link.addEventListener("click", (e) => {
      const text = e.target.textContent.trim();
      if (text === "Языки" || text === "Languages") {
        toggleLanguage();
      }
    });
  });
});
