

function displayfun(){
    var type = document.getElementsByName("option");
    if(type[0].checked){
        document.getElementById("displayselected").textContent='You have selected Yes';
    }
    else if(type[1].checked){
        document.getElementById("displayselected").textContent='You have selected Impressive';
    }
}