function mostrarSubtotal(){
 var x = document.getElementById("id01");
   if (x.style.display === "none") {
       x.style.display = "block";
   } else {
       x.style.display = "none";
   }
}
function fecharSubtotal(){
 var x = document.getElementById("id01");
   if (x.style.display === "block") {
       x.style.display = "none";
   } else {
       x.style.display = "block";
     }
}
function fecharPedEnv(){
 var pedEnv = document.getElementById("pedido-enviado");
   if (pedEnv.style.display === "block") {
       pedEnv.style.display = "none";
    location.reload();
   } else {
       pedEnv.style.display = "block";
     }
}
function fecharid03(){
 var x = document.getElementById("id03");
   if (x.style.display === "block") {
       x.style.display = "none";
   } else {
       x.style.display = "block";
     }
}

function confirma(){
var ttValue = document.getElementById('totalValue').innerHTML;
  if (ttValue > 0.00 ){
  var x = document.getElementById("pedido-enviado");
       if (x.style.display === "none") {
           x.style.display = "block";

       } else {
           x.style.display = "none";
       }
  }else if (ttValue <= 0.00){
     var xx = document.getElementById("id03");
       if (xx.style.display === "none") {
           xx.style.display = "block";
       } else {
           xx.style.display = "none";
       }
}}

function telaSubtotal() {
  var valorT = document.getElementById('totalValue').innerHTML;
    if(valorT >0.00){
      document.getElementById('pedido-vazio').style.display = "none";
      document.getElementById('tbCreate').style.display = "inline-table";
  } else{
      document.getElementById('pedido-vazio').style.display = "block";
      document.getElementById('tbCreate').style.display = "none";
  }
}

// functions arrows //
  function arrows1(){
    var arrowUp = document.getElementById("arrowUp1"),
      arrowDown = document.getElementById("arrowDown1"),
      linkPetisco = document.getElementById("collapse1").getAttribute('aria-expanded');
    if (linkPetisco === "true"){
      arrowDown.style.display = "block";
      arrowUp.style.display = "none";
    } else if (linkPetisco ==="false"){
      arrowDown.style.display = "none";
      arrowUp.style.display = "block";
    }
  }
  function arrows2(){
    var arrowUp = document.getElementById("arrowUp2"),
      arrowDown = document.getElementById("arrowDown2"),
          linkPetisco = document.getElementById("collapse2").getAttribute('aria-expanded');
    if (linkPetisco === "true"){
      arrowDown.style.display = "block";
      arrowUp.style.display = "none";
    } else if (linkPetisco ==="false"){
      arrowDown.style.display = "none";
      arrowUp.style.display = "block";
    }
  }
  function arrows3(){
    var arrowUp = document.getElementById("arrowUp3"),
      arrowDown = document.getElementById("arrowDown3"),
          linkPetisco = document.getElementById("collapse3").getAttribute('aria-expanded');
    if (linkPetisco === "true"){
      arrowDown.style.display = "block";
      arrowUp.style.display = "none";
    } else if (linkPetisco ==="false"){
      arrowDown.style.display = "none";
      arrowUp.style.display = "block";
    }
  }
  function arrows4(){
    var arrowUp = document.getElementById("arrowUp4"),
      arrowDown = document.getElementById("arrowDown4"),
      linkPetisco = document.getElementById("collapse4").getAttribute('aria-expanded');
    if (linkPetisco === "true"){
      arrowDown.style.display = "block";
      arrowUp.style.display = "none";
    } else if (linkPetisco ==="false"){
      arrowDown.style.display = "none";
      arrowUp.style.display = "block";
    }
  }
  function arrows5(){
    var arrowUp = document.getElementById("arrowUp5"),
      arrowDown = document.getElementById("arrowDown5"),
      linkPetisco = document.getElementById("collapse5").getAttribute('aria-expanded');
    if (linkPetisco === "true"){
      arrowDown.style.display = "block";
      arrowUp.style.display = "none";
    } else if (linkPetisco ==="false"){
      arrowDown.style.display = "none";
      arrowUp.style.display = "block";
    }
  }
  function arrows6(){
    var arrowUp = document.getElementById("arrowUp6"),
      arrowDown = document.getElementById("arrowDown6"),
      linkPetisco = document.getElementById("collapse6").getAttribute('aria-expanded');
    if (linkPetisco === "true"){
      arrowDown.style.display = "block";
      arrowUp.style.display = "none";
    } else if (linkPetisco ==="false"){
      arrowDown.style.display = "none";
      arrowUp.style.display = "block";
    }
  }
  function arrows7(){
    var arrowUp = document.getElementById("arrowUp7"),
      arrowDown = document.getElementById("arrowDown7"),
      linkPetisco = document.getElementById("collapse7").getAttribute('aria-expanded');
    if (linkPetisco === "true"){
      arrowDown.style.display = "block";
      arrowUp.style.display = "none";
    } else if (linkPetisco ==="false"){
      arrowDown.style.display = "none";
      arrowUp.style.display = "block";
    }
  }

  function fecharPratos(){
  var pratos = document.querySelectorAll('.fundo-span-2')
  for (var i = 0; i < pratos.length; i++) {
      pratos[i].style.display = "none";
    }
}
//! functions arrows !//