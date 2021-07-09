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

class Carro {
    private velocidadeAtual: number = 0

    constructor(
        public marca: string,
        public modelo: string,
        private velocidadeMaxima: number
    ) { }

    private alterarVelocidade(velocidade: number) {
        const novaVelocidade = this.velocidadeAtual + velocidade
        if (novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMaxima) {
            this.velocidadeAtual = novaVelocidade
        } else {
            this.velocidadeAtual = velocidade > 0 ? this.velocidadeMaxima : 0
        }
    }

    acelerar() {
        this.alterarVelocidade(25)    
    }

    frear() {
        this.alterarVelocidade(-5)
    }
}

const carro = new Carro('Ferrari', 'F250', 340);
carro.acelerar()
carro.acelerar()
carro.acelerar()
carro.acelerar()
carro.acelerar()
carro.frear()


//Herança

class Ferrari extends Carro {
    private turbo = false
    constructor() {
        super('Ferrari', 'Maranello', 300)
    }

    ligarTurbo() {
        this.turbo = true
    }
}

const f1 = new Ferrari()
f1.acelerar()
f1.frear()
f1.ligarTurbo()