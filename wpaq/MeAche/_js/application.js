  var asinha = document.getElementById('quantPet1');
  var camarao = document.getElementById('quantPet2');

  function  pegarValue () {
    create(asinha.value, camarao.value);
  };

  function create(asinha, camarao) {
    var data = {
      Asinha_de_frango: asinha,
      Camarao_Alho_Oleo: camarao
    };
    return firebase.database().ref().child('pedidos').push(data);
  }