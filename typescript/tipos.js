"use strict";
//Tipo de váriável é sempre minúsculo (number, boolean, etc). Maiúsculo (Boolean, Number, Etc) é para interfaces
// Boolean
var isDone = true;
// Number
var ano = 1995;
var media = 7.5;
// String
var nome = 'Margulis';
// Array
var idades = [16, 20, 35, 53];
var idades2 = [15, 21, 36, 54];
// Tuple
// Tuple vc falar quantos elementos e quais tipos vão ter no array. Vai acusar esse se vc por mais 
var jogadores;
jogadores = ['Fulano', 'Ciclano', 'Beltrano'];
//jogadores = ['Fulano', 'Ciclano', 12] //tipo diferente do que foi indicado dá erro
//jogadores = ['Fulano', 'Ciclano', 'Beltrano', 'Mascherano'] //Mais entradas do que foi indicado da erro
// Enum
var statusAprovacao;
(function (statusAprovacao) {
    statusAprovacao[statusAprovacao["Aprovado"] = 0] = "Aprovado";
    statusAprovacao[statusAprovacao["Pendente"] = 1] = "Pendente";
    statusAprovacao[statusAprovacao["Rejeitado"] = 2] = "Rejeitado";
})(statusAprovacao || (statusAprovacao = {}));
var statusDaAprovacao = statusAprovacao.Aprovado;
// Any
// Quando não sabe qual vai ser o tipo do resultado
var retornoAPI = ['Nome', 10, true];
// const retornoAPI2: any {
//     // .....
// }
// Void
// Para funções. Indica que ela não retorna nada. O próprio typescript já identifica, mas é só pra deixar explícito msm.
// Se passar o mouse em cima do nome da função, mostra que é tipo void
function printScreen(msg) {
    console.log(msg);
    //return 'memes'
}
// Null e Undefined
var u = undefined;
var n = null;
// Object
function criar(objeto) {
    // .....
}
//criar('Nome') // dá erro porque não aceita string, só objeto
criar({
    nome: 'Diego',
    idade: 25
});
// Never w/e
// Union types
// Quando a variável pode ser de mais de um tipo, sem ter que usar Any
var numero = 10;
function exibirNota(nota) {
    console.log("A sua nota \u00E9 " + nota);
}
exibirNota(10);
exibirNota('10');
var funcionarios = [{
        nome: 'Diego',
        sobrenome: 'Gomes',
        idade: 25
    }];
function mostraFuncionario(funcionarios) {
    for (var _i = 0, funcionarios_1 = funcionarios; _i < funcionarios_1.length; _i++) {
        var funcionario = funcionarios_1[_i];
        console.log(funcionario.nome);
    }
}
var pessoa = {
    nome: 'Diego',
    sobrenome: 'Gomes',
    //Não preciso colocar a idade
    //idade: 25
};
// Type assertion
var idade = 23;
//console.log((idade as number).toString())
idade; // mesma coisa 
idade; // as duas formas de fazer isso
