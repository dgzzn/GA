/*
var nome = "Diego"
var azarado = false

if (azarado) {
    console.log("Sim, o "+ nome + " é muito azarado")
} else {
    console.log("Não inventa. O " + nome + " é muito azadado sim.")
}
 */

// class Game {
//     constructor(nome, genero, multiplayer) {
//         this.nome = nome;
//         this.genero = genero;
//         this.multiplayer = multiplayer;
//     }

//     jogo() {
//         return `Estou jogando ${this.nome}`;
//     }
// }

// class OtherGames extends Game {
//     constructor(nome, genero, multiplayer, coop){
//         super(nome, genero, multiplayer);
//         this.coop = coop;

//     }
// }

// let jogando = new Game('Warframe', 'Looter Shooter', 'Sim')
// console.log(jogando);
// console.log(jogando.genero)
// let testando = new OtherGames('Warframe', 'Looter Shooter', 'Sim', 'Sim');
// console.log(testando)

// class Pessoa {
//     constructor(nome, idade) {
//         this._nome = nome;
//         this._idade = idade;
//     }

//     get nome() {
//         return this._nome
//     }

//     get idade() {
//         return this._idade
//     }
// }

// let pessoa1 = new Pessoa('Diego', 25);
// console.log(pessoa1.nome)
// console.log(pessoa1.idade);

// function FizzBuzz(entrada) {
//     let num = entrada;
//     let fizz;
//     let buzz;
//     if (typeof entrada == 'number') {

//         if (num % 3 === 0 && num % 5 === 0) {
//             fizz = true
//             buzz = true
//         } else if (num % 3 === 0) {
//             fizz = true
//             buzz = false
//         }
//         else if (num % 5 === 0) {
//             buzz = true
//             fizz = false
//         } else {
//             fizz = false
//             buzz = false
//         }
//     } else {
//         console.log("Não é um número. ")
//     }

//     if(fizz && !buzz) {
//         return 'Fizz'
//     } else if (!fizz && buzz) {
//         return 'Buzz'
//     }  else if (fizz && buzz) {
//         return 'FizzBuzz'
//     }
//     else if(!fizz && !buzz) {
//         return entrada
//     }
// }

// console.log('Dívisivel por 3 = Fizz\nDivisível por 5 = Buzz\nDivisível por 3 e 5 = FizzBuzz\nDivisível por nenhum dos 2 = Próprio número')
// let resultado = FizzBuzz(15)
// console.log(resultado)

/* Crie um programa que me diga como lucrar nesta situação: 
quero vender uma bicicleta que 60% do seu valor é R$300, por quanto devo vendê-la para lucrar 25%? */
// console.log("Fazer o cálculo do lucro da venda da bicicleta.")

// var p60 = 300;
// var total = 30000/60;
// var lucro = total + (total*0.25)

// console.log(`A bicicleta custa ${total}. Para ter um lucro de 25%, você precisa vender a bicicleta por ${lucro}`)

/* Faça um programa que peça dois números e imprima no console a soma desses dois números. */

// var x = parseInt(window.prompt("Digite o primeiro número: "))
// var y = parseInt(window.prompt("Digite o segundo número: "))

// console.log("A soma dos dois números é: "+ (x+y))
        
/* Utilizando os conceitos que estudamos, vamos criar um programa que irá nos informar os dias de aula para a nossa turma. */       

// const fds = ["sábado", "domingo"]
// const semana = ["segunda", "terça", "quarta", "quinta", "sexta"]

// console.log("Dias de aula: ")
// for (x in semana) {
//     console.log(semana[x])
// }
// console.log("Não há aula nos dias: ")       
// for (y in fds) {
//     console.log(fds[y])
// }

/* Crie uma função que determina se um número é par ou impar. */

// var num = window.prompt("Digite um número: ")

// if (num % 2 == 0) {
//     console.log(`${num} é par.`)
// } else {
//     console.log(`${num} é ímpar. `)
// }

/* Faça um programa que dado um número, imprime no (console.log) a tabuada do mesmo de 1 a 10. */

// var num = window.prompt("Digite um número para a tabuada: ")
// console.log(`Tabuada de ${num}`)
// for (i = 1; i <= 10; i++) {
//     console.log(`${num} * ${i} = ${num*i}`)
// }
// console.log("Fim da tabuada.")

/* 	Imprima na tela os números pares existentes entre 0 e 100.. */

// for (i = 0; i <=100; i++ ) {
//     if (i % 2 == 0 ) {
//         console.log(i)
//     }
// }

/* fatorial */

// var num = window.prompt("Digite o número para calcular a fatorial: ")
// var fat = 1

// for (i = 1; i <= num; i++) {
//     fat = fat*i
    
// }
// console.log(fat)

//######################################



// function meuNome(idade) {
//     return idade >= 18 ? "Maior de idade." : "Menor de idade"
// }

// console.log(meuNome(11))

//#######################################
// Função em uma linha só, tipo lambda do python
// const warframe = name => `Warframe: ${name}`

// console.log(warframe('Nidus Prime'))

//#######################################

