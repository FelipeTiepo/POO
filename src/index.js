
import { Personagem } from "./modules/personagem.js"
import { PersonagemView } from "./components/personagem-view.js"
import { Mago } from "./modules/mago.js"
import { Arqueiro } from "./modules/arqueiro.js"
import { ArqueiroMago } from "./modules/arqueiro-mago.js"
import { Guerreiro } from "./modules/guerreiro.js"

const magaDani = new Mago('Dani', 5, 'gelo', 6, 7)
const arqueiroAntonio = new Arqueiro('Antonio', 10, 7, 9, 15)
const arqueiroMagoFelipe = new ArqueiroMago('Felipe', 100, 10,  'Ar', 8, 7, 11,)
const guerreiroBreno = new Guerreiro('Breno', -2, 30)

const personagens = [magaDani, arqueiroAntonio, arqueiroMagoFelipe, guerreiroBreno]

new PersonagemView(personagens).render()
