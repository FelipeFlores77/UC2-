/*function imprimirOlaMundo(){
    console.log("Olá mundo!!")
}


imprimirOlaMundo();

function imprimirBemVindo(){
    console.log("Bem vindos turma 25-2N!")
}

imprimirBemVindo();

function calcularNumeros(){
    let resultado = 7 + 4
    console.log(`A soma é : ${resultado}`)
}

calcularNumeros();

function dobrarNumero(){
    let dobrar = 7 * 2
    console.log(`O dobro de 7 é : ${dobrar}`)
}

dobrarNumero();

function nomes(nome){
    console.log(`Olá ${nome}`)
}
    nomes("Felipe")
    nomes("Gabriel")
    nomes("Henrique")

    function soma(numero1,numero2){
        let resulatdo = numero1 + numero2
        console.log(resulatdo)
    }

    soma(7,7);


    function imprimirVariavel(){
const b = 2
console.log("A variavel a:",a)
console.log("A variavel b",b)

    }
    imprimirVariavel()

    console.log("A variavel")




    function calculaArea (altura,largura){
        let area = altura * largura
        return area
    }
    let resultadoArea = calculaArea(5,4)
    console.log(resultadoArea)
    console.log(calculaArea(5,4))

    
   function numeros(num1,num2){
    let soma = num1 + num2
    return soma
   }
   let reusltado = numeros(6,4)
   console.log(reusltado)


let arrayNumeros = [7,77,777,7777]
function divisao(array){
    let novoArray = []
    novoArray.push(array[0]/2)
    novoArray.push(array[array.length-1]/2)
    return novoArray
}
console.log(divisao(arrayNumeros));

let calcular = function(){
    let soma = 2 + 5
    console.log(`A soma dos numeros é: ${soma}`)
}
calcular();

let dobrar = () => {
    let dobro = 17 * 2
    console.log(`O dobro de 17 é: ${dobro}`)
}
dobrar();

function determinaMonstro(temPeleGelada, transformaComLuaCheia, brilhaAoSol, temSedeDeSangue){


if(temPeleGelada && temSedeDeSangue && !transformaComLuaCheia){
    return "Vampiro";
}else if(temPeleGelada && transformaComLuaCheia ){
return "Lobisomen";
}else {
    return "Humano";
}
}
console.log(determinaMonstro(true,false,false,true))
console.log(determinaMonstro(false,true,false,false))
console.log(determinaMonstro(true,true,false,false))

fc
//vai ser impresso os numeros 10 e 40.
//

//1
let infos = function(){
    console.log("Eu sou Felipe, tenho 16 anos, moro no Rio Grande do Sul e sou estudante.")
}
infos();

//2a
let soma = function(num1,num2){
    let resultado = num1 + num2
    console.log("O resultado da soma é:", resultado)
    return resultado
}
soma(3,5)
//2b
let numeros = function(num1,num2){
let maiorOuIgual = num1 >= num2
console.log("O primeiro numero é maior que o segundo?",maiorOuIgual)
return maiorOuIgual
}
numeros(5,5);
//2c
let numero = function(num1){
    let parOuNao = num1 % 2 === 0
    console.log("O numero é par?", parOuNao)
    return parOuNao
}
numero(2);
//2d
function mensagem(frase) {
    console.log("O tamanho da mensagem é:", mensagem.length)
    console.log("Mensagem em  letras maiúsculas:", mensagem.toUpperCase())
  }
  mensagem("Felipe Flores");
  
*/
  //3
  function soma(num1,num2){
    return num1 + num2
  }
  function subtracao(num1,num2){
    return num1 - num2
}
function multiplicacao(num1,num2){
    return num1 * num2
}
function divisao(num1,num2){
    return num1 / num2
}
let numero1 = Number(prompt("Insira um numero!"))
let numero2 = Number(prompt("Insira outro numero!"))
console.log("Numeros inseridos:",numero1,"e",numero2)
console.log(`Soma: ${soma(numero1,numero2)}`)
console.log(`Diferença: ${subtracao(numero1,numero2)}`)
console.log(`Multiplicação: ${multiplicacao(numero1,numero2)}`)
console.log(`Divisão: ${divisao(numero1,numero2)}`)

//desafio 

let parametro = (frase) => {
console.log(frase)
}

let arrowFunction = (valor1,valor2) => {
    let soma = valor1 + valor2
parametro(soma)
}

arrowFunction(2,3);
//*/  
//desafio 2

let adicionarItens = function(inventario,item){
}
adicionarItens([],)