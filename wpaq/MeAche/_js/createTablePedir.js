function mandardados1(){

var value1 = document.getElementById('quantPet1').value;
var trbody = document.getElementById('tablePedidos');

var tr = document.createElement('tr')
var th = document.createElement('th')
th.setAttribute("scope", "row");
th.setAttribute("id", "th_qtd1");
var td_Qtd1 = document.createElement('td');
td_Qtd1.setAttribute("id", "petisco_1");
var td_nameQtd1 = document.createElement('td');
td_nameQtd1.setAttribute("id", "petisco_1.1");
var td_preco1 = document.createElement('td');
td_preco1.setAttribute("id","petisco_1.1.1");

trbody.appendChild(tr);
tr.appendChild(td_Qtd1);
tr.appendChild(td_nameQtd1);
tr.appendChild(td_preco1);

var qtd1 = document.getElementById('petisco_1');
qtd1.innerText = value1;

var asinha = document.getElementById('asinha').firstChild.innerHTML;
document.getElementById('petisco_1.1').innerHTML = asinha;

var  preco1 = document.getElementById('preco1').innerHTML;
document.getElementById('petisco_1.1.1').innerHTML = preco1;

td_Qtd1.style.textAlign="center";
td_nameQtd1.style.textAlign="center";
td_preco1.style.textAlign="center";
}