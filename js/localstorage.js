// listaDeCompras.js

// Função para renderizar a lista de compras
export function renderizarLista(lista, listaDeCompras) {
  lista.innerHTML = `
      <h2>Lista de compras</h2>
      <hr />
  `;

  listaDeCompras.forEach((item, index) => {
      const li = document.createElement("li");
      li.innerHTML = `
          <div class="item-lista-container">
              <div class="container-nome-compra">
                  <div class="checkbox-container">
                      <label>
                          <input type="checkbox" class="checkbox-input" ${item.checked ? "checked" : ""} data-index="${index}" />
                          <div class="checkbox-customizado ${item.checked ? "checked" : ""}"></div>
                      </label>
                  </div>
                  <p>${item.nome}</p>
              </div>
              <div>
                  <button class="botao-acao delete" data-index="${index}">
                      <img src="./img/delete.svg" alt="Deletar">
                  </button>
                  <button class="botao-acao edit" data-index="${index}">
                      <img src="./img/edit.svg" alt="Editar">
                  </button>
              </div>
          </div>
          <p class="item-lista-texto">${item.data}</p>
      `;
      lista.appendChild(li);
  });
}

// Função para salvar a lista no localStorage
export function salvarLista(listaDeCompras) {
  localStorage.setItem("listaDeCompras", JSON.stringify(listaDeCompras));
}

// Função principal para inicializar a lista de compras
export function inicializarListaDeCompras() {
  document.addEventListener("DOMContentLoaded", function () {
      const inputItem = document.getElementById("input-item");
      const adicionarBotao = document.getElementById("adicionar-botao");
      const lista = document.querySelector("ul");
      let listaDeCompras = JSON.parse(localStorage.getItem("listaDeCompras")) || [];
    
      renderizarLista(lista, listaDeCompras);
  });
}
