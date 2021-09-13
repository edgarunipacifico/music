const d = document;

export default function contacFormValidations() {
  const $form = d.querySelector(".contact-form"),
    $inputs = d.querySelectorAll(".contact-form [ required ]");
  // console.log($inputs);
  /*reccoremos los input del formularios agrecando un elemento span con la clase  para mostrar los mensajes de error*/
  $inputs.forEach((input) => {
    const $span = d.createElement("span");
    $span.id = input.name;
    $span.textContent = input.title;
    $span.classList.add("contact-form-error", "none");
    input.insertAdjacentElement("afterend", $span);
  });

  /*realisaos la validasion el formulario con el evento kyups*/

  d.addEventListener("keyup", (e) => {
    //cuando el evento sea igual a un elemento que este en el formulario y tenga el atributo requierd
    if (e.target.matches(".contact-form [ required ]")) {
      let $input = e.target,
        //cuarda el atributo parten o el atributo data-pattern
        pattern = $input.pattern || $input.dataset.pattern;

      //console.log($input, pattern);
      //valida los input que  son requeridos y tienen un atributo patron
      if (pattern && $input.value !== "") {
        //creamos una  expresion regular con el patron que tra el input del formulario para validar si el patron cumple con lo que el usuario escrive en el input
        let regex = new RegExp(pattern);
        return !regex.exec($input.value)
          ? d.getElementById($input.name).classList.add("is-active")
          : d.getElementById($input.name).classList.remove("is-active");
      }
      //valida los input que son requerido y que no tienen un atributo patron
      if (!pattern) {
        return $input.value === ""
          ? d.getElementById($input.name).classList.add("is-active")
          : d.getElementById($input.name).classList.remove("is-active");
      }
    }
  });
  //procesar formulario
  d.addEventListener("submit", (e) => {
    // e.preventDefault();
    //alert("enviando formularios");
    const $loader = d.querySelector(".contac-form-loader"),
      $response = d.querySelector(".contac-form-response");

    $loader.classList.remove("none");

    //simulando respuesta del servidor
    setTimeout(() => {
      $loader.classList.add("none");
      $response.classList.remove("none");
      $form.reset();
      setTimeout(() => $response.classList.add("none"), 3000);
    }, 3000);
  });
}
