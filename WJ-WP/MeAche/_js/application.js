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

//Value Sucos 
var caja = document.getElementById('quantPet14'),
    laranja = document.getElementById('quantPet15'),
    maracuja = document.getElementById('quantPet16'),
    acerola = document.getElementById('quantPet17'),
    goiaba = document.getElementById('quantPet18'),
    jarra = document.getElementById('quantPet19');

//Vallue Refrigerantes
var coca_cola = document.getElementById('quantPet20'),
    guarana = document.getElementById('quantPet21'),
    fanta = document.getElementById('quantPet22'),
    agua_mineral = document.getElementById('quantPet23');

// Values Cervejas
var skol = document.getElementById('quantPet24'),
    itaipava = document.getElementById('quantPet25'),
    original = document.getElementById('quantPet26'),
    burdweiser = document.getElementById('quantPet27'),
    eisenbahn = document.getElementById('quantPet28'),
    heineken = document.getElementById('quantPet29');


  function sendPedido() {
    var pedido = {
      //Petidscos
      "Asinha_de_frango": asinha.value,
      Camarao_Alho_Oleo: camarao.value,
      Calabresa: calabresa.value,
      Carne_de_Sol: carneDeSol.value,
      Torresmo: torresmo.value,
      Batata_Frita: batataFrita.value,
      Macaxeira: macaxeira.value,
      Baiao_de_Dois: baiaoDeDois.value,

      //Espetos
      Boi: boi.value,
      Franbacon: franbacon.value,
      Coracao_de_Frango: coreFrango.value,
      Porco: porco.value
    };
    
      delete ;
    
    return firebase.database().ref().child('pedidos').push(pedido);
  }