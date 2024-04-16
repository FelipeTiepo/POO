import { Arqueiro } from "./arqueiro.js";
import { Mago } from "./mago.js";
import { Personagem } from "./personagem.js";

export class ArqueiroMago extends Personagem{
    ladoArqueiro 
    ladoMago
    static tipo = 'ArqueiroMago'
    
    constructor(nome, level, destreza, elementoMagico, inteligencia, levelMagico, maestria){
        super(nome, level, inteligencia)
        this.ladoArqueiro = new Arqueiro(nome, level, inteligencia, destreza, maestria)
        this.ladoMago = new Mago(nome, level, inteligencia, elementoMagico, levelMagico)
        
    }

    obterInsignia(){
        return `${this.ladoArqueiro.obterInsignia()} e ${this.ladoMago.obterInsignia()}`
    }
}