document.getElementById('accessForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Efeito marreta - 5 batidas rápidas secas
    const hammer = document.getElementById('hammerSound');
    let count = 0;
    const interval = setInterval(() => {
        hammer.currentTime = 0;
        hammer.play().catch(() => {});
        count++;
        if (count >= 5) clearInterval(interval);
    }, 80);
    
    // Desativa visualmente o formulário durante o "processo"
    const form = this;
    form.style.opacity = '0.4';
    form.style.pointerEvents = 'none';
    
    // Simula envio e feedback
    setTimeout(() => {
        alert('RELATÓRIO RECEBIDO COM SUCESSO.\n\nSenha será enviada para o e-mail informado em até 5 minutos.\n\nTempo de acesso liberado: 5 minutos a partir do recebimento da senha.\n\nAguarde a chave de acesso nas páginas respondidas.');
        
        // Recarrega a página (temporário até integrarmos o backend real)
        window.location.reload();
    }, 1500);
});
