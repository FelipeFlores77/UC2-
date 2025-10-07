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
*/

let fraseUsuario = prompt("Escreva uma frase")

console.log(fraseUsuario.toUpperCase())
console.log(fraseUsuario.replaceAll("o", "i"))
console.log("O tamanho da frase é",fraseUsuario.length,"letras.")


