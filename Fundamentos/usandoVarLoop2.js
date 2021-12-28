// corrigindo o problema do exercicio anterior usando let como declarador

const funcs = [];

for (let i = 0; i < 10; i++)
{
    funcs.push
    (
        function()
        {
            console.log(i);
        }
    )
}

funcs[4]();
funcs[7](); //com o let funcionará totalmente pois uma função com let, sabe onde foi construida


