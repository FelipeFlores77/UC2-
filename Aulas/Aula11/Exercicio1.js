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
                */
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
