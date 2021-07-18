const d=document;
export default function them(btnSun,btnMoon){
    
    
    d.addEventListener("click",e=>{

        let $h2=d./*getElementsByTagName*/querySelectorAll(".h2");
        console.log($h2);
        if(e.target.matches(btnSun)|| e.target.matches(`${btnSun} *`)){
            
            d.querySelector(btnSun).classList.toggle("hidden");
            d.body.style.backgroundColor="#fff";
            d.querySelector(btnMoon).classList.remove("hidden");
            
            /*d.querySelectorAll("h2").forEach((el)=>{
                el.classList.add("color-span");
            })*/
            $h2.forEach(el=>el.style.color="rgba(34,34,34,0.85)")
 
            
        }
        if(e.target.matches(btnMoon)|| e.target.matches(`${btnMoon} *`)){
            
            d.querySelector(btnMoon).classList.toggle("hidden");
            d.body.style.backgroundColor="#000";
            d.querySelector(btnSun).classList.remove("hidden");
            
           
               $h2.forEach(el=>el.style.color="#061ef0")
            
 
        }

    })
}