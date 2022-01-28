//alguams funcionalidades novas aplicadas a objetos

//object.values e object.entries

const pessoa = {
    nome: "jefferson", 
    idade: "19",
    falaoi(){
        return "ola pessoas!";
    }
}


console.log(Object.values(pessoa));
console.log(Object.entries(pessoa));

let [par1, par2] = Object.entries(pessoa);
console.log(par1, par2);

// classes

class Animal {}

class Cachorro extends Animal {
    falar(){
        return "au au"
    }
}

console.log(new Cachorro().falar())

