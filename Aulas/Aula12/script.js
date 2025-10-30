/*let i = 0
while (i <=100){ //enquanto a condição for verdade ,que no caso éo i <= 9
    console.log("Loop", i)//executa o console.log
    i++//incrementa o iterardor
}
console.log("Chegou ao final do código.")

let estomago = 0
while (estomago <= 100){
    console.log("Quero comer mais coxinhas.",estomago)
    estomago += 10
}

let numero
let soma = 0

while (numero!== 0){
numero = Number(prompt("Digite um numero."))
soma += numero
}
console.log(`O resultado é: ${soma}`)

let c = 1

do{
    console.log("O valor de c é:", c)
    c++
}while(c <= 6)

for(let i = 0; i<=9; i++){
    console.log("O valor de I é:",i)
}

let meuArray = [10, 4, 7, 8, 200, 77]
)
for(let i= 0; i<6; i++{
    console.log(meuArray[i])
}

let array = [13, 22, 77, 57, 71, 55]
let maiornumero = 0 
for(let i= 0; i<6; i++){
if(array[i] > maiornumero){
maiornumero = array[i];
}
}console.log("O maior numero é:",maiornumero)

const meuArray = [11, 15, 18, 14, 12, 13]
let resultado = 0

for(let i= 0; i<6; i++){
    if(meuArray[i]%2 ===0){
        resultado += meuArray[i]}}
console.log("A soma dos numeros pares é ", resultado,".")

const numeros = [14,67, 89, 15, 23]

for(let numero of numeros) {
    console.log(numero)
}

let palavras = ["Oi","sumido,","tudo","bem?","Saudades"]
let frase = ""
for(let palavra of palavras){
    frase += palavra + " "
}
console.log(frase)

let valor = 0
for(let i = 0; i < 5; i++){//loop1 i =0, loop2 i =1, loop3 i = 2, loop4 i=3, Loop5 i=4,somando os valores de i
    valor += i
}
console.log(valor)//resulatdo 10

const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista){
    if (numero > 18){
        console.log(numero)
    }
}//vai ser impresso os numeros 19, 21, 23, 25, 27, 30.
//Poderiamos simplesmente"

const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
let quantidadeAtual = 0
while(quantidadeAtual < quantidadeTotal){
    let linha = ""
    for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
        linha += "*"
    }
    console.log(linha)
    quantidadeAtual++
}

let bichinho = Number(prompt("Quantos bichinhos voce tem?"))

if(bichinho === 0){
    console.log("Que pena!Você pode adotar um pet!")
} else {let nomes = []
    for(let i = 0; i < bichinho; i++){
    nomes.push(prompt("Digite o nome dos bichinhos."))
    }
}
console.log(nomes)

let arrayOriginal = [22, 777, 88, 4444, 7777, 8888]

//a
for(let numero of arrayOriginal){
console.log(numero)
}

//b
for(let numero of arrayOriginal){
        console.log(numero/10)}

//c
        let arrayPares = []
        for(let numero of arrayOriginal){if(numero%2===0){arrayPares.push(numero)}}
        console.log(arrayPares)

//d
        let arrayFrases = []
        for(let i=0;i<arrayOriginal.length;i++){
            arrayFrases.push("O elemento do index" + i +"é:" + arrayOriginal[i])
        }console.log(arrayFrases)

//e
        let maiorNumero = arrayOriginal[0] let menorNumero = arrayOriginal[0]
        for(let numero of arrayOriginal){if(numero>maiorNumero){maiorNumero=numero}
    else if(numero<menorNumero){menorNumero=numero}}
    console.log("menorNumero é:",menorNumero,"maiorNumero é:",maiorNumero)
    */
  /* 
   let contadoro = [1,2,3,4,5,6,7,8,9,10]
   for(numero of contadoro){
    console.log(numero)
}

contadoro = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
    for(let numero of contadoro)
        if(numero%2===0)
        console.log(contadoro)

        const taubauada = Number(prompt('Digite um numero'))
        for(let i=1;i<=10;i++){ 
            console.log(`${taubauada} x ${i} = ${taubauada * i}`)
        }
        
       let soma = 0
       for(let i = 0; i < 5; i++){
        const numeros = prompt("Digite um numero")
        
        const numero = Number(numeros)

        if()
       }*/
       let soma = 0
       for (let i = 0; i < 5; i++) {
         let numero = Number(prompt('Digite um numero:'))
         soma += (numero)
       }
       alert(`A soma dos 5 números é: ${soma}`)
       console.log("A soma dos números é", soma)