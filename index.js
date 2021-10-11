

function takevalue(){
    var fname = document.getElementById("fname").value;
    var email = document.getElementById("mailid").value;
    var currentaddr = document.getElementById("curaddress").value;
    var permanentaadr = document.getElementById("peraddress").value;
    var result = fname + " "+ email + " " + currentaddr + " " + permanentaadr;
    document.getElementById("display").innerHTML=result;
}