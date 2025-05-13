function toggleTheme() {
    document.body.classList.toggle("dark-mode");
    // document.getElementById('overlayMenu').classList.remove('open');
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

document.querySelectorAll('#overlayMenu ul li a').forEach(link => {
  link.addEventListener('click', (e) => {
    const text = link.textContent.trim();
    if (text === 'Темный — Светлый режим' || text === 'Языки') {
      return;
    }
    e.preventDefault(); // блокируем переход
    showSupportPopup(text); // показываем popup
    document.getElementById('overlayMenu').classList.remove('open'); // закрываем меню
  });
});

// Показ popup + белого overlay
function showSupportPopup(linkText) {
  supportPopup.querySelector('.popup-title').textContent = `${linkText}`;
  // supportPopup.querySelector('.popup-text').textContent = `перейдите по ссылке: ${linkText}`;
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
    // alert('Вы подтвердили переход.');
    console.log('Переход подтверждён.');
  } else {
    console.log('Переход отменен.');
  }
}

// Закрытие по клику на overlay (если нужно)
overlay.addEventListener('click', hideSupportPopup);

