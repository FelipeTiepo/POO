import { Personagem } from "./personagem.js"

export class Arqueiro extends Personagem{
    destreza
    maestria
    static tipo = 'Arqueiro'


    constructor(nome, level, inteligencia, destreza, maestria){
        super(nome, level, inteligencia)
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