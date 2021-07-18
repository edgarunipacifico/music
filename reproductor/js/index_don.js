import hamburgerMenu from "./dom/menu_hamburgue.js";
import {
  digitalClock,
  mostrarOcultarReproductor,
  init,
} from "./dom/reproductor.js";

/*import btnUp from   "./dom/btn_up.js"*/
import srcrollTopBottom from "./dom/btn-scroll-jh/boton_scroll.js";
/*import them from "./dom/tema.js";*/
import darkTheme from "./dom/them-dark-jm/theme_dark.js";
import responsiveMedia from "./dom/objeto_responsive.js";
/*import mediaquery from "./dom/responsive.js";*/

import networkStatus from "./dom/detección__satatus-red.js";

import filterSearch from "./dom/filter_busqueda.js";

import scrollSpy from "./dom/scroll_spia.js";
import smartVideo from "./dom/video_inteligente.js";
import contacFormValidations from "./dom/validacione.js";
import speechReader from "./dom/narrador.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  smartVideo();
  contacFormValidations();
 
  scrollSpy();
  filterSearch(".track-filter", ".card-track");




  hamburgerMenu(".panel-btn", ".panel", ".menu a");
  digitalClock("#clock", "#clock-start", "#clock-stop");
 

  mostrarOcultarReproductor(".reproductor"),
    srcrollTopBottom(
      ".scroll-top-btn",
      ".panel-btn",
      ".menu a",
      ".icon-angle-up"
    );
  responsiveMedia(
    "video-1",
    "(min-width: 1024px)",
    '<a target="_blank" rel="noopener" href="https://vimeo.com/568236327">Ver Katy Perry - Roar (Official)</a>',
    `<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/569435794?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Katy Perry - Roar (Official)"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>`
  );
  responsiveMedia(
    "video-2",
    "(min-width: 1024px)",
    ` <a target="_blank" rel="noopener" href="https://vimeo.com/568247685">Ver Maroon 5 - Sugar (Official Music Video)</a>`,
    `<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/568247685?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Maroon 5 - Sugar (Official Music Video)"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>`
  );

   responsiveMedia(
     "video-3",
     "(min-width: 1024px)",
     ` <a target="_blank" rel="noopener" href="https://vimeo.com/568243264">Ver Baby Shark Dance </a>`,
     `<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/568243264?badge=0&autopause=0&player_id=0&app_id=58479/embed" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen frameborder="0" style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe></div>`
   );

     responsiveMedia(
       "video-4",
       "(min-width: 1024px)",
       `<a target="_blank" rel="noopener" href="https://vimeo.com/568270237">Ver  Justin Bieber - Sorry (Official Lyric Video)</a>`,
       `<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/568270237?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Justin Bieber - Sorry (Official Lyric Video)"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>`
     );
     responsiveMedia(
       "video-5",
       "(min-width: 1024px)",
       ` <a target="_blank" rel="noopener" href="https://vimeo.com/568259507">Ver Wiz Khalifa - See You Again ft Charlie Puth </a>`,
       `<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/568259507?badge=0&autopause=0&player_id=0&app_id=58479/embed" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen frameborder="0" style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe></div>`
     );

     responsiveMedia(
       "video-6",
       "(min-width: 1024px)",
       ` <a target="_blank" rel="noopener" href="https://vimeo.com/568258158">Ver PSY - GANGNAM STYLE(강남스타일) M-V</a>`,
       `<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/568258158?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;" title="PSY - GANGNAM STYLE(강남스타일) M-V"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>`
     );

  /*them(".sun",".moon");*/
});

//"keydown"keyup keypress
/*d.addEventListener("keydown", (e) => {
  shortCuts(e);
  moveBall(e, ".ball", ".stage");
});*/

darkTheme(".dark-theme-btn", "dark-theme-mode");
networkStatus();
speechReader();
init()
 //reproductor(/*"#btn-play", "#btn-pause"*/);