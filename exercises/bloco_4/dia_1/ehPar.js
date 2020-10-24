let a = 13;
let b = 19;
let c = 35;
let moduloa = (a % 2 == 0);
let modulob = (b % 2 == 0);
let moduloc = (c % 2 == 0);

if (moduloa || modulob || moduloc){
    console.log("um dos três numeros é par");
} else {
    console.log("nenhum numero é par")
}