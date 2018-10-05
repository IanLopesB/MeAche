function mandardados1(){

	var value1 = document.getElementById('quantPet1').value,
				value2 = document.getElementById('quantPet2').value,
				value3 = document.getElementById('quantPet3').value,
				value4 = document.getElementById('quantPet4').value,
				value5 = document.getElementById('quantPet5').value,
				value6 = document.getElementById('quantPet6').value,
				value7 = document.getElementById('quantPet7').value,
				value8 = document.getElementById('quantPet8').value,
				trbody = document.getElementById('tablePedidos');

	if (value1 == 0){var preco1 = 0;} else {preco1 = 13.00;}
	if (value2 == 0){var preco2 = 0;} else {preco2 = 25.00;}
	if (value3 == 0){var preco3 = 0;} else {preco3 = 15.00;}
	if (value4 == 0){var preco4 = 0;} else {preco4 = 20.00;}
	if (value5 == 0){var preco5 = 0;} else {preco5 = 10.00;}
	if (value6 == 0){var preco6 = 0;} else {preco6 = 10.00;}
	if (value7 == 0){var preco7 = 0;} else {preco7 = 6.00;}
	if (value8 == 0){var preco8 = 0;} else {preco8 = 10.00;}

	var tr = document.createElement('tr'),
		td_quantPetisco1 = document.createElement('td'),
		td_namePetisco1= document.createElement('td'),
		td_precoPetisco1 = document.createElement('td');

	td_quantPetisco1.setAttribute("id", "quantPetisco");
	td_namePetisco1.setAttribute("id", "namePrato");
	td_precoPetisco1.setAttribute("id", "precoPetisco");

	trbody.appendChild(tr);
	tr.appendChild(td_quantPetisco1);
	tr.appendChild(td_namePetisco1);
	tr.appendChild(td_precoPetisco1);

	var quantPetisco1 = document.getElementById('quantPetisco');
	quantPetisco1.innerText = value1;

	var asinha = document.getElementById('asinha').firstChild.innerHTML;
	document.getElementById('namePrato').innerHTML = asinha;

	var result = ((preco1 * value1) + (preco2 * value2) + (preco3 * value3) + (preco4 * value4) +
		(preco5 * value5) + (preco6 * value6) + (preco7 * value7) + (preco8 * value8));

	document.getElementById('precoPetisco').innerHTML = result.toFixed(2);
	document.getElementById('totalValue').innerHTML = result.toFixed(2);

td_quantPetisco1.style.textAlign="center";
td_namePetisco1.style.textAlign="center";
td_precoPetisco1.style.textAlign="center";
}

function mandardados2(){

	var value1 = document.getElementById('quantPet1').value,
				value2 = document.getElementById('quantPet2').value,
				value3 = document.getElementById('quantPet3').value,
				value4 = document.getElementById('quantPet4').value,
				value5 = document.getElementById('quantPet5').value,
				value6 = document.getElementById('quantPet6').value,
				value7 = document.getElementById('quantPet7').value,
				value8 = document.getElementById('quantPet8').value,
				trbody = document.getElementById('tablePedidos');

	if (value1 == 0){var preco1 = 0;} else {preco1 = 13.00;}
	if (value2 == 0){var preco2 = 0;} else {preco2 = 25.00;}
	if (value3 == 0){var preco3 = 0;} else {preco3 = 15.00;}
	if (value4 == 0){var preco4 = 0;} else {preco4 = 20.00;}
	if (value5 == 0){var preco5 = 0;} else {preco5 = 10.00;}
	if (value6 == 0){var preco6 = 0;} else {preco6 = 10.00;}
	if (value7 == 0){var preco7 = 0;} else {preco7 = 6.00;}
	if (value8 == 0){var preco8 = 0;} else {preco8 = 10.00;}

	var tr = document.createElement('tr'),
		td_quantPetisco2 = document.createElement('td'),
		td_namePetisco2= document.createElement('td'),
		td_precoPetisco2 = document.createElement('td');

	td_quantPetisco2.setAttribute("id", "quantPetisco");
	td_namePetisco2.setAttribute("id", "namePrato");
	td_precoPetisco2.setAttribute("id", "precoPetisco");

	trbody.appendChild(tr);
	tr.appendChild(td_quantPetisco2);
	tr.appendChild(td_namePetisco2);
	tr.appendChild(td_precoPetisco2);

	var quantPetisco2 = document.getElementById('quantPetisco');
	quantPetisco2.innerText = value2;

	var camarao= document.getElementById('camarao').firstChild.innerHTML;
	document.getElementById('namePrato').innerHTML = camarao;

	var result = ((preco1 * value1) + (preco2 * value2) + (preco3 * value3) + (preco4 * value4) +
		(preco5 * value5) + (preco6 * value6) + (preco7 * value7) + (preco8 * value8));

	document.getElementById('precoPetisco').innerHTML = result.toFixed(2);
	document.getElementById('totalValue').innerHTML = result.toFixed(2);

td_quantPetisco2.style.textAlign="center";
td_namePetisco2.style.textAlign="center";
td_precoPetisco2.style.textAlign="center";
}

