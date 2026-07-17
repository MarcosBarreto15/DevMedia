import {inverterData, formatarHemisferio, formatarIntensidade} from './funcoesLogicas.js';
import listaDeChuvas from '../data/chuva-de-meteoros.js';


function imprimeChuva(chuva){
    const nome = chuva.nome.padEnd(32, ' ');
    const intensidade = formatarIntensidade(chuva.intensidade).padEnd(11, ' ');
    const hemisferio = formatarHemisferio(chuva.declinacao).padEnd(10, ' ');
    const inicio = inverterData(chuva.inicio);
    const fim = inverterData(chuva.fim);
    
    console.log(`${nome} - ${intensidade} - ${hemisferio} - ${inicio} a ${fim} `);;

}


function imprimirListaChuvas(lista){
    console.log('\nNOME DA CHUVA                    - INTENSIDADE - HEMISFÉRIO - PERÍODO');

    lista.forEach(imprimeChuva);
}


export default imprimirListaChuvas;