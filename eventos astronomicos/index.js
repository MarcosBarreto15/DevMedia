import listaDeChuvas from "./data/chuva-de-meteoros.js";
import {verificarChuvasHoje , verificarChuvasProximos2Meses} from "./funcoes/funcoesLogicas.js";
import imprimirListaChuvas from "./funcoes/funcoesInterface.js";


const hoje = new Date();
const chuvasAtivas = listaDeChuvas.filter(chuva => verificarChuvasHoje(chuva, hoje));

console.log('Chuva de meteoros');

if(chuvasAtivas.length > 0){
    let mensagem = "\nEncontramos "; 
    mensagem += chuvasAtivas.length == 1 ? `${chuvasAtivas.length} chuva de meteoros hoje:` : `${chuvasAtivas.length} chuvas de meteoros hoje:`;
    console.log(mensagem);
    imprimirListaChuvas(chuvasAtivas);
}else{
    console.log('\nNenhuma chuva de meteoros passando no momento');
}


console.log('\n\nNão perca as próximas chuvas de meteoros:');

const proximasChuvas = verificarChuvasProximos2Meses(listaDeChuvas, hoje);
imprimirListaChuvas(proximasChuvas);



