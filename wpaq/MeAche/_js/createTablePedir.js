function mandardados1(){

var value1 = document.getElementById('quantPet1').value;
var trbody = document.getElementById('tablePedidos');

var th = document.createElement('th')
th.setAttribute("scope", "row");
th.setAttribute("id", "qtd1");

var tr = document.createElement('tr');
var th = document.createElement('th');
var td_Qtd1 = document.createElement('td');
td_Qtd1.setAttribute("id", "petisco_1");
var td_nameQtd1 = document.createElement('td');
td_nameQtd1.setAttribute("id", "petisco_1.1");

trbody.appendChild(tr);
tr.appendChild(td_Qtd1);
tr.appendChild(td_nameQtd1);

var qtd = document.getElementById('petisco_1');
qtd.innerText = value1;

var asinha = document.getElementById('asinha').firstChild.innerHTML;
document.getElementById('petisco_1.1').innerHTML = asinha;

td_Qtd1.style.textAlign="center";
td_nameQtd1.style.textAlign="center";
}