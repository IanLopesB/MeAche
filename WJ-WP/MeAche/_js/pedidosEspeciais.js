
function pedidosEspeciais(){
  var texts = document.getElementById('pedido-adicionais');

  if (texts.style.display === "none") {
    texts.style.display = "block";
    document.getElementById('escrevaOBS').focus();
  } else {
    texts.style.display = "none";
  }
}

function pedidosEspeciaisAction() {
    var texts = document.getElementById('pedido-adicionais');
    var x = document.activeElement.tagName;
    var demo = x;
      if (demo!= "TEXTAREA"){
      texts.style.display = "none";
    }
}