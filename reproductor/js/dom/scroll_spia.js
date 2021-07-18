const d = document;

export default function scrollSpy() {
  const $sections = d.querySelectorAll(".sections[data-scroll-spy]");
console.log("esto es section",$sections)
  /*creamos una calbak la cual recibe los elementos que sevan visualisando en el wiepor */
  const cb = (entries) => {
    /*recorra todas las entradas */
    entries.forEach((entry) => {
      const id = entry.target.getAttribute("id");
    
      /*si la entrada se en cuentra cargada en el wiepor*/
      if (entry.isIntersecting) {
        /*selecione el primer elemeto a quetenga el atributo data scroll-spy y un # con el id y le agregas la clas active(para que se resalte  como si le hubieramos pasado el mouse)*/
        d.querySelector(`a[ data-scroll-spy][href="#${id}"]`).classList.add(
          "active"
        );
      } else {
        d.querySelector(`a[ data-scroll-spy][href="#${id}"]`).classList.remove(
          "active"
        );
      }
    });
  };
  /*creamos un observador el cual recibe un calback y opciones*/
  const observer = new IntersectionObserver(cb, {
    // root// referencia elemento base para medir el scroll--> si no pasames elemento tama como referencia el documen html
    // rootMargin:"-250px"/margin que seleda a la zona de observasion
    threshold: [0.5, 0.75], //--> ativa el observador cuando el elemento observedo este entre la mita y el 75 de  su anchura//limite de la zona de observacion-->valores de 0a1
  });

  /*asignamos el observador a cada elemento que tenga el atributo[data-scrolll-spy]*/
  $sections.forEach((el) => observer.observe(el));
}
