function getparagraph1(){
var inputs= [];
for(var i=1; vari<=6;i++)
{
    inputs.push(document.getElementById("paral_input_"+i).value)
    inputs.join(". ")
    document.getElementById("showparagraph1").innerHTML=inputs.join(". ")
}
}