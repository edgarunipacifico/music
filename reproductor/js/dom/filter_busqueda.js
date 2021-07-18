const d = document;

export default function filterSearch(input, selector) {
  /*evento de teclado->realiza la busqueda cuando oprime  la tecla */
  console.log(input);
  d.addEventListener("keyup", (e) => {
    if (e.target.matches(input)) {
      if (e.key === "Escape") e.target.value = "";
      d.querySelectorAll(selector).forEach((el) =>
        el.textContent.toLowerCase().includes(e.target.value)
          ? el.classList.remove("filter")
          : el.classList.add("filter")
      );
      //console.log(e.key);
    }
  });
}
/*valida  si lo que escribe el usuario se incuentra en el contenido textual de la clase  */
//si concide la busqueda
