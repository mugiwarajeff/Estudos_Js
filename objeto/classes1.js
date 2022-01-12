class Lancamento{
    constructor(nome="genérico", valor=0){
        this.nome = nome;
        this.valor = valor;

    }
}

class CicloFinanceiro{
    constructor(mes, ano){
        this.mes = mes;
        this.ano = ano;
        this.lancamento = [];
    }

    addLancamento(...lancamentos){
        lancamentos.forEach(l => this.lancamento.push(l))
    }

    sumario(){
        let valorConsolidado = 0;
        this.lancamento.forEach(l => {
            valorConsolidado+= l.valor
        })
        return valorConsolidado
    }
}

const salario = new Lancamento("salario", 2000);
const contaDeLuz = new Lancamento("Conta de luz", -200)

const cicloJaneiro = new CicloFinanceiro(01,22)

cicloJaneiro.addLancamento(salario, contaDeLuz);
console.log(cicloJaneiro.sumario());
