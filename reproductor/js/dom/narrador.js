const d = document,
  w = window;

export default function speechReader() {
const $spechSelect = d.getElementById("speach-select"),
  $spechBtn = d.getElementById("speach-btn"),
  $mostrarBtn=d.getElementById("btnarrador"),
  $mostrarspan=d.getElementById("span-narrar"),
  speechMessage = new SpeechSynthesisUtterance();
    
  //console.log(speechMessage);

  let voices = [];

  d.addEventListener("DOMContentLoaded", (e) => {
    //detetecta las voces disponibles cuando carga el document
    //console.log(w.speechSynthesis.getVoices());
    //evento que trae el objeto speechSynthesis parra que el navegador decte las voces disponibles del S.:O
    w.speechSynthesis.addEventListener("voiceschanged", (e) => {
      // console.log(e);
      //metodos speechSynthesis.getVoices() nos carga las voces y la guardamos en nuestra variable  voices
      voices = w.speechSynthesis.getVoices();
      //console.log(voices);
      //carcamos nuestra etiqueta selec con las voses que dectecto el navegado dinamicamente
      voices.forEach((voice) => {
        const $option = d.createElement("option");
        $option.value = voice.name;
        $option.textContent = `${voice.name}-${voice.lang}`;
        $spechSelect.appendChild($option);
      
      });
    });
  });
  //cargamos lavos que selecionemos en la etiqueta select al objeto SpeechSynthesisUtterance el cual viene por defecto null en su atributo voices

  d.addEventListener("change", (e) => {
    //dectecta si se a selecionado una voce
    if (e.target === $spechSelect) {
      /*acedemos alobjeto SpeachSythessis en su atibuto voices el cual esta guardado en la variable speechMessage y le asinamos  la voz que trae nuestro arrays voices utilisando el metoodo find para que busque y carge la que selecion el usuario*/
      speechMessage.voice = voices.find(
        (voice) => voice.name === e.target.value
      );
      console.log(speechMessage);
    }
  });
  d.addEventListener("click", (e) => {
    /*lee el texto que ingresamos al textarea */

      if (e.target === $mostrarBtn || e.target===$mostrarspan){
        $spechBtn.classList.toggle("hidden");
        $spechSelect.classList.toggle("hidden");
      }
        if (e.target === $spechBtn) {
          const $spechText = `Shakira, la cantante más        buscada en Google
                Uno asume que todo el planeta sabe y conoce las caderas honestas de Shakira, pero la realidad es que la presentación de la barranquillera en el Super Bowl, disparó un interés nunca antes visto por conocer más sobre ella. Dentro del listado general de los más buscados, Shaki se ubica en la séptima posición, con Joe Biden ocupando el primer puesto, seguido de Kim Jon Un, Kamala Harris, Jacob Blake, Ryan Newman y Tom Hanks.La actuación del medio tiempo en dicho evento, (el más visto en el país del norte), que se llevó a cabo el 2 de Febrero, justo el día de su cumpleaños, la ubicó como la cantante más buscada, por encima de artistas anglo como Adele, Doja Cat, y muchas otras.
                
                Bad Bunny ha sido el artista más escuchado de Spotify.
                Como cada año, Spotify ha publicado sus rankings con las canciones y artistas más escuchados del 2020. Por primera vez en la popular plataforma, un artista de habla hispana se ha colocado en el primer puesto a nivel mundial. Se trata de Bad Bunny, quien acumula más de 8 mil millones de reproducciones.

                Bad Bunny se ha convertido en el artista más escuchado del año tanto a escala global como en España con más de 8 mil millones de reproducciones.

                Los dos videos más vistos en Tik Tok.
              En sólo 10 segundos saltó a la fama Bella Poarch. Es el vídeo más visto de Tik Tok de todo el año con más de 530 millones de reproducciones y 43 millones de 'me gusta'.

              En el vídeo se puede ver a la tiktoker cantando parte de la canción 'M to de B' de Millie B con una sincronización casi perfecta. Posteriormente, siguió colgando vídeos de este estilo que la han coronado como la reina del 2020 en Tik Tok.

              Jade Taylor-Ryan logró uno de los mejores videos del reto viral ‘Mr. Sandman’ que consistía en poner a bailar a cualquier persona o animal al ritmo de la canción ‘1954’ de The Chordettes. Su gato se llevó todos los aplausos.
              Bad Bunny 
`;

          speechMessage.text = $spechText;
          w.speechSynthesis.speak(speechMessage);
        }



  });
}
//firstElementChild.textContent
