const d = document,
  $sliders = d.querySelectorAll(".slides");
let i = 0;
export default function sliderResponsive() {
  //autoPlay();
  const $btnNetx = d.querySelector(".btn-slider  .next"),
    $btnPrev = d.querySelector(".btn-slider .prev");
    

  d.addEventListener("click", (e) => {
    if (e.target === $btnPrev) {
      //quitamos el conportamiento por defecto  del btn href
      e.preventDefault();
    
    }
    if (e.target === $btnNetx) {
      e.preventDefault();

      $sliders[i].classList.remove("active");
      i++;

      if (i >= $sliders.length) {
        i = 0;
      }

      $sliders[i].classList.add("active");
    }
   
  });
  
}






function autoPlay() {
 const $sliders = d.querySelectorAll(".slider-slide")


  setInterval(() => {
 $sliders[i].classList.remove("active");
   
 i++;

    if (i >= $sliders.length-1) i = 0;
    $sliders[i].classList.add("active");
  }, 4000);
  
}
autoPlay()