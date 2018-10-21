function check_tb(value){
  var inputs = document.getElementById("checkb" + value);
  var tr = document.getElementById("tr"+ value);

  var pedidos_pendentes = document.getElementById('pedidos_pendentes'),
      pedidos_concluidos = document.getElementById('pedidos_concluidos');

    if (inputs.checked == true) {
      tr.style.textDecoration = "line-through";
      tr.style.color = "red";
      pedidos_concluidos.appendChild(tr);
      }
    else {
      tr.style.textDecoration = "none";
      tr.style.color = "black";
      pedidos_pendentes.appendChild(tr);
    }
}


