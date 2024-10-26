let listaProdutos = [];

async function carregarProdutos() {
    const url = 'https://tech4japa.fly.dev/produtos';
  
      const response = await fetch(url);
      const produtos = await response.json();
  
      const meusProdutos = produtos.filter(produto => produto.restaurante === 'Hanabi - Sushi Bar');
      await obterTodosProdutos(meusProdutos);
      
      exibirProdutos(listaProdutos);

  }

  async function obterTodosProdutos(produtos) {
    for (const produto of produtos) {
      console.log(produto);
      const url = `https://tech4japa.fly.dev/produtos/${produto.id}`;
      const response = await fetch(url);
      const p = await response.json();
      console.log(p);
      listaProdutos.push(p);
    }

  }

  function exibirProdutos(produtos) {
    const cardPlace = document.querySelector('.cardplace'); 
    cardPlace.innerHTML = ''; 
  
    produtos.forEach(produto => {
      const card = `
        <div class="card" style="width: 16rem;">
          <img src="${produto.imagem}" class="card-img-top" alt="${produto.nome}">
          <div class="card-body">
            <h5 class="card-title">${produto.nome}</h5>
            <p class="card-text">${produto.descricao}</p>
            <a href="detalhes.html?id=${produto.id}" class="btn btn-outline-light rounded-5">Compre Agora!</a>
          </div>
        </div>
      `;
      cardPlace.innerHTML += card;
    });
}

  carregarProdutos();