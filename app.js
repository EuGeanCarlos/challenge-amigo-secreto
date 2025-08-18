// aqui eu criei uma lista vazia para guardar os amigos que eu vou adicionar
let amigos = [];

// aqui eu fiz a função para adicionar um amigo
function adicionarAmigo() {
  // aqui eu peguei o campo de input pelo id
  let input = document.getElementById("amigo");

  // aqui eu peguei o valor que a pessoa digitou e tirei os espaços extras
  let nome = input.value.trim();

  // aqui eu verifiquei se o nome está vazio, se sim eu mostro um alerta
  if (nome === "") {
    alert("por favor, insira um nome válido!");
    return; // aqui eu parei a função se não tiver nome
  }

  // aqui eu coloquei o nome dentro da lista de amigos
  amigos.push(nome);

  // aqui eu chamei a função para atualizar a lista na tela
  atualizarLista();

  // aqui eu limpei o campo do input depois que adiciono o nome
  input.value = "";

  // aqui eu deixo o cursor de volta no input para já poder digitar o próximo
  input.focus();
}

// aqui eu criei a função para atualizar a lista de amigos na tela
function atualizarLista() {
  // aqui eu peguei a <ul> que tem o id "listaAmigos"
  let lista = document.getElementById("listaAmigos");

  // aqui eu limpei a lista para não ficar duplicado
  lista.innerHTML = "";

  // aqui eu usei um for para passar por todos os nomes da lista amigos
  for (let i = 0; i < amigos.length; i++) {
    // aqui eu criei um item da lista (li)
    let li = document.createElement("li");

    // aqui eu coloquei o nome do amigo dentro do li
    li.textContent = amigos[i];

    // aqui eu criei um botão para remover o amigo
    let botao = document.createElement("button");
    botao.textContent = "❌"; // coloquei o x para excluir
    botao.className = "remove-button"; // aqui eu dei uma classe para poder estilizar no CSS

    // aqui eu fiz o botão chamar a função removerAmigo passando a posição do amigo
    botao.onclick = function () {
      removerAmigo(i);
    };

    // aqui eu coloquei o botão dentro do li
    li.appendChild(botao);

    // aqui eu coloquei o li dentro da lista (ul)
    lista.appendChild(li);
  }
}

// aqui eu criei a função para remover um amigo
function removerAmigo(i) {
  // aqui eu usei splice para tirar o amigo que está na posição i
  amigos.splice(i, 1);

  // aqui eu chamei de novo a função para atualizar a lista na tela
  atualizarLista();
}

// aqui eu criei a função para sortear um amigo
function sortearAmigo() {
  // aqui eu verifiquei se não tem nenhum amigo, se não tiver eu mostro um alerta
  if (amigos.length === 0) {
    alert("Adicione pelo menos um nome para sortear!");
    return; // aqui eu parei a função
  }

  // aqui eu peguei um número aleatório de 0 até o tamanho da lista de amigos
  let indice = Math.floor(Math.random() * amigos.length);

  // aqui eu escolhi o amigo sorteado usando o índice aleatório
  let sorteado = amigos[indice];

  // aqui eu mostro o resultado na tela dentro da <ul id="resultado">
  let resultado = document.getElementById("resultado");
  resultado.innerHTML = `<li>🎉 O amigo secreto sorteado é: <strong>${sorteado}</strong></li>`;
}
