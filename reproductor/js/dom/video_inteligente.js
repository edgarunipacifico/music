const d = document,
  w = window;
export default function smartVideo() {
  const $video = d.querySelectorAll("video[data-smart-video]");

  const cb = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        /*si lla tenemes la intersecion  lo re porducimos */
        entry.target.play();

        /*visiblitychangel spn--->validamos quela pagina se esta visuaisando en el navegador  */

        w.addEventListener("visibilitychange",e=>
          d.visibilityState==="visible" 
          ? entry.target.play //si la vagina esta ciendo visualida reproducimos el vedeo
          : entry.target.pause() //sinoesta siendo visualisada la pagina pausamos el video
        )

      } else {
        entry.target.pause();
      }
    });
  };
  const observador = new IntersectionObserver(cb, { threshold: 0.5 });

  /*aque elementos del dom le asignamos el observador*/

  $video.forEach((el) => observador.observe(el));
}
