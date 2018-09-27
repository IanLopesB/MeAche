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

function process3(quantPet3){
  var value = parseInt(document.getElementById("quantPet3").value);
  value += quantPet3;
  if(value < 1){
    document.getElementById("quantPet3").value = 0;
  }else{
  document.getElementById("quantPet3").value = value;
  }
}

function process4(quantPet4){
  var value = parseInt(document.getElementById("quantPet2").value);
  value += quantPet4;
  if(value < 1){
    document.getElementById("quantPet4").value = 0;
  }else{
  document.getElementById("quantPet4").value = value;
  }
}

function process5(quantPet5){
  var value = parseInt(document.getElementById("quantPet5").value);
  value += quantPet5;
  if(value < 1){
    document.getElementById("quantPet5").value = 0;
  }else{
  document.getElementById("quantPet5").value = value;
  }
}

function process6(quantPet6){
  var value = parseInt(document.getElementById("quantPet6").value);
  value += quantPet6;
  if(value < 1){
    document.getElementById("quantPet6").value = 0;
  }else{
  document.getElementById("quantPet6").value = value;
  }
}

function mandardados(){

var value = document.getElementById('quantPet2').value;

var trbody = document.getElementById('tablePedidos');

var th = document.createElement('th')
th.setAttribute("scope", "row");
th.setAttribute("id", "qtd");


var td = document.createElement('td');
td.setAttribute("id", "petisco_2");

trbody.appendChild(th);
trbody.appendChild(td);


var td = document.getElementById("qtd");
var camarao = document.getElementById('camarao').firstChild.innerHTML;

document.getElementById('qtd').innerText = value;
td.innerHTML = camarao;

}
