let personagens = [
    {nome: "Legulas", 
    classe: "Ranger",
    nivel: 12,
    pontosDeVida: 108,
    habilidades: ["Força","Carismo","Destrezo"],
    historicoDeAcoes: []},

    {nome: "Boromir",
    classe: "Fighter",
    nivel:11,
    pontosDeVida: 132,
    habilidades: ["Defesa com escudo","Ataque extra","Liderança em batalha"],
    historicoDeAcoes: []},

    {nome: "Gimli",
    classe: "Barbarian",
    nivel: 12,
    pontosDeVida: 148,
    habilidades: ["Pele grossa como pedra","Ataque poderoso","Tenacidade de ferro"], 
    historicoDeAcoes: []}
]

function atacar(atacador,alvo,dano){
alvo.pontosDeVida -= dano
const texto = atacador.nome + " atacou " + alvo.nome + " causando " + dano + " de dano."
atacador.historicoDeAcoes.push(texto)
atacador.toLowerCase()
alvo.toLowerCase()
console.log(texto)
}

function defender(perso) {
    const texto2 = personagem.nome + "se esta defendendo."
perso.historicoDeAcoes.push(texto2)
perso.toLowerCase()
console.log(texto2)
}

function usarHabilidade(personage, habilidade){
    if(!personage.habilidades.includes(habilidade)) {
    console.log(personage.nome + "não possui está habilidade!")
    personage.toLowerCase()
    return
    }
    const texto3 = personage.nome + "usou a " + habilidade + "."
    personage.historicoDeAcoes.push(texto3)
    console.log(texto3)
}
atacar("Legulas","gimli",22)
defender("Gimli")
usarHabilidade("Boromir","Liderança de batalha")
buscarPersonagem("legulas")
