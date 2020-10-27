let numeroAsteriscos = 5;
let asterisco = "*";
let espacoEmBranco = " ";

for(let linhaAsteriscos = 1; linhaAsteriscos <= numeroAsteriscos; linhaAsteriscos += 2) {
  let repeticaoEspacoEmBranco = (numeroAsteriscos - linhaAsteriscos) / 2;
  let retornoEspacoEmBranco = espacoEmBranco.repeat(repeticaoEspacoEmBranco);
  let retornoAsterisco = asterisco.repeat(linhaAsteriscos);

  console.log(`${retornoEspacoEmBranco}${retornoAsterisco}`);
}