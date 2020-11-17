function acrescentarEstado(e){
  let estados = document.querySelector("#estados");
  let uf = document.createElement("option");
  uf.value = e;
  uf.innerHTML = e;
  estados.appendChild(uf);
}


function consolidarDados(){
  let dados = selectDados();
  let divResumo = document.getElementById("dadosConsolidados");
  divResumo.innerHTML="";

  dados.forEach((e) => {
    let p = document.createElement("p");
    let span = document.createElement("span");
    p.classList.add("resumoP");
    span.classList.add("resumoSpan");

    span.innerHTML = e.name + ": ";

    p.appendChild(span);
    p.innerHTML += e.value;
    divResumo.appendChild(p);
  });
};

function selectDados() {
  let dados = [];

  let nome = document.getElementById("nome");
  let email = document.getElementById("email");
  let cpf = document.getElementById("cpf");
  let cidade = document.getElementById("cidade");
  let estados = document.getElementById("estados");
  let tipoResidencia = document.getElementById("tipo-residencia");

  let resumoCV = document.getElementById("resumo-curriculo");
  let cargo = document.getElementById("cargo");
  let descricaoCargo = document.getElementById("descricao");
  let dataInicio = document.querySelector('input[type="date"]');

  dados.push(nome, email, cpf, cidade, estados, tipoResidencia, resumoCV, cargo, descricaoCargo, dataInicio);

  return dados;
}

function limparForm(){
  let form = document.querySelector("form");
  form.reset();
}

function limparDiv(){
  let divApagar = document.getElementById("dadosConsolidados");
  divApagar.innerHTML = "";
}


window.onload = function () {
  let estadosArray = ["", "MG", "RJ", "RS", "SC", "PR", "SP", "ES", "MT", "MS", "GO", "TO", "DF","BA", "AL", "PE", "RN", "MA", "PI", "PB", "AP", "AC", "AM", "PA", "RR", "RO", "SE", "CE"];
  estadosArray.forEach(acrescentarEstado)

  document.getElementById("enviar").addEventListener("click", (e) => {
    e.preventDefault();
    consolidarDados();
  });

  let botaoRemoveTodos = document.getElementById("apaga");
  botaoRemoveTodos.onclick = () => {
    limparDiv();
    limparForm();
  };
}