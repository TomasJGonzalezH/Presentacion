const slides = document.querySelectorAll('.slide');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const indicators = document.getElementById('indicators');
let current = 0;

// Crear los puntitos
for (let i = 0; i < slides.length; i++) {
  const dot = document.createElement('span');
  dot.classList.add('dot');
  if (i === 0) dot.classList.add('active');
  dot.addEventListener('click', () => goToSlide(i));
  indicators.appendChild(dot);
}

function updateSlider() {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === current);
  });
  document.querySelectorAll('.dot').forEach((dot, i) => {
    dot.classList.toggle('active', i === current);
  });
  prevBtn.disabled = current === 0;
  nextBtn.disabled = current === slides.length - 1;
}

function goToSlide(idx) {
  current = idx;
  updateSlider();
}

prevBtn.addEventListener('click', () => {
  if (current > 0) {
    current--;
    updateSlider();
  }
});

nextBtn.addEventListener('click', () => {
  if (current < slides.length - 1) {
    current++;
    updateSlider();
  }
});

updateSlider();
