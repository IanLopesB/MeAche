// Value Petiscos
var asinha = document.getElementById('quantPet1'),
  camarao = document.getElementById('quantPet2'),
  calabresa = document.getElementById('quantPet3'),
  carneDeSol = document.getElementById('quantPet4'),
  torresmo = document.getElementById('quantPet5'),
  batataFrita = document.getElementById('quantPet6'),
  macaxeira = document.getElementById('quantPet7'),
  baiaoDeDois = document.getElementById('quantPet8');

// Value Espetos
var boi = document.getElementById('quantPet9'),
  franbacon = document.getElementById('quantPet10'),
  frango = document.getElementById('quantPet11'),
  coreFrango = document.getElementById('quantPet12'),
  porco = document.getElementById('quantPet13');

// Value Sucos
var caja = document.getElementById('quantPet14'),
  laranja = document.getElementById('quantPet15'),
  maracuja = document.getElementById('quantPet16'),
  acerola = document.getElementById('quantPet17'),
  goiaba = document.getElementById('quantPet18'),
  jarra = document.getElementById('quantPet19');

// Value Refrigerantes
var coca_cola = document.getElementById('quantPet20'),
  guarana = document.getElementById('quantPet21'),
  fanta = document.getElementById('quantPet22'),
  agua_mineral = document.getElementById('quantPet23');

// Value Cervejas
var skol = document.getElementById('quantPet24'),
  itaipava = document.getElementById('quantPet25'),
  original = document.getElementById('quantPet26'),
  burdweiser = document.getElementById('quantPet27'),
  eisenbahn = document.getElementById('quantPet28'),
  heineken = document.getElementById('quantPet29');


function sendPedido() {
var pedido = {
  // Petiscos
  Asinha_de_frango: asinha.value,
  Camarao_Alho_Oleo: camarao.value,
  Calabresa: calabresa.value,
  Carne_de_Sol: carneDeSol.value,
  Torresmo: torresmo.value,
  Batata_Frita: batataFrita.value,
  Macaxeira: macaxeira.value,
  Baiao_de_Dois: baiaoDeDois.value,

  // Espetos
  Boi: boi.value,
  Franbacon: franbacon.value,
  Frango: frango.value,
  Coracao_de_Frango: coreFrango.value,
  Porco: porco.value,

  // Sucos
  Caja: caja.value,
  Laranja: laranja.value,
  Maracuja: maracuja.value,
  Acerola: acerola.value,
  Goiaba: goiaba.value,
  Jarra_de_Suco: jarra.value,

  // Refrigerantes
  Coca_cola: coca_cola.value,
  Guarana: guarana.value,
  Fanta: fanta.value,
  Agua_Mineral: agua_mineral.value,

  // Cervejas
  Skol: skol.value,
  Itaipava: itaipava.value,
  Original: original.value,
  Burdweiser: burdweiser.value,
  Eisenbahn: eisenbahn.value,
  Heineken: heineken.value
};

// Petiscos
if (asinha.value == 0){delete pedido.Asinha_de_frango};
if (camarao.value == 0){delete pedido.Camarao_Alho_Oleo};
if (calabresa.value == 0){delete pedido.Calabresa};
if (carneDeSol.value == 0){delete pedido.Carne_de_Sol};
if (torresmo.value == 0){delete pedido.Torresmo};
if (batataFrita.value == 0){delete pedido.Batata_Frita};
if (macaxeira.value == 0){delete pedido.Macaxeira};
if (baiaoDeDois.value == 0){delete pedido.Baiao_de_Dois};

// Espetos
if (boi.value == 0){delete pedido.Boi};
if (franbacon.value == 0){delete pedido.Franbacon};
if (frango.value == 0){delete pedido.Frango};
if (coreFrango.value == 0){delete pedido.Coracao_de_Frango};
if (porco.value == 0){delete pedido.Porco};

// Sucos
if (caja.value == 0){delete pedido.Caja};
if (laranja.value == 0){delete pedido.Laranja};
if (maracuja.value == 0){delete pedido.Maracuja};
if (acerola.value == 0){delete pedido.Acerola};
if (goiaba.value == 0){delete pedido.Goiaba};
if (jarra.value == 0){delete pedido.Jarra_de_Suco};

// Refrigerantes
if (coca_cola.value == 0){delete pedido.Coca_cola};
if (guarana.value == 0){delete pedido.Guarana};
if (fanta.value == 0){delete pedido.Fanta};
if (agua_mineral.value == 0){delete pedido.Agua_Mineral};

// Cervejas
if (skol.value == 0){delete pedido.Skol};
if (itaipava.value == 0){delete pedido.Itaipava};
if (original.value == 0){delete pedido.Original};
if (burdweiser.value == 0){delete pedido.Burdweiser};
if (eisenbahn.value == 0){delete pedido.Eisenbahn};
if (heineken.value == 0){delete pedido.Heineken};

return firebase.database().ref().child('pedidos').push(pedido);
}