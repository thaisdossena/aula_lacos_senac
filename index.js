    // Exercícios de interpretação de código

    //1. O que o código abaixo está fazendo? Qual o resultado impresso no console? Resposta: Está realizando um loop utilizando a estrutura de repetição "for", somando os valores de 0, 1, 2, 3 e 4, resultando em um total de 10.

    // let valor = 0
    // for(let i = 0; i < 5; i++) {
    // valor += i
    // }
    // console.log(valor)

    // 2. Leia o código abaixo:
    
    // const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
    // for (let numero of lista) {
    //   if (numero > 18) {
    // 		console.log(numero)
    // 	}
    // }
    
    // a) O que vai ser impresso no console? Resposta: Números maiores que 18   
    // b) Se eu quisesse acessar o índice de cada elemento dessa lista, o `for...of...` é suficiente? Se sim, o que poderia ser usado para fazer isso? Resposta: Não o for..of apenas percorrer pelos valores do array. Neste caso poderia se utilizar o for in:

    // const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
    // for(let indice in lista) {
    //     console.log(indice)
    //     console.log(lista[indice])
    // }

    // 3. Qual seria o resultado impresso no console, se o usuário digitasse o número 4 ? Resposta: ****

    // const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))

    // let quantidadeAtual = 0
    // while(quantidadeAtual < quantidadeTotal){
    // let linha = ""
    // for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
    //     linha += "*"
    // }
    // console.log(linha)
    // quantidadeAtual++
    // }

    // Exercícios de escrita de código

        // 1. Pergunte ao usuário quantos bichinhos de estimação ele tem e guarde esse dado em uma variável.     
        // a) Se a quantidade for 0, imprima no console "Que pena! Você pode adotar um pet!"    
        // b) Se a quantidade for maior que 0, solicite que o usuário digite os nomes deles, um por um, e guarde esses nomes em um array
        // c) Por fim, imprima o array com os nomes dos bichinhos no console

let quantidadePets = Number(prompt("Quantos bichinhos de estimação você tem?"));

if (quantidadePets === 0) {
    console.log("Que pena! Você pode adotar um pet!");
} else if (quantidadePets > 0) {
    let nomesPets = [];
    
    for (let i = 0; i < quantidadePets; i++) {
    let nomePet = prompt("Digite o nome do seu pet:");
    nomesPets.push(nomePet);
    }
    
    console.log("Nomes dos bichinhos de estimação:");
    console.log(nomesPets);
}        

    // 2. Considere que você tenha acesso a um `array`  (chamado de 'array original') que é composto somente de números. Baseando-se nisso, crie uma função para cada um dos itens abaixo, realizando as operações pedidas:    
    // a) Escreva um programa que imprime cada um dos valores do array original.
    // b) Escreva um programa que imprime cada um dos valores do array original divididos por 10
    // c) Escreva um programa que crie um novo array contendo, somente, os números pares do array original e imprima esse novo array
    // d) Escreva um programa que crie um novo array contendo strings, da seguinte forma: "O elemento do índex `i` é: `numero`". Depois, imprima este novo array.
    // e) Escreva um programa que imprima no console o maior e o menor números contidos no array original

imprimirValores()
imprimirValoresDivididosPor10()
imprimirNumerosPares()
imprimirElementosFormatados()
imprimirMaiorEMenorNumeros()

const array = [ 1, 2, 3, 6, 12, 24, 48, 96]

function imprimirValores(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}

function imprimirValoresDivididosPor10(array) {
    for (let i = 0; i < array.length; i++) {
      console.log(array[i] / 10);
    }
  }

function imprimirNumerosPares(array) {
let numerosPares = [];

for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
    numerosPares.push(array[i]);
    }
}
console.log(numerosPares);
}
  
function imprimirElementosFormatados(array) {
    let elementosFormatados = [];
  
    for (let i = 0; i < array.length; i++) {
      let mensagem = `O elemento do índex ${i} é: ${array[i]}`;
      elementosFormatados.push(mensagem);
    }
  
    console.log(elementosFormatados);
}
  
function imprimirMaiorEMenorNumeros(array) {
let maior = array[0];
let menor = array[0];

for (let i = 1; i < array.length; i++) {
    if (array[i] > maior) {
    maior = array[i];
    }

    if (array[i] < menor) {
    menor = array[i];
    }
}

console.log("Maior número:", maior);
console.log("Menor número:", menor);
}  
      
    //Desafios

    // 1. Neste exercício vocês vão implementar uma brincadeira muito simples: "Adivinhe o número que estou pensando". Ele deve ser jogado entre duas pessoas. 
    
    // Inicialmente, uma das pessoas insere qual o número em que ela pensou. A outra pessoa tem que ficar chutando até acertar em cheio o número. Esta é uma tarefa difícil, então quem escolheu o número fica dando umas dicas para a outra pessoa, indicando se o número que ela pensou é maior ou menor do que o chute em si. Veja, abaixo, um exemplo de partida:,Vamos jogar!

    // O número chutado foi: 3
    // Errrrrrrrou, é maior
    // O número chutado foi: 18
    // Errrrrrrrou, é menor
    // O número chutado foi: 15
    // Errrrrrrrou, é menor
    // O número chutado foi: 11
    // Acertou!!
    // O número de tentativas foi: 4 
    // Um resumo das funcionalidades são:

    // a) Solicitar que o primeiro jogador escolha um número, através do `prompt`. Neste momento, deve-se imprimir no console a mensagem `Vamos jogar!`
    // b) A partir daí, será solicitado, ao segundo jogador, que ele chute os números até acertar, através do `prompt`. A cada chute, deve ser informado no console:
    // - O número chutado, com a mensagem: `O número chutado foi: <número>`
    // - Uma mensagem dizendo se o número escolhido é maior ou menor do que o número chutado: `Errou. O número escolhido é maior/menor`
    // c) Quando o segundo jogador acertar o número escolhido pelo primeiro jogador, deve ser impressa a mensagem: `Acertou` ; e, embaixo, `O número de tentativas foi : <quantos chutes o usuário deu>`    

console.log("Vamos jogar!");

let numeroEscolhido = Number(prompt("Jogador 1, escolha um número:"));

let tentativas = 0;

function verificarChute(chute) {
  tentativas++;

  console.log("O número chutado foi: " + chute);

  if (chute === numeroEscolhido) {
    console.log("Acertou!!");
    console.log("O número de tentativas foi: " + tentativas);

  } else if (chute < numeroEscolhido) {
    console.log("Errou, o número escolhido é maior");
    let novoChute = parseInt(prompt("Tente novamente:"));
    verificarChute(novoChute);

  } else {
    console.log("Errou, o número escolhido é menor");
    let novoChute = parseInt(prompt("Tente novamente:"));
    verificarChute(novoChute);

  }
}

let chuteInicial = Number(prompt("Jogador 2, chute um número:"));
verificarChute(chuteInicial);



