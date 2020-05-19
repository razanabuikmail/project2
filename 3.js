function currencyConverter(valNum){
if(converter.num.value <= 0)
window.alert("Enter Value Greaterthan 0");
else{

document.getElementById("dollar").value = (valNum*3.52569).toFixed(2);
document.getElementById("dinar").value = (valNum*0.201119);
 
}
}