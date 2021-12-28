// usar o class é uma outra forma de ser criar objetos ou uma factory, porém com uam sintaxe que se aproxima mais do java ou python 

class Pessoa{
    constructor(name){
        this.name = name
    }
    
    falaOi = function(){
        console.log(`${this.name} está falando oi`)
    }
}

pessoa1 = new Pessoa("jefferson");

pessoa1.falaOi();