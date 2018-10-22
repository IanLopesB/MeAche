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
function mostrarSubtotal1(){
     var x = document.getElementById("id02");
       if (x.style.display === "none") {
           x.style.display = "block";
       } else {
           x.style.display = "none";
       }
}

function arrows(){
  var arrowUp = document.getElementById('arrowUp'),
      arrowDown = document.getElementById('arrowDown');

  var linkPetisco = document.getElementById('collapsePetisco').getAttribute('aria-expanded');

  if (linkPetisco = "true"){
    arrowDown.style.display = "none";
    arrowUp.style.display = "block";
  }

  else if (linkPetisco = "false"){
    arrowDown.style.display = "block";
    arrowUp.style.display = "none";
  }
}

function confirma(){
  var meuPedido = document.getElementById('id01');

  if (document.getElementById('totalValue').innerHTML != 0.00 ){
    alert("Pedido enviado com sucesso!");
    meuPedido.style.display = "none";
    location.reload();
  }
  else {
    alert("Nada Selecionado");
    meuPedido.style.display = "none";
  }
}

function pedidosEspeciais(){
  var texts = document.getElementById('pedido-adicionais');

  if (texts.style.display === "none") {
    texts.style.display = "block";
    document.getElementById('escrevaOBS').focus();
  } else {
    texts.style.display = "none";
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

function telaSubtotal() {
var valorT = document.getElementById('totalValue').innerHTML;
  if(valorT >0.00){
 document.getElementById('pedido-vazio').style.display = "none";
 document.getElementById('tbCreate').style.display = "inline-table";
  }else{
     document.getElementById('pedido-vazio').style.display = "block";
     document.getElementById('tbCreate').style.display = "none";
  }
}

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