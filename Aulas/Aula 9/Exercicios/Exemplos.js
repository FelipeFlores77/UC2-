const nome = "Felipe"
const idade = 16
//aspas duplas
const frase = "O meu nome é " + nome + " e minha idade é " + idade + " anos."

console.log(frase)
console.log("O tipo da variavel é",typeof frase,".")

const frase2 = 'O meu nome é ' + nome + ' e minha idade é ' + idade + 'anos.'
console.log(frase2)
console.log("O tipo da variavel é",typeof frase2,".")

const frase3 = `O meu nome é ${nome} e minha idade é ${idade}`
console.log(frase3)
console.log("O tipo da variavel é",typeof frase3,".")
 
//Exemplos de arrays
const listaDeCompras = ["Abacate","Banana","Tomate"]
console.log(listaDeCompras[1])