function process(quantPet1){
  var value = parseInt(document.getElementById("quantPet1").value);
  value += quantPet1;
  if(value < 1){
    document.getElementById("quantPet1").value = 0;
  }else{
  document.getElementById("quantPet1").value = value;
  }
}

function process2(quantPet2){
  var value = parseInt(document.getElementById("quantPet2").value);
  value += quantPet2;
  if(value < 1){
    document.getElementById("quantPet2").value = 0;
  }else{
  document.getElementById("quantPet2").value = value;
  }
}

function mandardados(){
var text = document.getElementById('quantPet2').value;
var qt = document.getElementById('quantPrat');
qt.innerText = text;

var text1 = document.getElementById('camarao').value;
var qt1 = document.getElementById('attPedido');
qt1.innerText = text1;
}