function mandardados3(){

	var value1 = document.getElementById('quantPet1').value,
				value2 = document.getElementById('quantPet2').value,
				value3 = document.getElementById('quantPet3').value,
				value4 = document.getElementById('quantPet4').value,
				value5 = document.getElementById('quantPet5').value,
				value6 = document.getElementById('quantPet6').value,
				value7 = document.getElementById('quantPet7').value,
				value8 = document.getElementById('quantPet8').value,
				trbody = document.getElementById('tablePedidos');

	if (value1 == 0){var preco1 = 0;} else {preco1 = 13.00;}
	if (value2 == 0){var preco2 = 0;} else {preco2 = 25.00;}
	if (value3 == 0){var preco3 = 0;} else {preco3 = 15.00;}
	if (value4 == 0){var preco4 = 0;} else {preco4 = 20.00;}
	if (value5 == 0){var preco5 = 0;} else {preco5 = 10.00;}
	if (value6 == 0){var preco6 = 0;} else {preco6 = 10.00;}
	if (value7 == 0){var preco7 = 0;} else {preco7 = 6.00;}
	if (value8 == 0){var preco8 = 0;} else {preco8 = 10.00;}

	var tr = document.createElement('tr'),
		td_quantPetisco3 = document.createElement('td'),
		td_namePetisco3= document.createElement('td'),
		td_precoPetisco3 = document.createElement('td');

	td_quantPetisco3.setAttribute("id", "quantPetisco");
	td_namePetisco3.setAttribute("id", "namePrato");
	td_precoPetisco3.setAttribute("id", "precoPetisco");

	trbody.appendChild(tr);
	tr.appendChild(td_quantPetisco3);
	tr.appendChild(td_namePetisco3);
	tr.appendChild(td_precoPetisco3);

	var quantPetisco3 = document.getElementById('quantPetisco');
	quantPetisco3.innerText = value3;

	var calabresa = document.getElementById('calabresa').firstChild.innerHTML;
	document.getElementById('namePrato').innerHTML = calabresa;

	var result = ((preco1 * value1) + (preco2 * value2) + (preco3 * value3) + (preco4 * value4) +
		(preco5 * value5) + (preco6 * value6) + (preco7 * value7) + (preco8 * value8));

	document.getElementById('precoPetisco').innerHTML = result.toFixed(2);
	document.getElementById('totalValue').innerHTML = result.toFixed(2);

td_quantPetisco3.style.textAlign="center";
td_namePetisco3.style.textAlign="center";
td_precoPetisco3.style.textAlign="center";
}

