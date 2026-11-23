// Faça o contador funcionar. Edite só este arquivo.
//
// TODO 1: mostre 0 no #total ao carregar a página.
// TODO 2: ao clicar em #somar, aumente 1 e atualize o #total.
// TODO 3: ao clicar em #zerar, volte para 0 e atualize o #total.
//
// Dica: document.querySelector("#total"), addEventListener("click", ...),
//       elemento.textContent = valor.

// escreva seu código aqui


const total = document.querySelector("#total");
const somar = document.querySelector("#somar");
const zerar = document.querySelector("#zerar");

let contador = 0;

// TODO 1: mostra 0 ao carregar
total.textContent = contador;

// TODO 2: soma 1 a cada clique
somar.addEventListener("click", () => {
  contador++;
  total.textContent = contador;
});

// TODO 3: volta para 0
zerar.addEventListener("click", () => {
  contador = 0;
  total.textContent = contador;
});
