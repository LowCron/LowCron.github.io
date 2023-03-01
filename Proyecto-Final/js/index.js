const paginas_ocultas = {
    carta:document.getElementById('Carta-de-Presentacion'),
    info:document.getElementById('info-personal'),
    experiencia:document.getElementById('experiencia'),
    habilidades:document.getElementById('habilidades'),
}

const Boton ={
    Carta: document.getElementById('Boton-carta'),
    carta_sup:document.getElementById('Boton-carta-sup'),
    info:document.getElementById('boton-info'),
    info_sup:document.getElementById('boton-info-sup'),
    experiencia: document.getElementById('boton-experiencia'),
    experiencia_sup:document.getElementById('boton-experiencia-sup'),
    habilidades:document.getElementById('boton-habilidades'),
    habilidades_sup:document.getElementById('boton-habilidades-sup'),
}


function Ocultar(){
    paginas_ocultas.carta.style.display ="none"
    paginas_ocultas.info.style.display ="none"
    paginas_ocultas.experiencia.style.display ="none"
    paginas_ocultas.habilidades.style.display ="none"
}

Ocultar() //desaparece todas las secciones 
/*botones parte superior
sirven para visualizar todo el contenido
*/
Boton.carta_sup.addEventListener('click',function(){
    if(paginas_ocultas.carta.style.display === "none"){
        paginas_ocultas.carta.style.display ="block"
    }
})
Boton.info_sup.addEventListener('click',function(){
    if(paginas_ocultas.info.style.display === "none"){
        paginas_ocultas.info.style.display ="block"
    }
})
Boton.experiencia_sup.addEventListener('click',function(){
    if(paginas_ocultas.experiencia.style.display === "none"){
        paginas_ocultas.experiencia.style.display ="block"
    }
})
Boton.habilidades_sup.addEventListener('click',function(){
    if(paginas_ocultas.habilidades.style.display === "none"){
        paginas_ocultas.habilidades.style.display ="block"
    }
})

//botones parte inferior
Boton.Carta.addEventListener("click", function(){
    
    if(paginas_ocultas.carta.style.display ==="none"){
        Ocultar()
        paginas_ocultas.carta.style.display ="block"
    }else{
        Ocultar()
    }  
})
Boton.info.addEventListener("click", function(){
    if(paginas_ocultas.info.style.display ==="none"){
        Ocultar()
        paginas_ocultas.info.style.display ="block"
    }else{
        Ocultar()
    }  
})
Boton.experiencia.addEventListener("click", function(){
    if(paginas_ocultas.experiencia.style.display ==="none"){
        Ocultar()
        paginas_ocultas.experiencia.style.display ="block"
    }else{
        Ocultar()
    }  
})
Boton.habilidades.addEventListener("click", function(){
    if(paginas_ocultas.habilidades.style.display ==="none"){
        Ocultar()
        paginas_ocultas.habilidades.style.display ="block"
    }else{
        Ocultar()
    }  
})
//darkmode
function darkmode(){
    let main_body=document.body
    main_body.classList.toggle("darkmode")
}
if(!localStorage.clickcount){
    localStorage.clickcount= 0 
}
document.body.addEventListener('click',function Sumar_contador(){
    let contador= parseInt(localStorage.clickcount)
    contador += 1
    localStorage.clickcount = contador
})

document.body.addEventListener('click',function texto_cambiante (){
    document.getElementById('cliksTotales').textContent = localStorage.clickcount
})