function mandardados4(){

	var value1 = document.getElementById('quantPet1').value,
				value2 = document.getElementById('quantPet2').value,
				value3 = document.getElementById('quantPet3').value,
				value4 = document.getElementById('quantPet4').value,
				value5 = document.getElementById('quantPet5').value,
				value6 = document.getElementById('quantPet6').value,
				value7 = document.getElementById('quantPet7').value,
				value8 = document.getElementById('quantPet8').value,
				trbody = document.getElementById('tablePedidos');

	if (value1 == 0){var preco1 = 0;} else {preco1 = 13.00;}
	if (value2 == 0){var preco2 = 0;} else {preco2 = 25.00;}
	if (value3 == 0){var preco3 = 0;} else {preco3 = 15.00;}
	if (value4 == 0){var preco4 = 0;} else {preco4 = 20.00;}
	if (value5 == 0){var preco5 = 0;} else {preco5 = 10.00;}
	if (value6 == 0){var preco6 = 0;} else {preco6 = 10.00;}
	if (value7 == 0){var preco7 = 0;} else {preco7 = 6.00;}
	if (value8 == 0){var preco8 = 0;} else {preco8 = 10.00;}

	var tr = document.createElement('tr'),
		td_quantPetisco4 = document.createElement('td'),
		td_namePetisco4= document.createElement('td'),
		td_precoPetisco4 = document.createElement('td');

	td_quantPetisco4.setAttribute("id", "quantPetisco");
	td_namePetisco4.setAttribute("id", "namePrato");
	td_precoPetisco4.setAttribute("id", "precoPetisco");

	trbody.appendChild(tr);
	tr.appendChild(td_quantPetisco4);
	tr.appendChild(td_namePetisco4);
	tr.appendChild(td_precoPetisco4);

	var quantPetisco4 = document.getElementById('quantPetisco');
	quantPetisco4.innerText = value4;

	var carneSol= document.getElementById('carneSol').firstChild.innerHTML;
	document.getElementById('namePrato').innerHTML = carneSol;

	var result = ((preco1 * value1) + (preco2 * value2) + (preco3 * value3) + (preco4 * value4) +
		(preco5 * value5) + (preco6 * value6) + (preco7 * value7) + (preco8 * value8));

	document.getElementById('precoPetisco').innerHTML = result.toFixed(2);
	document.getElementById('totalValue').innerHTML = result.toFixed(2);

td_quantPetisco4.style.textAlign="center";
td_namePetisco4.style.textAlign="center";
td_precoPetisco4.style.textAlign="center";
}

function mandardados5(){

	var value1 = document.getElementById('quantPet1').value,
				value2 = document.getElementById('quantPet2').value,
				value3 = document.getElementById('quantPet3').value,
				value4 = document.getElementById('quantPet4').value,
				value5 = document.getElementById('quantPet5').value,
				value6 = document.getElementById('quantPet6').value,
				value7 = document.getElementById('quantPet7').value,
				value8 = document.getElementById('quantPet8').value,
				trbody = document.getElementById('tablePedidos');

	if (value1 == 0){var preco1 = 0;} else {preco1 = 13.00;}
	if (value2 == 0){var preco2 = 0;} else {preco2 = 25.00;}
	if (value3 == 0){var preco3 = 0;} else {preco3 = 15.00;}
	if (value4 == 0){var preco4 = 0;} else {preco4 = 20.00;}
	if (value5 == 0){var preco5 = 0;} else {preco5 = 10.00;}
	if (value6 == 0){var preco6 = 0;} else {preco6 = 10.00;}
	if (value7 == 0){var preco7 = 0;} else {preco7 = 6.00;}
	if (value8 == 0){var preco8 = 0;} else {preco8 = 10.00;}

	var tr = document.createElement('tr'),
		td_quantPetisco5 = document.createElement('td'),
		td_namePetisco5= document.createElement('td'),
		td_precoPetisco5 = document.createElement('td');

	td_quantPetisco5.setAttribute("id", "quantPetisco");
	td_namePetisco5.setAttribute("id", "namePrato");
	td_precoPetisco5.setAttribute("id", "precoPetisco");

	trbody.appendChild(tr);
	tr.appendChild(td_quantPetisco5);
	tr.appendChild(td_namePetisco5);
	tr.appendChild(td_precoPetisco5);

	var quantPetisco5 = document.getElementById('quantPetisco');
	quantPetisco5.innerText = value5;

	var torresmo = document.getElementById('torresmo').firstChild.innerHTML;
	document.getElementById('namePrato').innerHTML = torresmo;

	var result = ((preco1 * value1) + (preco2 * value2) + (preco3 * value3) + (preco4 * value4) +
		(preco5 * value5) + (preco6 * value6) + (preco7 * value7) + (preco8 * value8));

	document.getElementById('precoPetisco').innerHTML = result.toFixed(2);
	document.getElementById('totalValue').innerHTML = result.toFixed(2);

td_quantPetisco5.style.textAlign="center";
td_namePetisco5.style.textAlign="center";
td_precoPetisco5.style.textAlign="center";
}

