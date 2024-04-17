let btn1 = document.getElementById("new");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let nav1 = document.getElementById("content-div1");
let nav2 = document.getElementById("content-div2");
let nav3 = document.getElementById("content-div3");
let nav4 = document.getElementById("content-div4");
let nav5 = document.getElementById("content-div5");
let hide1 = true;
let hide2 = true;
let hide3 = true;
let hide4 = true;
let hide5 = true;

btn1.onclick = function () {
    if (hide1){
        nav1.style.height = 350+'px'
        hide1 = false;
    } else {
        nav1.style.height = "0";
        hide1 = true;
    }
    document.getElementById("viewDiv").innerHTML = '<object type="text/html" data="new.html" width="100%" height="5753px"></object>';
    CompanyInformation.style.backgroundColor = "red";
}
btn2.onclick = function () {
    if (hide2){
        nav2.style.height = 100 +'px'
        hide2 = false;
    } else {
        nav2.style.height = "0";
        hide2 = true;
    }
}
btn3.onclick = function () {
    if (hide3){
        nav3.style.height = 500+'px'
        hide3 = false;
    } else {
        nav3.style.height = "0";
        hide3 = true;
    }
}
btn4.onclick = function () {
    if (hide4){
        nav4.style.height = 0+'px'
        hide4 = false;
    } else {
        nav4.style.height = "0";
        hide4 = true;
    }
    document.getElementById("viewDiv").innerHTML = '<object type="text/html" data="Member file.html" width="100%" height="700px" bottom="0px"></object>';
}
btn5.onclick = function () {
    if (hide5){
        nav5.style.height = 150+'px'
        hide5 = false;
    } else {
        nav5.style.height = "0";
        hide5 = true;
    }
}