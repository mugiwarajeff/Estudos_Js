// as heranças para classes funcionam da mesma forma que as formas tradicionais
// o que muda porém é a sintaxe

class avo{
    constructor(sobrenome="silva"){
        this.sobrenome = sobrenome
    }
}

const obj = new avo();
console.log(obj);

class pai extends avo {
    constructor(sobrenome, profissao = "professor"){
        super(sobrenome);
        this.profissao = profissao;
    }
}

class filho extends pai{
    constructor(){
        super();
    }
}

class carro{
    constructor(modelo,velocidadeMaxima){
        this.modelo = modelo;
        this.velocidadeMaxima = velocidadeMaxima;
        this.velocidadeAtual = 0;
    }

    acelerar(quantidade){
        if (this.velocidadeAtual + quantidade < this.velocidadeMaxima){
            this.velocidadeAtual += quantidade;
        }else {
            this.velocidadeAtual = this.velocidadeMaxima
        }
    }

    status(){
        console.log(`O carro ${this.modelo} está a uma velocidade de: ${this.velocidadeAtual}`);
    }
}

class ferrari extends carro{
    constructor(cor){
        super(modelo, velocidadeMaxima);
        this.cor = cor;
    }
}

const f1 = new ferrari("vermelho", modelo="F40", velocidadeMaxima=350);

f1.acelerar(300);
f1.acelerar(100);
f1.status();
console.log(f1.cor);