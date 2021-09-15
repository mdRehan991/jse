var str = prompt("Enter any String.");

function ftn() {
    var s = str.split("").reverse().join("");
    if(str==s)
        document.querySelector("p").innerHTML='The given String ' +  str + " is Palindrome";
    else
    document.querySelector("p").innerHTML='The given String ' +  str + " is not Palindrome";
}