/*let nome = prompt("Qual seu nome?")
let corFavroita = prompt("Qual sua cor favorita?")

//aspas duplas
console.log("A cor favorita de",nome,"é",corFavroita,".")

//aspas simples com concatenação
console.log('A cor favorita de ' + nome + ' é '+ corFavroita + ' .')

//templete
console.log(`A cor favorita de ${nome} é ${corFavroita} .`)

//length é usado para saber quantos caracteres tem a frase (espaços sao contados).
console.log(nome.length)


//metodo toLowerCase,para passar a frase para minusculo.
const fraseMaiuscula1 = "OPAAAaAaAaASkndfSKfsSgKgsSgKgS"
const fraseMiniscula1 = fraseMaiuscula1.toLowerCase()
console.log(fraseMaiuscula1)
console.log(fraseMiniscula1)


//metodo toUpperCase,para passar a frase para maiusculo.
const fraseMinuscula2 = "qvss grzd"
const fraseMaiuscula2 = fraseMinuscula2.toUpperCase()
console.log(fraseMaiuscula2)
console.log(fraseMinuscula2)


//trim,usado para remover espaços das frases(retira os espaços do começo e fim da frase ou variavel).
const nome = " Felipe Flores Galle "
console.log(nome.trim())

//includes,para achar palavras ou frases especificas no texto.(true tem a palavra ou frase no texto,false nao tem a palavra ou frase no texto)
const fraseCenoura = "Hoje comi cenoura,adoro cenoura"
console.log(fraseCenoura.includes("cenoura"))
console.log(fraseCenoura.includes("batata"))

//replaceAll,muda palavras de uma frase(tipo abaixo foi trocado a palavra cenoura por batata).
const novaFrase = fraseCenoura.replaceAll("cenoura", "batata")
console.log(novaFrase)

let fraseUsuario = prompt("Escreva uma frase")

console.log(fraseUsuario.toUpperCase())
console.log(fraseUsuario.replaceAll("o", "i"))
console.log("O tamanho da frase é",fraseUsuario.length,"letras.")


const raças = ["rottweiler","pinscher","labrador","pastoralemao","pitbull"]
const posicao = prompt("Insira um numero de 0 a 4")
console.log(raças[posicao])

const pokemon = ["bulbasauro","squirtle", "charmander", "screptile"]
console.log(pokemon.length)

const seriesBoas = ["Vikings", "The Big Bang Theory"]
console.log(seriesBoas.includes("Vikings"),seriesBoas.includes("GOT"))

const numeros = [1,2,3]
numeros.push(4)
console.log(numeros)

numeros.push(5,6,7)
console.log(numeros)

const meusPeixes = ["palhaço", "mandarim", "esturjão"]
meusPeixes.pop(meusPeixes)
console.log(meusPeixes)

meusPeixes.pop(meusPeixes)
console.log(meusPeixes)


const letras = [ "A","B","C","D","E","F","G","H"]
letras.splice(1,7)
console.log(letras)

const numeros = [1,2,3,4,5,6]
console.log("O tamanho do array é de ",numeros.length,"numeros.")
numeros.push("7")
numeros.splice(3,2)
console.log("O tamanho do array é de",numeros.length,"numeros.")
console.log("Os numeros que estao no array atualmente são =",numeros)
*/
/*
let array
console.log('a. ',array)
// a. undefined,pois nao fui atribuido nada a array. 
array = null
console.log('b. ',array)
// b. null,pois foi atribuido nulo a array.
array = [3,4,5,6,7,8,9,10,11,12,13]
console.log('c. ',array.length)
// c. 11,ira imprimir o tamanho da array,pois foi usado do comando (length) 
let i = 0
console.log('d. ',array[i])
// d. 3,aqui ira imprimir a array e o numero corespondente ao indice "i" que é 3.
array[i+1] = 19
console.log('e ',array)
// e. 3,19,5,6,7,8,9,10,11,12,13,ira imprimir a nova array substituindo 4 por 19.
const valor = array[i+6]
console.log('f. ',valor)
// f. 9,vai imprimir 9 pois o "i" é o indice 0(quem esta no indice 0 é o numero 3),pulando 6 casas chegara no 9 cujo indice é 6.
*/

/*const frase = prompt("Digite uma frase")
console.log(frase.toUpperCase().replace.All("A","I"), frase.length)
//SUBI NUM ÔNIBUS EM MIRROCOS,27


let nome = prompt("Qual seu nome?")
let email = prompt("Qual seu email?")

console.log("O email",` ${email} `,"foi cadastrado com sucesso.Seja bem vinda(o)",` ${nome} `,".")
*/
/*
let comidasFavoritas = ["Lasanha","Churrasco","Panqueca","Strogonoff","Pizza"]
console.log(comidasFavoritas)
console.log("Essas são minhas comidas preferidas")
console.log(comidasFavoritas[0])
console.log(comidasFavoritas[1])
console.log(comidasFavoritas[2])
console.log(comidasFavoritas[3])
console.log(comidasFavoritas[4])

let comidasFavoritaUsuario = prompt("Me fale sua comida favorita.")
comidasFavoritas = ["Lasanha",comidasFavoritaUsuario,"Panqueca","Strogonoff","Pizza"]
console.log(comidasFavoritas)
*/
/*
let atividade1 = prompt("Me fale uma atividade que voce precisa realizar no seu dia.")
let atividade2 = prompt("Me fale outra atividade que voce precisa realizar no seu dia")
let atividade3 = prompt("Me fale outra atividade que voce precisa realizar no seu dia")
let listaDeTarefas = [atividade1,atividade2,atividade3]
console.log(listaDeTarefas)
let indice = prompt("Digite o indice da tarefa que voce ja realizou hoje.")
listaDeTarefas.pop(indice)
console.log(listaDeTarefas)
*/

/*let frase = prompt("Me fale uma frase.")
let fraseEmPalvras = frase.split(" ")
console.log(fraseEmPalvras)
*/


let frutas = ["Bananas","Morango","Abacaxi","Laranaja","Ameixa"]
let indice = frutas.indexOf("Abacaxi")
console.log("O indice do Abacaxi é",indice,".")
console.log("O tamanho do array é",frutas.length,".")
