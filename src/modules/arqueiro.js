import { Personagem } from "./personagem.js"

export class Arqueiro extends Personagem{
    destreza
    maestria
    static tipo = 'Arqueiro'
    static descricao = 'Você tem o meu arco!'


    constructor(nome, inteligencia, destreza, maestria, descricao){
        super(nome, inteligencia, descricao)
        this.destreza = destreza
        this.maestria = maestria
    }

    obterInsignia(){
        if(this.destreza >= 5 && this.maestria >= 5){
            return `Mestre do Arco`
        }
        return super.obterInsignia()
    }
}