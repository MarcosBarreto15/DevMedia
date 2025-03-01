programa
{
	
	funcao inicio()
	{
		real valor
		real porcentagem
		real desconto
		real juros
		real valor_porcentagem

		escreva ("Informe o valor: ")
		leia(valor)

		escreva ("Informe a porcentagem: ")
		leia(porcentagem)

		
		valor_porcentagem = (porcentagem *valor)/100
		desconto = valor - valor_porcentagem
		juros = valor + valor_porcentagem
		
		escreva ("\n"+valor+" com "+porcentagem+"% de desconto é "+desconto+"\n")
		escreva (valor+" com "+porcentagem+"% de de juros é "+juros+"\n")
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 502; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */