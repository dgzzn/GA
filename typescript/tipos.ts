//Tipo de váriável é sempre minúsculo (number, boolean, etc). Maiúsculo (Boolean, Number, Etc) é para interfaces
// Boolean
let isDone: boolean = true

// Number
let ano: number = 1995
let media: number = 7.5

// String
const nome: string = 'Margulis'

// Array
const idades: number[] = [16, 20, 35, 53]
const idades2: Array<number> = [15, 21, 36, 54] 

// Tuple
// Tuple vc falar quantos elementos e quais tipos vão ter no array. Vai acusar esse se vc por mais 
let jogadores: [string, string, string]
jogadores = ['Fulano', 'Ciclano', 'Beltrano']
//jogadores = ['Fulano', 'Ciclano', 12] //tipo diferente do que foi indicado dá erro
//jogadores = ['Fulano', 'Ciclano', 'Beltrano', 'Mascherano'] //Mais entradas do que foi indicado da erro

// Enum
enum statusAprovacao {
    Aprovado,
    Pendente,
    Rejeitado
}
const statusDaAprovacao: statusAprovacao = statusAprovacao.Aprovado;

// Any
// Quando não sabe qual vai ser o tipo do resultado
const retornoAPI: any[] = ['Nome', 10, true]
// const retornoAPI2: any {
//     // .....
// }

// Void
// Para funções. Indica que ela não retorna nada. O próprio typescript já identifica, mas é só pra deixar explícito msm.
// Se passar o mouse em cima do nome da função, mostra que é tipo void

function printScreen(msg: string): void {
    console.log(msg)
    //return 'memes'
}

// Null e Undefined
const u: undefined = undefined
const n: null = null

// Object
function criar(objeto: object) {
    // .....
}
//criar('Nome') // dá erro porque não aceita string, só objeto
criar({
    nome: 'Diego',
    idade: 25
})

// Never w/e

// Union types
// Quando a variável pode ser de mais de um tipo, sem ter que usar Any
const numero: string | number = 10
function exibirNota(nota: number | string) {
    console.log(`A sua nota é ${nota}`)
}
exibirNota(10)
exibirNota('10')

// Alias

type Funcionario = {
    nome: string,
    sobrenome: string,
    idade: number
}

const funcionarios: Funcionario[] = [{
    nome: 'Diego',
    sobrenome: 'Gomes',
    idade: 25
}]

function mostraFuncionario(funcionarios: Funcionario[]) {
    for (let funcionario of funcionarios) {
        console.log(funcionario.nome)
    }
}

// Variável opcional
// Usar um ? no final do nome da variável torna ela opcional
type Pessoa = {
    nome: string;
    sobrenome: string,
    idade?: number
}

const pessoa: Pessoa = {
    nome: 'Diego',
    sobrenome: 'Gomes',
    //Não preciso colocar a idade
    //idade: 25
}

// Type assertion
const idade: any = 23;
//console.log((idade as number).toString())
idade as number;   // mesma coisa 
<number>idade;    // as duas formas de fazer isso

