/*var num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
num.sort()
num.push(10)

console.log(num);
console.log(`Nosso vetortem ${num.length} posições`);
console.log(num[7]);

let num = [1, 2, 3, 4, 5]

for(let i = 0; i < num.length; i++){
    console.log(`A posição do meu vetor é ${i} e o valor atribuido a ela é ${num[i]}`);
}
*/

let num = [1, 2, 3, 4, 5]

for(let pos in num){
    console.log(`A posição do meu vetor é ${pos} e o valor atribuido a ela é ${num[pos]}`);
}
let posicao = num.indexOf(3)
console.log(`O valor 3 esta na posição ${posicao}`)