let velocidadeMadeira = 25
let velocidadePedra = 50
let velocidadeFerro = 75
let velocidadeDiamente = 100

let blocoMinerar1 = "Madeira"
let blocoMinerar2 = "Pedra"
let blocoMinerar3 = "Minério de diamante"
let blocoMinerar4 = "Obsidiana"
//if é uma condição (se),console.log para imprimir.
 if(blocoMinerar1) {
    console.log("Qualquer ferramenta funciona, mas a picareta de madeira é a mais simples , Velocidade", velocidadeMadeira,"!")
 }
if(blocoMinerar2) {
    console.log("Picareta de Ferro ou Pedra é o ideal, velocidade da picareta de ferro = ",velocidadeFerro,",velocidade da picareta de pedra = ",velocidadePedra, "!")
}
if(blocoMinerar3){
    console.log("Use a picareta de diamante, velocidade", velocidadeDiamente,"!")
}
if(blocoMinerar4){
    console.log("Use a picareta de diamante, velocidade", velocidadeDiamente,"!")
}
// else  significa se não, e novamente console.log para imprimir.
else{
    console.log("Qualquer ferramenta funciona, mas a de madeira é a mais simples.")
}


let danoEspada = 6
let forcaEncantamento = 1.5
let armaduraInimigo = 2 
let vidaInimiga = 20

let danoBruto = danoEspada * forcaEncantamento
let danoFinal = danoBruto - armaduraInimigo
vidaInimiga -= danoFinal
if(vidaInimiga <= 0){
    console.log("O Creeper foi derrotado! Você sobreviveu à explosão!")
}
else{
    console.log("O Creeper ainda está vivo com", vidaInimiga, "de vida. Corra!")
}


const temDiamantes = true
let nivelMesaCrafting = 2
const temGravetos = false
let temFerro = 10

if(temGravetos || nivelMesaCrafting <= 3, temDiamantes && temFerro >=8){
    console.log("Picareta de Diamante criada!Hora de buscar Obsidiana!")
}
else{
    console.log("Faltam recursos ou as condições de crafting não são atentidas!")}
