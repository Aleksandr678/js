

class Colors {
    constructor(name,code){
        this.name = name;
        this.code = code;
    }
}

const mycolors = [

    new Colors('megreen','#40f00'),
    new Colors('myblue','#40f00'),
    new Colors('myred','#40f00'),
    new Colors('myyellow','#40f00'),

];
exports.writeHelloWorld = function (firstname)
{
    console.log('Hello World ' + firstname);

}
exports.showAllColor = mycolors;
exports.getColorClass = (index) => {
    return mycolors

}