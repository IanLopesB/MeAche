function mostrarSubtotal() {
   
     var x = document.getElementById("id01");
       if (x.style.display === "none") {
           x.style.display = "block";
       } else {
           x.style.display = "none";
       }
   }

   function mostrarPrato1() {

var x = document.getElementById("prato1");
       if (x.style.display === "none") {
           x.style.display = "block";
       } else {
           x.style.display = "none";
       }
   
   }
function process(quant){
    var value = parseInt(document.getElementById("quant").value);
    value+=quant;
    if(value < 1){
      document.getElementById("quant").value = 0;
    }else{
    document.getElementById("quant").value = value;
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

function fecharPrato1() {

var x = document.getElementById("prato1");
       if (x.style.display === "none") {
           x.style.display = "block";
       } else {
           x.style.display = "none";
       }
   
   }