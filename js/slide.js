function firstSlider() {
 var slideIndex = 0,
  sliderWrapper = document.querySelector("#slider-wrapper"),
  slides = document.querySelectorAll(".slider-item"),
  sliderBtnImages = document.querySelectorAll(".slider-btn__img");

 //Скрываем все слайды и отображаем нужный.
 showSlides(slideIndex);

 function showSlides(n) {
  //Скрыть все слайды
  for (var i = 0; i < slides.length; i++) {
   slides[i].style.display = "none";
  }

  // Делаем все кнопки не активными
  for (var img = 0; img < sliderBtnImages.length; img++) {
   sliderBtnImages[img].src = "img/btn-passive.png";
  }
  
  if (n >= slides.length) {
   slides[0].style.display = "block";
   sliderBtnImages[0].src = "img/btn-active.png";
   slideIndex = 0;
  } else if (n < 0) {
   slides[2].style.display = "block";
   sliderBtnImages[2].src = "img/btn-active.png";
   slideIndex = 2;
  } else {
   slides[slideIndex].style.display = "block";
   sliderBtnImages[slideIndex].src = "img/btn-active.png";
  }
 }

 //Стиль анимации для слайдов влево <-
 function slideLeft() {
  for (var i = 0; i < slides.length; i++) {
   slides[i].style.animationName = "slideInLeft";
  }
 }

 //Стиль анимации для слайдов вправо -->
 function slideRight() {
  for (var i = 0; i < slides.length; i++) {
   slides[i].style.animationName = "slideInRight";
  }
 }
 
 // Смена слайда по клику на слайд
 sliderWrapper.addEventListener("click", function () {
  slideIndex = slideIndex + 1;  
  showSlides(slideIndex);
  slideRight();
  clearInterval(timerSlider); //Cброс автоматического перелистывания слайдов.
 });

 // Автоматическое перелистывание слайдов
 var timerSlider = setInterval(function goRight() {
  slideIndex = slideIndex + 1;
  showSlides(slideIndex);
  slideRight();
 }, 8000);
}

firstSlider();