//Criar Personagem
let link = {
    nome: "Link",
    hp: 100,
    rupees: 300,
    armaEquipada: "Master Sword",
    inventario: ["Bumerangue", "Bomba", "Escudo", "Hylian", "Arco"],
    historicoAcoes: []
}

//Criar Dano das Armas
const danoMasterSword = 70
const danoBomba = 50
const danoBumerangue = 30

//Criar Função de Atacar
function atacar(inimigoNome, multiplicadorDano) {
    const danoCausado = danoMasterSword * multiplicadorDano
    const texto = `Link atacou ${inimigoNome} causando ${danoCausado}`
    link.historicoAcoes.push(`Link atacou ${inimigoNome} causando ${danoCausado}`)
    console.log(`Link atacou ${inimigoNome} causando ${danoCausado}`)
}
atacar("Octorok", 1)
atacar("Bokoblin", 1.5)

//Criar Função de Compra
let comprar = function (custo) {
    if (link.rupees >= custo) {
        link.rupees -= custo
        link.inventario.push("Poção de vida")
        link.historicoAcoes.push(`Link comprou uma poção de vida por ${custo} rupees!,agora restam ${link.rupees} rupees.`)
        console.log(`Link comprou uma poção de vida por ${custo} rupees!,agora restam ${link.rupees} rupees.`)
    }
    else {
        console.log("Link nao possui rupees suficientes!")
    }
}
comprar(120)

//Criar a Função de Curar
const valorCuraPocao = 50
function curar() {
    if (link.inventario.includes("Poção de vida") && link.hp < 100) {
        const valorCuraPocao = 50
        link.hp += valorCuraPocao
        link.inventario.splice(5, 1)
        link.historicoAcoes.push(`Link usou uma Poção de Cura!, Agora esta com ${link.hp} HP.`)
        console.log(`Link usou uma Poção de Cura!, Agora esta com ${link.hp} HP.`)
    }
    else {
        console.log("Não tem poção ou HP já está cheio!")
    }
}
curar()

//Crie a Função verificarInventario
function verificarInventario() {
    for (let i = 0; i < link.inventario.length; i++){
        let itemAtual = link.inventario[i]
    console.log(`Item encontrado no inventário: ${itemAtual}`)
    if(itemAtual === "Bomba"){
        console.log("Cuidado! Bomba encontrada!")
    }
  }
}
verificarInventario()

//Crie uma função verificarStatus
function verificarStatus(){
    console.log("Nome:",link.nome)
    console.log("HP atual:",link.hp)
    console.log("Rupees atualmente:",link.rupees)
    console.log("Arma equipada:",link.armaEquipada)
    console.log("Inventário:",link.inventario.join(","))
    console.log("Histórico de ações:",link.historicoAcoes.join(","))
}
verificarStatus()

//Crie a Função entrarCaverna
function entrarCaverna(nivel){
    if(link.armaEquipada === "Master Sword" || nivel <= 5){
        console.log("Você conseguiu entrar na caverna!!")
    }
    else{
        console.log("Você não conseguiu entrar na caverna.")
    }
}
entrarCaverna(8)
entrarCaverna(4)