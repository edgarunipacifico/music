const   d=document,
        ls=localStorage;
export default function darkTheme(btn,classThem){

    const $themeBtn=d.querySelector(btn),
    $selector=d.querySelectorAll("[data-theme]");//selecionar todos los atributos que conincidan selectorAll"[nobre del atributo]"
    


    let moon = "🌙",
    sun= "☀️";
    const lightModel=()=>{
        $selector.forEach(el=>el.classList.remove("dark-theme-mode"));
        $themeBtn.textContent=moon;
        ls.setItem("theme","light");
    }
    const darkModel=()=>{
        $selector.forEach(el=>el.classList.add("dark-theme-mode"));
        $themeBtn.textContent=sun;
        ls.setItem("theme","dark");
    }

    d.addEventListener("click",e=>{
        
        if(e.target.matches(btn)|| e.target.matches(`${btn} *`)){
            
            if($themeBtn.textContent===sun){
                lightModel();
            }else{
                
                darkModel();
                
            }
        }
    
    });
    //cuando cargue la pagina validamos si no existe  la variable tipo localstora
    d.addEventListener("DOMContentLoaded",e=>{
        if(ls.getItem("theme")===null) ls.setItem("theme","dark");
        if(ls.getItem("theme")==="light") lightModel();
        if(ls.getItem("theme")==="dark") darkModel();
    });
}