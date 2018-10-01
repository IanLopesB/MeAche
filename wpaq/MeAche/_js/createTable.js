firebase.database().ref('pedidos').on('value', function (snapshot) {

  snapshot.forEach(function (item) {

  var tr = document.createElement('tr');
  var th = document.createElement('th');
  var input_checkbox = document.createElement('input');
  var td_pedidos = document.createElement('td');
  var td_num_pedidos = document.createElement('td');


  var ul = document.createElement('ul');
  var li1 = document.createElement('li');
  var li2 = document.createElement('li');
  var li3 = document.createElement('li');
  var li4 = document.createElement('li');
  var li5 = document.createElement('li');
  var li6 = document.createElement('li');

  var p = document.createElement('p');

  ul.setAttribute("id", "ulAdmin");

  var linebreak = document.createElement('br');
  
  var petiscos_1 = document.createTextNode(item.val().Asinha_de_frango + "x" + " Asinha de Frango"); 
  var petiscos_2 = document.createTextNode(item.val().Camarao_Alho_Oleo + "x" + " Camarão Alho e Óleo");
  var petiscos_3 = document.createTextNode(item.val().Calabresa + "x" + " Calabresa");
  var petiscos_4 = document.createTextNode(item.val().Carne_de_Sol + "x" + " Carne de Sol");
  var petiscos_5 = document.createTextNode(item.val().Torresmo + "x" + " Torresmo");
  var petiscos_6 = document.createTextNode(item.val().Batata_Frita + "x" + " Batata Frita");

  var trbody = document.getElementById('tableAdm');

  trbody.appendChild(tr);
  tr.appendChild(th);
  tr.appendChild(td_pedidos);
  tr.appendChild(td_num_pedidos);
  th.appendChild(input_checkbox);
  td_pedidos.appendChild(p);

  td_pedidos.appendChild(ul);
  ul.appendChild(li1); 
  ul.appendChild(li2);
  ul.appendChild(li3);
  ul.appendChild(li4);
  ul.appendChild(li5);
  ul.appendChild(li6);

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

  li1.appendChild(petiscos_1);  
  li2.appendChild(petiscos_2);
  li3.appendChild(petiscos_3);
  li4.appendChild(petiscos_4);
  li5.appendChild(petiscos_5);
  li6.appendChild(petiscos_6); 


  input_checkbox.setAttribute("name", "number");

  $("input[name='number']").each(function(ind) {
   $(this).val(ind + 1);
  });

  });

});