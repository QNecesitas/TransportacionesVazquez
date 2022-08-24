
var imagen_transp=document.getElementById("imgVerFoto");

var lista1_transp=["furgon1.jpg","furgon2.jpg","plataforma1.jpg","plataforma2.jpg","plataforma3.jpg"];
var lista2_galeria=["img1.jpg","img2.jpg","img3.jpg","img4.jpg","img5.jpg","img6.jpg","img7.jpg", "img8.jpg", "img9.jpg","img10.jpg","img11.jpg","img12.jpg","img13.jpg","img14.jpg","img15.jpg"];

var posLista=window.sessionStorage.getItem("index");
var isGaleria=window.sessionStorage.getItem("isGaleria");

if(isGaleria=== 'true'){
  imagen_transp.src="css/img/Galeria/"+lista2_galeria[posLista];
}else{
  imagen_transp.src="css/img/"+lista1_transp[posLista];
}


function siguienteTransp() {
  if(isGaleria === 'true'){
    posLista++;
    if(posLista===lista2_galeria.length)posLista=0;
    imagen_transp.src="css/img/Galeria/"+lista2_galeria[posLista];
  }else{
    posLista++;
    if(posLista===lista1_transp.length)posLista=0;
    imagen_transp.src="css/img/"+lista1_transp[posLista];
  }
}

function anteriorTransp(){
  if(isGaleria==='true'){
    posLista--;
    if(posLista===-1)posLista=lista2_galeria.length-1;
    imagen_transp.src="css/img/Galeria/"+lista2_galeria[posLista];
  }else{
    posLista--;
    if(posLista===-1)posLista=lista1_transp.length-1;
    imagen_transp.src="css/img/"+lista1_transp[posLista];
  }
}


function volver() {
  window.close();
}
