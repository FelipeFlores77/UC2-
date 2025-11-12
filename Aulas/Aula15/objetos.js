/*const professor = {
    nome:"Lucas",
    idade:33,
    email:'lucas.g.f.alves@gmail.com'
}
console.log("Nome:",professor.nome,",Idade:",professor.idade,",Email:",professor.email)
professor.idade = 21
console.log("Nova idade:",professor.idade)
professor.email = 'felipegallejr@gmail.com'
console.log("Novo email:",professor.email)

const filme = {
    direçao:'Rob Cohen',
    nome:'Velozes e furiosos 1',
    anoLancamento:2001,
    elenco:["Vin diesel","Paul Walker","Michelle Rodriguez","Jordana Brewster","Chad Lindberg"]
}
console.log(filme.direçao)
console.log(filme.nome)
console.log(filme["anoLancamento"])
console.log(filme["elenco"])
*/
const pessoa = {
    nome: "Bruno",
    idade: "20",
    generoMusicalPreferido: "Sertanejo"
}
console.log("O nome da pessoa é", pessoa.nome, "ela tem", pessoa.idade, "anos e gosta muito de", pessoa.generoMusicalPreferido, ".")
/*
const professores = [
    {nome:"Lucas",modulo:2},
    {nome:"Dal",modulo:1},
    {nome:"Valter",modulo:1}
]
console.log("O professor",professores[0].nome,"deu o modulo",professores[0].modulo,".")

filme.personagens = ["Toretto","Brian","Letty","Mia","Jesse"]
console.log(filme.personagens[0],"=",filme.elenco[0])
console.log(filme.personagens[1],"=",filme.elenco[1])
console.log(filme.personagens[2],"=",filme.elenco[2])
console.log(filme.personagens[3],"=",filme.elenco[3])
console.log(filme.personagens[4],"=",filme.elenco[4])
filme.elenco[0] = 'Xuxa'
console.log("Nome =",filme.nome,"Ano = ",filme.anoLancamento,"Direção = ",filme.direçao)
console.log(filme.personagens)
console.log(filme.elenco)

function novo(objeto) {
    const novoObjeto = {
        ...objeto,
        comidasFavoritas: ["Pizza", "Massa", "Xis", "Lasanha", "Churrasco completo"],
        melhorAmigo: {
            nomeMa: "Joice",
            idadeMa: 44
        }
    }
    console.log("O nome da pessoa é", novoObjeto.nome, "e suas comidas preferidas são ", novoObjeto.comidasFavoritas[0], ",", novoObjeto.comidasFavoritas[1], ",", novoObjeto.comidasFavoritas[2], ",", novoObjeto.comidasFavoritas[3], "e", novoObjeto.comidasFavoritas[4], ".Sua melhor amiga se chama", novoObjeto.melhorAmigo.nomeMa, "e ela tem", novoObjeto.melhorAmigo.idadeMa, "anos.")
}

novo(pessoa)

*/
let personagens = [
    { nome: "Naruto", idade: 12, estilo: "Vento", jutsus: ["Taijutsu,Ninjutsu"] },
    { nome: "Kakashi", idade: 26, estilo: "Raio", jutsus: ['Atemi', 'Chidori', 'Cilada'] },
    { nome: "Gaara", idade: 12, estilo: 'Areia', jutsus: ['Armadura de areia', 'Caixão de areia', 'Chuva de areia'] }
]

const novoPersonagem = {
nome: "Shikamaru Nara",idade: 12,classe:"Ninjutsu",jutsus: "Rajada de Leões"
}


let adicionarPersonagem = function (personagem) {
    personagens.push(personagem)
    console.log("Personagem",novoPersonagem.nome,"adicionado com sucesso.")
}
adicionarPersonagem(novoPersonagem)


function buscarPersonagem(nome) {
    const personagemEncontrado = personagens.find(
      (personagem) => personagem.nome.toLowerCase() === nome.toLowerCase()
    );
  
    if (personagemEncontrado) {
      return personagemEncontrado;
    } else {
      return `Personagem "${nome}" não encontrado.`;
      con
    }}