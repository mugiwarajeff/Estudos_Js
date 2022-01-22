// npm é responsavel por baixar arquivos de terceiros

// para instalar um modulo usar comando npm com a flag npm -i <lib> *i == install 
// é criada uma pasta chamada node_modules que é onde vão ficar todos os arquivos dos modulos

const _ = require("lodash");

setInterval(() => console.log(_.random(0, 10)), 2000);

