let firstname = "vladimir";

console.log("1. type of <firstname>: ", typeof firstname);


let result = prompt("How are you today?");
// == // equal
// != // not 
// >
// >=
// <
// <=
if (result == "good") {
    console.log("Great, nice to hear that!");
}
else if (result == "average") {
    console.log("OK, keep trying!");
} else {
    console.log("MMMMM, keep doing ! Everything wil be excelent! ");

    firstname = 10;
}


console.log("2. type of <firstname>: ", typeof firstname);


// console.log("result: ", 1+5, ", ok good!", 5*5, y);

// type
let s = "this is text";
console.log("type of <s>: ", typeof s);

s = 10;
console.log("type of <s>: ", typeof s);

s = true;
console.log("type of <s>: ", typeof s);

let ss;
console.log("type of <s>: ", typeof ss);

//s = parseInt("this is text"); // NaN
//console.log("type of <s>: ", typeof s);

s = 1234n;
console.log("type of <s>: ", typeof s);






let m = ["vladimir", 10, true]; // array
console.log("type of <m>: ", typeof m);
console.log("my name is : ", m[0]);

let o = {name:"vladimir", number:10, isTrue:true}; // object
console.log("type of <o>: ", typeof o);
console.log("my name is: ", o.name );


// parseInt("")
// parseFloat("")


let age = prompt("How old are you ?");


if (isNaN(age) == true)
{
    console.log("Insert a number!");
} 
else 
{
    if (age >= 18 && age <= 24)
    {
        // 1. true
        console.log("You are adalt. That is ok!");
    } else {
        // 2. false
        console.log("You are too young! Go away!");
    }
}




//console.log("type of <age>: ", typeof age, ", age = ", age);
// == // equal
// != // not 
// >
// >=
// <
// <=


// && -> and  
// if (true) -> true && true && true && true = true
// if (true) -> true && true && false && true = false



// || -> or
// if (true) -> true || false || false || false = true
// if (true) -> false || false || false || false = false


let dayTime = new Date();
let hour = dayTime.getHours();

if (hour >= 0 && hour <= 5)
{   
    console.log("this is night!");
} 
else if (hour >= 6 && hour <= 11)
{
    console.log("this is morning!");
} 
else if (hour >= 12 && hour <= 17)
{
    console.log("this is day!");
} 
else if (hour >= 18 && hour <= 23)
{
    console.log("this is evening!");
}


/* circles */ 
// 0 => "audi", 1 => ..., 2 => ....
let cars = ["audi", "bmw", "citroen", "jaguar", "volvo", "porche"];

// ++ increment +1  x = x + 1
// -- decrement -1  x = y - 1
for (let index = 2; index < cars.length; index++) {
    const element = cars[index];
    console.log("index = ", index, ", carname = ", element);

    //document.writeln("index = ", index, ", carname = ", element);
    if (index == 3)
    {
        console.log("loop middle");
    }
}


/*
function getMyName(firsname){ // old version 
    return "vladimir" + firsname;
}

firstanme => "vladimir"; // short function description

(firsname, lastanme) => { // short
    let a = 100;
    let x = a + 1000;
    let f = "vladimir";
    let f1 = firsname;
    return f + a + x;
}
*/


cars.forEach(element => { // callback
    console.log(element);
    console.log(element + element);
});
let mycars = {
firstname: "Vladimir",
car: car1:"Porshe",
car2:
tel:656556
} ;
console.log ("My firrstname is: " + my ars.firstname +
"car is: " + mycars.car.car1 + "" + mycars.firstname + ",my tel is:" 
 )

 //console.log (object.keys(mycars));
 //console.log (object.keys(mycars)[0]);
 let items = Object.entries

