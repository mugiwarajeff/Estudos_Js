// faremos um exemplo mais complexo, sobre o funcionamento de coisas em for 

const funcs = [];

for (var i = 0; i < 10; i++)
{
    funcs.push
    (
        function ()
    {
        console.log(i);
    }
    )
}
    

funcs[2]();
funcs[5]();