// Write a Javascript program to check two numbers and return true if one of the number is 100 or if the sum of the two numbers is 100

var a =  Math.floor(Math.random() * 100);
var b =  Math.floor(Math.random() * 100);

var inputBoxA = document.getElementById("changeA");
var inputBoxB = document.getElementById("changeB");

function check(a,b){
    if (a === 100 || b === 100) {
        document.getElementById("is-true").innerHTML = "<p>TRUE!</p>"
    } else {
        document.getElementById("is-true").innerHTML = "<p>FALSE!</p>"
    }
};

function checkSum(a,b){
    if (a + b === 100){
        document.getElementById("both-true").innerHTML = "<p>TRUE!!</p>"
    } else {
        document.getElementById("both-true").innerHTML = "<p>FALSE!!</p>"
    }
};