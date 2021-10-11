

function btnfxn(){
    document.getElementById("display1").innerHTML = "You have done a double click!";
}
function clickfxn(){
    document.getElementById("display3").innerHTML = "You have done a dynamic click!";
}
function mousebtnfxn(event){
    if(event.button==2){
        document.getElementById("display2").innerHTML = "You have done a right click!";
    }
}