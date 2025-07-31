function alterarStatus(is) {
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__buttom');
    let nomeJogo = gameClicado.quarySeletor('.dashboard__item__neme');

    alert(nomeJogo.textContent); 

}
