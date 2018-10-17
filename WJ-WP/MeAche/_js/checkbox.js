function check_tb(value){
  var inputs = document.getElementById("checkb" + value);
  var tr = document.getElementById("tr"+ value);
    if (inputs.checked == true) {
      tr.style.textDecoration = "line-through";
      tr.style.color = "red";
      }
    else {
      tr.style.textDecoration = "none";
      tr.style.color = "black";

    }
}
