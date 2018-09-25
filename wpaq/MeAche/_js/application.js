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


      

<<<<<<< HEAD



















  function process(quantPet1){
    var value = parseInt(document.getElementById("quantPet1").value);
    value += quantPet1;
    if(value < 1){
      document.getElementById("quantPet1").value = 0;
    }else{
    document.getElementById("quantPet1").value = value;
    }
  }
=======
  
>>>>>>> refs/remotes/origin/master
