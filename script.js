const params = new URLSearchParams(window.location.search);
const name = params.get('name');
if (name) {
  document.getElementById('guest-name').innerText = decodeURIComponent(name);
}

function sendRSVP() {
  const guest = document.getElementById('guest-name').innerText || 'Mehmon';
  const message = `✅ ${guest} sunnat to‘yiga kelishini tasdiqladi.`;

  const telegramBotToken = '7423267227:AAHE6MKybaLpXUDIAkwffBldE_fch9Vh9X4';
  const chatId = '7624675131';

  const telegramUrl = `https://api.telegram.org/bot${telegramBotToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(message)}`;

  fetch(telegramUrl)
    .then(() => alert('Rahmat! Tashrifingiz ro‘yxatga olindi.'))
    .catch(() => alert('Xatolik yuz berdi. Iltimos, qayta urinib ko‘ring.'));
}

window.addEventListener('DOMContentLoaded', () => {
  const audio = document.getElementById('background-audio');
  audio.play().catch(() => {
    const button = document.createElement('button');
    button.textContent = "🎵 Qo‘shiqni yoqish";
    button.style.position = "fixed";
    button.style.bottom = "20px";
    button.style.left = "50%";
    button.style.transform = "translateX(-50%)";
    button.style.padding = "10px 20px";
    button.style.borderRadius = "10px";
    button.style.border = "none";
    button.style.backgroundColor = "#6d7fa3";
    button.style.color = "#fff";
    button.style.fontSize = "16px";
    button.style.zIndex = "9999";
    button.onclick = () => {
      audio.play();
      button.remove();
    };
    document.body.appendChild(button);
  });
});
