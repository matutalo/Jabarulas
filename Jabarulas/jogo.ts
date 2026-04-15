class Personagem{
    nome: string;
    classe: string;
    vida: number;
    constructor(nome: string, classe: string, vida: number) {
       this.nome = nome;
       this.classe = classe;
       this.vida = vida;
    }
    tomarDano() {

    }
    recuperarVida() {
            this.vida += (Math.random() * 20);
    }
}

const pTeste = new Personagem('Shrek', 'Ogro', 10);

console.log(Math.random() * 20)
console.log(pTeste.recuperarVida())