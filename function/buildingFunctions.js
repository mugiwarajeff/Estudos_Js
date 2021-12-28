//Usamos esset tipo de funções assim como utilizamos utilizamos as classes como moldes no python ou no java

function carro(veloMaxima=100, aceleracao=5){
    velocidadeAtual = 0 //quando não temos o this, esse metodos se torna um metodo privado

    this.acelerar = function(){
        if (velocidadeAtual + aceleracao > veloMaxima){
            velocidadeAtual = veloMaxima;
        } else{
            velocidadeAtual += aceleracao;
        }
    }

    this.getVelocidade = function(){
        console.log(velocidadeAtual)
    }
}

const uno = new carro;

uno.getVelocidade();
uno.acelerar();
uno.acelerar();
uno.acelerar();
uno.getVelocidade();

