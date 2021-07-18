/*nousar poco efectiva*/
/*
const   d= document,
        w=window;

    

    export default function mediaquery(mediaQuery,idClass){

    let breakpoint= w.matchMedia(mediaQuery);
    const $iframe=d.createElement("iframe"),
            $fragment=d.createDocumentFragment(),
            $content=d.querySelector(idClass);
            $iframe.setAttribute("src","https://www.youtube.com/embed/G6uvuIJ6Af0");
            $iframe.setAttribute("title","YouTube video player");
            $iframe.setAttribute("frameborder","0");
            $iframe.setAttribute("allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture");
            $iframe.setAttribute("allowfullscreen","");
    const screen=(e)=>{
        
        if (e.matches){
            
            
            $fragment.appendChild($iframe);
            $content.appendChild($fragment);
            
       }else{console.log("no soy")}
    }
    
    breakpoint.addListener(screen);
    screen(breakpoint);

    d.addEventListener("DOMContentLoaded",e=>{
        if(ls.getItem("theme")===null) ls.setItem("theme","dark");
        if(ls.getItem("theme")==="light") lightModel();
        if(ls.getItem("theme")==="dark") darkModel();
    });

}*/
