const ouroTotal = 75000
const membrosTripulacao = 9
const recompensaBaseLuffy = 3000000000
let aumentoRecompensa = 150000000
const bonusExperiencia = 500
const forcaTripulacao = 95


let ouroPorMembro = ouroTotal / membrosTripulacao
let restoDoOuro = ouroTotal%membrosTripulacao
let novaRecompensaLuffy = recompensaBaseLuffy + aumentoRecompensa
let poderLuffy = recompensaBaseLuffy * bonusExperiencia
aumentoRecompensa -= 50000000

/*console.log("O ouro por membro é",ouroPorMembro)
console.log("O resto do ouro é",restoDoOuro)
console.log("A nova recompensa do Luffy é",novaRecompensaLuffy)
console.log("O poder do Luffy temporariamente é",poderLuffy)
console.log("o aumento da recompensa agora é",aumentoRecompensa)*/


//parte 2 da dinamica
const forcaInimigo = 120
const chanceVitoria = 0.7
const limiteSeguranca = 0.8
const temAkumaNoMi = true
const inimigoTemHaki = true
const combateJusto = "sim"
const combateRapido = "sim"

let podeVencer = forcaTripulacao >= forcaInimigo
let riscoAlto = chanceVitoria < limiteSeguranca
let batalhaFacil = combateJusto == combateRapido
console.log("A força da tripulação é maior ou igual a força do inimigo?",podeVencer)
console.log("A chance de vitória é menor que o limite de segurança?",riscoAlto)
console.log("O combate justo é igual ao combate rápido?",batalhaFacil)
