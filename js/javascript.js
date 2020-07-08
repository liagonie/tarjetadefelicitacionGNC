//Cambio de tamano px de texto
function cambiarTamanoEjemplo(){
    var tam=document.getElementById("tamanoTxt").value;
    document.getElementById("ejemploTexto").style.fontSize = tam + "em";
}

//creacion de tarjeta

function generarTarjeta(){
    document.getElementById("tarjeta").style.display="block";
    
    //Recuperacion de ruta
    var fondo;
    if(document.getElementById("tipoImg1").checked)
        fondo=document.getElementById("tipoImg1").value;
    else if (document.getElementById("tipoImg2").checked)
        fondo=document.getElementById("tipoImg2").value;
    else 
        fondo=document.getElementById("tipoImg2").value;
    
    //Especificar ruta, se forzo a concatenar fondo
    document.getElementById("tarjeta").style.backgroundImage="url('"+fondo+"')";
    document.getElementById("tarjeta").style.backgroundRepeat="no-repeat";
    document.getElementById("tarjeta").style.backgroundSize="350px 350px";
    
    //insertar titulo, con value se recupera su valor
    var titu=document.getElementById("tituloTxt").value;
    document.getElementById("titulo").innerHTML=titu;
    //color
    var c=document.getElementById("colorTxt").value;
    document.getElementById("titulo").style.color=c;
    //tamaño texto
    var tam=document.getElementById("tamanoTxt").value;
    document.getElementById("titulo").style.fontSize="em";
    //tipografia recuperar
    var tipo;
    if(document.getElementById("tipoTxt1").checked)
        tipo=document.getElementById("tipoTxt1").value;
    else if(document.getElementById("tipoTxt2").checked)
        tipo=document.getElementById("tipoTxt2").value;
    else tipo=document.getElementById("tipoTxt3").value;
    
    //tipografia asignar
    document.getElementById("titulo").style.fontFamily=tipo;
    //descripcion
    document.getElementById("descripcion").style.fontFamily=tipo;
    
    //ocultar zona de config
    document.getElementById("contenido").style.display="none";
    
    
    
    
}