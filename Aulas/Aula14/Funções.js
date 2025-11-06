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
*/
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