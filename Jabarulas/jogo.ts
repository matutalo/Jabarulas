// import * as readline from 'readline/promises';

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

const x = prompt("asdasds")
console.log("--->", x)

process.exit(0)



// classes boneco
class Personagem {
    nome: string;
    // classe: 'mago' | 'guerreiro' | 'assassino' | 'tanque';
    HpAtual: number;
    HpMax: number;
    MP: number;
    forca: number;
    agilidade: number;

    constructor(nome: string, classe: string, HpMax: number, MP: number, forca: number, agilidade: number, HpAtual: number) {
        this.nome = nome;
        // this.classe = 'mago' || 'guerreiro' || 'assassino' || 'tanque';
        this.HpMax = HpMax;
        this.MP = MP;
        this.forca = forca;
        this.agilidade = agilidade;
        this.HpAtual = HpAtual * 0.5;
    }
    curar(quantidade: number): void {
        const curaAleatoria = Math.floor(Math.random() * (30 - 10 + 1)) + 10;
        this.HpAtual = Math.min(this.HpAtual + curaAleatoria, this.HpAtual);
        console.log(`\n✨ +${curaAleatoria} HP!`);
        console.log(`Status: ${this.nome} [${this.HpAtual}/${this.HpAtual} HP]\n`);
    }
    //funcao de dar dano
    // atacar(alvo: Inimigo) {
    //     console.log(`${this.nome} ataca ${alvo.nome}!`);
    //     const dano = this.forca;
    //     alvo.sofrerDano(dano);
    // }

    //funcao toamr dano
    sofrerDano(quantidade: number) {
        quantidade = 2 * (this.forca * 0.5);
        this.HpAtual -= quantidade;
        console.log(`${this.nome} perdeu ${quantidade} de HP. HP atual: ${this.HpMax}`);

        if (this.HpMax <= 0) {
            console.log(`${this.nome} foi derrotado!`);
        }
    }
}

// //classe inimigo
// class Inimigo extends Personagem {
//     constructor() {
//         super(
//             "monstro",
//             classes[Math.random() * 3],
//             Math.floor(Math.random() * 50) + 10,
//             10,
//             10,
//             1,
//             100
//         )
//     }
// }


const classes = ["mago", "guerreiro", "assassino", "tanque"];

const nome = await rl.question("digite o nome do seu herói: ")
console.log('Seja bem vindo, ${nome}! ')

const comando = Number(await rl.question("digite o que deseja fazer (1-atacar 2-curar) "))



const personagemTeste = new Personagem("Aurélio", "mago", 50, 30, 10, 10,100);
// const inimigoTeste = new Inimigo();


const foo = await rl.question("quem é o marola? ")

console.log('o marola é:', foo);


// import * as readline from 'readline';

// class Personagem {
//     nome: string;
//     classe: string;
//     hpAtual: number;
//     hpMax: number;
//     mp: number;
//     forca: number;
//     agilidade: number;

//     constructor(nome: string, classe: string, hpMax: number, mp: number, forca: number, agilidade: number) {
//         this.nome = nome;
//         this.classe = classe;
//         this.hpMax = hpMax;
//         this.hpAtual = hpMax * 0.5; // Começa com metade da vida
//         this.mp = mp;
//         this.forca = forca;
//         this.agilidade = agilidade;
//     }

//     curar(): void {
//         const curaAleatoria = Math.floor(Math.random() * (30 - 10 + 1)) + 10;
//         this.hpAtual = Math.min(this.hpAtual + curaAleatoria, this.hpMax);
//         console.log(`\ ${this.nome} curou +${curaAleatoria} HP!`);
//         console.log(`Status: [${this.hpAtual}/${this.hpMax} HP]\n`);
//     }

//     atacar(alvo: Personagem) {
//         console.log(`\n ${this.nome} ataca ${alvo.nome}!`);
//         alvo.sofrerDano(this.forca);
//     }

//     sofrerDano(quantidade: number) {
//         this.hpAtual -= quantidade;
//         console.log(` ${this.nome} perdeu ${quantidade} de HP. HP atual: ${this.hpAtual}`);
//         if (this.hpAtual <= 0) console.log(` ${this.nome} foi derrotado!`);
//     }
// }

// // Configuração do terminal
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// const heroi = new Personagem("Aurélio", "mago", 100, 30, 15, 10);
// const inimigo = new Personagem("Monstro", "guerreiro", 50, 10, 10, 5);

// console.log(`--- JOGO DE RPG ---`);
// console.log(`${heroi.nome} (${heroi.classe}) vs ${inimigo.nome}`);
// console.log(`Comandos: [1] Atacar | [2] Curar | [0] Sair`);

// rl.on('line', (input) => {
//     if (input === '1') {
//         heroi.atacar(inimigo);
//     } else if (input === '2') {
//         heroi.curar();
//     } else if (input === '0') {
//         rl.close();
//     } else {
//         console.log("Opção inválida!");
//     }
// });
