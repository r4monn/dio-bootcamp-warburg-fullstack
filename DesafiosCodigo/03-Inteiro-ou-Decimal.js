let str = gets();
let strSplit = str.toLowerCase().split('')

let espacos = []
let vogais = []

strSplit.map((letra) => {
  if (letra === ' ') {
    espacos.push(letra)
  } else if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u') {
    vogais.push(letra)
  }
})

print(`Espacos em branco: ${espacos.length} Vogais: ${vogais.length}`)