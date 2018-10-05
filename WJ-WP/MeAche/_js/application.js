//Value Petiscos
var asinha = document.getElementById('quantPet1'),
    camarao = document.getElementById('quantPet2'),
    calabresa = document.getElementById('quantPet3'),
    carneDeSol = document.getElementById('quantPet4'),
    torresmo = document.getElementById('quantPet5'),
    batataFrita = document.getElementById('quantPet6'),
    macaxeira = document.getElementById('quantPet7'),
    baiaoDeDois = document.getElementById('quantPet8');

//Value Espetos
var boi = document.getElementById('quantPet9'),
    franbacon = document.getElementById('quantPet10'),
    frango = document.getElementById('quantPet11'),
    coreFrango = document.getElementById('quantPet12'),
    porco = document.getElementById('quantPet13');


  function sendPedido() {
    var pedido = {
      //Petidscos
      Asinha_de_frango: asinha.value,
      Camarao_Alho_Oleo: camarao.value,
      Calabresa: calabresa.value,
      Carne_de_Sol: carneDeSol.value,
      Torresmo: torresmo.value,
      Batata_Frita: batataFrita.value,

      //Espetos
      Boi: boi.value,
      Franbacon: franbacon.value,
      Coracao_de_Frango: coreFrango.value,
      Porco: porco.value
    };
    return firebase.database().ref().child('pedidos').push(pedido);
  }