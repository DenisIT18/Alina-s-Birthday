function checkCode() {
  const input = document.getElementById("codeInput").value.trim();
  const message = document.getElementById("secretMessage");

  if (input === "17.09.2023") {
    message.classList.remove("hidden");
  } else {
    alert("Неправильная дата 😢 Попробуй ещё раз!");
  }
}

const images = [
    {
      src: "photo1.jpg",
      caption: "Мы вместе"
    },
    {
      src: "photo2.jpg",
      caption: "Поцелуйчик"
    },
    {
      src: "photo3.jpg",
      caption: "Красотка и самая лучшая девушка"
    },
    {
      src: "photo4.jpg",
      caption: "Моя любимая"
    },
    {
      src: "photo5.jpg",
      caption: "Наша любимая совместная фотография"
    }
  ];
  
  let current = 0;
  
  function showSlide(index) {
    const imageEl = document.getElementById("sliderImage");
    const captionEl = document.getElementById("caption");
    
    imageEl.src = images[index].src;
    imageEl.alt = images[index].caption;
    captionEl.textContent = images[index].caption;
  }
  
  function nextSlide() {
    current = (current + 1) % images.length;
    showSlide(current);
  }
  
  function prevSlide() {
    current = (current - 1 + images.length) % images.length;
    showSlide(current);
  }
  
  // Показать первый слайд при загрузке
  document.addEventListener("DOMContentLoaded", () => {
    showSlide(current);
  });

  function showPopup() {
    document.getElementById("birthdayPopup").style.display = "flex";
  }
  
  function closePopup() {
    document.getElementById("birthdayPopup").style.display = "none";
  }
  
  // Показываем popup через 3 секунды после загрузки страницы
  window.addEventListener("DOMContentLoaded", () => {
    setTimeout(showPopup, 3000);
  });

// Падающие сердечки 💜
const canvas = document.getElementById('heartsCanvas');
const ctx = canvas.getContext('2d');

let hearts = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

function createHeart() {
  return {
    x: Math.random() * canvas.width,
    y: -20,
    size: 15 + Math.random() * 10,
    speed: 1 + Math.random() * 2,
    alpha: 0.6 + Math.random() * 0.4
  };
}

function drawHeart(x, y, size, alpha) {
  ctx.save();
  ctx.translate(x, y);
  ctx.scale(size / 30, size / 30);
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.bezierCurveTo(0, -3, -5, -3, -5, 0);
  ctx.bezierCurveTo(-5, 3, 0, 5, 0, 8);
  ctx.bezierCurveTo(0, 5, 5, 3, 5, 0);
  ctx.bezierCurveTo(5, -3, 0, -3, 0, 0);
  ctx.fillStyle = `rgba(255, 105, 180, ${alpha})`;
  ctx.fill();
  ctx.restore();
}

function updateHearts() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  if (Math.random() < 0.2) {
    hearts.push(createHeart());
  }
  hearts.forEach((heart, i) => {
    heart.y += heart.speed;
    drawHeart(heart.x, heart.y, heart.size, heart.alpha);
    if (heart.y > canvas.height + 20) hearts.splice(i, 1);
  });
  requestAnimationFrame(updateHearts);
}
updateHearts();

<script>
  const password = prompt("Введите пароль:");
  if (password !== "170923") {
    document.body.innerHTML = "<h2 style='text-align:center;'>Доступ запрещён 🙅‍♂️</h2>";
  }
</script>


