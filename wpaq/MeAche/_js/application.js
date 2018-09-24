  var alimentsList = document.getElementById('alimentsList');
  var asinha = document.getElementById('quantPet1');

  function  pegarValue () {
    create(asinha.value);
  };

  function create(alimento) {

    var data = {
      alimento: alimento  
    };
    return firebase.database().ref().child('alimentos').push(data);
  }

  firebase.database().ref('alimentos').on('value', function (snapshot) {
    alimentsList.innerHTML = '';
    snapshot.forEach(function (item) {
      var td = document.createElement('td');
      td.appendChild(document.createTextNode("Asinha de Frango: " + item.val().alimento));
      alimentsList.appendChild(td);
    });
  });



  function process(quantPet1){
    var value = parseInt(document.getElementById("quantPet1").value);
    value += quantPet1;
    if(value < 1){
      document.getElementById("quantPet1").value = 0;
    }else{
    document.getElementById("quantPet1").value = value;
    }
  }