 
    document.addEventListener("DOMContentLoaded", function () {
      const slides = document.querySelectorAll("#slider img");
      const dots = [
        document.getElementById("dot-0"),
        document.getElementById("dot-1"),
        document.getElementById("dot-2"),
      ];
      let currentIndex = 0;
      let slideInterval;

      function showSlide(index) {
        slides.forEach((slide, i) => {
          slide.style.opacity = i === index ? "1" : "0";
        });
        dots.forEach((dot, i) => {
          dot.style.opacity = i === index ? "1" : "0.5";
        });
        currentIndex = index;
      }

      function nextSlide() {
        let nextIndex = (currentIndex + 1) % slides.length;
        showSlide(nextIndex);
      }

      function prevSlide() {
        let prevIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(prevIndex);
      }

      function goToSlide(index) {
        showSlide(index);
        resetInterval();
      }

      function resetInterval() {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, 4000);
      }

      // Start slider
      showSlide(0);
      slideInterval = setInterval(nextSlide, 4000);

      // Expose functions to global scope for buttons
      window.prevSlide = prevSlide;
      window.nextSlide = nextSlide;
      window.goToSlide = goToSlide;
    });
