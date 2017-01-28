
//run debounce function every time we scroll but run checkSlide only once in 20 miliseconds
//to imrpove the performance
function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

  const sliderImages = document.querySelectorAll('.slide-in');

  function checkSlide(e) {
    sliderImages.forEach(sliderImage => {
      // half way through the image
      const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height / 2; //window.scrollY gives us how much we have scrolled down from the top of the browser
      // bottom of the image`                                                           // but we want to know where we are at the bottom of the window
      const imageBottom = sliderImage.offsetTop + sliderImage.height; //offsetTop will tell us how far is the image from the top of the actual window
      const isHalfShown = slideInAt > sliderImage.offsetTop;
      const isNotScrolledPast = window.scrollY < imageBottom;
      if (isHalfShown && isNotScrolledPast) {
        sliderImage.classList.add('active');
      } else {
        sliderImage.classList.remove('active');
      }
    });
  }

  window.addEventListener('scroll', debounce(checkSlide));
