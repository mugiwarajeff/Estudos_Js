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

const parente = new filho();
console.log(parente.profissao, parente.sobrenome);