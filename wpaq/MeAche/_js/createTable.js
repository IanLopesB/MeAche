function createTable(){
  var tr = document.createElement('tr');
  var th = document.createElement('th');
  var input = document.createElement('input');
  var td = document.createElement('td');
  var td1 = document.createElement('td');
  var p = document.createElement('p');
  var text = document.createTextNode("testando okokokokok");


  document.getElementById('tableAdm').appendChild(tr);
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
  p.appendChild(text);

  input.setAttribute("name", "number");

  $("input[name='number']").each(function(ind) {
   $(this).val(ind + 1);
  });

  }