import entradaDados from 'readline-sync';

let valorDivida = parseFloat(entradaDados.question('Informe o valor devido; R$ '));

if (valorDivida <= 0) {
    console.log("O valor da dívida deve ser maior que zero.");
}


else {

let diasAtraso = parseInt(entradaDados.question('Informe quantos dias se passaram desde o vencimento do boleto: '));

    if (diasAtraso <= 0) {
        console.log("Você está em dia!");
    }

    else {  
    let taxaJuros = diasAtraso <= 15 ? 0.05 : 0.1;
    let valorJuros = valorDivida * (taxaJuros / 100) * diasAtraso;
    let valorTotal = valorDivida + valorJuros;

    console.log("Valor da dívida: R$ " + valorDivida.toFixed(2));
    console.log("Dias em atraso: " + diasAtraso );
    console.log("Taxa de juros " + (taxaJuros * 100) + "%");
    console.log("Valor total com juros: R$ " + valorTotal.toFixed(2));
    }

}

