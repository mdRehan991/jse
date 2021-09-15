var p = prompt("Enter the Amount");
var r = prompt("Enter the Interest Rate");
var t = prompt("Enter the Time Period");

function ftn() {
    var si = (p*r*t)/100;
    document.querySelector("p").innerHTML='Simple Interest is ' +  si;
}