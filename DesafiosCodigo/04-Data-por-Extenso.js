let data = gets();
let dataSplit = data.split('');

function escreverDataPorExtenso(data) {
  let dia = data.slice(0, 2);
  dia = dia.join('')

  let mes = data.slice(3, 5);
  mes = mes.join('')

  let ano = data.slice(6, 10)
  ano = ano.join('')

  let mesExtenso;

  switch (mes) {
    case '01': mesExtenso = 'Janeiro'
      break;
    case '02': mesExtenso = 'Fevereiro'
      break;
    case '03': mesExtenso = 'Março'
      break;
    case '04': mesExtenso = 'Abril'
      break;
    case '05': mesExtenso = 'Maio'
      break;
    case '06': mesExtenso = 'Junho'
      break;
    case '07': mesExtenso = 'Julho'
      break;
    case '08': mesExtenso = 'Agosto'
      break;
    case '09': mesExtenso = 'Setembro'
      break;
    case '10': mesExtenso = 'Outubro'
      break;
    case '11': mesExtenso = 'Novembro'
      break;
    case '12': mesExtenso = 'Dezembro'
      break;
  }

  return `${dia} de ${mesExtenso} de ${ano}`;
}

print(escreverDataPorExtenso(dataSplit))