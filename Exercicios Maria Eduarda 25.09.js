/////////////////Exercícios de interpretação de código
/*1*/
/*function minhaFuncao(variavel) {
	return variavel * 5
}
console.log(minhaFuncao(2))
console.log(minhaFuncao(10))*/

/*a) Será impresso no console: 10 e 50
b) Não aconteceria nada no console, pois não pedimos para ser impresso, porém a função será executada normalmente.*/



/*2*/
/*let textoDoUsuario = prompt("Insira um texto");
const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta) 

/*a) A função retorna se contém ou não a palavra "cenoura" no texto do usuário.
b) true, true, true*/



/////////////////Exercícios de escrita de código
/*1*/
/*a*/
/*let nome = "Maria"
let idade = 16
let cidade = "São Leopoldo"
let profissao = "médica"
/*function biografia() {
    console.log(`Eu sou ${nome} tenho ${idade} anos, moro em ${cidade} e sou estudante`)

}
console.log(biografia())*/

/*b*/
/*function dados(nome, idade, cidade, profissao) {
 let texto = `Eu sou ${nome}, tenho ${idade}, moro em ${cidade} e sou ${profissao}`

 texto.push 
 return texto 
}
console.log(dados(nome, idade, cidade, profissao))*/


/*2*/
/*a*/
/*function numeros(x, y) {
    let soma = x + y
    return soma
}
console.log(numeros(2, 4))*/

/*b*/
/*function numeros(a, b) {
let resultado= a > b
return resultado
}
console.log(numeros(2, 6))*/

/*c*/
/*function IP(num1) {
let resultado = num1 % 2 === 0
return resultado
}
console.log(IP(2))*/

/*d*/ 

/* function exibirMensagem(mensagem) {
console.log("Tamanho da mensagem: ", mensagem.length); // tamanho
console.log("Em Maiusculo: ", mensagem.toUpperCase()); // letra maiúscula
  } 

  exibirMensagem("Olá Munndo"); */ 


  /*3*/
  
  function soma (primeiroNumero, segundoNumero) {
   const soma = primeiroNumero + segundoNumero

   return primeiroNumero + segundoNumero
  }

  function Diferença (primeiroNumero, segundoNumero) {
   const Diferença = primeiroNumero % segundoNumero
   return primeiroNumero % segundoNumero
  }



  function Multiplicação (primeiroNumero, segundoNumero) {
    const Multiplicação = primeiroNumero * segundoNumero
    return primeiroNumero * segundoNumero
  }




  function Divisão (primeiroNumero, segundoNumero) {
    const Multiplicação = primeiroNumero / segundoNumero
    return primeiroNumero / segundoNumero
  }

  let primeiroNumero = Number(prompt("Digite um número"));
  let segundoNumero = Number(prompt("Digite outro número"));
   
  const resultadoSoma = soma (primeiroNumero, segundoNumero)
  const resultadoDiferenca = Diferença (primeiroNumero, segundoNumero)
  const resultadoMulti = Multiplicação (primeiroNumero, segundoNumero) 
  const resultadoDivisao = Divisão (primeiroNumero, segundoNumero)

  console.log(`Números inseridos: ${primeiroNumero} e ${segundoNumero}`);
  console.log(`Soma: ${resultadoSoma}`)
  console.log(`Diferença: ${resultadoDiferenca}`)
  console.log(`Multiplicação: ${resultadoMulti}`)
  console.log(`Divisão: ${resultadoDivisao}`)