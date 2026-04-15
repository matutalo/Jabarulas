
class Personagem {

    nome: string;
    classe: string;
    HP: number;
    MP: number;
    forca: number;
    agilidade: number;
    constructor(nome: string, classe: string, HP: number, MP: number, forca: number, agilidade: number) {
        this.nome = nome;
        this.classe = classe;
        this.HP = HP;
        this.MP = MP;
        this.forca = forca;
        this.agilidade = agilidade;
    }

     atacar(alvo: Inimigo) {
        console.log(`${this.nome} ataca ${alvo.nome}!`);
        const dano = this.forca;
        alvo.sofrerDano(dano);
    }

    sofrerDano(quantidade: number) {
        quantidade = 2 * (this.forca * 0.5);
        this.HP -= quantidade;
        console.log(`${this.nome} perdeu ${quantidade} de HP. HP atual: ${this.HP}`);
        
        if (this.HP <= 0) {
            console.log(`${this.nome} foi derrotado!`);
        }
}
}
//classe inimigo
class Inimigo extends Personagem {
    constructor(){
     super(
     "monstro",
     classes[Math.random() * 3],
     Math.floor(Math.random() * 50) + 10, // HP aleatório
     10,
     10, 
     1
    )
}
}


const classes = ["mago", "guerreiro", "assassino", "tanque"];



const persoangemTeste = new Personagem('Aurélio', 'mago', 50, 30., 10, 10);
const inimigoTeste = new Inimigo();


