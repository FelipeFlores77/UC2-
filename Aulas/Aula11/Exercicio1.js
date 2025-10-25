/*let condicao1 = true

if(condicao1){
    //Como o valor da condição é true,
    //o código desse bloco é executado
    console.log('Entrei no if 1!')
}


let condicao2 = false
if(condicao2){
    //Como o valor é false,
    //o código desse bloco nao é executado
    console.log('Entrei no if 2!')
}

let num1 = Number(prompt("Digite um numero"))
let num2 = Number(prompt("Digite outro numero"))
if(num1===num2){
    console.log("Os numeros são iguais.")
}

let num1 = Number(prompt("Digite um numero"))
let num2 = Number(prompt("Digite outro numero"))
if(num1===num2){
console.log("Sao iguais.")
} else{
    console.log("São diferentes.")
}

const num1 = Number(prompt("Digite um numero."))
const num2 = Number(prompt("Digite outro numero."))
if(num1 > num2){
    console.log("É maior.")
}else if(num1 === num2){
    console.log("É igual.")
}else if(num1 < num2){
    console.log("É menor.")
}else{
    console.log("Nenhuma das alternativas sao verdadeiras.")
}
 
let paisOrigem = prompt("Digite seu pais de origem")

switch(paisOrigem.toLowerCase()){
    case 'Brasil' :
        console.log("Nacionalidade brasileira.")
        break
        case 'EUA' :
            console.log("Nacionalidade americana.")
            break
            case 'India' :
                console.log("Nacionalidade indiana.")
                break
                default :
                console.log("Nacionalidade não encontrada.")
                break}
                
let pokemon = prompt("Escolha um pokemon entre Bulbassaur, Charmander e Squirtle.")

switch(pokemon.toLowerCase()){
case 'bulbassaur' :
    console.log("O tipo do seu pokemon é de planta e veneno")
    break
case 'charmander' :
        console.log("O tipo do seu pokemon é de fogo.")
    break
case 'squirtle' :
    console.log("O tipo do seu pokemon é de agua.")
    break
default :
    console.log("Seu pokemon não foi encontrado.")
    break
}

let harryPoter = prompt("Me fale um personagem de Harry Poter.")

switch(harryPoter.toLowerCase()){
    case 'hermione' :
        console.log("Sua casa é a Grifinória.")
        break
        case 'harry poter' :
        console.log("Sua casa é a Grifinória.")
        break
        case 'rony weasley' :
        console.log("Sua casa é a Grifinória.")
        break
        case 'gina weasley' :
        console.log("Sua casa é a Grifinória.")
        break
        case 'fred weasley' :
        console.log("Sua casa é a Grifinória.")
        break
        case 'jorge weasley' :
        console.log("Sua casa é a Grifinória.")
        break
        case 'percy weasley' :
        console.log("Sua casa é a Grifinória.")
        break
        case 'neville longbottom' :
        console.log("Sua casa é a Grifinória.")
        break
        case 'lílian evans potter' :
            console.log("Sua casa é a Grifinória.")
            break 
            case 'tiago potter':
        console.log("Sua casa é a Grifinória.")
        break
   case 'ana' :
console.log("Sua casa é a Lufa-lufa.")
break
   case 'luna' :
    console.log("Sua casa é a Corvinal.")
    break
    case 'narcisa' :
        console.log("Sua casa é a Sonserina.")
        break
default :
console.log("Este aluna(o) nao esta definido.")
}

const ensino = prompt("Você terminou o ensino médio?").toLowerCase()==='sim'
const idade = Number(prompt("Quantos anos voce tem?")) >=18
let faculdade = prompt("Voce esta cursando outra faculdade?").toLowerCase() === 'sim'

if(ensino&&!faculdade) {
    console.log("Você pod estudar nessa faculdade")    
}else{
    console.log("Você não pode estudar nessa faculade")
}

const respostaDoUsuario = prompt("Digite o numero que voce quer testar")
const numero = Number(respostaDoUsuario)
if (numero % 2 === 0) {
    console.log("Passou no teste")
}else {
    console.log("Nao passou no teste")
}
*/
/*
A.O código 
B.Para numeros iguais a 2.
C.Para qualquer numero diferente de 2.


let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
    case "Laranja":
        preco = 3.5
        break;
        case "Maçã":
            preco = 2.25
            break;
            case "Uva":
                preco = 0.30
                break;
                case "Pêra":
                    preco = 5.5
                    break; // BREAK PARA O ITEM c.
                    default :
                    preco = 5
                    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$", preco)

const numero = Number(prompt("Digite o primeiro numero."))

if(numero > 0) {
    console.log("Esse numero passou no teste")
    let mensagem = "Essa mensagem é secreta!!!"
}
console.log(mensagem)


let idadeUsuario = Number(prompt("Qual sua idade?"))
if(idadeUsuario >= 18){
    console.log("Você pode dirigir!!")
}else console.log("Você não pode dirigir, pois você é menor de idade!")
*/

let turno = prompt("Qual turno você estuda? M(Matutino), V(Vespertino), N(Noturno)")
switch (turno.toLowerCase) {
case "m":
break;
}

