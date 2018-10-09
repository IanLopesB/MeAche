function mostrarSubtotal(){
     var x = document.getElementById("id01");
       if (x.style.display === "none") {
           x.style.display = "block";
       } else {
           x.style.display = "none";
       }
}

function confirma(){
  var meuPedido = document.getElementById('id01');

  if (document.getElementById('totalValue2').innerHTML != 0.00 ){
    alert("Pedido enviado com sucesso!");
    meuPedido.style.display = "none";
    location.reload();
  }
  else {
    alert("Nada Selecionado");    
    meuPedido.style.display = "none";    
  }
}


function mostrarInputReq() {

var x = document.getElementById("input-requisiçoes");
       if (x.style.display === "none") {
           x.style.display = "block";
       } else {
           x.style.display = "block";
       }

var x = document.getElementById("nome-requisicao");
       if (x.style.display === "block") {
           x.style.display = "none";
       } else {
           x.style.display = "none";
       }
}

function mostrarNomeReq() {

var x = document.getElementById("nome-requisicao");
       if (x.style.display === "none") {
           x.style.display = "block";
       } else {
           x.style.display = "block";
       }


 var x = document.getElementById("input-requisiçoes");
       if (x.style.display === "block") {
           x.style.display = "none";
       } else {
           x.style.display = "none";
       }

       }

   function abrirMenu() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

function openMenu(evt, menuName) {
  var i, x, tablinks;
  x = document.getElementsByClassName("menu");
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < x.length; i++) {
     tablinks[i].className = tablinks[i].className.replace(" w3-red", "");
  }
  document.getElementById(menuName).style.display = "block";
  evt.currentTarget.firstElementChild.className += " w3-red";
}