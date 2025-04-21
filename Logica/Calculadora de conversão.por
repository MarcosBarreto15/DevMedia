programa
{
	
	funcao inicio()
	{

		real fahrenheit
		real milhas
		inteiro opcao 
		real valor_converter

		
		faca
		{
			escreva("Calculadora de conversões: Escolha uma opção:\n\n")
			escreva("1 - Celsius para Fahrenheit\n")
			escreva("2 - Quilômetros para Milhas\n")
			escreva("3 - Sair\n\n") 
			leia(opcao)
			
			se(opcao == 3)
			{
				pare
			}

			escolha(opcao)
			{
				caso 1:
					escreva("Informe o valor que deseja converter: ")
					leia(valor_converter)
	
					escreva("Opção escolhida: "+opcao+"\n")
					escreva("Valor digitado: "+valor_converter+"\n\n")
					fahrenheit = (valor_converter * 1.8) + 32
					escreva(valor_converter+"ºC equivale a "+fahrenheit+"ºF\n\n")
					pare
					
				caso 2:
					escreva("Informe o valor que deseja converter: ")
					leia(valor_converter)
	
					escreva("Opção escolhida: "+opcao+"\n")
					escreva("Valor digitado: "+valor_converter+"\n\n")
					milhas = valor_converter * 0.62137
					escreva(valor_converter+"km equivale a "+milhas+"mi\n\n")
					pare
				
				caso contrario:

					escreva("Opção inválida\n\n")
					pare
			}
			
		
		}
		enquanto(opcao != 3)
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 1093; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */