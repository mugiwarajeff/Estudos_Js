console.log(this === global);
//no escopo global o this não aponta para global e sim para module.exports

console.log(this === module.exports);

function logThis(){
    console.log(this === global);
    console.log(this === module.exports);
}

logThis()