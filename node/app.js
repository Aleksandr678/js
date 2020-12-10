const chalk = require('chalk') ;
const myvar = require('../node/mymodule') ;

let msg ='Hello!';
console.log(msg);

console.log(chalk.green(msg));

console.log(chalk.green.bold.italic(msg));

myvar.writeHelloWorld('Aleksandr');

let index = 1;
console.log(myvar.getColorClass(index));
console.log(myvar.getColorClass(index).name);
console.log(myvar.getColorClass(index).code);