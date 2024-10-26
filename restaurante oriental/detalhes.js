// Card
const url = new URLSearchParams(window.location.search);
const id = url.get('id');

const endereco = `http://tech4japa.fly.dev/produtos/${id}`;

const exibirProdutos = async () =>{
    const promise = await fetch(endereco);
    const produto = await promise.json();
    const cardPlace = document.getElementById('produto'); 


    const card = `
        <div class="card">
          <img src="${produto.imagem}" class="card-img-top" alt="${produto.nome}">
          <div class="card-body">
            <h5 class="card-title">${produto.nome}</h5>
            <p class="card-text">${produto.descricao}</p>
          </div>
        </div>
      `;
      cardPlace.innerHTML = card;


}

exibirProdutos();


// Formulario
function validarFormulario() {
  const emailCadastro = document.getElementById('email');
  const caixaTermos = document.getElementById('terms');
  const termsErro = document.getElementById('termsErro');
  let emailValue = emailCadastro.value.trim();

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

  if (emailValue === "") {
      emailValue = prompt("Por favor, insira seu e-mail:");
      if (!emailValue) {
          alert("Erro: E-mail é obrigatório.");
          return;
      }
      emailCadastro.value = emailValue;
  } else if (!emailPattern.test(emailValue) || emailValue.length < 10) {
      alert("Erro: Por favor, insira um e-mail válido com pelo menos 10 caracteres, incluindo '@' e '.' após.");
      return;
  }

  if (!caixaTermos.checked) {
      termosErro.style.display = "block";
      caixaTermos.style.backgroundColor = "#FFCCCC";
      return;
  } else {
      termosErro.style.display = "none";
      caixaTermos.style.backgroundColor = "";
  }

  alert(`E-mail "${emailValue}" cadastrado com sucesso!`);
}
