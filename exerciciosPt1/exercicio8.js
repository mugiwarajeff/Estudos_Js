function contaRecord(listaString){
    var pontuacoes = listaString.split(" ")
    var quantidadeRecords = 0
    var maiorValor = 0 
    var menorValor = 0
    var casaMenor = 0
   for (item in pontuacoes){
       if (item == 0){
        maiorValor = Number(pontuacoes[item])
        menorValor = Number(pontuacoes[item])
       }else{
           if (Number(pontuacoes[item]) > maiorValor){
               maiorValor = Number(pontuacoes[item])
               quantidadeRecords++
           }
           if (Number(pontuacoes[item]) < menorValor){
               menorValor = Number(pontuacoes[item])
               casaMenor = Number(item) + 1
           }
       }
   }

   return [quantidadeRecords, casaMenor]
    
}

console.log(contaRecord("11 30 5 20 40"));