let a = 13;
let b = 19;
let c = 35;
let moduloa = (a % 2 != 0);
let modulob = (b % 2 != 0);
let moduloc = (c % 2 != 0);
let ehImpar = false;

if (moduloa || modulob || moduloc){
    ehImpar = true;
}
console.log(ehImpar)