let amigos = [];  // Declara um array vazio para armazenar os nomes dos amigos adicionados.

function adicionarAmigo() {
    const input = document.getElementById('amigo');
    const nome = input.value.trim();

    // Verifica se o nome não está vazio
    if (nome === '') {
        alert('Digite um nome válido!');
        return;
    }

    // Verifica se o nome já foi adicionado
    if (amigos.includes(nome)) {
        alert('Esse nome já foi adicionado!');
        return;
    }

    amigos.push(nome); // Adiciona o nome à lista de amigos
    atualizarLista(); // Atualiza a lista de amigos na tela
    input.value = ''; // Limpa o campo de entrada
}

function atualizarLista() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = ''; // Limpa a lista de amigos na tela

    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo; // Cria um item de lista com o nome do amigo
        lista.appendChild(li); // Adiciona o item à lista
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert('Adicione pelo menos um amigo para realizar o sorteio!');
        return;
    }

    const nomeSorteado = amigos[Math.floor(Math.random() * amigos.length)]; // Sorteia um nome aleatório da lista
    exibirResultado(nomeSorteado); // Exibe o nome sorteado

    // Após o sorteio, oculta a lista de amigos para não exibir mais.
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.style.display = 'none';
}

function exibirResultado(nomeSorteado) {
    const listaResultado = document.getElementById('resultado');
    listaResultado.innerHTML = ''; // Limpa o resultado anterior

    const li = document.createElement('li');
    li.textContent = `O amigo secreto sorteado é '${nomeSorteado}'`; // Exibe o nome sorteado
    listaResultado.appendChild(li); // Adiciona o resultado à lista de resultados
}
