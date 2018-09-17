      function createTable(){
        /* Função que cria a tabela*/

      var tr = document.createElement('tr');	
        /* <tr></tr> */
      var th = document.createElement('th');	
        /* <th></th> */
      var input = document.createElement('input');	
        /* <input></input> */
      var td = document.createElement('td');
        /* <td></td> */ 
      var p = document.createElement('p');
        /* <p></p> */


      tr.appendChild(th);
        /* <tr>
      	<th></th>
           </tr>
        */
        
      th.appendChild(input);
      input.appendChild(td);
      td.appendChild(p);

      tr.setAttribute("class", "trID");
      	/* <tr class="trID"></tr> */

      th.setAttribute("scope", "row");
      	/* <th scope="row"></th> */

      input.setAttribute("type", "checkbox");
      	/* <input type="checkbox"></input> */
      input.setAttribute("class", "funcInput");
      	/* <input class="funcInput"></input> */
      input.setAttribute("onclick", "check_tb1");
      	/* <input onclick="check_tb1"></input> */

      td.setAttribute("colspan", "2");
      	/* <td colspan="2"></td> */ 

      document.getElementById('tableLines').appendChild(tr);
    }