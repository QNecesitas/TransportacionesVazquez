
function mostrarTransp(index){
  window.sessionStorage.setItem("index",index);
  window.sessionStorage.setItem("isGaleria",false);
  window.open("verFoto.html");
}

function mostrarGaleria(index){
  window.sessionStorage.setItem("index",index);
  window.sessionStorage.setItem("isGaleria",true);
  window.open("verFoto.html");
}
