import listaDeChuvas from '../data/chuva-de-meteoros.js';


function DatasInicioEFim(chuva, dataAtual){
    const anoAtual = dataAtual.getFullYear();
    const inicio = new Date(`${anoAtual}-${chuva.inicio}`);
    const fim = new Date(`${anoAtual}-${chuva.fim}`);
    
    if(fim < inicio) fim.setFullYear(anoAtual + 1);
    
    return {inicio, fim, anoAtual};
}




function verificarChuvasHoje(chuva, dataAtual) {
  const { inicio, fim, anoAtual } = DatasInicioEFim(chuva, dataAtual);

  const fimInvertido = new Date(`${anoAtual}-${chuva.fim}`) < new Date(`${anoAtual}-${chuva.inicio}`);

  if (fimInvertido) {
    return dataAtual >= inicio || dataAtual <= new Date(`${anoAtual}-${chuva.fim}`);
  }

  return dataAtual >= inicio && dataAtual <= fim;
}


function verificarChuvasProximos2Meses(lista, dataAtual) {
  const limite = new Date(dataAtual);
  limite.setMonth(limite.getMonth() + 2);
  
  return lista.filter(chuva => {
    const { inicio } = DatasInicioEFim(chuva, dataAtual);
    
    // Filtra apenas as que vão iniciar no futuro dentro do limite de 2 meses
    return inicio > dataAtual && inicio <= limite;
  });
}


function inverterData(data = '') {
  const dataInvertida = data.split('/');
  return `${dataInvertida[1]}/${dataInvertida[0]}`;
}

function formatarHemisferio(declinacao){
    return declinacao > 0 ? 'Norte' : 'Sul';
}


function formatarIntensidade(intensidade = '') {
    switch (true) {
      case intensidade.includes('Forte'):
        return '3 (Forte)';
      case intensidade.includes('Média'):
        return '2 (Média)';
      case intensidade.includes('Irregular'):
        return '(Irregular)';
      default:
        return '1 (Fraca)';
    }
    
}




export  {verificarChuvasHoje , verificarChuvasProximos2Meses, inverterData, formatarHemisferio, formatarIntensidade};