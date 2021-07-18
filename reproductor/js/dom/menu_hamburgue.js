 
 export default function hamburgerMenu( panelBtn, panel, menuLink){
     const d =document;

 


     d.addEventListener("click",(e)=> {
 
        if(e.target.matches("panelBtn") || e.target.matches(`${panelBtn} *`)){// si el evento que genero el click concide con el panelboton 0cual quier hijo que este dentro del  boton
          
            d.querySelector(panel).classList.toggle("is-active");
            d.querySelector(panelBtn).classList.toggle("is-active");
            d.querySelector(panelBtn).classList.toggle("color-btn");
        }
        
        if(e.target.matches(menuLink)){
            d.querySelector(panel).classList.remove("is-active");
            d.querySelector(panelBtn).classList.remove("is-active");
            d.querySelector(panelBtn).classList.remove("color-btn");

        }
     });

}
          
