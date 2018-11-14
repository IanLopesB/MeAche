function check_tb(value){
  var inputs = $("#checkb" + value);
  var tr = $("#tr"+ value);
  var ul = $("#ul" + value);

  var pedidos_pendentes = $('#pedidos_pendentes'),
      pedidos_concluidos = $('#pedidos_concluidos');    

  if (inputs.prop('checked') == true) {
    localStorage.setItem('checkb' + value, 'true');
    console.log(localStorage.getItem('checkb' + value));

    ul.css("textDecoration", "line-through");
    tr.css("color", "red");
    pedidos_concluidos.append(tr);
  }
  else {
    localStorage.setItem('checkb' + value, 'false'); 
    console.log(localStorage.getItem('checkb' + value));

    ul.css("textDecoration", "none");
    tr.css("color", "black");
    pedidos_pendentes.append(tr);
  }    
}

  $(document).ready(function(){     
   
  })