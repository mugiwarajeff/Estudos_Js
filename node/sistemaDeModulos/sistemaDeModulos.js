/**
 * -Como uma aplicação é oganizada...
 * -A maioria das aplicações do Node devem retornar Json já que as aplicações do lado front, devem ser mais leves
 * -No node, todo arquivo é um modulo distinto
 * -Para que deixemos algo publico dentro de um modulo, devemos fazer a exportação do arquivo e existem algumas formas para isso
 *
 */


/*
this.ola = "fala pessoal";
exports.bemvindo = "Bem vindo ao node";
module.exports.ateLogo = "até proximo exemplo"
*/

// Todos os metodos são objetos, com pares de chave e valor dinamicos, ou seja estamos adicionando ao objeto exports
// uma forma comum também é pela notação literal de objetos

/*module.exports = {
    bomDia: "bom dia",
    boaNoite(){
        return "boa noitee"
    }
}
*/

// para fazer a importação usar o require + caminho relativo