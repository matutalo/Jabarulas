


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