function mandardados6(){

	var value1 = document.getElementById('quantPet1').value,
				value2 = document.getElementById('quantPet2').value,
				value3 = document.getElementById('quantPet3').value,
				value4 = document.getElementById('quantPet4').value,
				value5 = document.getElementById('quantPet5').value,
				value6 = document.getElementById('quantPet6').value,
				value7 = document.getElementById('quantPet7').value,
				value8 = document.getElementById('quantPet8').value,
				trbody = document.getElementById('tablePedidos');

	if (value1 == 0){var preco1 = 0;} else {preco1 = 13.00;}
	if (value2 == 0){var preco2 = 0;} else {preco2 = 25.00;}
	if (value3 == 0){var preco3 = 0;} else {preco3 = 15.00;}
	if (value4 == 0){var preco4 = 0;} else {preco4 = 20.00;}
	if (value5 == 0){var preco5 = 0;} else {preco5 = 10.00;}
	if (value6 == 0){var preco6 = 0;} else {preco6 = 10.00;}
	if (value7 == 0){var preco7 = 0;} else {preco7 = 6.00;}
	if (value8 == 0){var preco8 = 0;} else {preco8 = 10.00;}

	var tr = document.createElement('tr'),
		td_quantPetisco6 = document.createElement('td'),
		td_namePetisco6= document.createElement('td'),
		td_precoPetisco6 = document.createElement('td');

	td_quantPetisco6.setAttribute("id", "quantPetisco");
	td_namePetisco6.setAttribute("id", "namePrato");
	td_precoPetisco6.setAttribute("id", "precoPetisco");

	trbody.appendChild(tr);
	tr.appendChild(td_quantPetisco6);
	tr.appendChild(td_namePetisco6);
	tr.appendChild(td_precoPetisco6);

	var quantPetisco6 = document.getElementById('quantPetisco');
	quantPetisco6.innerText = value6;

	var batata = document.getElementById('batata').firstChild.innerHTML;
	document.getElementById('namePrato').innerHTML = batata;

	var result = ((preco1 * value1) + (preco2 * value2) + (preco3 * value3) + (preco4 * value4) +
		(preco5 * value5) + (preco6 * value6) + (preco7 * value7) + (preco8 * value8));

	document.getElementById('precoPetisco').innerHTML = result.toFixed(2);
	document.getElementById('totalValue').innerHTML = result.toFixed(2);

td_quantPetisco6.style.textAlign="center";
td_namePetisco6.style.textAlign="center";
td_precoPetisco6.style.textAlign="center";
}

