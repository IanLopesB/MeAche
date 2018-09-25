  var asinha = document.getElementById('quantPet1');
    var cao = document.getElementById('quantPet2');

  function  pegarValue () {
    create(asinha.value, cao.value);
  };

  function create(asinha, cao) {
    var data = {
      Asinha_de_frango: asinha,
      Camarao_Alho_Oleo: cao
    };
    return firebase.database().ref().child('pedidos').push(data);
  }