
      function checkbox() {
/*
      var check = document.getElementsByClassName('check');

       for (var i =  0; i <check.length; i++){
        var check = check[i];

      var linhas = document.getElementsByClassName('trs');
        if (check.checked == true){
                      linhas.style.textDecoration = "line-through";
                      linhas.style.color="red";
                          }
                          else{
                      linhas.style.textDecoration="none";
                      linhas.style.color="black";
                          }
                        }
*/




/*$(document).ready(function()
{
    $("input").click(function() {
        // id do elemento clicado
        id = $(this).attr( 'id' );

        // exibe / oculta descrições
        $('check').addClass('p-none');
        $('check'+id).removeClass('p-none').addClass('p-red');
    });
});

*/


var inputs = document.getElementsByTagName('input');

for( var i=0; i<inputs.length; i++ )
{
  var ps = inputs[ i ].getElementsByTagName('p');

  for( var j=0; j<ps.length; j++ )
  {
    ps[ j ].className = 'p-red';
  }
}


       }
