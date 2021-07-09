interface  Usuario {
    nome: string,
    sobrenome: string,
    endereco?: string
}

function getUsuario(): Usuario {
    return {
        nome: 'Diego',
        sobrenome: 'Gomes'
    }
}

function setUsuario(usuario: Usuario) {
    //...
}