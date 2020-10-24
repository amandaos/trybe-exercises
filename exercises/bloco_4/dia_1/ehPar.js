let a = 14;
let b = 19;
let c = 35;
let moduloa = (a % 2 == 0);
let modulob = (b % 2 == 0);
let moduloc = (c % 2 == 0);
let ehPar = false;

if (moduloa || modulob || moduloc){
    ehPar = true;
}
console.log(ehPar)