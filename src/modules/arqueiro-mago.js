import { Arqueiro } from "./arqueiro.js";
import { Mago } from "./mago.js";
import { Personagem } from "./personagem.js";

export class ArqueiroMago extends Personagem{
    ladoArqueiro 
    ladoMago
    static tipo = 'ArqueiroMago'
    static descricao = 'Detentor de lancas e flechas mágicas!'
    
    constructor(nome, destreza, elementoMagico, inteligencia, levelMagico, maestria){
        super(nome, inteligencia)
        this.ladoArqueiro = new Arqueiro(nome, inteligencia, destreza, maestria)
        this.ladoMago = new Mago(nome, inteligencia, elementoMagico, levelMagico)
        
    }

    obterInsignia(){
        return `${this.ladoArqueiro.obterInsignia()} e ${this.ladoMago.obterInsignia()}`
    }
}