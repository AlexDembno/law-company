document.addEventListener('DOMContentLoaded', () => {
  const counters = document.querySelectorAll('.aboutUs-item_text');

  const animateCounter = counter => {
    const updateCounter = () => {
      const target = +counter.getAttribute('data-target');
      const current = parseFloat(counter.innerText); // Учитываем только число
      const increment = target / 300; // Скорость анимации

      if (current < target) {
        counter.innerHTML = `${Math.ceil(current + increment)}${
          counter.querySelector('span').outerHTML
        }`;
        setTimeout(updateCounter, 20); // Интервал обновления
      } else {
        counter.innerHTML = `${target}${
          counter.querySelector('span').outerHTML
        }`;
      }
    };

    updateCounter();
  };

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target); // Запускаем анимацию
          observer.unobserve(entry.target); // Отключаем наблюдение после анимации
        }
      });
    },
    { threshold: 1.0 } // Процент видимости элемента, при котором он считается видимым
  );

  counters.forEach(counter => observer.observe(counter));
});
