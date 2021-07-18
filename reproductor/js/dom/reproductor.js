let bucle = setInterval(estado, 1000);
const d = document,
  maximo = 290,
  audio = d.getElementById("audio"),
  $btnPlay = d.querySelector("#btn-play"),
  $spanPlay = d.querySelector(".icon-play2"),
  $btnPause = d.querySelector("#btn-pause"),
  $barra = d.getElementById("barra"),
  $volumen = d.getElementById("volumen"),
  $spanMuted = d.querySelector("#silenciar .icon-volume-mute2"),
  $spanSpeaker = d.querySelector(".icon-speaker"),
  $spanVMuted = d.getElementById("muted"),
  $spanVMedium = d.getElementById("medium"),
  $spanVHigh = d.getElementById("high"),
  $progreso = d.getElementById("progreso"),
  $silenciar = d.getElementById("silenciar"),
  $display = d.getElementById("display"),
  $durationDiv = d.getElementById("duration"),
  tracks = d.querySelectorAll(".playlist"),
  $divTime = d.getElementById("time"),
  ls = localStorage,
  $spanPause = d.querySelector(".icon-pause1");
  let tiempoActualRe, fin, tiempo;

$barra.addEventListener("click", mover);
$volumen.addEventListener("change", nivel);

export function digitalClock() {
  const $clock = d.getElementById("clock");

  setInterval(() => {
    let clockHours = new Date().toLocaleTimeString();
    $clock.innerHTML = `<h3>${clockHours}</h3>`;
  }, 1000);
}


export function reproductor(/*btnPlay, btnPause*/) {}

