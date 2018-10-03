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


      

  
