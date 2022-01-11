//herança é um principio do OO que faz com que possamos reutilizar codigo
// uma vez que estamos herdando coisas de um objeto pai para um objeto filho

//as heranças no js são baseadas em prototype
//toda função tem o atributo prototype que aponta para sempre para o object.Prototype
// então podemos mudar o destino desse metodo prototype presentes nas funções
// fazendo com que uma relação de herança seja criada, uma vez que o metodo buscado
// não existe no objeto atual, ele será redirecionado para onde o __proto__ aponta
// metodo super --> se refere sempre ao objeto prototipo, sendo que o maior super possivel
// é o object.Prototype