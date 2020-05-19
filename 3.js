function currencyConverter(valNum){
if(converter.num.value <= 0)
window.alert("NO currency to convert");
else{
var us = document.getElementById("dollar").value = (valNum*0.283859);
var jo =document.getElementById("dinar").value = (valNum*0.201119);
var Er =document.getElementById("Eoro").value = (valNum*0.259238); 
}
}

// function addToRecorder(addtd)
// var t = document.getElementById('table');
//  document.getElementById("table").insertRow(-1).innerHTML
// //= '<td>("dollar").value</td> <td>jo</td> <td>Er</td>'
// var td = document.createElement("td").append(table)

 function displayResult()
        {
            document.getElementById("table").insertRow(-1).innerHTML
             ='<td>("dollar").value</td> <td>jo</td> <td>Er</td>';
        }

 function deleteResult()
       {
           document.getElementById("table").removeRow(-1).innerHTML
             remove.onclick=function(){
    if(num===0){
      alert("nothing to delete");

    }else{
      num--;
    var cell=table.getElementsByTagName("td");
    var last=cell[cell.length-1];
    table.removeChild(last);
  }
  } 
      }        