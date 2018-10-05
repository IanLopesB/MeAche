function mandardados(íd, value){

var value1 = document.getElementById('quantPet1').value;
var value2 = document.getElementById('quantPet2').value;
var value3 = document.getElementById('quantPet3').value;
var value4 = document.getElementById('quantPet4').value;
var value5 = document.getElementById('quantPet5').value;
var value6 = document.getElementById('quantPet6').value;
var trbody = document.getElementById('tablePedidos');

var tr = document.createElement('tr');
var th = document.createElement('th');

if (value1>=1 || value2>=1 ||  value3>=1 ||  value4>=1 ||  value5>=1 ||  value6>=1){
tr.setAttribute("class", "tr_qtd");
th.setAttribute("scope", "row");
th.setAttribute("id", "th_qtd1");
var td_quant = document.createElement('td');
td_quant.setAttribute("class", "quantPetisco");
var td_name = document.createElement('td');
td_name.setAttribute("class", "namePetisco");
var td_preco = document.createElement('td');
td_preco.setAttribute("class","precoPetisco");

trbody.appendChild(tr);
tr.appendChild(td_quant);
tr.appendChild(td_name);
tr.appendChild(td_preco);

var idquant =  document.getElementsByClassName("quantPetisco");
  for (var i = 0; i < idquant.length; i++) {
    idquant[i].id = "td-quant" + (i + 1);}

    if (value1>=1){
      idquant[i].innerText = value1;
        /*var idname =  document.getElementsByClassName("namePetisco");
          for (var j = 0; j < idname.length; j++) {
            idname[j].id = "td-name" + (j+ 1);
              var asinha = document.getElementById('asinha').innerHTML;
              document.getElementById('td-name'+(j+1)).innerHTML= asinha;
            }*/ }
     else if (value2>=1){
      idquant[i].innerText = value2;
        /*var idname =  document.getElementsByClassName("namePetisco");
          for (var j = 1; j < idname.length; j++) {
            idname[j].id = "td-name" + (j+ 1);
              var camarao = document.getElementById('camarao').innerHTML;
              document.getElementById('td-name'+(j+1)).innerHTML= camarao;
            }*/ }
     /*else if (value3>=1){
      idquant[i].innerText = value3;
        var idname =  document.getElementsByClassName("namePetisco");
          for (var j = 2; j < idname.length; j++) {
            idname[j].id = "td-name" + (j+ 1);
              var calabresa = document.getElementById('calabresa').innerHTML;
              document.getElementById('td-name'+(j+1)).innerHTML= calabresa;
            } }
     else if (value4>=1){
      idquant[i].innerText = value4;
        var idname =  document.getElementsByClassName("namePetisco");
          for (var j = 3; j < idname.length; j++) {
            idname[j].id = "td-name" + (j+ 1);
              var carneSol = document.getElementById('carneSol').innerHTML;
              document.getElementById('td-name'+(j+1)).innerHTML= carneSol;
            } }
     else if (value5>=1){
      idquant[i].innerText = value5;
        var idname =  document.getElementsByClassName("namePetisco");
          for (var j = 4; j < idname.length; j++) {
            idname[j].id = "td-name" + (j+ 1);
              var torresmo = document.getElementById('torresmo').innerHTML;
              document.getElementById('td-name'+(j+1)).innerHTML= torresmo;
            } }
       else if (value6>=1){
        idquant[i].innerText = value6;
          var idname =  document.getElementsByClassName("namePetisco");
            for (var j = 5; j < idname.length; j++) {
              idname[j].id = "td-name" + (j+ 1);
                var batata = document.getElementById('batata').innerHTML;
                document.getElementById('td-name'+(j+1)).innerHTML= batata;
    }
    }*/

td_quant.style.textAlign="center";
td_name.style.textAlign="center";
td_preco.style.textAlign="center";
  }
}








