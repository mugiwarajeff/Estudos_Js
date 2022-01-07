const jeffinho = {coracao: {tipoSangue :"O+",
                            dona: "malu"}}

Object.freeze(jeffinho.coracao);

console.log(jeffinho.coracao.dona);

jeffinho.coracao.dona = "qualquer uma";

console.log(jeffinho.coracao.dona);


