
import { Personagem } from "./modules/personagem.js"
import { PersonagemView } from "./components/personagem-view.js"
import { Mago } from "./modules/mago.js"
import { Arqueiro } from "./modules/arqueiro.js"
import { ArqueiroMago } from "./modules/arqueiro-mago.js"

const magaDani = new Mago('Dani', 5, 'gelo', 6, 7)
const arqueiroAntonio = new Arqueiro('Antonio', 10, 7, 9, 15)
const ArqueiroMagoFelipe = new ArqueiroMago('Felipe', 100, 10,  'Ar', 8, 7, 11,)

const personagens = [magaDani, arqueiroAntonio, ArqueiroMagoFelipe]

new PersonagemView(personagens).render()