/*function mandardados1(){

<<<<<<< HEAD
var value1 = document.getElementById('quantPet1').value;
var trbody = document.getElementById('tablePedidos');
var validar = false;

if (value1<=0 || value1!=document.getElementById('quantPet1').value){
  return ;
}else{
var tr1 = document.createElement('tr')
var th = document.createElement('th')
tr.setAttribute("class", "tr_qtd")
th.setAttribute("scope", "row");
th.setAttribute("id", "th_qtd1");
var td_Qtd1 = document.createElement('td');
td_Qtd1.setAttribute("id", "petisco_1");
var td_nameQtd1 = document.createElement('td');
td_nameQtd1.setAttribute("id", "petisco_1.1");
var td_preco1 = document.createElement('td');
td_preco1.setAttribute("id","petisco_1.1.1");

trbody.appendChild(tr1);
tr1.appendChild(td_Qtd1);
tr1.appendChild(td_nameQtd1);
tr1.appendChild(td_preco1);

var qtd1 = document.getElementById('petisco_1');
qtd1.innerText = value1;

var asinha = document.getElementById('asinha').firstChild.innerHTML;
document.getElementById('petisco_1.1').innerHTML = asinha;

<<<<<<< HEAD
var preco1 = document.getElementById('preco1').innerHTML;
document.getElementById('petisco_1.1.1').innerHTML = preco1;
=======
var preco1 = 13.50;
var result = preco1*value1;

document.getElementById('petisco_1.1.1').innerHTML = result.toFixed(2);
document.getElementById('totalValue').innerHTML = result.toFixed(2);
>>>>>>> refs/remotes/origin/master

td_Qtd1.style.textAlign="center";
td_nameQtd1.style.textAlign="center";
td_preco1.style.textAlign="center";

  var trqtd = document.getElementsByClassName("tr_qtd");
  for (var i = 0; i < trqtd.length; i++) {
    trqtd[i].id = "tr" + (i + 1);
    validar == true;
  }
  if (validar==true){

  }
  }
  }
=======
	var preco1, 
		preco2;

	var value1 = document.getElementById('quantPet1').value, 
		value2 = document.getElementById('quantPet2').value,
		trbody = document.getElementById('tablePedidos');

	if (value1 == 0){preco1 = 0;} else {preco1 = 13.00;}
	if (value2 == 0){preco2 = 0;} else {preco2 = 25.00;}

	var tr = document.createElement('tr'), 
		td_qtd = document.createElement('td'),
		td_namePrato= document.createElement('td'), 
		td_preco = document.createElement('td');


	td_qtd.setAttribute("id", "Qtd"); 
	td_namePrato.setAttribute("id", "namePrato"); 
	td_preco.setAttribute("id","preco");

	trbody.appendChild(tr);
	tr.appendChild(td_qtd);
	tr.appendChild(td_namePrato);
	tr.appendChild(td_preco);

	var qtd = document.getElementById('Qtd');
	qtd.innerText = value1;

	var asinha = document.getElementById('asinha').firstChild.innerHTML;
	document.getElementById('namePrato').innerHTML = asinha;

	var result = (preco1 * value1 + preco2 * value2);

	document.getElementById('preco').innerHTML = result.toFixed(2);
	document.getElementById('totalValue').innerHTML = result.toFixed(2);
}
>>>>>>> 44dcdabd1e520393b944ac5ed7a08a766a6b4c80

function mandardados2(){

var tr2 = document.createElement('tr')
var th = document.createElement('th')
th.setAttribute("scope", "row");
th.setAttribute("id", "th_qtd2");
var td_Qtd2 = document.createElement('td');
td_Qtd2.setAttribute("id", "petisco_2");
var td_nameQtd2 = document.createElement('td');
td_nameQtd2.setAttribute("id", "petisco_2.2");
var td_preco2 = document.createElement('td');
td_preco2.setAttribute("id","petisco_2.2.2");

trbody.appendChild(tr2);
tr2.appendChild(td_Qtd2);
tr2.appendChild(td_nameQtd2);
tr2.appendChild(td_preco2);

var qtd2 = document.getElementById('petisco_2');
qtd2.innerText = value2;

var camarao = document.getElementById('camarao').firstChild.innerHTML;
document.getElementById('petisco_2.2').innerHTML = camarao;

var  preco2 = document.getElementById('preco2').innerHTML;
document.getElementById('petisco_2.2.2').innerHTML = preco2;

td_Qtd2.style.textAlign="center";
td_nameQtd2.style.textAlign="center";
td_preco2.style.textAlign="center";
}

function mandardados3(){

var value3 = document.getElementById('quantPet3').value;
var trbody = document.getElementById('tablePedidos');

var tr3 = document.createElement('tr')
var th = document.createElement('th')
th.setAttribute("scope", "row");
th.setAttribute("id", "th_qtd3");
var td_Qtd3 = document.createElement('td');
td_Qtd3.setAttribute("id", "petisco_3");
var td_nameQtd3 = document.createElement('td');
td_nameQtd3.setAttribute("id", "petisco_3.3");
var td_preco3 = document.createElement('td');
td_preco3.setAttribute("id","petisco_3.3.3");

trbody.appendChild(tr3);
tr3.appendChild(td_Qtd3);
tr3.appendChild(td_nameQtd3);
tr3.appendChild(td_preco3);

var qtd3 = document.getElementById('petisco_3');
qtd3.innerText = value3;

var calabresa = document.getElementById('calabresa').firstChild.innerHTML;
document.getElementById('petisco_3.3').innerHTML = calabresa;

var  preco3 = document.getElementById('preco3').innerHTML;
document.getElementById('petisco_3.3.3').innerHTML = preco3;

td_Qtd3.style.textAlign="center";
td_nameQtd3.style.textAlign="center";
td_preco3.style.textAlign="center";
}

function mandardados4(){

var value4 = document.getElementById('quantPet4').value;
var trbody = document.getElementById('tablePedidos');

var tr4 = document.createElement('tr')
var th = document.createElement('th')
th.setAttribute("scope", "row");
th.setAttribute("id", "th_qtd4");
var td_Qtd4 = document.createElement('td');
td_Qtd4.setAttribute("id", "petisco_4");
var td_nameQtd4 = document.createElement('td');
td_nameQtd4.setAttribute("id", "petisco_4.4");
var td_preco4 = document.createElement('td');
td_preco4.setAttribute("id","petisco_4.4.4");

trbody.appendChild(tr4);
tr4.appendChild(td_Qtd4);
tr4.appendChild(td_nameQtd4);
tr4.appendChild(td_preco4);

var qtd4 = document.getElementById('petisco_4');
qtd4.innerText = value4;

var carneSol= document.getElementById('carneSol').firstChild.innerHTML;
document.getElementById('petisco_4.4').innerHTML = carneSol;

var preco4 = document.getElementById('preco4').innerHTML;
document.getElementById('petisco_4.4.4').innerHTML = preco4;

td_Qtd4.style.textAlign="center";
td_nameQtd4.style.textAlign="center";
td_preco4.style.textAlign="center";
}

function mandardados5(){

var value5 = document.getElementById('quantPet5').value;
var trbody = document.getElementById('tablePedidos');

var tr5 = document.createElement('tr')
var th = document.createElement('th')
th.setAttribute("scope", "row");
th.setAttribute("id", "th_qtd5");
var td_Qtd5 = document.createElement('td');
td_Qtd5.setAttribute("id", "petisco_5");
var td_nameQtd5 = document.createElement('td');
td_nameQtd5.setAttribute("id", "petisco_5.5");
var td_preco5 = document.createElement('td');
td_preco5.setAttribute("id","petisco_5.5.5");

trbody.appendChild(tr5);
tr5.appendChild(td_Qtd5);
tr5.appendChild(td_nameQtd5);
tr5.appendChild(td_preco5);

var qtd5 = document.getElementById('petisco_5');
qtd5.innerText = value5;

var torresmo = document.getElementById('torresmo').firstChild.innerHTML;
document.getElementById('petisco_5.5').innerHTML = torresmo;

var  preco5 = document.getElementById('preco5').innerHTML;
document.getElementById('petisco_5.5.5').innerHTML = preco5;

td_Qtd5.style.textAlign="center";
td_nameQtd5.style.textAlign="center";
td_preco5.style.textAlign="center";
}

function mandardados6(){

var value6 = document.getElementById('quantPet6').value;
var trbody = document.getElementById('tablePedidos');

var tr6 = document.createElement('tr')
var th = document.createElement('th')
th.setAttribute("scope", "row");
th.setAttribute("id", "th_qtd6");
var td_Qtd6 = document.createElement('td');
td_Qtd6.setAttribute("id", "petisco_6");
var td_nameQtd6 = document.createElement('td');
td_nameQtd6.setAttribute("id", "petisco_6.6");
var td_preco6 = document.createElement('td');
td_preco6.setAttribute("id","petisco_6.6.6");

trbody.appendChild(tr6);
tr6.appendChild(td_Qtd6);
tr6.appendChild(td_nameQtd6);
tr6.appendChild(td_preco6);

var qtd6 = document.getElementById('petisco_6');
qtd6.innerText = value6;

var batata = document.getElementById('batata').firstChild.innerHTML;
document.getElementById('petisco_6.6').innerHTML = batata;

var  preco6 = document.getElementById('preco6').innerHTML;
document.getElementById('petisco_6.6.6').innerHTML = preco6;

td_Qtd6.style.textAlign="center";
td_nameQtd6.style.textAlign="center";
td_preco6.style.textAlign="center";
}*/