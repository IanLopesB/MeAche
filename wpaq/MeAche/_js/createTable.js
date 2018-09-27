firebase.database().ref('pedidos').on('value', function (snapshot) {

  snapshot.forEach(function (item) {

  var tr = document.createElement('tr');
  var th = document.createElement('th');
  var input_checkbox = document.createElement('input');
  var td_pedidos = document.createElement('td');
  var td_num_pedidos = document.createElement('td');
  var p = document.createElement('p');

  var linebreak = document.createElement('br');
  var space = document.createTextNode('');

  var petiscos_1 = document.createTextNode(item.val().Asinha_de_frango + "x" + " Asinha de Frango" );
  var petiscos_2 = document.createTextNode(item.val().Camarao_Alho_Oleo + "x" + "Camarão Alho e Óleo");

  var trbody = document.getElementById('tableAdm');

  if (item.val().Asinha_de_frango == 0){
    p.appendChild(space);
  }

  trbody.appendChild(tr);
  tr.appendChild(th);
  tr.appendChild(td_pedidos);
  tr.appendChild(td_num_pedidos);
  th.appendChild(input_checkbox);
  td_pedidos.appendChild(p);
  th.setAttribute("scope", "row");

  input_checkbox.setAttribute("type", "checkbox");
  input_checkbox.setAttribute("onclick", "check_tb(this.value)");

  tr.setAttribute("class", "trClass");


  var trId = document.getElementsByClassName("trClass");
    for (var i = 0; i < trId.length; i++) {
      trId[i].id = "tr" + (i + 1);
  }

  input_checkbox.setAttribute("class", "inputClass");
  var inputId = document.getElementsByClassName("inputClass");
    for (var i = 0; i < trId.length; i++) {
      inputId[i].id = "checkb" + (i + 1);
  }

  td_pedidos.setAttribute("colspan", "2");
  p.appendChild(petiscos_1);
  p.appendChild(linebreak);
  p.appendChild(petiscos_2);

  input_checkbox.setAttribute("name", "number");

  $("input[name='number']").each(function(ind) {
   $(this).val(ind + 1);
  });

  });

});