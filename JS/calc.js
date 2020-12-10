"use strict";
/*"use strict"; 

let result = document.getElementById('result');


function getNumber(number = 2) {
    result.value = number;
    //return 1; //return "letter";//
    if (result.value == 0 &&
        result.value.length == 1){
        result.value = ''; 
       }

}
function getNumber2(me2) {
    if (result.value == 0 &&
     result.value.length == 1){
     result.value = '';
    }
    result.value += me2.innerText;
}

function setEmpty() {
    result.value = 0;
}
/*
function getResult (){
result.value = eval (result.value);
}

function getResult(){
    result.value = eval(result.value);
}

result.addEventListener('keydown',logKey);

function logKey(event) {
    console.log (event.code + ' - id:' + event.keyCode);
    
    let keys = [111,106,109,107,13,8];
    if (
    (event.keyCode >= 48 && event.keyCode <= 57)
    ||
    ( event.keyCode >= 96 && event.keyCode <= 105)
    ||
keys.includes ( event.keyCode)
    )
    {
        if (event.keyCode == 13) getResult();    
        return true;
    }

    
        event.preventDefault();
    
}

result.addEventListener('keydown',checkKeydown);
result.addEventListener('keyup',checkKeyUp);
result.addEventListener('keypress',checkKeyPress );

function checkKeydown(){

    console.log ("checkKeyDown");

}
function checkKeyUp(){
    console.log ("checkKeyUp");

}
function checkKeyPress(){
    console.log ("checkKeyPress");
    
}*/

//let x = getNumber();
//console.log('x = ', x);

//semafor

let semafor = {
    red: 1,
    yellow: 3,
    green: 6
};

setInterval(function(){

    setTimeout(function(){
        document.getElementById("red").classList.remove('gray');
        document.getElementById("red").classList.add('red');

        document.getElementById("yellow").classList.remove('yellow');
        document.getElementById("yellow").classList.add('gray');

        document.getElementById("green").classList.remove('green');
        document.getElementById("green").classList.add('gray');

    }, semafor.red * 1000);

    setTimeout(function(){
        document.getElementById("yellow").classList.remove('gray');
        document.getElementById("yellow").classList.add('yellow');
    }, semafor.yellow * 1000);

    setTimeout(function(){
        document.getElementById("red").classList.remove('red');
        document.getElementById("red").classList.add('gray');

        document.getElementById("yellow").classList.remove('yellow');
        document.getElementById("yellow").classList.add('gray');

        document.getElementById("green").classList.remove('gray');
        document.getElementById("green").classList.add('green');
    }, semafor.green * 1000)

    console.log("semafor");

}, 6000);*//


let message;

message = 'Hello';

alert (message);