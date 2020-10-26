const a = 75;
const b = 332;
const c = 64;
let maiorNumero = 0;

if (a > b && a > c){
    maiorNumero = a;
} else if (b > a && b > c) {
    maiorNumero = b;
} else {
    maiorNumero = c;
}

console.log(maiorNumero + " É o maior número entre os três");
