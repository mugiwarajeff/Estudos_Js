function esperarPor(milissegundos = 2000){
    return new Promise((resolve, reject) => {
        setInterval(() => {
            resolve("executando...")
        }, milissegundos)
    })
}

async function executor(){
    await esperarPor(2000);
    console.log(1);
    
    await esperarPor(2000);
    console.log(2);

    await esperarPor(2000);
    console.log(3);

}

executor().then(valor => console.log(valor));