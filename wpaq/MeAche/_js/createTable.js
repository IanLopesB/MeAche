firebase.database().ref('pedidos').on('value', function (snapshot) {

  snapshot.forEach(function (item) {

  var tr = document.createElement('tr');
  var th = document.createElement('th');
  var input = document.createElement('input');
  var td = document.createElement('td');
  var td1 = document.createElement('td');
  var p = document.createElement('p');
  var br = document.createElement('br');
  var text = document.createTextNode("Asinha de Frango: " + item.val().Asinha_de_frango + "x");
  var text1 = document.createTextNode("Camarão Alho e Óleo:  " + item.val().Camarao_Alho_Oleo + "x");


  var trbody = document.getElementById('tableAdm');

  trbody.appendChild(tr);
  tr.appendChild(th);
  tr.appendChild(td);
  tr.appendChild(td1);
  th.appendChild(input);
  td.appendChild(p);
  th.setAttribute("scope", "row");

  input.setAttribute("type", "checkbox");
  input.setAttribute("onclick", "check_tb(this.value)");

  tr.setAttribute("class", "trClass");


  var trId = document.getElementsByClassName("trClass");
    for (var i = 0; i < trId.length; i++) {
      trId[i].id = "tr" + (i + 1);
  }

  input.setAttribute("class", "inputClass");
  var inputId = document.getElementsByClassName("inputClass");
    for (var i = 0; i < trId.length; i++) {
      inputId[i].id = "checkb" + (i + 1);
  }

  td.setAttribute("colspan", "2");
  p.appendChild(text).innerHTML = "<br>";
  p.appendChild(text1);

  input.setAttribute("name", "number");

  $("input[name='number']").each(function(ind) {
   $(this).val(ind + 1);
  });

  });

});