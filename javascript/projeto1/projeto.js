// importa os livros do arquivo database.js
const livros = require('./database')

// importa a biblioeteca, para ler os inputs
const readline = require('readline-sync')

//Faz a pergunta inicial e captura a resposta
const input_inicial = readline.question('Deseja buscar um livro? (S/N)  ')

//Se a resposta for S, mostra todas as categorias disponíveis
//Se a resposta for N, mostra todos os livros, ordenados em ordem crescente pelo número de páginas (ou ordem alfabética)

// Se a resposta for S. Método uppercase para validar a resposta mesmo se for digitada diferente
if (input_inicial.toLocaleUpperCase() == 'S') {
    console.log('Essas são as categorias disponíveis: ')
    console.log('- Produtividade\n- História brasileira\n- Américas\n- Estilo de vida\n- Tecnologia')

    const input_categoria = readline.question('Escolha a categoria: ')

    // variável para armazenar apenas os livros cuja categoria sejam exatamente iguais aos que foi digitado pelo usuário.
    const retorno = livros.filter(livro => livro.categoria === input_categoria)

    // imprime bonitinho objetos em forma de tabela
    console.table(retorno)
} else if (input_inicial.toLocaleUpperCase() == 'N') { // Se a resposta for N
    // variável colocando em ordem alfabética
    //const ordem_livros = livros.sort((a,b) => a.nome.localeCompare(b.nome))
    // caso quisesse ordenar pelo número de páginas
     const ordem_livros = livros.sort((a, b)=> a.paginas - b.paginas)
    console.table(ordem_livros)
} else { // Se a resposta for inválida
    console.log(' Resposta inválida. Digite S para Sim ou N para Não.')
}