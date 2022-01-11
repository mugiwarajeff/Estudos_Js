// representação da cadeia de prototipos
// sombreamento ou shadowing é quando algo do prototipo super é sobrescrito por algo do
// proto filho, já que se for encontrado no filho, nao irá para o pai

const avo = {a: 1};
const pai = {__proto__: avo, b : 2};
const filho = {__proto__: pai, c: 3};

console.log(filho.a);
console.log(pai.a)


const carro = {velocidadeAtual:0,
                velocidadeMaxima:250,
                acelerar(valor){
                    if (this.velocidadeAtual + valor < this.velocidadeMaxima){
                        this.velocidadeAtual += valor;
                    }else{
                        this.velocidadeAtual = this.velocidadeMaxima;
                    }
                },
            status(){
                return this.velocidadeAtual
            }}



const ferrari = {velocidadeMaxima:350,
                modelo: "V40",
                status(){console.log(`modelo ${this.modelo} está em ${super.status()}`)} 
}

Object.setPrototypeOf(ferrari, carro);

ferrari.acelerar(501);
ferrari.status();