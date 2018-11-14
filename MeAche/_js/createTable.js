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

    var numberPedido = document.createTextNode(item.val().Numero_Pedido);

    // li's //
      var lis = [];
      for(x = 1; x <= 29; x++) {
          var createLis = $('<li></li>');
          lis.push(createLis);
      }
      $(ul).append(lis);
    //! li's !//

    // petiscos //
      var itensPet = [item.val().Asinha_de_frango + "x Asinha de Frango", item.val().Camarao_Alho_Oleo + "x Camarão Alho e Óleo",
                      item.val().Calabresa + "x Calabresa com Fritas", item.val().Carne_de_Sol + "x Carne de Sol C/ Macaxeira", 
                      item.val().Torresmo + "x Torresmo", item.val().Batata_Frita + "x Batata Frita",
                      item.val().Macaxeira + "x Macaxeira", item.val().Baiao_de_Dois + "x Baião de Dois"];

      var petiscos_1 = (itensPet[0]);
      var obs1 = (" - Obs: " + item.val().Text1);
          var somPet1 = petiscos_1 + obs1;

            console.log(item.val().Text1)

      var petiscos_2 = (itensPet[1]); 
      var obs2 = (" - Obs: " + item.val().Text2);
          var somPet2 = petiscos_2 + obs2;

      var petiscos_3 = (itensPet[2]);
      var obs3 = (' - Obs: '  + item.val().Text3);
          var somPet3 = petiscos_3 + obs3;

      var petiscos_4 = (itensPet[3]);
      var obs4 = (' - Obs: ' + item.val().Text4);
          var somPet4 = petiscos_4 + obs4;

      var petiscos_5 = (itensPet[4]);
      var obs5 = (' - Obs: '  + item.val().Text5);
          var somPet5 = petiscos_5 + obs5;

      var petiscos_6 = (itensPet[5]);
      var obs6 = (' - Obs: '  + item.val().Text6);
          var somPet6 = petiscos_6 + obs6;

      var petiscos_7 = (itensPet[6]);
      var obs7 = (' - Obs: '  + item.val().Text7);
          var somPet7 = petiscos_7 + obs7;

      var petiscos_8 = (itensPet[7]); 
      var obs8 = (' - Obs: '  + item.val().Text8);
          var somPet8 = petiscos_8 + obs8;
    //! petiscos ! //

    // espetos //
      var espetos_1 = (item.val().Boi + "x  Boi"),
          obs9 = (" - Obs: " + item.val().Text9),
          somEsp1 = espetos_1 + obs9;

      var espetos_2 = (item.val().Franbacon + "x Franbacon"),
          obs10 = (" - Obs: " + item.val().Text10),
          somEsp2 = espetos_1 + obs10;

      var espetos_3 = (item.val().Frango + "x Frango"),
          obs11 = (" - Obs: " + item.val().Text11),
          somEsp3 = espetos_3 + obs11;

      var espetos_4 = (item.val().Coracao_de_Frango + "x Coração de Frango"),
          obs12 = (" - Obs: " + item.val().Text12),
          somEsp4 = espetos_4 + obs12;

      var espetos_5 = (item.val().Porco + "x Porco"),
          obs13 = (" - Obs: " + item.val().Text13),
          somEsp5 = espetos_5 + obs13;
    //! espetos !//

    // sucos //
      var sucos_1 = (item.val().Caja + "x Cajá" + item.val().Text14),
          sucos_2 = (item.val().Laranja + "x Laranja" + item.val().Text15),
          sucos_3 = (item.val().Maracuja + "x Maracujá" + item.val().Text16),
          sucos_4 = (item.val().Acerola + "x Acerola" + item.val().Text17),
          sucos_5 = (item.val().Goiaba + "x Goiaba" + item.val().Text18),
          sucos_6 = (item.val().Jarra_de_Suco + "x Jarra de Suco" + item.val().Text19);
    //! sucos !//

    // refrigerates //
      var refri_1 = document.createTextNode(item.val().Coca_cola + "x" + " Coca-Cola" + item.val().Text20),
          refri_2 = document.createTextNode(item.val().Guarana + "x" + " Guaraná" + item.val().Text21),
          refri_3 = document.createTextNode(item.val().Fanta + "x" + " Fanta" + item.val().Text22),
          refri_4 = document.createTextNode(item.val().Agua_Mineral + "x" + " Àgua Mineral" + item.val().Text23);
    //! refrigerantes !//

    // cervejas //
      var cerv_1 = document.createTextNode(item.val().Skol + "x" + " Skol" + item.val().Text24),
          cerv_2 = document.createTextNode(item.val().Itaipava + "x" + " Itaipava" + item.val().Text25),
          cerv_3 = document.createTextNode(item.val().Original + "x" + " Original" + item.val().Text26),
          cerv_4 = document.createTextNode(item.val().Burdweiser + "x" + " Burdweiser" + item.val().Text27),
          cerv_5 = document.createTextNode(item.val().Eisenbahn + "x" + " Eisenbahn" + item.val().Text28),
          cerv_6 = document.createTextNode(item.val().Heineken + "x" + " Heineken" + item.val().Text29);
    //! cervejas !//

    // appends childs //
      $(trbody).append(tr);
      $(tr).append(th);
      $(tr).append(td_pedidos);
      $(tr).append(td_num_pedidos);
      $(th).append(input_checkbox);

      $(td_pedidos).append(ul);
      $(td_num_pedidos).append(numberPedido);
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
         lis[0].remove();
        }else {
          $(lis[0]).append(somPet1);
        }

        if (item.val().Camarao_Alho_Oleo == undefined){
          delete petiscos_2;
         lis[1].remove();
        }else {
          $(lis[1]).append(somPet2);
        }

        if (item.val().Calabresa == undefined){
          delete petiscos_3;
         $( lis[2]).remove();
        }else {
          $(lis[2]).append(somPet3);
        }

        if (item.val().Carne_de_Sol == undefined){
          delete petiscos_4;
         $( lis[3]).remove();
        }else {
          $(lis[3]).append(somPet4);
        }

        if (item.val().Torresmo == undefined){
          delete petiscos_5;
         $( lis[4]).remove();
        }else {
          $(lis[4]).append(somPet5);
        }

        if (item.val().Batata_Frita == undefined){
          delete petiscos_6;
         $( lis[5]).remove();
        }else {
          $(lis[5]).append(somPet6);
        }

          if (item.val().Macaxeira == undefined){
          delete petiscos_7;
         $( lis[6]).remove();
        }else {
          $(lis[6]).append(somPet7);
        }

          if (item.val().Baiao_de_Dois == undefined){
          delete petiscos_8;
         $( lis[7]).remove();
        }else {
          $(lis[7]).append(somPet8);
        }
      //! Petiscos !//

      // Espetos //
        if (item.val().Boi == undefined){
          delete espetos_1;
         $( lis[8]).remove();
        }else {
          $(lis[8]).append(somEsp1);
        }

        if (item.val().Franbacon == undefined){
          delete espetos_2;
         $( lis[9]).remove();
        }else {
          $(lis[9]).append(somEsp2);
        }

        if (item.val().Coracao_de_Frango == undefined){
          delete espetos_4;
          $(lis[10]).remove();
        }else {
          $(lis[10]).append(somEsp4);
        }

        if (item.val().Porco == undefined){
          delete espetos_5;
          $(lis[11]).remove();
        }else {
          $(lis[11]).append(somEsp5);
        }
      //! Espetos !//

      // Sucos //
        if (item.val().Caja == undefined){
          delete sucos_1;
          $(lis[12]).remove();
        }else {
          $(lis[12]).append(sucos_1);
        }

        if (item.val().Laranja == undefined){
          delete sucos_2;
          $(lis[13]).remove();
        }else {
          $(lis[13]).append(sucos_2);
        }

        if (item.val().Maracuja == undefined){
          delete sucos_3;
          $(lis[14]).remove();
        }else {
          $(lis[14]).append(sucos_3);
        }

        if (item.val().Acerola == undefined){
          delete sucos_4;
          $(lis[15]).remove();
        }else {
          $(lis[15]).append(sucos_4);
        }

        if (item.val().Goiaba == undefined){
          delete sucos_5;
          $(lis[16]).remove();
        }else {
          $(lis[16]).append(sucos_5);
        }

        if (item.val().Jarra_de_Suco == undefined){
          delete sucos_6;
          $(lis[17]).remove();
        }else {
          $(lis[17]).append(sucos_6);
        }
      //! Sucos !//

      // Refrigerantes //
        if (item.val().Coca_cola == undefined){
          delete refri_1;
          $(lis[18]).remove();
        }else {
          $(lis[18]).append(refri_1);
        }
        if (item.val().Guarana == undefined){
          delete refri_2;
          $(lis[19]).remove();
        }else {
          $(lis[19]).append(refri_2);
        }
        if (item.val().Fanta == undefined){
          delete refri_3;
          $(lis[20]).remove();
        }else {
          $(lis[20]).append(refri_3);
        }
        if (item.val().Agua_Mineral == undefined){
          delete refri_4;
          $(lis[21]).remove();
        }else {
          $(lis[21]).append(refri_4);
        }
      //! Refrigerantes !//

      // Cervejas //
        if (item.val().Skol == undefined){
          delete cerv_1;
          $(lis[22]).remove();
        }else {
          $(lis[22]).append(cerv_1);
        }
        if (item.val().Itaipava == undefined){
          delete cerv_2;
          $(lis[23]).remove();
        }else {
          $(lis[23]).append(cerv_2);
        }
        if (item.val().Original == undefined){
          delete cerv_3;
          $(lis[24]).remove();
        }else {
          $(lis[24]).append(cerv_3);
        }
        if (item.val().Burdweiser == undefined){
          delete cerv_4;
          $(lis[25]).remove();
        }else {
          $(lis[25]).append(cerv_4);
        }
        if (item.val().Eisenbahn == undefined){
          delete cerv_5;
          $(lis[26]).remove();
        }else {
          $(lis[26]).append(cerv_5);
        }
        if (item.val().Heineken == undefined){
          delete cerv_6;
          $(lis[27]).remove();
        }else {
          $(lis[27]).append(cerv_6);
        }
        if (item.val().Frango == undefined){
          delete espetos_3;
          $(lis[28]).remove();
        }else {
          $(lis[28]).append(somEsp3);
        }
      //! Cervejas !//

      //NovoNúmero//
      //!NovoNúmero!//

      //Textareas//
        if (item.val().Text1 == undefined){delete obs1;}
        
      //!Textareas!//
    //! check if value equal to zero to delete from firebase !//

    input_checkbox.setAttribute("name", "number");
    $("input[name='number']").each(function(ind) {
    $(this).val(ind + 1);
    });

  });
});
