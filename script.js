document.addEventListener("DOMContentLoaded", function() {
    const animatedText = document.getElementById("animatedText");
    const words = [" AI для підприємця", " AI для маркетингу", " Націлювання, PPC", " AI для продажу"];
    let currentWordIndex = 0;
    let currentIndex = 0;
    let isDeleting = false;
  
    function animateText() {
      const currentText = words[currentWordIndex].slice(0, currentIndex);
      animatedText.textContent = currentText;
  
      if (!isDeleting) {
        currentIndex++;
  
        if (currentIndex > words[currentWordIndex].length) {
          isDeleting = true;
          currentIndex = words[currentWordIndex].length - 1;
          setTimeout(animateText, 400); // Пауза перед стиранням
        } else {
          setTimeout(animateText, 100); // Затримка перед наступним символом
        }
      } else {
        currentIndex--;
  
        if (currentIndex === 0) {
          isDeleting = false;
          currentWordIndex = (currentWordIndex + 1) % words.length;
          setTimeout(animateText, 1000); // Пауза перед наступним словом
        } else {
          setTimeout(animateText, 50); // Затримка перед стиранням наступного символу
        }
      }
    }
  
    // Почати анімацію після завантаження сторінки
    setTimeout(function() {
      animatedText.classList.remove("hidden");
      animateText();
    }, 1000);
  });
  
  document.addEventListener("DOMContentLoaded", function() {
    const animatedText = document.getElementById("iFF");
    const words = [" Рост популярності курсів з AI", " Експертні автори та практичний підхід", " Зростання глобального аудиторії", " Зручність та доступність"];
    let currentWordIndex = 0;
    let currentIndex = 0;
    let isDeleting = false;
  
    function animateText() {
      const currentText = words[currentWordIndex].slice(0, currentIndex);
      animatedText.textContent = currentText;
  
      if (!isDeleting) {
        currentIndex++;
  
        if (currentIndex > words[currentWordIndex].length) {
          isDeleting = true;
          currentIndex = words[currentWordIndex].length - 1;
          setTimeout(animateText, 2000); // Пауза перед стиранням
        } else {
          setTimeout(animateText, 100); // Затримка перед наступним символом
        }
      } else {
        currentIndex--;
  
        if (currentIndex === 0) {
          isDeleting = false;
          currentWordIndex = (currentWordIndex + 1) % words.length;
          setTimeout(animateText, 1000); // Пауза перед наступним словом
        } else {
          setTimeout(animateText, 100); // Затримка перед стиранням наступного символу
        }
      }
    }
  
    // Почати анімацію після завантаження сторінки
    setTimeout(function() {
      animatedText.classList.remove("hidden");
      animateText();
    }, 1000);
  });
  

 






 