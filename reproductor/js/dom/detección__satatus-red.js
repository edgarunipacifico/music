const d=document,
w=window,
n=navigator;

export default function networkStatus(){
    
    const isOnLine = () =>{
        const $div=d.createElement("div")
        
        /*si hay conexión
        agregamos msj al elemento 
        + la clase online - la clase offline*/
        
        if(n.onLine){
            
            $div.textContent="Conexión Restablecida";
            $div.classList.add("online");
            $div.classList.remove ("offline");
        
        
        }
        /*si no hay conexión
        agregamos msj al elemento 
        - la clase online +la clase offline*/
        else{
            $div.textContent="Se perdio la conexión";
            $div.classList.remove("online");                                                          

            $div.classList.add("offline");
            
        }
        //agregamos el elemento al body
        d.body.insertAdjacentElement("afterbegin",$div);

        //eliminamos elementos despues de 2 seg
        setTimeout(()=> d.body.removeChild($div),2000)
    };
    //eventos para dectetar si tenemos conexión
    w.addEventListener("online",(e)=> isOnLine());
    w.addEventListener("offline",(e)=> isOnLine());

   
}