export function init() {
  const //playlist = d.getElementById("playlist"),
    $btnPrev = d.querySelector("#previous"),
    $spanPrev = d.querySelector(".icon-previous"),
    $btnNext = d.querySelector("#next"),
    $spanNext = d.querySelector(".icon-next"),
    $btnShuffle = d.querySelector("#shuffle"),
    $spanShuffle = d.querySelector(".icon-shuffle");
     
  /*  tracks = playlist.getElementsByTagName("a");*/

  /*audio.volume = 0.3;
  audio.play();*/
  //console.log($spanPlay);



  d.addEventListener("click", (e) => {
    if (e.target === $btnPlay || e.target === $spanPlay) {
      $btnPlay.classList.add("hidden");
      $btnPause.classList.remove("hidden");
      audio.volume=$volumen.value;
      audio.play();
      bucle;
 
    }
    if (e.target === $btnPause || e.target === $spanPause) {
      $btnPlay.classList.remove("hidden");
      $btnPause.classList.add("hidden");
      audio.pause();

    }
    if (e.target === $btnNext || e.target === $spanNext) {
      nextTrack(tracks, 1, false);
    }
    if (e.target === $btnPrev || e.target === $spanPrev) {
      nextTrack(tracks, -1, false);
    }
    if (e.target === $btnShuffle || e.target === $spanShuffle) {
      nextTrack(tracks, -1, true);
    }
    if (
      $silenciar === e.target ||
      $spanSpeaker === e.target ||
      $spanMuted === e.target
    ) {
      if (audio.muted == true) {
        audio.muted = false;
        $spanMuted.classList.add("hidden");
        $spanSpeaker.classList.remove("hidden");
      } else {
        audio.muted = true;
        $spanMuted.classList.remove("hidden");
        $spanSpeaker.classList.add("hidden");
      }
    }
  });

  //Agregamos los eventos a los links que nos permitirán cambiar de canción
  for (let track in tracks) {
    let link = tracks[track];
    //console.log("esto eees track", tracks[track]);
    if (typeof link === "function" || typeof link === "number") continue;
    link.addEventListener("click", (e) => {
      e.preventDefault();
      let infoTrack = link.textContent;
      let song = link.getAttribute("href");

      run(song, link);
      $btnPlay.classList.add("hidden");
      $btnPause.classList.remove("hidden");
    });
    bucle;
  }
  //agregamos evento para que reprodusca la siguiente cancion
  audio.addEventListener("ended", function (e) {
    for (var track in tracks) {
      var link = tracks[track];
      let indice = this.src.indexOf("assets");
      let audioSrc = this.src.substring(indice);
      /*console.log(`estatttttt  es la cortada ${audioSrc}`);*/

      //console.log("esto es track ened", link.getAttribute("href"));

      var nextTrack = parseInt(track) + 1;
      if (typeof link === "function" || typeof link === "number") continue;
      if (!this.src) this.src = tracks[0];
      if (track == tracks.length - 1) nextTrack = 0;

      if (link.getAttribute("href") == audioSrc) {
        var nextLink = tracks[nextTrack];
        run(nextLink.getAttribute("href"), nextLink);
        break;
      }
    }
  });
}
function estado() {
  if (!audio.ended) {
    audio.onloadeddata;
    let largo = parseInt((audio.currentTime * maximo) / audio.duration),
    minutes=Math.floor(largo / 60),
    seg=Math.floor(largo % 60),
    time=`${minutes}:${seg}`;
    /*let minute = Math.round (parseFloat (audio.duration )/ 60),
      seconds = Math.round (parseFloat(audio.duration) % 60),
      duration = `${minute}:${seconds}`;

    $durationDiv.innerHTML = `<h4>${duration}</h4>`;*/

    ls.setItem("progreso", largo);
    $progreso.style.width = largo + "px";
     
    $divTime.innerHTML=`<h4>${time}</h4>`
   
   
       

    
  } else {
    progreso.style.width = "0%";
    $btnPlay.classList.remove("hidden");
    $btnPause.classList.add("hidden");
    clearInterval(bucle);
  }
}
function nivel() {
  audio.volume = $volumen.value;

  if ($volumen.value == 0) {
    $spanVMuted.classList.remove("hidden");
    $spanVMedium.classList.add("hidden");
    $spanVHigh.classList.add("hidden");
  }
  if ($volumen.value >= 0.1) {
    $spanVMuted.classList.add("hidden");
    $spanVMedium.classList.remove("hidden");
    $spanVHigh.classList.add("hidden");
  }
  if ($volumen.value >= 0.7) {
    $spanVMuted.classList.add("hidden");
    $spanVMedium.classList.add("hidden");
    $spanVHigh.classList.remove("hidden");
  }
}
function mover(event) {
  if (!audio.paused && !audio.ended) {
    let ratonX = event.offsetX - 2;
    if (ratonX < 0) {
      ratonX = 0;
    } else if (ratonX > maximo) {
      ratonX = maximo;
    }
    var tiempo = (ratonX * audio.duration) / maximo;
    
    
    
    audio.currentTime = tiempo;
    $progreso.style.width = ratonX + "px";
  }
}

function run(song, link) {
  
  ls.setItem("song", song);
  ls.setItem("nextlink", link);
  let parent = link.parentElement;

  //quitar el active de todos los elementos de la lista
  let items = parent.parentElement.getElementsByTagName("li");
  for (let item in items) {
    if (items[item].classList) items[item].classList.remove("active");
  }

  //agregar active a este elemento
  parent.classList.add("active");

  //tocar la cancion
  audio.src = song;
  audio.load();
  audio.play();
  audio.volume = $volumen.value;
  $display.innerHTML = `<h2> Song: ${link.firstElementChild.textContent}</h2>`;
  $btnPlay.classList.add("hidden");
  $btnPause.classList.remove("hidden");
  



  
}
function nextTrack(tracks, nextPrev, shuffle) {
  //agregamos evento para reproducir la siguiente canción en la lista
  //si la canción es la ultima reproducir la primera otra vez
  for (let track in tracks) {
    let link = tracks[track];
    let indice = audio.src.indexOf("assets");
    let audioSrc = audio.src.substring(indice);

    //let nextTracks = parseInt(track) + nextPrev;
    let nextTracks;
    if (shuffle) nextTracks = Math.floor(Math.random() * tracks.length);

    nextTracks = parseInt(track) + nextPrev;
    if (nextTracks === -1) nextTracks = tracks.length - 1;
    if (nextTracks === tracks.length) nextTracks = 0;

    if (typeof link === "function" || typeof link === "number") continue;

    if (!audio.src) audio.src = tracks[0];
    //if (track === tracks.length - 1) nextTracks = 0;
    //  console.log("esto es eltrack 0", nextTracks )

    if (link.getAttribute("href") == audioSrc) {
      let nextLink = tracks[nextTracks];

      /* ls.setItem("song", audioSrc);
      ls.setItem("nextlink", nextLink);*/

      run(nextLink.getAttribute("href"), nextLink);

      break;
    }
  }

  $btnPlay.classList.add("hidden");
  $btnPause.classList.remove("hidden");
}

