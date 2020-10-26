const nota = 90;
let notaEmTexto = "";

if (nota < 0 || nota > 100) {
    notaEmTexto = "Nota inválida";
}else if (nota >= 90){
    notaEmTexto = "A";
}else if (nota >= 80){
    notaEmTexto = "B";
}else if (nota >= 70){
    notaEmTexto = "C";
}else if (nota >= 60){
    notaEmTexto = "D";
}else if (nota >= 50){
    notaEmTexto = "E";
}else {
    notaEmTexto = "F";
}
    
console.log(notaEmTexto);
// let nota = 90;

// if (nota < 0 || nota > 100) {
//     console.log("Nota inválida");
// }else if (nota >= 90){
//     console.log("A");
// }else if (nota >= 80){
//     console.log("B");
// }else if (nota >= 70){
//     console.log("C");
// }else if (nota >= 60){
//     console.log("D");
// }else if (nota >= 50){
//     console.log("E");
// }else {
//     console.log("F");
// }
    