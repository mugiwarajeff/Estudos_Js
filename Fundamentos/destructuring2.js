// também podemos realizar esse tipo de operador com arrays

const [n1,, n3, , n5, n6] = [1, 2, 3, 4];

console.log(n1, n3, n5, n6)


let [, [, n10]] = [[1,2],[3,4]];

console.log(n10);