//funcion para ocultar reproductor
export function mostrarOcultarReproductor(classReproductor) {
  const $reproductor = d.querySelector(classReproductor);

  window.onscroll = () => {
    let scroll = d.documentElement.scrollTop;

    if (scroll > 500) {
      $reproductor.style.transform = "scale(1)";
    } else if (scroll < 500) {
      $reproductor.style.transform = "scale(0)";
    }
  };
}

function runLocalStorage(link){
 
  let parent = link.parentElement;
  //quitar el active de todos los elementos de la lista
  let items = parent.parentElement.getElementsByTagName("li");
  for (let item in items) {
    if (items[item].classList) items[item].classList.remove("active");
  }

  //agregar active a este elemento
  parent.classList.add("active");

  audio.src=ls.getItem("song")
  audio.currentTime = parseInt(ls.getItem("progreso"));
  $progreso.style.width =ls.getItem("progreso")+"px";

 // audio.load();
  //audio.play()
  
  $display.innerHTML = `<h2> Song: ${link.firstElementChild.textContent}</h2>`;
   $btnPlay.classList.remove("hidden");
   $btnPause.classList.add("hidden");
 

} 

/*function durationSong() {

  if(audio.ended){//cuando finaliza o esta en pausa detenemos el setinterval
    clearInterval(fin);
  }else{
    //tiempo actual de reproducion redondeado
     tiempoActualRe=Math.round(audio.currentTime);
    //convertimos el tiempo actual a una cadena para formatear MMSS
   let segs = tiempoActualRe.toString();
    console.log("segundo",segs)
  }
  
 /* 
  let durationSeg=0,durationMi=0,time;
 time=setInterval(() => {
   durationSeg++;
      if (durationSeg > 59) {
        durationSeg = 0;
        durationMi++;
      }
              console.log("seg,min", durationSeg, durationMi, audio.duration);
               console.log("esto es curretime",audio.currentTime);
 }, 1000);*/
    
   
  

//convertimos segundo a HH:MM:SS

String.prototype.pasar_a_HHMMSS=()=>{
  
  let num_segs=parseInt(this);
  let horas=Math.floor(num_segs/3600);
  let minutos=Math.floor((num_segs-(horas*3600))/60);
  let segundos=num_segs-(horas*3600)-(minutos*60);
  if (horas<10){horas="0"+horas;}
  if (segundos < 10) {
    segundos = "0" + segundos;
  }
  let tiempo = horas + ":" + minutos + ":" + segundos;
  return tiempo;
}


d.addEventListener("DOMContentLoaded", (e) => {
  /*  if (ls.getItem("theme") === null) ls.setItem("theme", "dark");
      if (ls.getItem("theme") === "light") lightModel();
      if (ls.getItem("theme") === "dark") darkModel();*/
  if (ls.getItem("song") !== null) {
    let indice = ls.getItem("nextlink").indexOf("assets");
    let link = ls.getItem("nextlink").substring(indice);
    for (let track in tracks) {
      let linkTrack = tracks[track];
      if (linkTrack.getAttribute("href") === link) {
        console.log("foor track", linkTrack);
        runLocalStorage(linkTrack);
       
      }
    }
  }

});
