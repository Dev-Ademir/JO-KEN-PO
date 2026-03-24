// ===== VARIÁVEIS DO PLACAR =====
let pontosJogador = 0;
let pontosPC = 0;

// ===== MAPEAMENTO DE IMAGENS =====
const imagens = {
    'pedra': './assets/pedra.gif',
    'papel': './assets/papel.gif',
    'tesoura': './assets/tesoura.gif'
};

// ===== FUNÇÃO PRINCIPAL =====
function jogar(escolhaJogador) {
    // Sorteia a jogada do computador
    const opcoes = ['pedra', 'papel', 'tesoura'];
    const escolhaPC = opcoes[Math.floor(Math.random() * 3)];
    
    // PEGA OS ELEMENTOS DE IMAGEM
    const imgJogador = document.getElementById('img-jogador');
    const imgPC = document.getElementById('img-pc');
    
    // ATUALIZA SRC E MOSTRA AS IMAGENS
    imgJogador.src = imagens[escolhaJogador];
    imgJogador.style.display = 'block';  // MOSTRA!
    imgJogador.alt = escolhaJogador;
    
    imgPC.src = imagens[escolhaPC];
    imgPC.style.display = 'block';  // MOSTRA!
    imgPC.alt = escolhaPC;
    
    // ATUALIZA OS TEXTOS
    document.getElementById('escolha-jogador-texto').textContent = escolhaJogador;
    document.getElementById('escolha-pc-texto').textContent = escolhaPC;
    
    let resultado = '';
    
    // ===== LÓGICA DO JOGO =====
    if (escolhaJogador === escolhaPC) {
        resultado = `🤝 Empate!`;
        
    } else if (
        (escolhaJogador === 'pedra' && escolhaPC === 'tesoura') ||
        (escolhaJogador === 'papel' && escolhaPC === 'pedra') ||
        (escolhaJogador === 'tesoura' && escolhaPC === 'papel')
    ) {
        pontosJogador++;
        resultado = `🎉 Você VENCEU!`;
        
    } else {
        pontosPC++;
        resultado = `😢 Você PERDEU!`;
    }
    
    // ATUALIZA PLACAR E RESULTADO
    atualizarPlacar();
    document.getElementById('resultado').textContent = resultado;
}

// ===== FUNÇÃO AUXILIAR =====
function atualizarPlacar() {
    document.getElementById('placar-jogador').textContent = pontosJogador;
    document.getElementById('placar-pc').textContent = pontosPC;
}