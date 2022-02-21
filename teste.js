// console.log("o que temos pra hoje ??")

// for (let c = 0; c < 10; c++){
//     console.log(c)
// }

// let nome = "jefferson";

// console.log(`meu nome é ${nome}`);0,


sequencia = {
    _numero : -1000,
    get numero(){this._numero++;}
}

setInterval(() => {console.log(sequencia.numero)}, 100);