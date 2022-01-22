moduloA = require("./instanciaUnica");
moduloB = require("./instanciaUnica");

moduloC = require("./instanciaNova")();
moduloD = require("./instanciaNova")();

moduloA.inc();
moduloA.inc();

console.log(moduloB.valor);

moduloC.inc();
moduloC.inc();

console.log(moduloC.valor, moduloD.valor)
