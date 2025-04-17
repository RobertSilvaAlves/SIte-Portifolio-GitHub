document.addEventListener("DOMContentLoaded", () => {
    const carousels = document.querySelectorAll(".carousel");
  
    carousels.forEach((carousel) => {
      const slider = carousel.querySelector(".carousel-slider");
      const images = slider.querySelectorAll("img");
      const prevBtn = carousel.querySelector(".prev");
      const nextBtn = carousel.querySelector(".next");
      const playBtn = carousel.querySelector(".play");
  
      let index = 0;
      let isPlaying = true;
      let interval;
  
      function updateSlider() {
        slider.style.transform = `translateX(-${index * 100}%)`;
      }
  
      function nextSlide() {
        index = (index + 1) % images.length;
        updateSlider();
      }
  
      function prevSlide() {
        index = (index - 1 + images.length) % images.length;
        updateSlider();
      }
  
      function startAutoSlide() {
        interval = setInterval(nextSlide, 3000);
        isPlaying = true;
        playBtn.textContent = "⏸";
      }
  
      function stopAutoSlide() {
        clearInterval(interval);
        isPlaying = false;
        playBtn.textContent = "⏵";
      }
  
      playBtn.addEventListener("click", () => {
        if (isPlaying) {
          stopAutoSlide();
        } else {
          startAutoSlide();
        }
      });
  
      prevBtn.addEventListener("click", () => {
        prevSlide();
      });
  
      nextBtn.addEventListener("click", () => {
        nextSlide();
      });
  
      // Start automatically
      updateSlider();
      startAutoSlide();
    });
  });
  