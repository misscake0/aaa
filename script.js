/**
 * Controla a exibição das respostas na seção de dúvidas do Agro Sustentável.
 * @param {string} idDaResposta - O ID da div que contém o texto da resposta.
 */
function toggleResposta(idDaResposta) {
    // 1. Busca o elemento da resposta pelo ID fornecido
    const resposta = document.getElementById(idDaResposta);
    
    // 2. Alterna a classe 'ativa' (se ela existir, remove; se não, adiciona)
    resposta.classList.toggle('ativa');
    
    // 3. Identifica o botão que vem logo antes da resposta no HTML
    const botao = resposta.previousElementSibling;
    
    // 4. Encontra o elemento <span> dentro do botão (onde fica o + ou -)
    const icone = botao.querySelector('span');
    
    // 5. Atualiza o ícone visual baseado no estado da resposta
    if (resposta.classList.contains('ativa')) {
        icone.innerText = '−'; // Sinal de menos quando estiver aberto
    } else {
        icone.innerText = '+'; // Sinal de mais quando estiver fechado
    }
}

<script src="script.js"></script>

</body>
</html>
