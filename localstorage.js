document.addEventListener("DOMContentLoaded", function () {
    const inputItem = document.getElementById("input-item");
    const adicionarBotao = document.getElementById("adicionar-botao");
    const lista = document.querySelector("ul");
    let listaDeCompras = JSON.parse(localStorage.getItem("listaDeCompras")) || [];
  
    // Renderizar itens da lista salvos no localStorage
    function renderizarLista() {
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
  
    // Salvar lista no localStorage
    function salvarLista() {
      localStorage.setItem("listaDeCompras", JSON.stringify(listaDeCompras));
    }
  
    // Inicializar renderização
    renderizarLista();
  });
  