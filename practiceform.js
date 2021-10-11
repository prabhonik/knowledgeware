var list1 = [];
var list2 = [];
var list3 = [];
var list4 = [];
var list5 = [];
var list6 = [];
var list7 = [];
var list8 = [];
var list9 = [];
var list10 = [];

var n =1;
var x=0;

function AddRow(){
    var AddRown = document.getElementById('show');
    var NewRow = adddata.insertrow(n);

    list1[x] = document.getElementById("fname").value;
    list2[x] = document.getElementById("lname").value;
    list3[x] = document.getElementById("email").value;
    list4[x] = document.getElementsByName("gender").value;
    list5[x] = document.getElementById("mobile").value;
    list6[x] = document.getElementById("dob").value;
    list7[x] = document.getElementById("subjects").value;
    list8[x] = document.getElementById("hobbie").value;
    list9[x] = document.getElementById("picture").value;
    list10[x] = document.getElementById("address").value;

    var cell1=NewRow.insertrow(0);
    var cell2=NewRow.insertrow(1);
    var cell3=NewRow.insertrow(2);
    var cell4=NewRow.insertrow(3);
    var cell5=NewRow.insertrow(4);
    var cell6=NewRow.insertrow(5);
    var cell7=NewRow.insertrow(6);
    var cell8=NewRow.insertrow(7);
    var cell9=NewRow.insertrow(8);
    var cell10=NewRow.insertrow(9);

    cell1.innerHTML = list1[x];
    cell2.innerHTML = list2[x];
    cell3.innerHTML = list3[x];
    cell4.innerHTML = list4[x];
    cell5.innerHTML = list5[x];
    cell6.innerHTML = list6[x];
    cell7.innerHTML = list7[x];
    cell8.innerHTML = list8[x];
    cell9.innerHTML = list9[x];
    cell10.innerHTML = list10[x];

    n++;
    x++;
}