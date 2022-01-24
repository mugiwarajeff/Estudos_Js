//aplicação pratica do padrão de projeto middleware

const passo1 = (ctx, next) => {
    ctx.valor1 = "md1"
    next()
}

const passo2 = (ctx, next) => {
    ctx.valor2 = "md2"
    next()
}

const passo3 = ctx => {
    ctx.valor3 = "md3";
}

const exec = (ctx, ...middlewares) => {
    const execPasso = index => {
        middlewares && index < middlewares.length &&
        middlewares[index](ctx, () => execPasso(index+1))
    }

    execPasso(0)
}

ctx = {};
exec(ctx, passo2, passo1,passo3);

console.log(ctx)