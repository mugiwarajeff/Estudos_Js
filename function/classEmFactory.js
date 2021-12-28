function Pessoa(name){
    this.name = name;

    this.falaOi = function(){
        console.log(`${name} está falando oi`);
    }
}

const pessoa1 = new Pessoa("jefferson");

console.log(pessoa1);
pessoa1.falaOi();