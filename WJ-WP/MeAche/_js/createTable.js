firebase.database().ref('pedidos').on('value', function (snapshot) {

  snapshot.forEach(function (item) {

  var tr = document.createElement('tr');
  var th = document.createElement('th');
  var input_checkbox = document.createElement('input');
  var td_pedidos = document.createElement('td');
  var td_num_pedidos = document.createElement('td');
  var space = document.createTextNode('');
  var linebreak = document.createElement('br');


  var ul = document.createElement('ul');
  ul.setAttribute("id", "ulAdmin");

  // li - Petiscos
  var li1 = document.createElement('li');
  var li2 = document.createElement('li');
  var li3 = document.createElement('li');
  var li4 = document.createElement('li');
  var li5 = document.createElement('li');
  var li6 = document.createElement('li');
  var li7 = document.createElement('li');
  var li8 = document.createElement('li');
  // li - Espetos
  var li9 = document.createElement('li'),
      li10 = document.createElement('li'),
      li11 = document.createElement('li'),
      li12 = document.createElement('li');

  // Petiscos
  var petiscos_1 = document.createTextNode(item.val().Asinha_de_frango + "x" + " Asinha de Frango");
  var petiscos_2 = document.createTextNode(item.val().Camarao_Alho_Oleo + "x" + " Camarão Alho e Óleo");
  var petiscos_3 = document.createTextNode(item.val().Calabresa + "x" + " Calabresa com Fritas");
  var petiscos_4 = document.createTextNode(item.val().Carne_de_Sol + "x" + " Carne de Sol C/ Macaxeira");
  var petiscos_5 = document.createTextNode(item.val().Torresmo + "x" + " Torresmo");
  var petiscos_6 = document.createTextNode(item.val().Batata_Frita + "x" + " Batata Frita");
  var petiscos_7 = document.createTextNode(item.val().Macaxeira + "x" + " Torresmo");
  var petiscos_8 = document.createTextNode(item.val().Baiao_de_Dois + "x" + " Batata Frita");
  // Espetos
  var espetos_1 = document.createTextNode(item.val().Boi + "x" + " Boi"),
      espetos_2 = document.createTextNode(item.val().Franbacon + "x" + " Franbacon"),
      espetos_3 = document.createTextNode(item.val().Coracao_de_Frango + "x" + " Coração de Frango"),
      espetos_4 = document.createTextNode(item.val().Porco + "x" + " Porco");

  var trbody = document.getElementById('tableAdm');

  trbody.appendChild(tr);
  tr.appendChild(th);
  tr.appendChild(td_pedidos);
  tr.appendChild(td_num_pedidos);
  th.appendChild(input_checkbox);

  td_pedidos.appendChild(ul);
  ul.appendChild(li1);
  ul.appendChild(li2);
  ul.appendChild(li3);
  ul.appendChild(li4);
  ul.appendChild(li5);
  ul.appendChild(li6);
  ul.appendChild(li7);
  ul.appendChild(li8);
  ul.appendChild(li9);
  ul.appendChild(li10);
  ul.appendChild(li11);
  ul.appendChild(li12);

  th.setAttribute("scope", "row");
  th.setAttribute('class', 'input_checkbox');

  // Function Checkbox
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
  /* //Function Checkbox */

  td_pedidos.setAttribute("colspan", "2");
  td_pedidos.setAttribute('id', 'td_pedidos');
  td_pedidos.setAttribute('class', 'td_pedidos');

  td_num_pedidos.setAttribute("colspan", "2");
  td_num_pedidos.setAttribute('id', 'td_num_pedidos');

  // If Value == 0 Firebase
  // Petiscos
  if (item.val().Asinha_de_frango == undefined){
    delete petiscos_1;
    li1.parentNode.removeChild(li1);
  }else {
    li1.appendChild(petiscos_1);
  }

  if (item.val().Camarao_Alho_Oleo == undefined){
    delete petiscos_2;
    li2.parentNode.removeChild(li2);
  }else {
    li2.appendChild(petiscos_2);
  }

  if (item.val().Calabresa == undefined){
    delete petiscos_3;
    li3.parentNode.removeChild(li3);
  }else {
    li3.appendChild(petiscos_3);
  }

  if (item.val().Carne_de_Sol == undefined){
    delete petiscos_4;
    li4.parentNode.removeChild(li4);
  }else {
    li4.appendChild(petiscos_4);
  }

  if (item.val().Torresmo == undefined){
    delete petiscos_5;
    li5.parentNode.removeChild(li5);
  }else {
    li5.appendChild(petiscos_5);
  }

  if (item.val().Batata_Frita == undefined){
    delete petiscos_6;
    li6.parentNode.removeChild(li6);
  }else {
    li6.appendChild(petiscos_6);
  }

    if (item.val().Macaxeira == undefined){
    delete petiscos_7;
    li7.parentNode.removeChild(li7);
  }else {
    li7.appendChild(petiscos_7);
  }

    if (item.val().Baiao_de_Dois == undefined){
    delete petiscos_8;
    li8.parentNode.removeChild(li8);
  }else {
    li8.appendChild(petiscos_8);
  }

  if (item.val().Boi == undefined){
    delete espetos_1;
    li9.parentNode.removeChild(li9);
  }else {
    li9.appendChild(espetos_1);
  }

  if (item.val().Franbacon == undefined){
    delete espetos_2;
    li10.parentNode.removeChild(li10);
  }else {
    li10.appendChild(espetos_2);
  }

  if (item.val().Coracao_de_Frango == undefined){
    delete espetos_3;
    li11.parentNode.removeChild(li11);
  }else {
    li11.appendChild(espetos_3);
  }

  if (item.val().Porco == undefined){
    delete espetos_4;
    li12.parentNode.removeChild(li12);
  }else {
    li12.appendChild(espetos_4);
  }

  input_checkbox.setAttribute("name", "number");

  $("input[name='number']").each(function(ind) {
   $(this).val(ind + 1);
  });

  
  });
});
