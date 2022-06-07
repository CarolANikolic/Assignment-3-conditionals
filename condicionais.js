/* Crie um programa que determine se um número é impar ou par
Dica do sucesso: todo número par é divisível por 2*/

let numero = 7491

if (numero % 2 == 0) {
console.log(`${numero} é par!`);
} else {
    console.log(`${numero} é impar!`);
}

/*Uma comerciante comprou alguns produtos e quer revender com lucro de 45% se o valor da compra foi menor que 20 reais. Caso contrário, o lucro será de 30%. O valor deve ser passado para o programa que deverá retornar o valor da venda.

Exemplo: 
produto: R$ 18,00 -> 18 * 45% -> O seu produto deve ser vendido por R$ 26,10
produto: R$ 21,00 -> 21 * 30% -> O seu produto deve ser vendido por R$ 27,30*/

let valorCompra = 40
let lucroQuarentaCinco = valorCompra * 45/100
let lucroTrinta = valorCompra * 30/100

if (valorCompra <= 20) {
   let valorVenda = valorCompra + lucroQuarentaCinco;
   console.log(`O seu produto deve ser vendido por R$${valorVenda}`);
} else {
    let valorVenda = valorCompra + lucroTrinta;
    console.log(`O seu produto deve ser vendido por R$${valorVenda}`);
}