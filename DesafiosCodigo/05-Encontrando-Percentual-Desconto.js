let M, S;

M = parseInt(gets());
S = parseInt(gets());

function escreverPorcentual(M, S) {
  let valorDescontado = M - S;

  let percentual = (valorDescontado / M) * 100

  return `O desconto foi de ${percentual}%`
}

print(escreverPorcentual(M, S))