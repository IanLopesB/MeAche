  var asinha = document.getElementById('quantPet1');
  var camarao = document.getElementById('quantPet2');
  var calabresa = document.getElementById('quantPet3');
  var carneDeSol = document.getElementById('quantPet4');
  var torresmo = document.getElementById('quantPet5');
  var batataFrita = document.getElementById('quantPet6');

  function  pegarValue () {
    create(asinha.value, camarao.value, calabresa.value, carneDeSol.value, torresmo.value, batataFrita.value);
  };

  function create(asinha, camarao, calabresa, carneDeSol, torresmo, batataFrita) {
    var data = {
      Asinha_de_frango: asinha,
      Camarao_Alho_Oleo: camarao,
      Calabresa: calabresa,
      Carne_de_Sol: carneDeSol,
      Torresmo: torresmo,
      Batata_Frita: batataFrita
    };
    return firebase.database().ref().child('pedidos').push(data);
  }