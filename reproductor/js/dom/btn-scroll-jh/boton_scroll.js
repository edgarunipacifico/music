const d =document,
w =window;
export default function scrollTopBottom(btn,btnPanel,menuLink,span){

    const $scrollBtn= d.querySelector(btn);

    w.addEventListener("scroll",e=>{
        let scrollTop =w.pageYOffset || d.documentElement.scrollTop;
        if(scrollTop> 500){
            //$scrollBtn.classList.remove("hidden");
            $scrollBtn.style.transform = "scale(1)";
        }else{
            //$scrollBtn.classList.add("hidden");
            $scrollBtn.style.transform = "scale(0)";

        }
    });

    d.addEventListener("click",e=>{

        if(e.target.matches(btn)|| e.target.matches(`${btn} *`)){
            w.scrollTo({
                behavior:"smooth",
                top:0,
            });
            
        }
        if(e.target.matches("btnPanel") || e.target.matches(`${btnPanel} *`)){// si el evento que genero el click concide con el panelboton 0cual quier hijo que este dentro del  boton

            d.querySelector(btn).classList.toggle("color-btn");
            d.querySelector(span).classList.toggle("color-span");
            


        }
        
       if(e.target.matches(menuLink)){
            d.querySelector(btn).classList.remove("color-btn");
            d.querySelector(span).classList.remove("color-span");
        }
    })

}