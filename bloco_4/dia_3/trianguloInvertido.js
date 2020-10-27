let numeroAsteriscos = 5;
let asterisco = "*";
let espacoEmBranco = " ";

for(let linhaAsteriscos = 1; linhaAsteriscos <= numeroAsteriscos; linhaAsteriscos ++) {
  
  let retornoEspacoEmBranco = espacoEmBranco.repeat(numeroAsteriscos - linhaAsteriscos);
  let retornoAsterisco = asterisco.repeat(linhaAsteriscos);

  console.log(`${retornoEspacoEmBranco}${retornoAsterisco}`);
}