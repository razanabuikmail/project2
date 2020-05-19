function currencyConverter(valNum){
if(converter.num.value <= 0)
alert("NO 💸 to convert");
else{
var us = document.getElementById("dollar").value = (valNum*0.283859);
var jo =document.getElementById("dinar").value = (valNum*0.201119);
var Er =document.getElementById("yoro").value = (valNum*0.259238); 
}
}

// var t = document.getElementById('table');
// var th = document.getElementById('th' );
// var td = document.createElement("td");
// td.innerHTML=cell;

//  function displayResult()
//         {
               
//             document.getElementById("table").insertRow(-1).innerHTML
//              ='<td>1 </td> <td>1.0 </td> <td>1.2 </td>';
//         }

      var add= document.getElementById("add-result");
      var num=0;
      add.displayResult=function(){
      num++;
    console.log("add result");
    var input=document.getElementById("input");
    var done=  dollar.value+dinar.value+yoro.value ;
    if(done===""){
      alert("ok put i need 💸 ");
    }else{
    var li=document.createElement("li");
    li.innerHTML=  " US:  "+  dollar.value+ "/  " + "JOD:  "+dinar.value+ "/  " + "EUR: "+yoro.value  ;
    var ul=document.getElementById("results")
    ul.appendChild(li);
    input.value="";
  }}


var dele= document.getElementById("deletee");
 var ul=document.getElementById("results")
    dele.deleteResult()=function(){
    if(num===0){
      alert("nothing to remove");

    }else{
      num--;
    var tasks=ul.getElementsByTagName("li");
    var last=tasks[tasks.length-1];
    ul.removeChild(last);
  }
  } 

  //document.getElementById("results").remove(1);
   
  
  
  //      
