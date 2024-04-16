
export class Personagem {
    nome
    vida = 100
    mana = 100
    level
    tipo
    descricao
    inteligencia

    constructor(nome, level, inteligencia) {
        this.nome = nome
        this.level = level
        this.inteligencia
    }

    obterInsignia() {
        if (this.level >= 5){
            return `Implacavel ${this.tipo}`
        }
        return `${this.tipo} iniciante`
    }
}
