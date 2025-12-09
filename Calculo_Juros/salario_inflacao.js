let salario_minimo = [
    { ano: 2010, salario: 510},
    { ano: 2011, salario: 545},
    { ano: 2012, salario: 622},
    { ano: 2013, salario: 678},   
    { ano: 2014, salario: 724},
    { ano: 2015, salario: 788},
    { ano: 2016, salario: 880},
    { ano: 2017, salario: 937},
    { ano: 2018, salario: 954},
    { ano: 2019, salario: 998},
    { ano: 2020, salario: 1045}
]


let inflacao = [
    { ano: 2010, ipca: 5.91 },
    { ano: 2011, ipca: 6.50 },
    { ano: 2012, ipca: 5.84 },
    { ano: 2013, ipca: 5.91 },   
    { ano: 2014, ipca: 6.41 },
    { ano: 2015, ipca: 10.67 },
    { ano: 2016, ipca: 6.29 },
    { ano: 2017, ipca: 2.95 }, 
    { ano: 2018, ipca: 3.75 },
    { ano: 2019, ipca: 4.31 },
    { ano: 2020, ipca: 4.52 }
]

import entradaDados from 'readline-sync';

console.log("Escolha uma das alternativas:");
console.log("1 - Listar os salários mínimos de 2010 a 2020");
console.log("2 - Listar o ìndice (IPCA) de 2010 a 2020");
console.log("3 - Comparação entre o percentual de aumento salarial e o IPCA");


let escolha = entradaDados.question("Digite o numero da sua escolha: ");

let Label_ano = "Ano".padEnd(25, '.');
let Label_salario = "Salário Mínimo".padEnd(25, '.');
let Label_ipca = "IPCA".padEnd(25, '.');
let Label_aumento = "Crescimento Salarial".padEnd(25, '.');


if (escolha == "1") {
    for (let i = 0; i < salario_minimo.length; i++) {
        console.log("\n" + Label_ano + salario_minimo[i].ano + "\n" + Label_salario + "R$ " + salario_minimo[i].salario.toFixed(2).replace('.', ',')+ "\n");
    }
}

else if (escolha == "2") {
    for (let i = 0; i < inflacao.length; i++) {
        console.log("\n" + Label_ano + inflacao[i].ano + "\n" + Label_ipca + inflacao[i].ipca.toFixed(2).replace('.', ',')+ "%" + "\n");
    }
}

else if (escolha == "3") {
    
    for (let i = 0; i < salario_minimo.length; i++) {
        let aumento_salarial;
        if (i > 0) {
             aumento_salarial = (((salario_minimo[i].salario - salario_minimo[i - 1].salario) / salario_minimo[i - 1].salario) * 100).toFixed(2).replace('.', ',') + "%";
        }

        else {
             aumento_salarial = "-";
        }
        

        console.log("\n" + Label_ano + salario_minimo[i].ano);
        console.log(Label_salario + "R$ " + salario_minimo[i].salario.toFixed(2).replace('.', ','));
        console.log(Label_aumento + aumento_salarial);
        console.log(Label_ipca + inflacao[i].ipca.toFixed(2).replace('.', ',') + "%" + "\n");    
    }

}

else {
    console.log("Opção inválida!");
}



