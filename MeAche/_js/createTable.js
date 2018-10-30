firebase.database().ref('pedidos').on('value', function (snapshot) {

var trbody = document.getElementById('pedidos_pendentes');
  trbody.innerHTML = '';

snapshot.forEach(function (item) {

var tr = document.createElement('tr');
var th = document.createElement('th');
var input_checkbox = document.createElement('input');
var td_pedidos = document.createElement('td');
var td_num_pedidos = document.createElement('td');
var space = document.createTextNode('');
var linebreak = document.createElement('br');

var ul = document.createElement('ul');

// li - Petiscos
var li1 = document.createElement('li'),
  li2 = document.createElement('li'),
  li3 = document.createElement('li'),
  li4 = document.createElement('li'),
  li5 = document.createElement('li'),
  li6 = document.createElement('li'),
  li7 = document.createElement('li'),
  li8 = document.createElement('li');

// li - Espetos
var li9 = document.createElement('li'),
  li10 = document.createElement('li'),
  li11 = document.createElement('li'),
  li12 = document.createElement('li');

// li - Sucos
var li13 = document.createElement('li'),
  li14 = document.createElement('li'),
  li15 = document.createElement('li'),
  li16 = document.createElement('li'),
  li17 = document.createElement('li'),
  li18 = document.createElement('li');

// li - Refrigerantes
var li19 = document.createElement('li'),
  li20 = document.createElement('li'),
  li21 = document.createElement('li'),
  li22 = document.createElement('li');

// li - Cervejas
var li23 = document.createElement('li')
  li24 = document.createElement('li'),
  li25 = document.createElement('li'),
  li26 = document.createElement('li'),
  li27 = document.createElement('li'),
  li28 = document.createElement('li'),
  li29 = document.createElement('li');

// Petiscos
var petiscos_1 = document.createTextNode(item.val().Asinha_de_frango + "x" + " Asinha de Frango"+" OBS: "+item.val().Text1);
var petiscos_2 = document.createTextNode(item.val().Camarao_Alho_Oleo + "x" + " Camarão Alho e Óleo"+" OBS: "+item.val().Text2);
var petiscos_3 = document.createTextNode(item.val().Calabresa + "x" + " Calabresa com Fritas"+" OBS: "+item.val().Text3);
var petiscos_4 = document.createTextNode(item.val().Carne_de_Sol + "x" + " Carne de Sol C/ Macaxeira"+" OBS: "+item.val().Text4);
var petiscos_5 = document.createTextNode(item.val().Torresmo + "x" + " Torresmo"+" OBS: "+item.val().Text5);
var petiscos_6 = document.createTextNode(item.val().Batata_Frita + "x" + " Batata Frita"+" OBS: "+item.val().Text6);
var petiscos_7 = document.createTextNode(item.val().Macaxeira + "x" + " Torresmo"+" OBS: "+item.val().Text7);
var petiscos_8 = document.createTextNode(item.val().Baiao_de_Dois + "x" + " Batata Frita"+" OBS: "+item.val().Text8);

// Espetos
var espetos_1 = document.createTextNode(item.val().Boi + "x" + " Boi"+" OBS: "+item.val().Text9),
  espetos_2 = document.createTextNode(item.val().Franbacon + "x" + " Franbacon"+" OBS: "+item.val().Text10),
  espetos_3 = document.createTextNode(item.val().Frango + "x" + " Frango"+" OBS: "+item.val().Text11),
  espetos_4 = document.createTextNode(item.val().Coracao_de_Frango + "x" + " Coração de Frango"+" OBS: "+item.val().Text12),
  espetos_5 = document.createTextNode(item.val().Porco + "x" + " Porco"+" OBS: "+item.val().Text13);

// Sucos
var sucos_1 = document.createTextNode(item.val().Caja + "x" + " Cajá"+" OBS: "+item.val().Text14),
  sucos_2 = document.createTextNode(item.val().Laranja + "x" + " Laranja"+" OBS: "+item.val().Text15),
  sucos_3 = document.createTextNode(item.val().Maracuja + "x" + " Maracujá"+" OBS: "+item.val().Text16),
  sucos_4 = document.createTextNode(item.val().Acerola + "x" + " Acerola"+" OBS: "+item.val().Text17),
  sucos_5 = document.createTextNode(item.val().Goiaba + "x" + " Goiaba"+" OBS: "+item.val().Text18),
  sucos_6 = document.createTextNode(item.val().Jarra_de_Suco + "x" + " Jarra de Suco"+" OBS: "+item.val().Text19);

// Refrigerates
var refri_1 = document.createTextNode(item.val().Coca_cola + "x" + " Coca-Cola"+" OBS: "+item.val().Text20),
  refri_2 = document.createTextNode(item.val().Guarana + "x" + " Guaraná"+" OBS: "+item.val().Text21),
  refri_3 = document.createTextNode(item.val().Fanta + "x" + " Fanta"+" OBS: "+item.val().Text22),
  refri_4 = document.createTextNode(item.val().Agua_Mineral + "x" + " Àgua Mineral"+" OBS: "+item.val().Text23);

// Cervejas
var cerv_1 = document.createTextNode(item.val().Skol + "x" + " Skol"+" OBS: "+item.val().Text24),
  cerv_2 = document.createTextNode(item.val().Itaipava + "x" + " Itaipava"+" OBS: "+item.val().Text25),
  cerv_3 = document.createTextNode(item.val().Original + "x" + " Original"+" OBS: "+item.val().Text26),
  cerv_4 = document.createTextNode(item.val().Burdweiser + "x" + " Burdweiser"+" OBS: "+item.val().Text27),
  cerv_5 = document.createTextNode(item.val().Eisenbahn + "x" + " Eisenbahn"+" OBS: "+item.val().Text28),
  cerv_6 = document.createTextNode(item.val().Heineken + "x" + " Heineken"+" OBS: "+item.val().Text29);

var numberPedido = document.createTextNode(item.val().Numero_Pedido);

// appends childs //
trbody.appendChild(tr);
tr.appendChild(th);
tr.appendChild(td_pedidos);
tr.appendChild(td_num_pedidos);
th.appendChild(input_checkbox);

td_pedidos.appendChild(ul);
td_num_pedidos.appendChild(numberPedido);
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
ul.appendChild(li13);
ul.appendChild(li14);
ul.appendChild(li15);
ul.appendChild(li16);
ul.appendChild(li17);
ul.appendChild(li18);
ul.appendChild(li19);
ul.appendChild(li20);
ul.appendChild(li21);
ul.appendChild(li22);
ul.appendChild(li23);
ul.appendChild(li24);
ul.appendChild(li25);
ul.appendChild(li26);
ul.appendChild(li27);
ul.appendChild(li28);
ul.appendChild(li29);
//! appends childs !//

th.setAttribute("scope", "row");
th.setAttribute('class', 'input_checkbox');

// to set checkbox function
input_checkbox.setAttribute("type", "checkbox");
input_checkbox.setAttribute("onclick","check_tb(this.value)");
//! to set checkbox function !//

// set "tr" ID that does not repeat
tr.setAttribute("class", "trClass");
var trId = document.getElementsByClassName("trClass");
for (var i = 0; i < trId.length; i++) {
  trId[i].id = "tr" + (i + 1);}
//! set "tr" ID that does not repeat !//

// set "ul" ID that does not repeat
ul.setAttribute("class", "ulClass");
var ulID = document.getElementsByClassName("ulClass");
for (var i = 0; i < ulID.length; i++) {
  ulID[i].id = "ul" + (i + 1);}
//! set "ul" ID that does not repeat !//

// set the "input" ID that is not repeated //
input_checkbox.setAttribute("class", "inputClass");
var inputId = document.getElementsByClassName("inputClass");
  for (var i = 0; i < trId.length; i++) {
    inputId[i].id = "checkb" + (i + 1);}
//! set the "input" ID that is not repeated !//

td_pedidos.setAttribute("colspan", "2");
td_pedidos.setAttribute('id', 'td_pedidos');
td_pedidos.setAttribute('class', 'td_pedidos');

td_num_pedidos.setAttribute("colspan", "2");
td_num_pedidos.setAttribute('id', 'td_num_pedidos');
td_num_pedidos.setAttribute('class', 'w3-center');

// check if value equal to zero to delete from firebase //
// Petiscos //
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
//! Petiscos !//

// Espetos //
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
    delete espetos_4;
    li11.parentNode.removeChild(li11);
  }else {
    li11.appendChild(espetos_4);
  }

  if (item.val().Porco == undefined){
    delete espetos_5;
    li12.parentNode.removeChild(li12);
  }else {
    li12.appendChild(espetos_5);
  }
//! Espetos !//

// Sucos //
  if (item.val().Caja == undefined){
    delete sucos_1;
    li13.parentNode.removeChild(li13);
  }else {
    li13.appendChild(sucos_1);
  }

  if (item.val().Laranja == undefined){
    delete sucos_2;
    li14.parentNode.removeChild(li14);
  }else {
    li14.appendChild(sucos_2);
  }

  if (item.val().Maracuja == undefined){
    delete sucos_3;
    li15.parentNode.removeChild(li15);
  }else {
    li15.appendChild(sucos_3);
  }

  if (item.val().Acerola == undefined){
    delete sucos_4;
    li16.parentNode.removeChild(li16);
  }else {
    li16.appendChild(sucos_4);
  }

  if (item.val().Goiaba == undefined){
    delete sucos_5;
    li17.parentNode.removeChild(li17);
  }else {
    li17.appendChild(sucos_5);
  }

  if (item.val().Jarra_de_Suco == undefined){
    delete sucos_6;
    li18.parentNode.removeChild(li18);
  }else {
    li18.appendChild(sucos_6);
  }
//! Sucos !//

// Refrigerantes //
  if (item.val().Coca_cola == undefined){
    delete refri_1;
    li19.parentNode.removeChild(li19);
  }else {
    li19.appendChild(refri_1);
  }
  if (item.val().Guarana == undefined){
    delete refri_2;
    li20.parentNode.removeChild(li20);
  }else {
    li20.appendChild(refri_2);
  }
  if (item.val().Fanta == undefined){
    delete refri_3;
    li21.parentNode.removeChild(li21);
  }else {
    li21.appendChild(refri_3);
  }
  if (item.val().Agua_Mineral == undefined){
    delete refri_4;
    li22.parentNode.removeChild(li22);
  }else {
    li22.appendChild(refri_4);
  }
//! Refrigerantes !//

// Cervejas //
  if (item.val().Skol == undefined){
    delete cerv_1;
    li23.parentNode.removeChild(li23);
  }else {
    li23.appendChild(cerv_1);
  }
  if (item.val().Itaipava == undefined){
    delete cerv_2;
    li24.parentNode.removeChild(li24);
  }else {
    li24.appendChild(cerv_2);
  }
  if (item.val().Original == undefined){
    delete cerv_3;
    li25.parentNode.removeChild(li25);
  }else {
    li25.appendChild(cerv_3);
  }
  if (item.val().Burdweiser == undefined){
    delete cerv_4;
    li26.parentNode.removeChild(li26);
  }else {
    li26.appendChild(cerv_4);
  }
  if (item.val().Eisenbahn == undefined){
    delete cerv_5;
    li27.parentNode.removeChild(li27);
  }else {
    li27.appendChild(cerv_5);
  }
  if (item.val().Heineken == undefined){
    delete cerv_6;
    li28.parentNode.removeChild(li28);
  }else {
    li28.appendChild(cerv_6);
  }
  if (item.val().Frango == undefined){
    delete espetos_3;
    li29.parentNode.removeChild(li29);
  }else {
    li29.appendChild(espetos_3);
  }
//! Cervejas !//

//Textareas//
  if (item.val().Text1 == undefined){delete item.val().Text1;}
//!Textareas!//

//! check if value equal to zero to delete from firebase !//

input_checkbox.setAttribute("name", "number");

$("input[name='number']").each(function(ind) {
$(this).val(ind + 1);
});

});
});
