// class Data {
//     dia: number;
//     private mes: number;
//     public ano: number;

//     constructor(dia: number, mes: number, ano: number = 1970) { // é possível dar um valor padrão já para a variável ser iniciada
//         this.dia = dia;
//         this.mes = mes;
//         this.ano = ano;
//     }
// }

// const data = new Data(1, 1, 2021);
// console.log(data.dia) // por padrão, todas variáveis de classe são públicas
// //console.log(data.mes) // variável privada não pode ser acessada de fora da classe. Orientação a objeto clássica

// const data2 = new Data(1, 1) // Não precisa colocar a data com ela já iniciada no construtor 

// É possível declarar as variáveis no construtor
class Data { // precisa declarar o tipo (private/public) e ela já sai direto
    constructor(public dia: number, public mes: number, public ano: number) {

    }
}