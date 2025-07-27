let listaDeNumerosSorteados = [];
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

exibirTextoNaTela('#titulo-principal', 'Jogo do número secreto');
exibirTextoNaTela('#mensagem', 'Escolha um número entre 1 e 10');

function verificarChute() {
    let chute = document.getElementById('chute').value;

    if (chute == numeroSecreto) {
        exibirTextoNaTela('#titulo-principal', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagem = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('#mensagem', mensagem);

        // ATIVA O BOTÃO DE NOVO JOGO
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else if (chute > numeroSecreto) {
        exibirTextoNaTela('#mensagem', 'O número secreto é menor.');
        tentativas++;
    } else {
        exibirTextoNaTela('#mensagem', 'O número secreto é maior.');
        tentativas++;
    }

    // Limpa o campo de input após cada tentativa
    limparCampo();
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * 10 + 1);
    if (listaDeNumerosSorteados.includes(numeroEscolhido)){
         return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados)
        return numeroEscolhido;
    }
}

function limparCampo() {
    let chute = document.getElementById('chute');
    chute.value = '';
}

// FUNÇÃO PARA REINICIAR O JOGO
function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    tentativas = 1;
    exibirTextoNaTela('#titulo-principal', 'Jogo do número secreto');
    exibirTextoNaTela('#mensagem', 'Escolha um número entre 1 e 10');
    limparCampo();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}



