/* 
this ou self referenciam o objeto intanciado
this pode variar dependendo do contexto de execução da function
dois motivos pra criação do arrow function(redução de sintaxe e fixação do this)

*/

function teste(){
    console.log(this == global);
}

teste();