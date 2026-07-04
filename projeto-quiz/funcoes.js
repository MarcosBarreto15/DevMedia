function atualizarPalavraOculta(palavraOculta, letraDigitada, palavraEscolhida) {
    let palavraOcultaArray = palavraOculta.split('');
    for (let i = 0; i < palavraEscolhida.length; i++) {
        if (palavraEscolhida[i] === letraDigitada) {
            palavraOcultaArray[i] = letraDigitada;
        }
    }
    return palavraOcultaArray.join('');
}


function validarLetraDigitada(letraDigitada){
    if (letraDigitada.length === 1 && letraDigitada.match(/[a-z]/i)) {
        return true;
    } else {
        return false;
    }
}


function verificarLetraNaPalavra(palavraEscolhida, letraDigitada) {
    if(palavraEscolhida.includes(letraDigitada)) {
        return true;
    } else {
        return false;
    }
}

function verificarVitoria(palavraOculta, palavraEscolhida) {
    if (palavraOculta === palavraEscolhida) {
        return true;
    } else {
        return false;
    }
}

function restaJogadas(erros){
    return 4 - erros;
}


function fimDeJogo(statusJogo, palavraEscolhida) {

    const frutaFormatada = palavraEscolhida[0].toUpperCase() + palavraEscolhida.slice(1);

    if(statusJogo === 'vitoria') {
        console.log("\n--------------VOCÊ VENCEU!!-------------");
        console.log(`Parabéns! A fruta era: ${frutaFormatada}\n`);
    } else {
        console.log("\n--------------VOCÊ PERDEU!!-------------");
        console.log(`Que pena! A fruta correta era: ${frutaFormatada}\n`);
    }
}







export {
    atualizarPalavraOculta,
    validarLetraDigitada,
    verificarLetraNaPalavra,
    verificarVitoria,
    restaJogadas,
    fimDeJogo
};