function mandardados7(){

	var value1 = document.getElementById('quantPet1').value,
				value2 = document.getElementById('quantPet2').value,
				value3 = document.getElementById('quantPet3').value,
				value4 = document.getElementById('quantPet4').value,
				value5 = document.getElementById('quantPet5').value,
				value6 = document.getElementById('quantPet6').value,
				value7 = document.getElementById('quantPet7').value,
				value8 = document.getElementById('quantPet8').value,
				trbody = document.getElementById('tablePedidos');

	if (value1 == 0){var preco1 = 0;} else {preco1 = 13.00;}
	if (value1 == 0){var preco1 = 0;} else {preco1 = 13.00;}
	if (value2 == 0){var preco2 = 0;} else {preco2 = 25.00;}
	if (value3 == 0){var preco3 = 0;} else {preco3 = 15.00;}
	if (value4 == 0){var preco4 = 0;} else {preco4 = 20.00;}
	if (value5 == 0){var preco5 = 0;} else {preco5 = 10.00;}
	if (value6 == 0){var preco6 = 0;} else {preco6 = 10.00;}
	if (value7 == 0){var preco7 = 0;} else {preco7 = 6.00;}
	if (value8 == 0){var preco8 = 0;} else {preco8 = 10.00;}

	var tr = document.createElement('tr'),
		td_quantPetisco7 = document.createElement('td'),
		td_namePetisco7= document.createElement('td'),
		td_precoPetisco7 = document.createElement('td');

	td_quantPetisco7.setAttribute("id", "quantPetisco");
	td_namePetisco7.setAttribute("id", "namePrato");
	td_precoPetisco7.setAttribute("id", "precoPetisco");

	trbody.appendChild(tr);
	tr.appendChild(td_quantPetisco7);
	tr.appendChild(td_namePetisco7);
	tr.appendChild(td_precoPetisco7);

	var quantPetisco7 = document.getElementById('quantPetisco');
	quantPetisco7.innerText = value7;

	var batata = document.getElementById('batata').firstChild.innerHTML;
	document.getElementById('namePrato').innerHTML = batata;

	var result = ((preco1 * value1) + (preco2 * value2) + (preco3 * value3) + (preco4 * value4) +
		(preco5 * value5) + (preco6 * value6) + (preco7 * value7) + (preco8 * value8));

	document.getElementById('precoPetisco').innerHTML = result.toFixed(2);
	document.getElementById('totalValue').innerHTML = result.toFixed(2);

td_quantPetisco7.style.textAlign="center";
td_namePetisco7.style.textAlign="center";
td_precoPetisco7.style.textAlign="center";
}

function mandardados8(){

	var value1 = document.getElementById('quantPet1').value,
				value2 = document.getElementById('quantPet2').value,
				value3 = document.getElementById('quantPet3').value,
				value4 = document.getElementById('quantPet4').value,
				value5 = document.getElementById('quantPet5').value,
				value6 = document.getElementById('quantPet6').value,
				value7 = document.getElementById('quantPet7').value,
				value8 = document.getElementById('quantPet8').value,
				trbody = document.getElementById('tablePedidos');

	if (value1 == 0){var preco1 = 0;} else {preco1 = 13.00;}
	if (value2 == 0){var preco2 = 0;} else {preco2 = 25.00;}
	if (value3 == 0){var preco3 = 0;} else {preco3 = 15.00;}
	if (value4 == 0){var preco4 = 0;} else {preco4 = 20.00;}
	if (value5 == 0){var preco5 = 0;} else {preco5 = 10.00;}
	if (value6 == 0){var preco6 = 0;} else {preco6 = 10.00;}
	if (value7 == 0){var preco7 = 0;} else {preco7 = 6.00;}
	if (value8 == 0){var preco8 = 0;} else {preco8 = 10.00;}

	var tr = document.createElement('tr'),
		td_quantPetisco8 = document.createElement('td'),
		td_namePetisco8= document.createElement('td'),
		td_precoPetisco8 = document.createElement('td');

	td_quantPetisco8.setAttribute("id", "quantPetisco");
	td_namePetisco8.setAttribute("id", "namePrato");
	td_precoPetisco8.setAttribute("id", "precoPetisco");

	trbody.appendChild(tr);
	tr.appendChild(td_quantPetisco8);
	tr.appendChild(td_namePetisco8);
	tr.appendChild(td_precoPetisco8);

	var quantPetisco8 = document.getElementById('quantPetisco');
	quantPetisco8.innerText = value8;

	var batata = document.getElementById('batata').firstChild.innerHTML;
	document.getElementById('namePrato').innerHTML = batata;

	var result = ((preco1 * value1) + (preco2 * value2) + (preco3 * value3) + (preco4 * value4) +
		(preco5 * value5) + (preco6 * value6) + (preco7 * value7) + (preco8 * value8));

	document.getElementById('precoPetisco').innerHTML = result.toFixed(2);
	document.getElementById('totalValue').innerHTML = result.toFixed(2);

td_quantPetisco8.style.textAlign="center";
td_namePetisco8.style.textAlign="center";
td_precoPetisco8.style.textAlign="center";
}