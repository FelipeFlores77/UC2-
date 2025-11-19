/*let matriz = [
    [1,2,3],
[4,5,6]
]
console.log(matriz[1][2])

let matriz1 = [
    [0,0,0],
    [0,0,0],
    [0,0,0]
]
matriz1[1][2] = 1 
console.log(matriz1[1][2])
console.log(matriz1)

for(let i=0; i<matriz1.length;i++){
    for(let j=0;j<matriz1.length;j++){
        console.log(matriz1[i][j]);
    }
}
*/
let matriz2 = [
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12],
    [13,14,15,16]
]
let soma = 0
for(let i=0; i<matriz2.length;i++){
    for(let j=0;j<matriz2.length;j++){
        console.log(matriz2[i][j]);
        soma += matriz2[i][j]
    }
}
console.log("Soma dos elementos",soma)
