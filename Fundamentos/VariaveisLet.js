// O declarador let apresenta um diferencial, que é o seu escopo de blocos, além do global e funcional

let a = 4 //está no escopo global

{
    let a = 2 //está no escopo de blocos
    console.log(a);
}

console.log(a);