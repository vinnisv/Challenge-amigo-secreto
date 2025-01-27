let amigos = []; 

function adicionarAmigo() {
    let input = document.getElementById('amigo'); 
    let nome = input.value.trim(); 
    

    if (nome === '') {
        alert('Insira um nome para ser sorteado!!'); 
        return;
    }

    if (amigos.includes(nome)) {
        alert('Este nome já foi adicionado.');
        return;
    } 

    amigos.push(nome); 
    input.value = ''; 
    atualizarListaAmigos(); 
    console.log(`${nome} foi adicionado com sucesso!`); //Msg no console
}
function atualizarListaAmigos() {
    let lista = document.getElementById('listaAmigos'); 
    lista.innerHTML = ''; 

    
    amigos.forEach((nome) => {
        let item = document.createElement('li'); 
        item.textContent = nome; 
        lista.appendChild(item); 
    });
}
function sortearAmigo() {
    if (amigos.length < 2) {
        alert('Adicione pelo menos dois amigos para ser sorteados.'); // -> se nao tiver 2 nomes
        return;
    }

    const indiceSorteado = Math.floor(Math.random() * amigos.length); 
    const amigoSorteado = amigos[indiceSorteado]; 

    const resultado = document.getElementById('resultado'); 
    resultado.textContent = `O amigo sorteado foi: ${amigoSorteado}`; 
} 
