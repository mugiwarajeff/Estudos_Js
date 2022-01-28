const anonimo = process.argv.indexOf("-a") !== -1;

if(anonimo){
    process.stdout.write("Olá anonimo!!")
    process.exit()
}else{
    process.stdout.write("Digite o seu nome: ");
    process.stdin.on("data", data => {
        const nome = data.toString().replace("/r/n", "");
        process.stdout.write("Fala tu " + nome);
        process.exit()
    })
}