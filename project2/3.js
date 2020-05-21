function currencyConverter(valNum){
if(converter.num.value <= 0)
alert("NO 💸 to convert");
else{

var us = document.getElementById("dollar").value = (valNum*0.283859);
var jo =document.getElementById("dinar").value = (valNum*0.201119);
var Er =document.getElementById("yoro").value = (valNum*0.259238); 
var ils =document.getElementById("shekl").value=(valNum*1);
}
}
var t = document.getElementById('table');
var th = document.getElementById('th' );
var td = document.createElement("td");

          //add in table 
       function displayResult()
        { 
          var done=  dollar.value+dinar.value+yoro.value+shekl.value ;
           if(done===""){
           alert("ok but i need 💸 ");
        }else{
          document.getElementById("table").insertRow(-1).innerHTML
             = '<td>'+shekl.value+'</td>'+
               '<td>'+dollar.value+'</td>' +
              '<td>'+dinar.value+'</td>' +
              '<td>'+yoro.value+'</td>'
              ;
        }}

function deleteResult()
             {
           var done=  dollar.value+dinar.value+yoro.value+shekl.value ;
           if(done===""){
           alert("the recorder is empty 📓 ");
            }else{
             document.getElementById("table").deleteRow(-1);
              }}
    


            //add in ul :
  //     var add= document.getElementById("add-result");
  //     var num=0;
  //     add.displayResult=function(){
  //     num++;
  //   console.log("add result");
  //   var input=document.getElementById("input");
  //   var done=  dollar.value+dinar.value+yoro.value ;
  //   if(done===""){
  //     alert("ok put i need 💸 ");
  //   }else{
  //   var li=document.createElement("li");
  //   li.innerHTML=  " US:  "+  dollar.value+ "/  " + "JOD:  "+dinar.value+ "/  " + "EUR: "+yoro.value  ;
  //   var ul=document.getElementById("results")
  //   ul.appendChild(li);
  //   input.value="";
  // }}

     //  delete from ul 

// var dele= document.getElementById("deletee");
//  var ul=document.getElementById("results")
//     dele.deleteResult()=function(){
//     if(num===0){
//       alert("nothing to remove");

//     }else{
//       num--;
//     var tasks=ul.getElementsByTagName("li");
//     var last=tasks[tasks.length-1];
//     ul.removeChild(last);
//   }
//   } 

  //document.getElementById("results").remove(1);
 
//   var list = document.getElementById("results");
//   list.removeChild(list.childNodes[0]);
// }

 // window.emptyList = function () {
 //  var ul = document.querySelector('.results');
 //      var listLength = ul.children.length;

 //      for (i = 0; i < listLength; i++) {
 //        ul.removeChild(ul.childNodes[i]);
 //      }
 //    }
   
  
  //      
