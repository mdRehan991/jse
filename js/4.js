//Copy info of obj1 into obj2;


var idz = prompt("Enter any number.");
var namez = prompt("Enter any name.");

var obj1 = {
    id: idz,
    name: namez
};

var obj2 = obj1;

function ftn() {
    console.log(obj2);
    document.querySelector("p").innerHTML='Now open Dev tools by pressing F12 & select "console."';
}