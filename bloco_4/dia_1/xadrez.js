let pecaXadrez = "Rei";

switch (pecaXadrez.toLowerCase()) {
    case "rainha":
        console.log("Rainha - Anda em diagonal e horizontel");
        break;
    case "rei":
        console.log("Rei - Anda qualquer direção");
        break;
    case "bispo":
        console.log("Bispo - Anda em iagonal");
        break;
    case "cavalo":
       console.log("Cavalo - Anda em L");
        break;
    case "torre":
        console.log("Torre - Anda em horizontal");
        break;
    case "peão":
        console.log("Peão - Anda uma casa -para frente");
        break;
    default:
        console.log("Peça inválida")
    break;
}