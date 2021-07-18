const d=document,
w=window;
export default function btnUp(btn,btnPanel,menuLink,IconBtnUp){

    const btnUp=d.querySelector(btn)
   
    window.onscroll=()=>{
        let scroll=d.documentElement.scrollTop;
       
        if (scroll > 500){
            btnUp.style.transform = "scale(1)";
       }else if(scroll < 500){
        btnUp.style.transform = "scale(0)";
        }
    }

    d.addEventListener("click",(e)=> {
        
        if(e.target.matches("btnPanel") || e.target.matches(`${btnPanel} *`)){// si el evento que genero el click concide con el panelboton 0cual quier hijo que este dentro del  boton

            d.querySelector(IconBtnUp).classList.toggle("color-btn");

        }
        
        if(e.target.matches(menuLink)){
            d.querySelector(IconBtnUp).classList.remove("color-btn");

        }
     })

}



