import { Personagem } from "./personagem.js" 

export class Guerreiro extends Personagem{
    forca
    static tipo = 'Guerreiro'
    static descricao = 'Você será esmagado pela fúria do guerreiro!'


    constructor(nome, inteligencia, forca, descricao){
        super(nome, inteligencia, descricao)
        this.forca = forca
    }

    obterInsignia(){
        if(this.level >= 7){
            return `Guerreiro supremo`
        }
        return super.obterInsignia()
    }
}